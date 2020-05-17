import { PayloadAction } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'
import { eventsActions } from '@app/state/modules/events/actions'
import { ApiError } from '@app/api/errors'
import { createEvent } from '@app/utils/events'

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

export function actionWithPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

/**
 * @returns loading togglers in reducer
 */
export function getLoadingStateHandlers<S = {}, A = PayloadAction<any>>(
  actionTypes: {
    actionType: string
    loadingKey?: string
    selectorFn?: (args: SelectorFnArgs<S, A>) => S
  }[]
) {
  return actionTypes.reduce((prevValue, { actionType, loadingKey = 'loading', selectorFn = defaultSelectorFn }) => {
    return {
      ...prevValue,
      [`${actionType}_START`]: (state: S, action: A) => selectorFn({ state, action, loading: true, loadingKey }),
      [`${actionType}_END`]: (state: S, action: A) => selectorFn({ state, action, loading: false, loadingKey })
    }
  }, {})
}

type SelectorFnArgs<S, A> = {
  state: S
  loading: boolean
  loadingKey: string
  action: A
}

function defaultSelectorFn<S, A>({ state, loadingKey, loading }: SelectorFnArgs<S, A>) {
  return { ...state, [loadingKey]: loading }
}
