import { Bootstrap } from '@app/components/bootstrap'
import { UserPages } from '@app/pages/account/user'
import { AdminPages } from '@app/pages/account/admin'
import { Header } from '@app/components/page/header'
import { RoleType } from '@app/models/user'
import { useUserData } from '@app/hooks/features/use-user-data'
import { Container } from '@app/components/page/container'
import styles from './styles.css'
import { useMemo } from 'react'

export default function AccountPages() {
  const { locale } = useUserData()
  const localeNamespaces = useMemo(() => [locale], [locale])
  return (
    <Bootstrap type="account" localeNamespaces={localeNamespaces}>
      <Header />
      <div className={styles.layout}>
        <Container className={styles.container}>
          <Layouts />
        </Container>
      </div>
    </Bootstrap>
  )
}

function Layouts() {
  const { role } = useUserData()
  switch (role) {
    case RoleType.User:
      return <UserPages />
    case RoleType.Admin:
      return <AdminPages />
  }
}
