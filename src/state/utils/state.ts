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
