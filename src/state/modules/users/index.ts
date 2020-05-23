import { createSlice, EntityState, createEntityAdapter } from '@reduxjs/toolkit'
import { LoadingState } from '@app/state/interfaces'
import { api } from '@app/api'
import { loadingSetter, createSafeThunk } from '@app/state/utils'
import { GithubUserData } from '@app/models/github-user'

const usersAdapter = createEntityAdapter<GithubUserData>()

const initialState: EntityState<GithubUserData> & LoadingState = {
  ...usersAdapter.getInitialState()
}

const getUsers = createSafeThunk('users/getUsers', async () => {
  const data = await api.github.users.getUsers()
  return data
})

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, loadingSetter.start())
      .addCase(getUsers.fulfilled, (s, a) => {
        s.loading = false
        usersAdapter.addMany(s, a.payload!)
      })
      .addCase(getUsers.rejected, loadingSetter.end())
})

export const usersActions = {
  getUsers
}

export default slice.reducer
