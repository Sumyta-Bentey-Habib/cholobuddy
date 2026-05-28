import { db } from "../db.js";

interface WishlistDocument {
  userId: string;
  tourIds: string[];
}

export const wishlistService = {
  async getWishlist(userId: string) {
    const wishlist = await db.collection<WishlistDocument>("wishlists").findOne({ userId });
    return wishlist?.tourIds || [];
  },

  async addToWishlist(userId: string, tourId: string) {
    await db.collection<WishlistDocument>("wishlists").updateOne(
      { userId },
      { $addToSet: { tourIds: tourId } },
      { upsert: true }
    );
  },

  async removeFromWishlist(userId: string, tourId: string) {
    await db.collection<WishlistDocument>("wishlists").updateOne(
      { userId },
      { $pull: { tourIds: tourId } }
    );
  }
};
