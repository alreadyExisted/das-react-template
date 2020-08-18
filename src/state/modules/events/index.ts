import { createAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { EventData } from '@app/models/events'

const add = createAction<EventData>('events/add')
const remove = createAction<string>('events/remove')

const eventsAdapter = createEntityAdapter<EventData>()

const slice = createSlice({
  name: 'events',
  reducers: {},
  initialState: eventsAdapter.getInitialState(),
  extraReducers: builder => builder.addCase(add, eventsAdapter.addOne).addCase(remove, eventsAdapter.removeOne)
})

export const eventsActions = {
  add,
  remove
}

export default slice.reducer
