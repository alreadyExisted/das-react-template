import { createAsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { eventsActions } from '@app/state/modules/events'
import { ApiError } from '@app/api/errors'
import { createEvent } from '@app/utils/events'

export function createSafeThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>
) {
  return createAsyncThunk(typePrefix, async (args: ThunkArg, config) => {
    try {
      const data = await payloadCreator(args, config)
      return data
    } catch (error) {
      config.rejectWithValue(error)
      if (error instanceof ApiError) {
        config.dispatch(
          eventsActions.addEvent(createEvent({ type: 'error', message: error.opts.message, error: { ...error } }))
        )
      }
    }
  })
}
