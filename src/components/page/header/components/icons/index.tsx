import { useState, useCallback, MouseEvent } from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { HeaderProfileMenu } from '@app/components/page/header/components/profile-menu'
import { UiIconButton } from '@app/components/ui/icons/icon-button'
import styles from './styles.css'

interface Props {
  items: string[]
}

export function HeaderIcons({ items }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const setOpenMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget), [
    setAnchorEl
  ])
  return (
    <div className={styles.wrap}>
      <UiIconButton className={styles.iconBtn} onClick={setOpenMenu}>
        <AccountCircle />
      </UiIconButton>
      <HeaderProfileMenu items={items} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  )
}
