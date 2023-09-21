import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import kpiRoutes from "./routes/kpi";
import KPI from "./models/KPI";
import { kpis } from "./mock-data/data";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes

app.use("/kpi", kpiRoutes);

const APP_PORT = process.env.PORT || 9000;

if (process.env.MONGO_URL_DB) {
  mongoose
    .connect(process.env.MONGO_URL_DB)
    .then(async () => {
      app.listen(APP_PORT, () =>
        console.log(`Server start in port ${APP_PORT}`),
      );

      /* ADD DATA ONE TIME ONLY OR AS NEEDED */
      // await mongoose.connection.db.dropDatabase();
      // KPI.insertMany(kpis);
      // Product.insertMany(products);
      // Transaction.insertMany(transactions);
    })
    .catch((err) => {
      console.error(`Server crashed with error: ${err}`);
    });
}
