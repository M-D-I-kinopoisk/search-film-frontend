import {combineReducers, configureStore} from '@reduxjs/toolkit'
import FilmsSlice from '@/redux/FilmsSlice'
import FilterSlice from '@/redux/FilterSlice'
import FilterTextSlice from '@/redux/FilterTextSlice'
import AuthToggleSlice from '@/redux/AuthToggleSlice'


const rootReducer = combineReducers({
    films: FilmsSlice,
    filter : FilterSlice,
    filterText : FilterTextSlice,
    authToggle : AuthToggleSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
