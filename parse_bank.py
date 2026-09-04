import sys
import re
import json
import docx

def parse_questions(filepath):
    doc = docx.Document(filepath)
    content = '\n'.join([p.text for p in doc.paragraphs])
    
    # Clean up "Question X:" strings if they exist
    content = re.sub(r'^Question \d+[^a-zA-Z0-9\n]*\n?', '', content, flags=re.IGNORECASE|re.MULTILINE)
    content = re.sub(r'Chunk \d+:.*?\n', '', content, flags=re.IGNORECASE)
    
    chunks = re.split(r'(?i)Correct Answer\s*:', content)
    
    questions = []
    
    q_texts = []
    answers = []
    
    q_texts.append(chunks[0].strip())
    
    for chunk in chunks[1:]:
        if '\n' in chunk:
            ans, next_q = chunk.split('\n', 1)
            answers.append(ans.strip())
            q_texts.append(next_q.strip())
        else:
            answers.append(chunk.strip())
            # no next question
    
    for i in range(len(answers)):
        q_chunk = q_texts[i].strip()
        ans_val = answers[i].strip()
        if not q_chunk: continue
        
        q_id = i + 1
        
        # Determine if it's drag and drop
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
            else:
                print(f"Warning: Drag drop question {q_id} has no pairs.")
            continue
            
        lines = [l.strip() for l in q_chunk.split('\n') if l.strip()]
        if not lines: continue
        
        q_text_lines = []
        options = []
        
        has_letters = any(l.startswith("A.") or l.startswith("A ") or l.startswith("B.") or l.startswith("B ") for l in lines)
        
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
