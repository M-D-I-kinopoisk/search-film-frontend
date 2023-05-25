import {configureStore} from '@reduxjs/toolkit'
import FilmsSlice from '@/redux/FilmsSlice'

export const store = configureStore({
    reducer: {
        films: FilmsSlice
    }
})
