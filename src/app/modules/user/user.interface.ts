import { Model } from "mongoose";

//  step1: creating a interface;
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  prmanentAddress: string;
}
// static
export interface UserModelType extends Model<IUser> {
  getAminUser(): Promise<IUser[]>;
}
//making a intreface
export interface IUserMethods {
  fullName(): string;
}
