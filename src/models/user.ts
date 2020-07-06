export interface AuthUserData {
  email: string
  password: string
  role: RoleType
}

export enum RoleType {
  Admin = '0',
  User = '1'
}

export interface UserData {
  sessionToken?: string | null
  accountId?: string | null
  locale: string
  role: RoleType
}

export interface AccountUserData {
  email: string
  firstName: string
  lastName: string
  nickname: string
}
