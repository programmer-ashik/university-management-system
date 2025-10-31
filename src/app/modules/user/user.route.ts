import express from "express";
import {
  createNewUser,
  deleteUser,
  getAdminusers,
  getAllUsers,
  getUserById,
} from "./user.controller";
const router = express.Router();
// work on controller
// Getting all user
router.get("/", getAllUsers);
// Create a new User by using createNewUser controller
router.post("/create-user", createNewUser);
router.get("/admin", getAdminusers);
// fiend a user by Id
/* 
in this  route.get(/:id) id pass as a params and ahave to define as like this
2nd: getUserById is call from user.controller.ts doing all requiest related works
*/
router.get(`/:id`, getUserById);
// deleteUser router
router.delete("/:id", deleteUser);

export default router;
