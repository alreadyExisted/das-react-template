import { Switch, Route } from 'react-router-dom'
import { ExternalPages } from '@app/pages/external'
import { AccountPages } from '@app/pages/account'
import { useUserData } from '@app/hooks/store/use-user-data'

export function Pages() {
  return (
    <Switch>
      <Route component={MainPages} />
    </Switch>
  )
}

function MainPages() {
  const userData = useUserData()
  if (!userData.accountId) return <ExternalPages />
  return <AccountPages />
}
