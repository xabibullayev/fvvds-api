import Condition from "../models/Condition.js";

export const getConditions = async (req, res) => {
  try {
    const conditions = await Condition.find();

    res.status(200).json(conditions);
  } catch (err) {
    res.json(err);
  }
};

export const addCondition = async (req, res) => {
  try {
    const newCondition = new Condition({
      regionId: req.body.regionId,
      hoodId: req.body.hoodId,
      streetId: req.body.streetId,
      problemId: req.body.regionId,
    });

    await newCondition.save();

    res.status(201).json("Condition added!");
  } catch (err) {
    res.status(500).json(err);
  }
};
