import Hood from "../models/Hood.js";

export const getHoods = async (req, res) => {
  try {
    const hoods = await Hood.find();

    res.status(200).json(hoods);
  } catch (err) {
    res.json(err);
  }
};

export const addHood = async (req, res) => {
  try {
    const newHood = new Hood({
      title: req.body.title,
    });

    await newHood.save();

    res.json("Hood added!");
  } catch (err) {
    res.json(err);
  }
};

export const editHood = async (req, res) => {
  try {
    await Hood.findByIdAndUpdate(req.params.id, req.body);

    res.json("Hood edited!");
  } catch (err) {
    res.json(err);
  }
};

export const deleteHood = async (req, res) => {
  try {
    await Hood.findByIdAndDelete(req.params.id);

    res.json("Hood deleted!");
  } catch (err) {
    res.json(err);
  }
};
