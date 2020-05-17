import { createAction } from '@reduxjs/toolkit'
import { actionWithPayloadType } from '@app/state/utils'
import { GetRepositoriesResponseDTO } from '@app/api/github/modules/repositories'

const getRepositoriesRequest = createAction('GET_REPOSITORIES_REQUESTING')
const getRepositoriesRequestSuccess = createAction(
  'GET_REPOSITORIES_REQUESTING_SUCCESS',
  actionWithPayloadType<GetRepositoriesResponseDTO>()
)

export const repositoriesActions = {
  getRepositoriesRequest,
  getRepositoriesRequestSuccess
}
