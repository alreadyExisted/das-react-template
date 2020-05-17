import { createAction } from '@reduxjs/toolkit'
import { actionWithPayloadType } from '@app/state/utils'
import { UserData } from '@app/models/user'

const setData = createAction('USER_SET_DATA', actionWithPayloadType<Partial<UserData>>())

export const userActions = {
  setData
}
