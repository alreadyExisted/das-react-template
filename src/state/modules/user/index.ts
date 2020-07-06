import { createSlice } from '@reduxjs/toolkit'
import { UserData, AuthUserData, AccountUserData } from '@app/models/user'
import { getUserData, doLogin, doLogout } from '@app/utils/features/auth'
import { appConfig } from '@app/config'
import { LoadingState } from '@app/state/interfaces'
import { api } from '@app/api'
import { loadingSetter, createSafeThunk } from '@app/state/utils'

const { locale, role } = getUserData()

const initialState: { common: UserData; account?: AccountUserData } & LoadingState = {
  common: {
    locale: locale || appConfig.defaultLang,
    role: role || appConfig.defaultRole
  }
}

const login = createSafeThunk('user/login', async (params: AuthUserData) => {
  const data = await api.main.auth.login(params)
  doLogin(data)
})

const logout = createSafeThunk('user/logout', async () => {
  await api.main.auth.logout()
  doLogout()
})

const getUserInfo = createSafeThunk('user/getUserInfo', api.main.user.getUserInfo)

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(login.pending, loadingSetter.start())
      .addCase(login.fulfilled, loadingSetter.end())
      .addCase(login.rejected, loadingSetter.end())
      .addCase(logout.pending, loadingSetter.start())
      .addCase(logout.fulfilled, loadingSetter.end())
      .addCase(logout.rejected, loadingSetter.end())
      .addCase(getUserInfo.pending, loadingSetter.start())
      .addCase(getUserInfo.fulfilled, loadingSetter.success('loading', 'account'))
      .addCase(getUserInfo.rejected, loadingSetter.end())
})

export const userActions = {
  login,
  logout,
  getUserInfo
}

export default slice.reducer
