import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'

export function useLoadingState(action: { typePrefix: string }) {
  return useShallowEqualSelector(state => state.loadings[action.typePrefix])
}
