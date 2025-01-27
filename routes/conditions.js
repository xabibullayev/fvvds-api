import express from "express";
import { addCondition, getConditions } from "../controllers/conditions.js";

const router = express.Router();

router.get("/", getConditions);

router.post("/", addCondition);

router.put("/:id");

router.delete("/:id");

export default router;
