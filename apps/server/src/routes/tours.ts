import { Router } from "express";
import { adminMiddleware } from "../middleware/auth.js";
import { getAllTours, createTour, getTourById, updateTour, deleteTour } from "../controllers/tours.js";
import { validateRequest } from "../middleware/validation.js";
import { createTourSchema, updateTourSchema } from "../validation/schemas.js";

const router = Router();

router.get("/", getAllTours);
router.post("/", adminMiddleware, validateRequest(createTourSchema), createTour);
router.get("/:id", getTourById);
router.patch("/:id", adminMiddleware, validateRequest(updateTourSchema), updateTour);
router.delete("/:id", adminMiddleware, deleteTour);

export default router;
