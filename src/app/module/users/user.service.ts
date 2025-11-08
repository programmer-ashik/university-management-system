import { IUser } from './users.interface'
import { User } from './user.model'
import config from '../../../config'
import { generatedUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremantal id
  const id = await generatedUserId()
  user.id = id
  //   default password
  if (!user.password) {
    user.password = config.userPass as string
  }
  try {
    const createduser = await User.create(user)
    return createduser
  } catch (error) {
    throw new Error(`Error for creating New user. Error:${error}`)
  }
}
export default {
  createUser,
}
