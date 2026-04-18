import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = "AIzaSyAA9sCTt3QLbYQwTTX-9AvwGvSSz3u2nBE";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function test() {
    try {
        console.log("--- PROBANDO CON FORZADO DE API V1 ---");
        // Forzamos la versión v1 de la API para evitar el 404 de la v1beta
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: 'v1' });
        
        console.log("Enviando mensaje de prueba...");
        const result = await model.generateContent("Responde solo 'FUNCIONAL' si me lees.");
        const response = await result.response;
        console.log("Respuesta de la IA:", response.text());
        console.log("✅ ¡POR FIN! Con la versión v1 la llave funciona.");
    } catch (error: any) {
        console.error("❌ Sigue fallando:");
        console.error("Status:", error.status);
        console.error("Mensaje:", error.message);
    }
}

test();
