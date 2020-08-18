import { createSlice } from '@reduxjs/toolkit'

const initialState: Record<string, boolean | undefined> = {}

const loadingStates = {
  '/pending': true,
  '/fulfilled': false,
  '/rejected': false
}

const slice = createSlice({
  name: 'loadings',
  reducers: {},
  initialState,
  extraReducers: builder =>
    builder
      .addMatcher(...matcher('/pending'))
      .addMatcher(...matcher('/fulfilled'))
      .addMatcher(...matcher('/rejected'))
})

type Action = { type: string }

function matcher(loadingType: keyof typeof loadingStates) {
  return [
    function (action: Action): action is Action {
      return action.type.endsWith(loadingType)
    },
    function (state: typeof initialState, action: Action) {
      state[action.type.replace(loadingType, '')] = loadingStates[loadingType]
    }
  ] as const
}

export default slice.reducer
