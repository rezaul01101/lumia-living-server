import { User } from './user.model'

// user ID
export const findLastUserId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({ id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastStudent?.id ? lastStudent.id.substring(4) : '1'
}

export const generateUserId = async (): Promise<string> => {
  const currentId = await findLastUserId()
  const incrementedId = currentId ? (parseInt(currentId) + 1).toString() : '1'
  return incrementedId
}
