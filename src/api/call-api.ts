import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { AuthError, BadRequestError, ServerError } from '@app/api/errors'
import { stringify } from 'querystring'

interface RequestOptions<T> extends AxiosRequestConfig {
  url: string
  mock?: T
}

export function callApi(httpClient: AxiosInstance) {
  return <T>({ url, mock, ...request }: RequestOptions<T>) => {
    if (mock !== undefined) {
      const params = request.params ? '?' + stringify(request.params) : ''
      console.info(`[ API ][ Mock ] [ ${request.method || 'GET'} ] ${url}${params}`)
      return Promise.resolve(mock)
    }

    return httpClient({
      url,
      ...request
    }).then(
      (res: AxiosResponse<T>) => res.data,
      (err: any) => {
        const ajaxError = err.response as AxiosResponse
        if (ajaxError.status === 400) throw new BadRequestError(ajaxError.data)
        if (ajaxError.status === 401) throw new AuthError(ajaxError.data)
        throw new ServerError(ajaxError.data)
      }
    )
  }
}
