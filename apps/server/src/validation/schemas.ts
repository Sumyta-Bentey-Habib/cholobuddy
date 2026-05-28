import { z } from "zod";

// Tour Schemas
export const createTourSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    titleBn: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    descriptionBn: z.string().optional(),
    price: z.coerce.number().min(0, "Price must be a positive number"),
    duration: z.string().min(1, "Duration is required"),
    durationBn: z.string().optional(),
    location: z.string().optional(),
    locationBn: z.string().optional(),
    distanceNote: z.string().optional(),
    imgUrl: z.string().optional(),
    popular: z.boolean().optional(),
    maxGroupSize: z.coerce.number().optional(),
    difficulty: z.string().optional(),
    image: z.string().url("Image must be a valid URL").optional().or(z.literal("")),
    images: z.array(z.string().url()).optional(),
    startDates: z.array(z.string()).optional(),
  }).passthrough()
});

export const updateTourSchema = z.object({
  body: createTourSchema.shape.body.partial().passthrough()
});

// Booking Schemas
export const createBookingSchema = z.object({
  body: z.object({
    tourId: z.string().min(1, "Tour ID is required"),
    tourTitle: z.string().optional(),
    date: z.string().min(1, "Booking date is required"),
    guests: z.coerce.number().min(1, "Guests must be at least 1"),
    totalAmount: z.coerce.number().min(0, "Total amount must be positive"),
  }).passthrough()
});

export const updateBookingStatusSchema = z.object({
  body: z.object({
    status: z.enum(["Pending", "Confirmed", "Completed", "Cancelled"]),
  })
});

// Wishlist Schemas
export const wishlistSchema = z.object({
  body: z.object({
    tourId: z.string().min(1, "Tour ID is required"),
  })
});

// User Schemas
export const updateUserRoleSchema = z.object({
  body: z.object({
    userId: z.string().min(1, "User ID is required"),
    role: z.string().min(1, "Role is required"),
  })
});
