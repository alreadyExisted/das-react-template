import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'
import { commonItemsSelector } from '@app/state/selectors'

export const usersSelector = createSelector((state: RootStore) => state.users, commonItemsSelector)
