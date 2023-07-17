import mongoose from "mongoose";

const traderSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Cantidad: {
      type: Number,
      required: true,
      trim: true,
    },
    Nacionalidad: {
      type: String,
      required: true,
      trim: true,
    },
    Presupuesto: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timmestamps: true,
  }
);

export const Trader = mongoose.model("Trader", traderSchema);
