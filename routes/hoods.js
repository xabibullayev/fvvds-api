import express from "express";
import {
  addHood,
  deleteHood,
  getHoods,
  editHood,
} from "../controllers/hoods.js";

const router = express.Router();

router.get("/", getHoods);

router.post("/", addHood);

router.put("/:id", editHood);

router.delete("/:id", deleteHood);

export default router;
