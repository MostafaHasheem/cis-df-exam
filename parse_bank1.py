import re
import json
import docx
import sys

def parse_questions(filepath):
    doc = docx.Document(filepath)
    content = '\n'.join([p.text for p in doc.paragraphs])
    
    # Split by "Question X:"
    chunks = re.split(r'Question \d+:', content)
    questions = []
    
    for i, chunk in enumerate(chunks[1:], 1):
        chunk = chunk.strip()
        if not chunk: continue
        
        # Determine if it's a drag and drop
        if "Drag" in chunk[:150] or "drag" in chunk[:150] or "Match" in chunk[:150]:
            lines = [l.strip() for l in chunk.split('\n') if l.strip()]
            q_text = lines[0]
            
            sources = []
            targets = []
            correct_answer = {}
            for line in lines[1:]:
                if "Correct Answer:" in line or line.startswith("A.") or line.startswith("B."):
                    continue
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
                    "id": i,
                    "type": "drag-match",
                    "instruction": "Drag and drop each feature with the corresponding outcome.",
                    "text": q_text,
                    "sources": sources,
                    "targets": targets,
                    "correctAnswer": correct_answer
                })
            continue
            
        # Parse standard multiple choice
        lines = [l.strip() for l in chunk.split('\n') if l.strip()]
        
        q_text_lines = []
        options = []
        correct_answer = ""
        
        for line in lines:
            if line.startswith("A.") or line.startswith("B.") or line.startswith("C.") or line.startswith("D.") or line.startswith("E.") or line.startswith("F.") or line.startswith("G.") or line.startswith("H."):
                options.append(line)
            elif line.startswith("Correct Answer:"):
                ans = line.split("Correct Answer:")[1].strip()
                if "No explicitly" in ans:
                    correct_answer = []
                else:
                    ans = ans.replace(".", "").replace("and", ",").replace(" ", "")
                    correct_answer = [a.strip() for a in ans.split(",") if a.strip()]
            else:
                if not options: # We are still reading the question text
                    q_text_lines.append(line)
        
        q_text = " ".join(q_text_lines)
        q_type = "single"
        if "Choose 2" in q_text or "Choose 3" in q_text or "Choose 4" in q_text or "Choose options" in q_text or len(correct_answer) > 1:
            q_type = "multi"
            
        questions.append({
            "id": i,
            "type": q_type,
            "instruction": "Choose 1 option." if q_type == "single" else f"Choose {len(correct_answer)} options.",
            "text": q_text,
            "options": options,
            "correctAnswer": correct_answer[0] if q_type == "single" and correct_answer else (correct_answer if correct_answer else "")
        })

    return questions

def generate_js(questions, out_file):
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("export const bankMeta = {\n")
        f.write("  title: 'Exam Model 1',\n")
        f.write("  description: 'ServiceNow CIS-DF Practice Exam.',\n")
        f.write(f"  totalQuestions: {len(questions)},\n")
        f.write("  passingScore: 70,\n")
        f.write("  timeLimitMinutes: 90\n")
        f.write("};\n\n")
        f.write("export const questions = ")
        f.write(json.dumps(questions, indent=2))
        f.write(";\n")

qs = parse_questions(sys.argv[1])
generate_js(qs, sys.argv[2])
print(f"Generated {len(qs)} questions in {sys.argv[2]}")
