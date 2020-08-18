import { Suspense, lazy } from 'react'
import { UiLoader } from '@app/components/ui/loader'
import { Switch, Route, Redirect } from 'react-router-dom'

const DynamicAccountPages = lazy(() => import('./dynamic'))

export function AccountPages() {
  return (
    <Switch>
      <Route path="/account">
        <Suspense fallback={<UiLoader />}>
          <DynamicAccountPages />
        </Suspense>
      </Route>
      <Redirect to="/account" />
    </Switch>
  )
}
