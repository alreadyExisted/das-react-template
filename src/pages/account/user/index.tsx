import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom'
import { UsersPage } from '@app/pages/account/user/users'
import { RepositoriesPages } from '@app/pages/account/user/repositories'

export function UserPages() {
  const { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route path={`${path}/users`} component={UsersPage} />
        <Route path={`${path}/repositories`} component={RepositoriesPages} />
        <Redirect to={`${path}/users`} />
      </Switch>
    </>
  )
}
