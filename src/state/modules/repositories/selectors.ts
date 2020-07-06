import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'

export const repositoriesSelector = createSelector(
  (state: RootStore) => state.repositories,
  data => ({ loading: data.loading, items: data.ids.map(id => data.entities[id]!) })
)
