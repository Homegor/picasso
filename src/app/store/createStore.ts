import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "./slice/slice";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

