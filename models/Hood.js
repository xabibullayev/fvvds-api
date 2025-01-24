import mongoose from "mongoose";

const hoodSchema = new mongoose.Schema(
  {
    regionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Hood = new mongoose.model("Hood", hoodSchema);

export default Hood;
