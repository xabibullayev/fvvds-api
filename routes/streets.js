import express from "express";
import { addStreet, getStreets } from "../controllers/streets.js";

const router = express.Router();

router.get("/", getStreets);

router.post("/", addStreet);

export default router;
