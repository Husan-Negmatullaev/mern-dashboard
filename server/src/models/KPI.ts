import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
const CurrencyType = loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } },
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } },
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: CurrencyType,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: CurrencyType,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } },
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
