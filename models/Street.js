import mongoose from "mongoose";

const streetSchema = new mongoose.Schema(
  {
    hoodId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Street = new mongoose.model("Street", streetSchema);

export default Street;
