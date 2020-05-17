import { createAction } from '@reduxjs/toolkit'
import { actionWithPayloadType } from '@app/state/utils'
import { GetUsersResponseDTO } from '@app/api/github/modules/users'

const getUsersRequest = createAction('GET_USERS_REQUESTING')
const getUsersRequestSuccess = createAction(
  'GET_USERS_REQUESTING_SUCCESS',
  actionWithPayloadType<GetUsersResponseDTO>()
)

export const usersActions = {
  getUsersRequest,
  getUsersRequestSuccess
}
