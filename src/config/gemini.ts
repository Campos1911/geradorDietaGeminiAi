import { GoogleGenAI } from "@google/genai";

export const geminiIA = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

async function main() {
  const response = await geminiIA.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
