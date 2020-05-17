import { useNavigationListener } from '@app/hooks/location/use-navigation-listener'

// Rerender only this component, not all tree
export function GlobalHooksSetuper() {
  useNavigationListener()
  return null
}
