import Region from "../models/Region.js";

export const getRegions = async (req, res) => {
  try {
    const regions = await Region.find();

    res.json(regions);
  } catch (err) {
    res.json(err);
  }
};

export const addRegion = async (req, res) => {
  try {
    const newRegion = new Region({
      title: req.body.title,
    });

    await newRegion.save();

    res.json("Region added!");
  } catch (err) {
    res.json(err);
  }
};

export const deleteRegion = async (req, res) => {
  try {
    await Region.findByIdAndDelete(req.params.id);

    res.json("Region deleted!");
  } catch (err) {
    res.json(err);
  }
};
