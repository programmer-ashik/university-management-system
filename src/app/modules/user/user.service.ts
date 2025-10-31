import { IUser } from "./user.interface";
import User from "./user.model";

/*
Create a new user instsnce and save it to the mongodbdatabase
@params newuserData-  The data object confriming to the IUser interface
@reeturn A Promise that resolve to the newly created user document
*/
export const createNewUserToDB = async (newuserData: IUser): Promise<IUser> => {
  // create a new user document
  const newuser = new User(newuserData); // instance of class User--> class
  // use the built in instance method save() to persist the document to the mongoDB colluction
  await newuser.save(); // build in instance Methods
  // যখন কোন পোস্ট করব তখনি শুধু মাত্র instance method use korbo
  return newuser;
};
/* 
Retrives all user from mongodb daatabase
@return A promise that resolve to an array of all user documents
*/

export const getallusersFromDB = async () => {
  // Use the static Model method 'find()' without any query to fetch all documents
  const allUsers = await User.find();
  // return save document
  return allUsers;
};
/* 
Retrives a single user document based on speccific ID field.
@param userId- the unique identifier (id field, not _id) of the user of the fatch
@return promises that resolve to the document have as like IUser interface and if hasve no found return null
*/
export const getUserByIdFromDB = async (
  userId: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: userId }, { name: 1, contactNo: 1 });
  return user;
};
export const deleteUserById = async (userId: string) => {
  const deleteUser = await User.deleteOne({ id: userId });
  return deleteUser;
};
export const getAdminUsersFormDb = async (): Promise<IUser[]> => {
  const admins = await User.getAminUser();
  return admins;
};
