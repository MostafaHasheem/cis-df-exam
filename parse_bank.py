import sys
import re
import json
import docx

def parse_questions(filepath):
    doc = docx.Document(filepath)
    content = '\n'.join([p.text for p in doc.paragraphs])
    
    # We will find all occurrences of "Correct Answer: " and use them to split the text into questions.
    # But some might be "Correct Answer:" or "Correct Answer :".
    
    # First, let's normalize the questions. If they start with "Question X:", remove it.
    content = re.sub(r'Question \d+[^a-zA-Z0-9\n]*\n?', '', content, flags=re.IGNORECASE)
    content = re.sub(r'Chunk \d+:.*?\n', '', content, flags=re.IGNORECASE)
    
    # Split by double newlines or similar to get blocks, but wait, the easiest way is to split by "Correct Answer:"
    # Actually, if we split by "Correct Answer:", the i-th element contains the text and options for question i,
    # AND the start of the (i-1)-th element contains the correct answer for question i-1!
    
    chunks = re.split(r'(Correct Answer:.*?)(?:\n\n|\n(?=[A-Z][a-z]+ [0-9] |\w)|\Z)', content, flags=re.IGNORECASE)
    # The split will return [q1_text, correct_ans1, q2_text, correct_ans2, ...]
    
    questions = []
    
    # Reassemble them into (text_block, answer_block)
    # Wait, re.split with capture group returns: [text1, match1, text2, match2]
    # Let's iterate in steps of 2
    for i in range(0, len(chunks)-1, 2):
        q_chunk = chunks[i].strip()
        ans_chunk = chunks[i+1].strip()
        
        if not q_chunk: continue
        
        # Remove any remaining "Question X" that didn't get caught
        q_chunk = re.sub(r'^Question \d+.*?\n', '', q_chunk, flags=re.IGNORECASE).strip()
        
        q_id = len(questions) + 1
        
        if "Drag" in q_chunk[:150] or "drag" in q_chunk[:150] or "Match" in q_chunk[:150]:
            lines = [l.strip() for l in q_chunk.split('\n') if l.strip()]
            q_text = lines[0]
            
            sources = []
            targets = []
            correct_answer = {}
            for line in lines[1:]:
                if ":" in line:
                    parts = line.split(":", 1)
                    if len(parts) == 2:
                        target = parts[0].strip()
                        source = parts[1].strip()
                        sources.append(source)
                        targets.append(target)
                        correct_answer[source] = target
            
            if sources:
                questions.append({
                    "id": q_id,
                    "type": "drag-match",
                    "instruction": "Drag and drop each feature with the corresponding outcome.",
                    "text": q_text,
                    "sources": sources,
                    "targets": targets,
                    "correctAnswer": correct_answer
                })
            continue
            
        lines = [l.strip() for l in q_chunk.split('\n') if l.strip()]
        
        q_text_lines = []
        options = []
        
        has_letters = any(l.startswith("A.") or l.startswith("A ") for l in lines)
        
        for line in lines:
            if has_letters:
                if line.startswith("A.") or line.startswith("B.") or line.startswith("C.") or line.startswith("D.") or line.startswith("E.") or line.startswith("F.") or line.startswith("G.") or line.startswith("H."):
                    options.append(line)
                else:
                    if not options:
                        q_text_lines.append(line)
            else:
                q_text_lines.append(line)
        
        if not has_letters:
            q_text = q_text_lines[0]
            for opt in q_text_lines[1:]:
                options.append(opt)
        else:
            q_text = " ".join(q_text_lines)
            
        # parse answer
        ans_val = ans_chunk.split(":", 1)[1].strip() if ":" in ans_chunk else ans_chunk
        if "No explicitly" in ans_val:
            correct_answer_list = []
        else:
            ans_val = ans_val.replace(".", "").replace("and", ",").replace(" ", "")
            correct_answer_list = [a.strip() for a in ans_val.split(",") if a.strip()]
            
        q_type = "single"
        if "Choose 2" in q_text or "Choose 3" in q_text or "Choose 4" in q_text or "Choose options" in q_text or len(correct_answer_list) > 1:
            q_type = "multi"
            
        questions.append({
            "id": q_id,
            "type": q_type,
            "instruction": "Choose 1 option." if q_type == "single" else f"Choose {len(correct_answer_list) if len(correct_answer_list) > 0 else 'multiple'} options.",
            "text": q_text,
            "options": [f"{chr(65+idx)}. {opt}" if not opt.startswith(chr(65+idx)) else opt for idx, opt in enumerate(options)],
            "correctAnswer": correct_answer_list[0] if q_type == "single" and correct_answer_list else (correct_answer_list if correct_answer_list else "")
        })

    return questions

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

if __name__ == "__main__":
    infile = sys.argv[1]
    outfile = sys.argv[2]
    title = sys.argv[3]
    qs = parse_questions(infile)
    generate_js(qs, outfile, title)
    print(f"Generated {len(qs)} questions in {outfile}")
