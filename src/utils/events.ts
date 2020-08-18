import { EventData } from '@app/models/events'
import { nanoid } from '@reduxjs/toolkit'

export const createEvent = (args: Omit<EventData, 'id'>) => ({ ...args, id: nanoid() })
