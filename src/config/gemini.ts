import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

export const geminiIA = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function main() {
  const response = await geminiIA.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
