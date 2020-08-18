import { createSlice } from '@reduxjs/toolkit'
import { UserData, AuthUserData, AccountUserData } from '@app/models/user'
import { getUserData, doLogin, doLogout } from '@app/utils/features/auth'
import { appConfig } from '@app/config'
import { api } from '@app/api'
import { createSafeThunk } from '@app/state/utils'

const { locale, role } = getUserData()

const initialState: { common: UserData; account?: AccountUserData } = {
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
    builder.addCase(getUserInfo.fulfilled, (s, a) => {
      s.account = a.payload
    })
})

export const userActions = {
  login,
  logout,
  getUserInfo
}

export default slice.reducer
