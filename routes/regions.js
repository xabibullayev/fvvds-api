import express from "express";
import { addRegion, deleteRegion, getRegions } from "../controllers/regions.js";

const router = express.Router();

router.get("/", getRegions);

router.post("/", addRegion);

router.delete("/:id", deleteRegion);

export default router;
