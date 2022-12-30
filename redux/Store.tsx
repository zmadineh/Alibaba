import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import searchSlice from "./Slices/SearchSlice";


export const store = configureStore({
  reducer: {
    Auth:AuthSlice,
    searches: searchSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch