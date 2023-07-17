import mongoose from "mongoose";

const dineroSchema = mongoose.Schema(
  {},
  {
    timmestamps: true,
  }
);

export const Dinero = mongoose.model("Dinero", dineroSchema);
