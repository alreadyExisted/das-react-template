import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'

export function useUserData() {
  return useShallowEqualSelector(state => state.user.common)
}

export function useAccountUserData() {
  return useShallowEqualSelector(state => state.user.account!)
}
