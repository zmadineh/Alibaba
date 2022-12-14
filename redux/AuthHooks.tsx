import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './Store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAuthDispatch: () => AppDispatch = useDispatch
export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector