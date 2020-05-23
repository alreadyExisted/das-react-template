import { PayloadAction } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'
import { ApiError } from '@app/api/errors'
import { createEvent } from '@app/utils/events'
import { eventsActions } from '@app/state/modules/events'

export function safeSaga<T extends PayloadAction<any>>(saga: (action: T) => Generator) {
  return function* (action: T) {
    try {
      yield put({ type: `${action.type}_START`, payload: action.payload })
      yield* saga(action)
    } catch (error) {
      // log errors
      console.error(error)

      if (error instanceof ApiError) {
        yield put(eventsActions.addEvent(createEvent({ type: 'error', message: error.opts.message, error })))
      }
    } finally {
      yield put({ type: `${action.type}_END`, payload: action.payload })
    }
  }
}
