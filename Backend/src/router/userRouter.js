import { Router } from "express";
import { createUser } from "../controller/userController.js";

let userRouter = Router();

userRouter.route("/register").post(createUser);

export default userRouter;
