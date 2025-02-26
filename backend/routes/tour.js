import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// create new tour
router.post("/", verifyAdmin, createTour);

// update  tour
router.put("/:id", verifyAdmin, updateTour);

// delete  tour
router.delete("/:id", verifyAdmin, deleteTour);

// get single  tour
router.get("/:id", getSingleTour);

// get all  tours
router.get("/", getAllTour);

// search tours
router.get("/search/getTourBySearch", getTourBySearch);

// search tours
router.get("/search/getFeaturedTours", getFeaturedTours);

// search tours counts
router.get("/search/getTourCount", getTourCount);

export default router;
