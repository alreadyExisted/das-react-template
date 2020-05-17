import { createReducer, Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import { LoadingState } from '@app/state/interfaces'
import { getLoadingStateHandlers } from '@app/state/utils'
import { GetUsersResponseDTO } from '@app/api/github/modules/users'
import { usersActions } from './actions'

type State = LoadingState & {
  data: GetUsersResponseDTO
}

const initialState: State = { data: [] }

const loadingReducer = createReducer(initialState, {
  ...getLoadingStateHandlers([
    {
      actionType: usersActions.getUsersRequest.type
    }
  ])
})

const mainReducer = createReducer(initialState, builder =>
  builder.addCase(usersActions.getUsersRequestSuccess, (state, action) => ({
    ...state,
    data: action.payload
  }))
)

export default reduceReducers(loadingReducer, mainReducer) as Reducer<State>
