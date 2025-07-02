import express from "express";
import helmet from "helmet";
import * as dynamoose from "dynamoose";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes";

dotenv.config({});

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  dynamoose.aws.ddb.local();
}

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/course", courseRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serevr is listening on port ${port}`);
});
