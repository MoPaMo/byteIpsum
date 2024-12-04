import { nouns, adjectives, interpositions } from "./wordlist";

export default function generateTechIpsum(
  paragraphs: number,
  wordsPerParagraph: number
): string {
  const ipsum: string[] = [];
  for (let i = 0; i < paragraphs; i++) {
    const paragraph: string[] = [];
    for (let j = 0; j < wordsPerParagraph; j++) {
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      let adjective: string;
      if (Math.random() < 0.069) {
        adjective =
          adjectives[Math.floor(Math.random() * adjectives.length)] +
          ", " +
          adjectives[Math.floor(Math.random() * adjectives.length)];
      } else {
        adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      }
      const interposition =
        interpositions[Math.floor(Math.random() * interpositions.length)];
      paragraph.push(`${adjective} ${noun} ${interposition}`);
    }
    ipsum.push(paragraph.join(" "));
  }
  return ipsum.join("\n\n");
}
