import { githubHttpClient } from '@app/api/github/http-client'
import { AuthUserData, UserData } from '@app/models/user'

export const login = (body: AuthUserData) =>
  githubHttpClient<UserData>({
    url: '/session/login',
    method: 'POST',
    data: body
  })

export const logout = () =>
  githubHttpClient({
    url: '/session/logout',
    method: 'POST'
  })
