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
    systemInstruction: `You are a coding tip generator with a dash of humor. 
    Provide a daily tip that's both informative and entertaining to improve 
    coding practices with a smile.`,
});

export const generateTip = async (prompt) => {
    const result = await tipModel.generateContent(prompt);
    localStorage.setItem("tipOfDay", result.response.text());
    console.log(result.response.text());

    return result.response.text();
};

export const generateRoast = async (prompt) => {
    const result = await roastModel.generateContent(prompt);

    console.log(result.response.text());

    return result.response.text();
};

// export const generateFileRoast = async (file) => {
//     try {
//         // Convert file to FileData format that Gemini expects
//         const fileData = {
//             inlineData: {
//                 data: await fileToBase64(file),
//                 mimeType: file.type,
//             },
//         };

//         const result = await roastModel.generateContent([
//             fileData,
//             "Roast this code",
//         ]);
//         console.log(result.response.text());
//         return result.response.text();
//     } catch (error) {
//         console.error("Error generating file roast:", error);
//         throw error;
//     }
// };

// // Helper function to convert File to base64
// const fileToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             // Remove the "data:*/*;base64," prefix
//             const base64 = reader.result.split(",")[1];
//             resolve(base64);
//         };
//         reader.onerror = (error) => reject(error);
//     });
// };
