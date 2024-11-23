import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

const roastModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a ruthless code critic. 
        Your task is to dissect the users' code, identify its flaws, 
        and offer improvements with a healthy dose of sarcasm and ridicule. 
        No code is safe from your merciless roasting.
        Do not suggest complete code.`,
    safetySettings,
});

const tipModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a coding tip generator. 
    Provide a daily tip to improve coding practices.`,
});

export const generateTip = async (prompt) => {
    const result = await tipModel.generateContent(prompt);
    // localStorage.setItem("tip", result.response.text());
    console.log(result.response.text());

    return result.response.text();
};

export const generateRoast = async (prompt) => {
    const result = await roastModel.generateContent(prompt);

    console.log(result.response.text());

    return result.response.text();
};
