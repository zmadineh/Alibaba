import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
export const store = configureStore({
  reducer: {
    Auth:AuthSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch