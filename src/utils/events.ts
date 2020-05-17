import { EventData } from '@app/models/events'
import { getRandomHash } from '@app/utils/hash'

export const createEvent = (args: Omit<EventData, 'id'>) => ({ ...args, id: getRandomHash() })
