import Problem from "../models/Problem.js";

export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();

    res.status(200).json(problems);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addProblem = async (req, res) => {
  try {
    const newProblem = new Problem({
      title: req.body.title,
    });

    await newProblem.save();

    res.status(201).json("Problem created!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editProblem = async (req, res) => {
  try {
    await Problem.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json("Problem updated!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProblem = async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
};
