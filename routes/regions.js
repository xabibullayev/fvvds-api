import express from "express";
import {
  addRegion,
  deleteRegion,
  editRegion,
  getRegions,
} from "../controllers/regions.js";

const router = express.Router();

router.get("/", getRegions);

router.post("/", addRegion);

router.put("/:id", editRegion);

router.delete("/:id", deleteRegion);

export default router;
