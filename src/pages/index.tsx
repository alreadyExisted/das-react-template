import { Switch, Route } from 'react-router-dom'
import { ExternalPages } from '@app/pages/external'
import { AccountPages } from '@app/pages/account'

export function Pages() {
  return (
    <Switch>
      <Route path="/account" component={AccountPages} />
      <Route component={ExternalPages} />
    </Switch>
  )
}
