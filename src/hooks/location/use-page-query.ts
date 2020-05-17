import { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { stringify } from 'querystring'
import { useQuery, parseQuery } from '@app/hooks/location/use-query'

type QueryType = { sortType?: string; filterType?: string }

export function usePageQuery<S extends number, F extends number>() {
  const { push } = useHistory()
  const query = useQuery<QueryType>()
  const setSortType = useCallback(
    (sortType: S | null) => {
      const { sortType: _, ...rest } = parseQuery(window.location.search)
      push(`?${stringify({ ...rest, ...(sortType ? { sortType } : {}) })}`)
    },
    [push]
  )
  const setFilterType = useCallback(
    (filterType: F | null) => {
      const { filterType: _, ...rest } = parseQuery(window.location.search)
      push(`?${stringify({ ...rest, ...(filterType ? { filterType } : {}) })}`)
    },
    [push]
  )
  return useMemo(() => {
    const params: { sortType?: S; filterType?: F } = {}
    if (query.sortType) params.sortType = +query.sortType as S
    if (query.filterType) params.filterType = +query.filterType as F
    return { params, setSortType, setFilterType }
  }, [query, setSortType, setFilterType])
}
