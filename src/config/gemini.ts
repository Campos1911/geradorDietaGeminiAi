import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

export const geminiIA = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function geminiResp({ prompt }: { prompt: string }) {
  const response = await geminiIA.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text;
}
