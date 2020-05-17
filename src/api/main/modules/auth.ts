import { mainHttpClient } from '@app/api/main/http-client'
import { AuthUserData, UserData } from '@app/models/user'

export const login = (body: AuthUserData) =>
  mainHttpClient<UserData>({
    url: '/auth/login',
    method: 'POST',
    data: body,
    mock: {
      accountId: '1',
      sessionToken: '2',
      locale: 'en',
      role: body.role
    }
  })

export const logout = () =>
  mainHttpClient({
    url: '/auth/logout',
    method: 'POST',
    mock: true
  })
