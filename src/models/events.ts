import { ApiError } from '@app/api/errors'

export type EventType = 'success' | 'info' | 'warning' | 'error'

export interface EventData {
  id: string
  type: EventType
  message: string | { id: string }
  error?: ApiError
}
