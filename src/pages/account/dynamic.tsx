import { Bootstrap } from '@app/components/bootstrap'
import { UserPages } from '@app/pages/account/user'
import { AdminPages } from '@app/pages/account/admin'
import { Header } from '@app/components/page/header'
import { RoleType } from '@app/models/user'
import { useUserData } from '@app/hooks/store/use-user-data'
import { Container } from '@app/components/page/container'
import styles from './styles.css'

export default function AccountPages() {
  return (
    <Bootstrap>
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
  const userData = useUserData()
  switch (userData.role) {
    case RoleType.User:
      return <UserPages />
    case RoleType.Admin:
      return <AdminPages />
  }
}
