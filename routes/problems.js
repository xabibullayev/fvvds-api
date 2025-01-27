import express from "express";
import {
  addProblem,
  deleteProblem,
  editProblem,
  getProblems,
} from "../controllers/problems.js";

const router = express.Router();

router.get("/", getProblems);

router.post("/", addProblem);

router.put("/:id", editProblem);

router.delete("/:id", deleteProblem);

export default router;
