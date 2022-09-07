import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flagSlices from './slices/flagSlices';

const rootReducer = combineReducers({
 reducer: flagSlices
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}
export const store = setupStore()

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatch = AppStoreType['dispatch']