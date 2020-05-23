import { createAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { EventData } from '@app/models/events'

const addEvent = createAction<EventData>('addEvent')
const removeEvent = createAction<string>('removeEvent')

const eventsAdapter = createEntityAdapter<EventData>()

const slice = createSlice({
  name: 'events',
  reducers: {},
  initialState: eventsAdapter.getInitialState(),
  extraReducers: builder =>
    builder.addCase(addEvent, eventsAdapter.addOne).addCase(removeEvent, eventsAdapter.removeOne)
})

export const eventsActions = {
  addEvent,
  removeEvent
}

export default slice.reducer
