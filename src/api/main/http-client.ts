import axios from 'axios'
import { callApi } from '@app/api/call-api'
import { LS_KEYS } from '@app/utils/features/ls'

const mainHttpClientInstance = axios.create({
  baseURL: config.api.main,
  headers: {
    Authorization: JSON.stringify(localStorage.getItem(LS_KEYS.TOKEN_KEY))
  }
})

export const mainHttpClient = callApi(mainHttpClientInstance)

export function setAuthToken(token: string) {
  mainHttpClientInstance.defaults.headers.common.Authorization = token
}
