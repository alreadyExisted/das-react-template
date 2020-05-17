import { useSelector, shallowEqual } from 'react-redux'
import { RootStore } from '@app/state/reducers'

export function useShallowEqualSelector<T>(selector: (store: RootStore) => T) {
  return useSelector<RootStore, T>(selector, shallowEqual)
}
