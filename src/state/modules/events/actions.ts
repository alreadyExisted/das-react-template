import { createAction } from '@reduxjs/toolkit'
import { actionWithPayloadType } from '@app/state/utils'
import { EventData } from '@app/models/events'

const addEvent = createAction('ADD_EVENT', actionWithPayloadType<EventData>())
const removeEvent = createAction('REMOVE_EVENT', actionWithPayloadType<{ id: string }>())

export const eventsActions = {
  addEvent,
  removeEvent
}
