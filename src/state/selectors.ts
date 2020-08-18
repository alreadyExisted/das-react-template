import { EntityState } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'

export function commonItemsSelector<T>(data: EntityState<T>) {
  return data.ids.map(id => data.entities[id]!)
}

export function commonLoadingStateSelector(action: { typePrefix: string }) {
  return (state: RootStore) => state.loadings[action.typePrefix]
}
