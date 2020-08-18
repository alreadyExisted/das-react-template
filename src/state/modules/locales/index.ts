import { createSlice } from '@reduxjs/toolkit'
import { api } from '@app/api'
import { createSafeThunk, fulfilledStateSetter } from '@app/state/utils'

const getMessages = createSafeThunk('locales/getMessages', async (names: string[]) => {
  const data = await Promise.all(names.map(name => api.self.locales.getLocales(name)))
  return data.reduce((acc, curr) => ({ ...acc, ...curr }), {})
})

const slice = createSlice({
  name: 'locales',
  initialState: {} as { data?: Record<string, string> },
  reducers: {},
  extraReducers: builder => builder.addCase(getMessages.fulfilled, fulfilledStateSetter)
})

export const localesActions = {
  getMessages
}

export default slice.reducer
