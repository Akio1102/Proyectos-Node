import mongoose from "mongoose";

const tipoDineroSchema = mongoose.Schema(
  {
    Cantidad: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timmestamps: true,
  }
);

export const TipoDinero = mongoose.model("TipoDinero", tipoDineroSchema);
