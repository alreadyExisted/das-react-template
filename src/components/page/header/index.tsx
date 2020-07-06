import { useMemo } from 'react'
import { RoleType } from '@app/models/user'
import { Container } from '@app/components/page/container'
import { HeaderMenu } from '@app/components/page/header/components/menu'
import { HeaderIcons } from '@app/components/page/header/components/icons'
import styles from './styles.css'
import { useUserData } from '@app/hooks/features/use-user-data'

export function Header() {
  const { role } = useUserData()
  const items = useMemo<{ menuItems: string[]; profileMenuItems: string[] }>(() => {
    switch (role) {
      case RoleType.User:
        return { menuItems: userMenuItems, profileMenuItems: userProfileMenuItems }
      case RoleType.Admin:
        return { menuItems: [], profileMenuItems: [] }
    }
  }, [role])
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>alreadyExisted</div>
        <HeaderMenu items={items.menuItems} />
        <HeaderIcons items={items.profileMenuItems} />
      </Container>
    </header>
  )
}

const userMenuItems = ['users', 'repositories']
const userProfileMenuItems = ['profile']
