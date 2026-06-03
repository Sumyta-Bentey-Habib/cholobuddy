import { betterAuth } from "better-auth";
import { firestoreAdapter } from "better-auth-firestore";
import { db } from "./db.js";
import { config } from "./config.js";

export const auth = betterAuth({
  database: firestoreAdapter({
    firestore: db,
  }),
  secret: config.BETTER_AUTH_SECRET,
  baseURL: config.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
    },
  },
});
