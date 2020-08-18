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

export function fulfilledStateSetter<T, D extends { data?: T }, A extends { payload: T }>(state: D, action: A) {
  state.data = action.payload
}
