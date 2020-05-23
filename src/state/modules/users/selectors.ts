import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'
import { GithubUserData } from '@app/models/github-user'

export const usersSelector = createSelector(
  (state: RootStore) => state.users.loading,
  (state: RootStore) => state.users.ids,
  (state: RootStore) => state.users.entities,
  (loading, ids, entities) => ({ loading, items: ids.map(id => entities[id] as GithubUserData) })
)
