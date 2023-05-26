import {combineReducers, configureStore} from '@reduxjs/toolkit'
import FilmsSlice from '@/redux/FilmsSlice'
import FilterSlice from '@/redux/FilterSlice'
import FilterTextSlice from '@/redux/FilterTextSlice'


const rootReducer = combineReducers({
    films: FilmsSlice,
    filter : FilterSlice,
    filterText : FilterTextSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
