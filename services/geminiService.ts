
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const chatWithLegalAI = async (message: string) => {
  if (!apiKey) {
    return "API Key not configured. Please check environment variables.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "你是一个专业的法律助手，专门为东莞涉外法律服务平台的用户提供咨询。请以专业、严谨且礼貌的口吻回答问题。回答应包括法律依据、建议步骤和注意事项。如果问题涉及敏感或极其专业的个案，建议用户咨询具体的涉外律师。",
      }
    });
    return response.text || "抱歉，我无法生成回复。";
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return "系统忙，请稍后再试。";
  }
};
