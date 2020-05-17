import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { UiTableProps, UiTable } from '@app/components/ui/table'
import { useT } from '@app/hooks/use-t'
import { usersActions } from '@app/state/modules/users/actions'
import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { Loader } from '@app/components/ui/loader'
import { UiLink } from '@app/components/ui/link'
import styles from './styles.css'

export function UsersPage() {
  const t = useT('common.table')
  const dispatch = useDispatch()
  const { loading, data } = useShallowEqualSelector(state => state.users)

  useEffect(() => {
    dispatch(usersActions.getUsersRequest())
  }, [dispatch])

  const columns = useMemo<UiTableProps['columns']>(() => {
    return {
      headers: [t('id'), t('avatar'), t('name'), t('link')],
      rows: data.map(item => [
        item.id,
        <div key="img" className={styles.imgWrap}>
          <img src={item.avatar_url} alt={item.login} />
        </div>,
        item.login,
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
