import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'
import { EventData } from '@app/models/events'

export const eventsSelector = createSelector(
  (state: RootStore) => state.events.ids,
  (state: RootStore) => state.events.entities,
  (ids, entities) => ids.map(id => entities[id] as EventData)
)
