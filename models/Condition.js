import mongoose from "mongoose";

const conditionSchema = new mongoose.Schema(
  {
    regionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    hoodId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    streetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Condition = new mongoose.model("Condition", conditionSchema);

export default Condition;
