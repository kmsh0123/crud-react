import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import authSlice from './service/authSlice'
import { blogApi } from './api/blogApi'

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        authSlice : authSlice
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware,blogApi.middleware),
  })