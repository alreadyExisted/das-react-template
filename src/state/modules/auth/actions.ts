import { createAction } from '@reduxjs/toolkit'
import { AuthUserData } from '@app/models/user'
import { actionWithPayloadType } from '@app/state/utils'

const loginRequest = createAction('LOGIN_REQUESTING', actionWithPayloadType<AuthUserData>())
const logoutRequest = createAction('LOGOUT_REQUESTING')

export const authActions = {
  loginRequest,
  logoutRequest
}
