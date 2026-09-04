import re
with open("q2_1_dump.txt", "r") as f:
    content = f.read()

chunks = re.split(r'(?i)Correct Answer\s*:', content)

q_texts = [chunks[0].strip()]
answers = []
for chunk in chunks[1:]:
    if '\n' in chunk:
        ans, next_q = chunk.split('\n', 1)
        answers.append(ans.strip())
        q_texts.append(next_q.strip())
    else:
        answers.append(chunk.strip())

for i in range(len(answers)):
    if not q_texts[i].strip():
        print(f"Index {i} has empty text! Answer was: {answers[i]}")
        if i > 0:
            print(f"Previous answer: {answers[i-1]}")
            print(f"Previous text: {q_texts[i-1][-100:]}")
