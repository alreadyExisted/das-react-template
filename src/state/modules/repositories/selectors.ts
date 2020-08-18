import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'
import { commonItemsSelector } from '@app/state/selectors'

export const repositoriesSelector = createSelector((state: RootStore) => state.repositories, commonItemsSelector)
