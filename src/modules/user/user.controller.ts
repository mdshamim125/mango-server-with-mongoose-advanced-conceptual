import { Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req: Request, res: Response) => {
  const payload = req.body;
  //Creates a new Mongoose model instance (User) using the provided payload
  const user = new User(payload);

  //Saves the new user to the MongoDB database.
  const data = await user.save();

  res.send({
    success: true,
    message: "User Registered Successfully",
    data,
  });
};

const getUsers = async (req: Request, res: Response) => {
  const data = await User.find();

  res.send({
    success: true,
    message: "User retrieved Successfully",
    data,
  });
};

export { registerUser, getUsers };
