import { createReducer } from '@reduxjs/toolkit'
import { eventsActions } from './actions'
import { EventData } from '@app/models/events'

type State = EventData[]

const initialState: State = []

export default createReducer(initialState, builder =>
  builder
    .addCase(eventsActions.addEvent, (state, action) => [...state, action.payload])
    .addCase(eventsActions.removeEvent, (state, action) => state.filter(event => event.id !== action.payload.id))
)
