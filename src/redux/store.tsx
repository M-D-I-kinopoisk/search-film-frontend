import {combineReducers, configureStore} from '@reduxjs/toolkit'
import FilmsSlice from '@/redux/FilmsSlice'
import FilterSlice from '@/redux/FilterSlice'


const rootReducer = combineReducers({
    films: FilmsSlice,
    filter : FilterSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
