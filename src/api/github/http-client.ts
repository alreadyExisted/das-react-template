import axios from 'axios'
import { callApi } from '@app/api/call-api'

const githubHttpClientInstance = axios.create({
  baseURL: config.api.github
})

export const githubHttpClient = callApi(githubHttpClientInstance)
