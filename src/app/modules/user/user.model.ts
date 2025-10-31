import { model, Schema } from "mongoose";
import { IUser, IUserMethods, UserModelType } from "./user.interface";
// type UserModel = Model<IUser, {}, IUserMethods>;
//step;2 create Schema for user
const userSchema = new Schema<IUser, UserModelType, IUserMethods>({
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  prmanentAddress: {
    type: String,
    required: true,
  },
});
// static means class
userSchema.static("getAminUser", async function getAminUser() {
  const admin = await this.find({ role: "admin" });
  return admin;
});

//
userSchema.method("fullName", function () {
  return this.name.firstName + " " + this.name.lastName;
});
// step3: create model
const User = model<IUser, UserModelType>("User", userSchema);
export default User;
