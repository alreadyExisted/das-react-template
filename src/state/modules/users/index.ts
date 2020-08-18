import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { api } from '@app/api'
import { createSafeThunk } from '@app/state/utils'
import { GithubUserData } from '@app/models/github-user'

const usersAdapter = createEntityAdapter<GithubUserData>()

const getItems = createSafeThunk('users/getItems', api.github.users.getItems)

const slice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => builder.addCase(getItems.fulfilled, usersAdapter.setAll)
})

export const usersActions = {
  getItems
}

export default slice.reducer
