import { mainHttpClient } from '@app/api/main/http-client'
import { AccountUserData } from '@app/models/user'
import { getUserMock } from '@app/mocks/user'

export const getUserInfo = () =>
  mainHttpClient<AccountUserData>({
    url: '/user/profile-info',
    mock: getUserMock()
  })
