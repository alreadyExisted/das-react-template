import { PayloadAction } from '@reduxjs/toolkit'

// TODO add generics
export const loadingSetter = {
  start: (fieldName = 'loading') => (state: any) => {
    state[fieldName] = true
  },
  success: (loadingFieldName = 'loading', dataFieldName = 'data') => (state: any, action: { payload: any }) => {
    state[loadingFieldName] = false
    state[dataFieldName] = action.payload
  },
  end: (fieldName = 'loading') => (state: any) => {
    state[fieldName] = false
  }
}

/**
 * @returns loading togglers in reducer with safeSaga
 */
export function getLoadingStateHandlers<S = unknown, A = PayloadAction<any>>(
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
