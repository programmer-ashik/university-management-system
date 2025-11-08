import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { IUser, UserModel } from './users.interface'

const userScheme = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)
export const User = mongoose.model<IUser, UserModel>('User', userScheme)
