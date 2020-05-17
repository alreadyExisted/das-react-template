import { createReducer } from '@reduxjs/toolkit'
import { LoadingState } from '@app/state/interfaces'
import { getLoadingStateHandlers } from '@app/state/utils'
import { authActions } from './actions'

export default createReducer<LoadingState>(
  {},
  {
    ...getLoadingStateHandlers([
      { actionType: authActions.loginRequest.type },
      { actionType: authActions.logoutRequest.type }
    ])
  }
)
