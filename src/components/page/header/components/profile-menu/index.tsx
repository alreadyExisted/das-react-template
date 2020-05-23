import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useT } from '@app/hooks/use-t'
import { userActions } from '@app/state/modules/user'
import cn from 'classnames'
import styles from './styles.css'

interface Props {
  items: string[]
  anchorEl: HTMLElement | null
  setAnchorEl: (el: HTMLElement | null) => void
}

export function HeaderProfileMenu({ items, anchorEl, setAnchorEl }: Props) {
  const t = useT('common.navs')
  const dispatch = useDispatch()
  const { path } = useRouteMatch()
  const history = useHistory()
  const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl])
  const handleNavigate = useCallback(
    (id: string) => {
      return () => {
        history.push(`${path}/${id}`)
        handleClose()
      }
    },
    [history, path, handleClose]
  )
  const handleLogout = useCallback(() => dispatch(userActions.logout()), [dispatch])
  return (
    <Menu
      PaperProps={paperProps}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      keepMounted
      open={!!anchorEl}
      onClose={handleClose}
    >
      {items.map(id => (
        <MenuItem key={id} className={styles.item} onClick={handleNavigate(id)}>
          {t(id)}
        </MenuItem>
      ))}
      <MenuItem className={cn(styles.item, styles.logout)} onClick={handleLogout}>
        <i className={styles.icon} /> {t('log-out')}
      </MenuItem>
    </Menu>
  )
}

const anchorOrigin: MenuProps['anchorOrigin'] = {
  vertical: 'bottom',
  horizontal: 'right'
}

const transformOrigin: MenuProps['transformOrigin'] = {
  vertical: 'top',
  horizontal: 'right'
}

const paperProps: MenuProps['PaperProps'] = {
  className: styles.wrap
}
