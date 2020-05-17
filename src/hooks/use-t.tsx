import { useMemo, ReactElement } from 'react'
import { useIntl } from 'react-intl'
import { PrimitiveType } from 'intl-messageformat'

export function useT(ns: string) {
  const { formatMessage } = useIntl()
  return useMemo(
    () => (id: string, values?: Record<string, PrimitiveType | ReactElement>) =>
      formatMessage({ id: `${ns}.${id}` }, values),
    [formatMessage, ns]
  )
}
