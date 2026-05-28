import { db } from "../db.js";

export const analyticsService = {
  async getDashboardAnalytics() {
    const bookings = await db.collection("bookings").find({}).toArray();
    const usersCount = await db.collection("user").countDocuments();

    let totalRevenue = 0;
    let completedBookings = 0;

    bookings.forEach((b: any) => {
      if (b.status === "Completed" && b.totalAmount) {
        totalRevenue += b.totalAmount;
        completedBookings++;
      }
    });

    return {
      totalRevenue,
      activeTrips: bookings.filter((b: any) => b.status === "Pending").length,
      completedBookings,
      newUsers: usersCount,
      conversionRate: 3.4
    };
  }
};
