import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { api } from '@app/api'
import { createSafeThunk } from '@app/state/utils'
import { GithubRepositoryData } from '@app/models/github-repository'

const repositoriesAdapter = createEntityAdapter<GithubRepositoryData>()

const getItems = createSafeThunk('repositories/getItems', api.github.repositories.getItems)

const slice = createSlice({
  name: 'repositories',
  initialState: repositoriesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => builder.addCase(getItems.fulfilled, repositoriesAdapter.addMany)
})

export const repositoriesActions = {
  getItems
}

export default slice.reducer
