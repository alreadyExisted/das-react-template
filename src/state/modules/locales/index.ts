import { createSlice } from '@reduxjs/toolkit'
import { LoadingState } from '@app/state/interfaces'
import { api } from '@app/api'
import { createSafeThunk, loadingSetter } from '@app/state/utils'

const initialState: { data?: Record<string, string> } & LoadingState = {}

const getMessages = createSafeThunk('locales/getMessages', async (names: string[]) => {
  const data = await Promise.all(names.map(name => api.self.locales.getLocales(name)))
  return data.reduce((acc, curr) => ({ ...acc, ...curr }), {})
})

const slice = createSlice({
  name: 'locales',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getMessages.pending, loadingSetter.start())
      .addCase(getMessages.fulfilled, loadingSetter.success())
      .addCase(getMessages.rejected, loadingSetter.end())
})

export const localesActions = {
  getMessages
}

export default slice.reducer
