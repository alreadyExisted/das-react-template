import { createSlice, EntityState, createEntityAdapter } from '@reduxjs/toolkit'
import { LoadingState } from '@app/state/interfaces'
import { api } from '@app/api'
import { loadingSetter, createSafeThunk } from '@app/state/utils'
import { GithubRepositoryData } from '@app/models/github-repository'

const repositoriesAdapter = createEntityAdapter<GithubRepositoryData>()

const initialState: EntityState<GithubRepositoryData> & LoadingState = {
  ...repositoriesAdapter.getInitialState()
}

const getRepositories = createSafeThunk('repositories/getUsers', async () => {
  const data = await api.github.repositories.getRepositories()
  return data
})

const slice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getRepositories.pending, loadingSetter.start())
      .addCase(getRepositories.fulfilled, (s, a) => {
        s.loading = false
        repositoriesAdapter.addMany(s, a.payload!)
      })
      .addCase(getRepositories.rejected, loadingSetter.end())
})

export const repositoriesActions = {
  getRepositories
}

export default slice.reducer
