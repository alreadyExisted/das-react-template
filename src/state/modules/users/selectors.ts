import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'

export const usersSelector = createSelector(
  (state: RootStore) => state.users,
  data => ({ loading: data.loading, items: data.ids.map(id => data.entities[id]!) })
)
