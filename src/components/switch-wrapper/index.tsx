import { PropsWithChildren } from 'react'
import { Switch, Redirect } from 'react-router-dom'

export function SwitchWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <Switch>
      {children}
      <Redirect to="/" />
    </Switch>
  )
}
