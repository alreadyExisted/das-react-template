import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'

export function useUserData() {
  return useShallowEqualSelector(state => state.user.data)
}
