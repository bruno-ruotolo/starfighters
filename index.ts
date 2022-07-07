import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";

import router from "./src/routers/index.js";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(chalk.green.bold(`Server is Up on port ${port}`)));