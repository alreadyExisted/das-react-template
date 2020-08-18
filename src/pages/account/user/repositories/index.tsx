import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { UiTableProps, UiTable } from '@app/components/ui/table'
import { useT } from '@app/hooks/use-t'
import { repositoriesActions } from '@app/state/modules/repositories'
import { repositoriesSelector } from '@app/state/modules/repositories/selectors'
import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { UiLoader } from '@app/components/ui/loader'
import { UiLink } from '@app/components/ui/link'
import { useLoadingState } from '@app/hooks/store/use-loading-state'

export function RepositoriesPages() {
  const t = useT('common.table')
  const dispatch = useDispatch()
  const items = useShallowEqualSelector(repositoriesSelector)
  const loading = useLoadingState(repositoriesActions.getItems)

  useEffect(() => {
    dispatch(repositoriesActions.getItems())
  }, [dispatch])

  const columns = useMemo<UiTableProps['columns']>(() => {
    return {
      headers: [t('id'), t('name'), t('description'), t('link')],
      rows: items.map(item => [
        item.id,
        item.full_name,
        item.description,
        <UiLink key="link" href={item.html_url} rel="noopener noreferrer" target="_blank">
          {item.html_url}
        </UiLink>
      ])
    }
  }, [t, items])

  return (
    <UiLoader loading={loading}>
      <UiTable columns={columns} />
    </UiLoader>
  )
}
