import { createReducer, Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import { LoadingState } from '@app/state/interfaces'
import { getLoadingStateHandlers } from '@app/state/utils'
import { GetRepositoriesResponseDTO } from '@app/api/github/modules/repositories'
import { repositoriesActions } from './actions'

type State = LoadingState & {
  data: GetRepositoriesResponseDTO
}

const initialState: State = { data: [] }

const loadingReducer = createReducer(initialState, {
  ...getLoadingStateHandlers([
    {
      actionType: repositoriesActions.getRepositoriesRequest.type
    }
  ])
})

const mainReducer = createReducer(initialState, builder =>
  builder.addCase(repositoriesActions.getRepositoriesRequestSuccess, (state, action) => ({
    ...state,
    data: action.payload
  }))
)

export default reduceReducers(loadingReducer, mainReducer) as Reducer<State>
