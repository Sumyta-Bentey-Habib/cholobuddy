import { Request, Response } from "express";
import { toursService } from "../services/tours.js";
import { asyncHandler } from "../utils/errors.js";

export const getAllTours = asyncHandler(async (req: Request, res: Response) => {
  const tours = await toursService.getAll();
  return res.json(tours);
});

export const createTour = asyncHandler(async (req: Request, res: Response) => {
  const tourId = await toursService.create(req.body);
  return res.json({ success: true, tourId });
});

export const getTourById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const tour = await toursService.getById(id);
  return res.json(tour);
});

export const updateTour = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  await toursService.update(id, req.body);
  return res.json({ success: true });
});

export const deleteTour = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  await toursService.delete(id);
  return res.json({ success: true });
});
