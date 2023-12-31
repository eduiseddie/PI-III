import express, { json, urlencoded } from "express";
import verifyToken from "./tools/tokenVerify.js";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/usuario.js";
import animaisRouter from "./routes/animais.js";
import racaRouter from "./routes/raca.js";
import especieRouter from "./routes/especie.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/animais", verifyToken, animaisRouter);
app.use("/raca", racaRouter);
app.use("/especie", especieRouter);

export default app;