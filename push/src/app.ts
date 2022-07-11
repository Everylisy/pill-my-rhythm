import express, { Request, Response } from "express";
import cors from "cors";
// import morgan from "morgan";
// import { stream } from "./utils/winston";

import { SubscribeRouter } from "./routes/subscribeRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// morgan (request, response formatting)
// app.use(morgan("combined", { stream }));

app.get("/", (req: Request, res: Response) => {
  res.send("hello typescript express!");
});

app.use("/subscribe", SubscribeRouter);
app.use(errorMiddleware);

export default app;
