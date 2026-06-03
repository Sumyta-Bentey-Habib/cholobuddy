import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { config } from "./config.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Resolve GOOGLE_APPLICATION_CREDENTIALS path if it is relative to ensure robust credential loading
if (process.env.GOOGLE_APPLICATION_CREDENTIALS && !path.isAbsolute(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
  const absolutePath = path.resolve(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS);
  if (fs.existsSync(absolutePath)) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = absolutePath;
  } else {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const alternativePath = path.resolve(__dirname, "..", process.env.GOOGLE_APPLICATION_CREDENTIALS);
    if (fs.existsSync(alternativePath)) {
      process.env.GOOGLE_APPLICATION_CREDENTIALS = alternativePath;
    }
  }
}

// Initialize Firebase Admin SDK.
// If FIRESTORE_EMULATOR_HOST is set, it will automatically connect to local emulator.
const app = getApps().length === 0
  ? initializeApp({
      projectId: config.FIREBASE_PROJECT_ID,
    })
  : getApp();

export const db = getFirestore(app);
