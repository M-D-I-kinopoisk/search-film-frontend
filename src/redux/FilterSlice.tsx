import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filterObj: object
}

const initialState: FilmsSliceState = {
    filterObj: {
        'part': 1,
        'typeSorting': 'year'
    }
}


const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        getFilterObj(state, action) {
            console.log(action.payload)
            state.filterObj = action.payload
        }
    }
})

export const {getFilterObj} = FilterSlice.actions

export const selectFilms = (state) => state.filter
export default FilterSlice.reducer