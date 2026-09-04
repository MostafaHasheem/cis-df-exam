import re
with open("extracted_qs_1.txt", "r") as f:
    content = f.read()

content = re.sub(r'^Question \d+[^a-zA-Z0-9\n]*\n?', '', content, flags=re.IGNORECASE|re.MULTILINE)
content = re.sub(r'Chunk \d+:.*?\n', '', content, flags=re.IGNORECASE)

chunks = re.split(r'(?i)Correct Answer\s*:', content)

print(f"Number of chunks: {len(chunks)}")
for i, chunk in enumerate(chunks):
    print(f"Chunk {i} length: {len(chunk)}")
    if not chunk.strip():
        print(f"Chunk {i} is EMPTY!")
