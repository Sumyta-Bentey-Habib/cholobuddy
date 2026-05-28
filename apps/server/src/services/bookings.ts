import { db } from "../db.js";
import { ObjectId } from "mongodb";
import { NotFoundError, ForbiddenError } from "../utils/errors.js";

export const bookingsService = {
  async getBookings(userId: string, role: string, fetchAll: boolean) {
    if (fetchAll && role === "admin") {
      return db.collection("bookings").find({}).sort({ createdAt: -1 }).toArray();
    }
    return db.collection("bookings").find({ userId }).sort({ createdAt: -1 }).toArray();
  },

  async getBookingById(id: string, userId: string, role: string) {
    const booking = await db.collection("bookings").findOne({ _id: new ObjectId(id) });
    if (!booking) {
      throw new NotFoundError("Booking not found");
    }
    if (role !== "admin" && booking.userId !== userId) {
      throw new ForbiddenError("You do not have permission to access this booking");
    }
    return booking;
  },

  async createBooking(userId: string, data: any) {
    const newBooking = {
      ...data,
      userId,
      status: "Completed",
      createdAt: new Date(),
    };
    const result = await db.collection("bookings").insertOne(newBooking);
    return result.insertedId;
  },

  async updateBookingStatus(id: string, status: string) {
    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );
    if (result.matchedCount === 0) {
      throw new NotFoundError("Booking not found");
    }
  },

  async deleteBooking(id: string, userId: string, role: string) {
    const booking = await db.collection("bookings").findOne({ _id: new ObjectId(id) });
    if (!booking) {
      throw new NotFoundError("Booking not found");
    }
    if (role !== "admin" && booking.userId !== userId) {
      throw new ForbiddenError("You do not have permission to delete this booking");
    }
    await db.collection("bookings").deleteOne({ _id: new ObjectId(id) });
  }
};
