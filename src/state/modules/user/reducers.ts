import { createReducer } from '@reduxjs/toolkit'
import { UserData } from '@app/models/user'
import { getUserData } from '@app/utils/features/auth'
import { appConfig } from '@app/config'
import { userActions } from '@app/state/modules/user/actions'

const { sessionToken, accountId, locale, role } = getUserData()

const initialState: UserData = {
  sessionToken,
  accountId,
  locale: locale || appConfig.defaultLang,
  role: role || appConfig.defaultRole
}

export default createReducer(initialState, builder =>
  builder.addCase(userActions.setData, (state, action) => ({
    ...state,
    ...action.payload
  }))
)
