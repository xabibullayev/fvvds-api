import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import regionsRouter from "./routes/regions.js";
import hoodsRouter from "./routes/hoods.js";
import streetsRouter from "./routes/streets.js";
import problemsRouter from "./routes/problems.js";
import conditionsRouter from "./routes/conditions.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0/fvvds")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/regions", regionsRouter);
app.use("/hoods", hoodsRouter);
app.use("/streets", streetsRouter);
app.use("/problems", problemsRouter);
app.use("/conditions", conditionsRouter);

app.listen(5000, () => {
  console.log("Server is runing on port 5000...");
});
