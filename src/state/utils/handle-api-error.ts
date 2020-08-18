import { eventsActions } from '@app/state/modules/events'
import { createEvent } from '@app/utils/events'
import { ApiError, AuthError } from '@app/api/errors'
import { Dispatch } from 'redux'
import { doLogout } from '@app/utils/features/auth'

export function handleApiError(
  error: ApiError,
  serializedError: ApiError & { actionType: string },
  dispatch: Dispatch
) {
  if (error instanceof ApiError) {
    dispatch(eventsActions.add(createEvent({ type: 'error', message: error.message, error: serializedError })))
    if (error instanceof AuthError) doLogout()
  }
}
