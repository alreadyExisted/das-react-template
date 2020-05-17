import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { UiTableProps, UiTable } from '@app/components/ui/table'
import { useT } from '@app/hooks/use-t'
import { repositoriesActions } from '@app/state/modules/repositories/actions'
import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { Loader } from '@app/components/ui/loader'
import { UiLink } from '@app/components/ui/link'

export function RepositoriesPages() {
  const t = useT('common.table')
  const dispatch = useDispatch()
  const { loading, data } = useShallowEqualSelector(state => state.repositories)

  useEffect(() => {
    dispatch(repositoriesActions.getRepositoriesRequest())
  }, [dispatch])

  const columns = useMemo<UiTableProps['columns']>(() => {
    return {
      headers: [t('id'), t('name'), t('description'), t('link')],
      rows: data.map(item => [
        item.id,
        item.full_name,
        item.description,
        <UiLink key="link" href={item.html_url} rel="noreferrer" target="_blank">
          {item.html_url}
        </UiLink>
      ])
    }
  }, [t, data])

  return (
    <Loader loading={loading}>
      <UiTable columns={columns} />
    </Loader>
  )
}
