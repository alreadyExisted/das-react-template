import { selfHttpClient } from '@app/api/self/http-client'

export const getLocales = (locale: string) =>
  selfHttpClient<Record<string, string>>({
    url: `/locales/${locale}.json?v=${BUILD_ID}`
  })
