import { createSelector } from '@reduxjs/toolkit'
import { RootStore } from '@app/state/reducers'

export const eventsSelector = createSelector(
  (state: RootStore) => state.events,
  data => data.ids.map(id => data.entities[id]!)
)

export const errorsSelector = createSelector(eventsSelector, events =>
  events.filter(event => event.type === 'error' && !!event.error)
)
