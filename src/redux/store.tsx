import {combineReducers, configureStore} from '@reduxjs/toolkit'
import FilmsSlice from '@/redux/FilmsSlice'


const rootReducer = combineReducers({
    films: FilmsSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
