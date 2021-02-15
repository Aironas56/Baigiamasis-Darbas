import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import user from './slices/userSlice'

export default (initialState) => {


    const store = configureStore( {
            reducer: {
                user
            }
        }
    )


    return store
}