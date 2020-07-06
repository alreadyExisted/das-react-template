import { createAsyncThunk, AsyncThunkPayloadCreator, unwrapResult } from '@reduxjs/toolkit'
import { eventsActions } from '@app/state/modules/events'
import { ApiError, AuthError } from '@app/api/errors'
import { createEvent } from '@app/utils/events'
import { doLogout } from '@app/utils/features/auth'

export function unwrapError<T>(data: T) {
  return unwrapResult((data as unknown) as ActionTypesWithOptionalErrorAction)
}

export function createSafeThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>
) {
  return createAsyncThunk<Returned, ThunkArg>(typePrefix, async (args, config) => {
    try {
      const data = await payloadCreator(args, config)
      return data
    } catch (error) {
      const serializedError = { ...error, actionType: typePrefix }
      if (error instanceof ApiError) {
        config.dispatch(
          eventsActions.addEvent(createEvent({ type: 'error', message: error.opts.message, error: serializedError }))
        )

        if (error instanceof AuthError) doLogout()
      }
      return config.rejectWithValue(serializedError)
    }
  })
}

type ActionTypesWithOptionalErrorAction =
  | {
      error: any
    }
  | {
      error?: never
      payload: any
    }
