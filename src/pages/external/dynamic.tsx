import { Route } from 'react-router-dom'
import { SwitchWrapper } from '@app/components/switch-wrapper'
import { Container } from '@app/components/page/container'
import { Bootstrap } from '@app/components/bootstrap'
import { SignInPage } from '@app/pages/external/sign-in'
import styles from './styles.css'

export default function ExternalPages() {
  return (
    <Bootstrap isExternal>
      <Container className={styles.layout}>
        <SwitchWrapper>
          <Route exact path="/" component={SignInPage} />
        </SwitchWrapper>
      </Container>
    </Bootstrap>
  )
}
