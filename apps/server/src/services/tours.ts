import { db } from "../db.js";
import { ObjectId } from "mongodb";
import { NotFoundError } from "../utils/errors.js";

export const toursService = {
  async getAll() {
    return db.collection("tours").find({}).toArray();
  },

  async getById(id: string) {
    const tour = await db.collection("tours").findOne({ _id: new ObjectId(id) });
    if (!tour) {
      throw new NotFoundError("Tour not found");
    }
    return tour;
  },

  async create(data: any) {
    const result = await db.collection("tours").insertOne({
      ...data,
      createdAt: new Date(),
    });
    return result.insertedId;
  },

  async update(id: string, data: any) {
    const result = await db.collection("tours").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );
    if (result.matchedCount === 0) {
      throw new NotFoundError("Tour not found");
    }
  },

  async delete(id: string) {
    const result = await db.collection("tours").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new NotFoundError("Tour not found");
    }
  }
};
