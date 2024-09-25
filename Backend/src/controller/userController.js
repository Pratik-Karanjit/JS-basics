import expressAsyncHandler from "express-async-handler";
import { User } from "../model/model.js";
import { HttpStatus } from "../config/constant.js";
import { hashPassword } from "../utils/hashing.js";
import successResponse from "../helper/successResponse.js";

export let createUser = expressAsyncHandler(async (req, res, next) => {
  let data = req.body;
  let email = data.email;
  let user = await User.findOne({ email: email });

  if (user) {
    //If it is then show duplicate email error
    let error = new Error("Duplicate email.");
    error.statusCode = 409;
    throw error;
  } else {
    //else hash the password and create User
    let _hashPassword = await hashPassword(data.password);
    data.password = _hashPassword;
    let result = await User.create(req.body);
    delete result._doc.password;
    successResponse(
      res,
      HttpStatus.CREATED,
      "User created successfully",
      result
    );
  }
});
