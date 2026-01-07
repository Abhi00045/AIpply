import Vapi from "@vapi-ai/web";

const vapiKey = import.meta.env.VITE_VAPI_API_KEY;

if (!vapiKey) {
  throw new Error("VITE_VAPI_API_KEY is missing");
}

console.log("✅ Vapi Public Key Loaded");

export const vapi = new Vapi(vapiKey);
