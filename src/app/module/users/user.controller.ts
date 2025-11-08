import userService from './user.service'
import { Response, Request } from 'express'
const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      status: true,
      mesage: 'Create user Successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: true,
      message: 'Failed from Create User controller',
    })
    throw new Error(`Error From CreateNew User: ${error}`)
  }
}
export default {
  createUser,
}
