import { User } from './user.model'
import { IUser } from './user.interface'
import config from '../../../config'

const createUser = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user!')
  }

  return createUser
}

export default {
  createUser,
}
