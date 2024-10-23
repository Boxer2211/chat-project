import { configureStore, combineReducers } from '@reduxjs/toolkit'
import commentsReducer from './comments'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  comments: commentsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
