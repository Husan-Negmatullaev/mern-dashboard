import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
const CurrencyType = loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    expense: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } },
);

export const Product = mongoose.model("Product", ProductSchema);
