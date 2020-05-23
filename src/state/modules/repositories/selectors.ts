import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'
import { GithubRepositoryData } from '@app/models/github-repository'

export const repositoriesSelector = createSelector(
  (state: RootStore) => state.repositories.loading,
  (state: RootStore) => state.repositories.ids,
  (state: RootStore) => state.repositories.entities,
  (loading, ids, entities) => ({ loading, items: ids.map(id => entities[id] as GithubRepositoryData) })
)
