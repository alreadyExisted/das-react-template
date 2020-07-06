import faker from 'faker'
import { AccountUserData } from '@app/models/user'
import { AuthError } from '@app/api/errors'
import { getUserData } from '@app/utils/features/auth'

export const getUserMock = (): AccountUserData => {
  if (!getUserData().sessionToken)
    throw new AuthError({
      statusCode: 401,
      message: 'AuthError'
    })

  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  return {
    email: faker.internet.email(),
    firstName,
    lastName,
    nickname: faker.internet.userName(firstName, lastName)
  }
}
