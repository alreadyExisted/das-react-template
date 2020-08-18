import { createAsyncThunk, AsyncThunkPayloadCreator, unwrapResult } from '@reduxjs/toolkit'
import { handleApiError } from '@app/state/utils/handle-api-error'

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
      console.error(error)
      const serializedError = { ...error, actionType: typePrefix }
      handleApiError(error, serializedError, config.dispatch)
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
