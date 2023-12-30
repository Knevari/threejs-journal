export async function readToString(filepath: string) {
  const text = await fetch(filepath).then((f) => f.text());
  return text;
}
