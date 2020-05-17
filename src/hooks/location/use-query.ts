import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { parse } from 'querystring'

export function useQuery<T>() {
  const { search } = useLocation()
  return useMemo(() => parseQuery<T>(search), [search])
}

export function parseQuery<T>(search: string) {
  return (parse(search.startsWith('?') ? search.slice(1) : search) as unknown) as T
}
