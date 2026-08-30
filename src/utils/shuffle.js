// Shuffle utility — Fisher-Yates shuffle

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateAccessCode() {
  const part = () => String(Math.floor(100 + Math.random() * 900));
  return `${part()}-${part()}-${part()}`;
}
