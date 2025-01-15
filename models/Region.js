import mongoose from "mongoose";

const regionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Region = new mongoose.model("Region", regionSchema);

export default Region;
