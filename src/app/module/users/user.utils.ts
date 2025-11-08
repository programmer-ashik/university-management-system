import { User } from './user.model'

// query id for database
const FindlastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}
// generate auto id using database
export const generatedUserId = async () => {
  const currentId = (await FindlastUserId()) || (0).toString().padStart(5, '0')
  //   increment currentID
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
