import Street from "../models/Street.js";

export const getStreets = async (req, res) => {
  try {
    const streets = await Street.find();

    res.status(200).json(streets);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addStreet = async (req, res) => {
  try {
    const { hoodId, title } = req.body;

    const newStreet = new Street({
      hoodId: hoodId,
      title: title,
    });

    await newStreet.save();

    res.status(201).json("Street added!");
  } catch (err) {
    res.status(500).json(err);
  }
};
