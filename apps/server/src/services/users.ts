import { db } from "../db.js";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: string | ObjectId;
  role?: string;
}

export const usersService = {
  async getAllUsers() {
    return db.collection("user").find({}).sort({ createdAt: -1 }).toArray();
  },

  async updateUserRole(userId: string, role: string) {
    // Support better-auth which could use string ID or ObjectId
    let queryId: string | ObjectId;
    try {
      queryId = new ObjectId(userId);
    } catch {
      queryId = userId;
    }

    await db.collection<UserDocument>("user").updateOne(
      { _id: queryId },
      { $set: { role } }
    );
  }
};
