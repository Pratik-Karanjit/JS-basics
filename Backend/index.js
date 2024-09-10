import express, { json } from "express";
import connectDb from "./src/connectdb/connectdb.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import { port } from "./src/config/constant.js";
import cors from "cors";

let app = express();

app.use(json());

app.use(cors());
// app.use("/users", userRouter);

connectDb();

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
