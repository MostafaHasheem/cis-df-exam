"""
Robust parser for all CIS-DF exam DOCX files.

Handles THREE formats within a single document:
  1. "Question N" headers with plain-text options (no A./B./C.)
  2. Inline "Choose X option." prefix with A./B./C. lettered options
  3. Inline drag-and-drop matching: "Choose X options (Drag and Drop matching)."
     with "Options: ..." and "Outcomes:" followed by answer pairs "target: source"

Strategy:
  - Split text on "Correct Answer:" boundaries
  - For drag-drop: the answer section contains "target: source" pairs AND "Correct Answer:" 
    appears in the middle of the block, so we handle that specially
"""

import sys
import re
import json
import docx


def extract_text(filepath):
    doc = docx.Document(filepath)
    return '\n'.join([p.text for p in doc.paragraphs])


def parse_all(content):
    """
    Split on "Correct Answer:" but be aware that drag-drop blocks have TWO
    occurrences: one after the outcomes list, then one after the answer pairs.
    We'll recombine them.
    """
    parts = re.split(r'Correct Answer\s*:', content)

    blocks = []
    current_q_block = parts[0].strip()

    i = 1
    while i < len(parts):
        part = parts[i]
        lines = part.split('\n', 1)
        answer = lines[0].strip()
        rest = lines[1].strip() if len(lines) > 1 else ''

        # If answer is empty and the current_q_block looks like a drag-drop,
        # then the answer pairs are in 'rest', and we need to consume the next
        # "Correct Answer:" segment to get the actual next question.
        if not answer and ('drag' in current_q_block.lower() or 'Outcomes:' in current_q_block):
            # rest contains the answer pairs + next question text
            # The answer pairs end and next question text begins
            # We need to find the answer pairs (lines with ":" in them)
            drag_answer_lines = []
            remaining_lines = []
            for line in rest.split('\n'):
                line_stripped = line.strip()
                if not line_stripped:
                    continue
                if ':' in line_stripped and not line_stripped.startswith('Choose'):
                    drag_answer_lines.append(line_stripped)
                else:
                    remaining_lines.append(line)

            answer = '\n'.join(drag_answer_lines)
            rest = '\n'.join(remaining_lines).strip()

        blocks.append((current_q_block, answer))
        current_q_block = rest
        i += 1

    return blocks


def clean_question_header(text):
    """Remove 'Question N', 'Question N (Select 2 options)', etc."""
    text = re.sub(
        r'^(?:Question\s+\d+\s*(?:\(.*?\))?\s*\n?)',
        '',
        text,
        flags=re.IGNORECASE | re.MULTILINE,
    ).strip()
    return text


def detect_multi(text, answer_str):
    """Detect if the question is multi-select based on text or answer."""
    answer_letters = [a.strip() for a in answer_str.replace('.', '').replace('and', ',').replace(' ', '').split(',') if a.strip()]
    if len(answer_letters) > 1:
        return True, answer_letters
    keywords = ['Select 2', 'Select 3', 'Choose 2', 'Choose 3', 'Choose 4']
    for kw in keywords:
        if kw.lower() in text.lower():
            return True, answer_letters
    return False, answer_letters


def is_drag_drop_block(text):
    """Check if this block is a drag-and-drop matching question."""
    lower = text[:300].lower()
    return 'drag and drop' in lower or 'drag-and-drop' in lower or ('drag' in lower and 'match' in lower)


def parse_drag_drop_inline(block, answer_str, q_id):
    """
    Parse inline drag-and-drop: text has "Options: A, B, C Outcomes:" 
    followed by outcome descriptions, and answer_str has "outcome: source" pairs.
    """
    # Extract the question text (before "Options:")
    options_match = re.search(r'Options\s*:\s*(.+?)\s*Outcomes\s*:', block, re.DOTALL)
    if not options_match:
        return None

    q_text_raw = block[:options_match.start()].strip()
    # Clean "Choose X options (Drag and Drop matching)." prefix
    q_text = re.sub(r'^Choose\s+\d+\s+options?\s*(?:\(.*?\))?\.\s*', '', q_text_raw, flags=re.IGNORECASE).strip()

    sources_str = options_match.group(1).strip()
    # Sources are comma-separated
    sources = [s.strip() for s in sources_str.split(',') if s.strip()]

    # Outcomes are listed after "Outcomes:" and before answer section
    outcomes_text = block[options_match.end():].strip()
    targets = [l.strip() for l in outcomes_text.split('\n') if l.strip()]

    # Parse answer pairs from answer_str
    correct_answer = {}
    for line in answer_str.split('\n'):
        line = line.strip()
        if ':' in line:
            parts = line.rsplit(':', 1)
            if len(parts) == 2 and parts[0].strip() and parts[1].strip():
                target = parts[0].strip()
                source = parts[1].strip()
                correct_answer[source] = target

    if not sources or not targets or not correct_answer:
        return None

    return {
        'id': q_id,
        'type': 'drag-match',
        'instruction': 'Drag and drop each feature with the corresponding outcome.',
        'text': q_text,
        'sources': sources,
        'targets': targets,
        'correctAnswer': correct_answer,
    }


def parse_drag_drop_standard(block, answer_str, q_id):
    """Parse standard drag-and-drop with line-by-line 'target: source' pairs."""
    lines = [l.strip() for l in block.split('\n') if l.strip()]
    q_text = lines[0]
    q_text = re.sub(r'^Choose\s+\d+\s+options?\.\s*', '', q_text, flags=re.IGNORECASE).strip()

    sources = []
    targets = []
    correct_answer = {}

    # Try answer_str for pairs first
    pair_lines = answer_str.split('\n') if '\n' in answer_str else []
    if not pair_lines:
        # Try from the block itself
        for line in lines[1:]:
            if ':' in line:
                parts = line.split(':', 1)
                if len(parts) == 2 and parts[0].strip() and parts[1].strip():
                    target = parts[0].strip()
                    source = parts[1].strip()
                    sources.append(source)
                    targets.append(target)
                    correct_answer[source] = target
    else:
        for line in pair_lines:
            line = line.strip()
            if ':' in line:
                parts = line.rsplit(':', 1)
                if len(parts) == 2 and parts[0].strip() and parts[1].strip():
                    target = parts[0].strip()
                    source = parts[1].strip()
                    sources.append(source)
                    targets.append(target)
                    correct_answer[source] = target

    if not sources:
        return None

    return {
        'id': q_id,
        'type': 'drag-match',
        'instruction': 'Drag and drop each feature with the corresponding outcome.',
        'text': q_text,
        'sources': sources,
        'targets': targets,
        'correctAnswer': correct_answer,
    }


def parse_question_block(raw_block, answer_str, q_id):
    """Parse a single question block into a structured question dict."""
    block = clean_question_header(raw_block)
    if not block:
        return None

    # Check for drag-and-drop
    if is_drag_drop_block(block):
        if 'Options:' in block and 'Outcomes:' in block:
            return parse_drag_drop_inline(block, answer_str, q_id)
        else:
            return parse_drag_drop_standard(block, answer_str, q_id)

    lines = [l.strip() for l in block.split('\n') if l.strip()]
    if not lines:
        return None

    # Detect format: does the block have A./B./C. lettered options?
    has_letters = False
    for l in lines:
        if re.match(r'^[A-H]\.\s', l):
            has_letters = True
            break

    q_text_lines = []
    options = []

    if has_letters:
        for line in lines:
            if re.match(r'^[A-H]\.\s', line):
                options.append(line)
            else:
                if not options:
                    q_text_lines.append(line)
        q_text = ' '.join(q_text_lines)
    else:
        q_text = lines[0]
        for line in lines[1:]:
            options.append(line)

    # Clean up question text
    q_text_cleaned = re.sub(r'^Choose\s+\d+\s+options?\.\s*', '', q_text, flags=re.IGNORECASE).strip()
    q_text_cleaned = re.sub(r'\(Select\s+\d+\s+options?\)', '', q_text_cleaned, flags=re.IGNORECASE).strip()

    if not q_text_cleaned:
        return None

    # Add letter prefixes if options don't have them
    labelled_options = []
    for idx, opt in enumerate(options):
        if re.match(r'^[A-H]\.\s', opt):
            labelled_options.append(opt)
        else:
            labelled_options.append(f"{chr(65 + idx)}. {opt}")

    if not labelled_options:
        return None

    is_multi, answer_letters = detect_multi(raw_block, answer_str)

    q_type = 'multi' if is_multi else 'single'
    if q_type == 'single' and answer_letters:
        correct = answer_letters[0]
    elif q_type == 'multi':
        correct = answer_letters
    else:
        correct = ''

    instruction = 'Choose 1 option.' if q_type == 'single' else f'Choose {len(answer_letters)} options.'

    return {
        'id': q_id,
        'type': q_type,
        'instruction': instruction,
        'text': q_text_cleaned,
        'options': labelled_options,
        'correctAnswer': correct,
    }


def generate_js(questions, out_file, title):
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("export const bankMeta = {\n")
        f.write(f"  title: '{title}',\n")
        f.write("  description: 'ServiceNow CIS-DF Practice Exam.',\n")
        f.write(f"  totalQuestions: {len(questions)},\n")
        f.write("  passingScore: 70,\n")
        f.write("  timeLimitMinutes: 90\n")
        f.write("};\n\n")
        f.write("export const questions = ")
        f.write(json.dumps(questions, indent=2))
        f.write(";\n")


def main():
    infile = sys.argv[1]
    outfile = sys.argv[2]
    title = sys.argv[3]

    content = extract_text(infile)

    # Remove document header lines
    content = re.sub(r'^ServiceNow Certified Implementation Specialist\s*\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^CMDB Practice Examination\s*\n', '', content, flags=re.MULTILINE)

    blocks = parse_all(content)

    questions = []
    q_id = 0
    for raw_block, answer in blocks:
        if not raw_block.strip():
            continue
        q_id += 1
        q = parse_question_block(raw_block, answer, q_id)
        if q:
            questions.append(q)
        else:
            print(f"WARNING: Could not parse question {q_id}:")
            print(f"  Block: {raw_block[:120]}...")
            print(f"  Answer: {answer[:80]}...")

    generate_js(questions, outfile, title)
    print(f"Generated {len(questions)} questions in {outfile}")


if __name__ == '__main__':
    main()
