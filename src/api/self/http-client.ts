import axios from 'axios'
import { callApi } from '@app/api/call-api'

const selfHttpClientInstance = axios.create({
  baseURL: '/'
})

export const selfHttpClient = callApi(selfHttpClientInstance)
