import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.error("Gemini Error:", error);

    if (error.message?.includes("503")) {
      return "⚠️ AI service is currently busy. Please wait a few seconds and try again.";
    }

    if (error.message?.includes("429")) {
      return "⚠️ Too many requests. Please try again after a minute.";
    }

    if (error.message?.includes("API_KEY")) {
      return "⚠️ Invalid API key configuration.";
    }

    return "⚠️ Something went wrong while generating the response. Please try again.";
  }
}