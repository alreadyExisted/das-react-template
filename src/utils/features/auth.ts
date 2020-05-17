import { UserData, RoleType } from '@app/models/user'
import { setAuthToken } from '@app/api/main/http-client'
import { LS_KEYS } from '@app/utils/features/ls'

const { ACCOUNT_ID_KEY, TOKEN_KEY, LOCALE_KEY, ROLE_KEY } = LS_KEYS

export function getUserData() {
  const accountId = localStorage.getItem(ACCOUNT_ID_KEY)
  const sessionToken = localStorage.getItem(TOKEN_KEY)
  const locale = localStorage.getItem(LOCALE_KEY)
  const role = localStorage.getItem(ROLE_KEY) as RoleType
  return { accountId, sessionToken, locale, role }
}

export function setUserData({ accountId, sessionToken, locale, role }: UserData) {
  if (accountId) localStorage.setItem(ACCOUNT_ID_KEY, accountId)
  if (sessionToken) {
    localStorage.setItem(TOKEN_KEY, sessionToken)
    setAuthToken(sessionToken)
  }
  if (locale) localStorage.setItem(LOCALE_KEY, locale)
  if (role) localStorage.setItem(ROLE_KEY, `${role}`)
}

export function removeUserData() {
  localStorage.removeItem(ACCOUNT_ID_KEY)
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(LOCALE_KEY)
  localStorage.removeItem(ROLE_KEY)
}

export function login(data: UserData) {
  setUserData(data)
  window.location.assign('/account')
}

export function logout() {
  removeUserData()
  window.location.assign('/')
}
