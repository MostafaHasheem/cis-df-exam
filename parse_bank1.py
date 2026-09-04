import re
import json
import random

def parse_questions(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
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
                # We will shuffle sources later in JS, but let's shuffle them here just in case!
                # Wait, the user said "before we deploy it... randomized the sorting"
                # Let's just output the arrays. The app can shuffle them.
                questions.append({
                    "id": i,
                    "type": "drag-match",
                    "instruction": "Drag and drop each feature with the corresponding outcome.",
                    "text": q_text,
                    "sources": sources,
                    "targets": targets,
                    "correctAnswer": correct_answer
                })
            else:
                print(f"Warning: Drag drop question {i} has no pairs.")
            continue
            
        # Parse standard multiple choice
        lines = [l.strip() for l in chunk.split('\n') if l.strip()]
        
        q_text_lines = []
        options = []
        correct_answer = ""
        
        for line in lines:
            if line.startswith("A.") or line.startswith("B.") or line.startswith("C.") or line.startswith("D.") or line.startswith("E.") or line.startswith("F.") or line.startswith("G."):
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
        f.write("  title: 'CIS-DF Practice Exam',\n")
        f.write("  description: 'Refined 80-question practice exam.',\n")
        f.write(f"  totalQuestions: {len(questions)},\n")
        f.write("  passingScore: 70,\n")
        f.write("  timeLimitMinutes: 90\n")
        f.write("};\n\n")
        f.write("export const questions = ")
        f.write(json.dumps(questions, indent=2))
        f.write(";\n")

qs = parse_questions('extracted_qs_1.txt')
generate_js(qs, 'src/data/questions-bank1.js')
print(f"Generated {len(qs)} questions.")
