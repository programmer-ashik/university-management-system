import { NextFunction, Request, Response } from "express";
import {
  createNewUserToDB,
  deleteUserById,
  getAdminUsersFormDb,
  getallusersFromDB,
  getUserByIdFromDB,
} from "./user.service";
type Params = {
  req: Request;
  res: Response;
  next(): NextFunction;
};
export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction // Keep next for error handling
) => {
  try {
    // 1. Get user data from the request body
    const userData = req.body;
    /* 
    // 2. Call the service function to create and save the user to the database.
    // Ensure 'createNewUserToDB' is correctly imported from your user.service file. 
    // 
    */
    const newUser = await createNewUserToDB(userData);

    // 3. Send a successful response
    // Status 201 (Created) is the standard HTTP status code for successful resource creation.
    res.status(201).json({
      success: true, // Use a boolean 'success' flag for clarity
      message: "User created successfully!",
      data: newUser,
    });
  } catch (error) {
    // 4. Pass the error to the Express error handler middleware
    next(error);

    // Alternatively, you could send a generic 400 Bad Request error response here:
    // res.status(400).json({
    //   success: false,
    //   message: "Failed to create user.",
    //   error: (error as Error).message,
    // });
  }
};
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allUser = await getallusersFromDB();
  res.status(200).json({
    status: "200",
    length: allUser.length,
    data: allUser,
  });
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const findUser = await getUserByIdFromDB(id);
  res.status(200).json({
    status: "200",
    data: findUser,
  });
};
export const deleteUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;
  const deleteUser = await deleteUserById(id);
  res.status(200).json({
    status: "200",
    message: "User Delete Successfully",
    data: deleteUser,
  });
};
export const getAdminusers = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const adminUsers = await getAdminUsersFormDb();
  res.status(200).json({
    status: "200",
    message: "Admin Seaching Sucessfull",
    data: adminUsers,
  });
};
// parttan
// controller <call> Service
// Route <call> controller
