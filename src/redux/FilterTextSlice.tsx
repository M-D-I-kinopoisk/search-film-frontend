import {createSlice} from '@reduxjs/toolkit'

interface FilterTextSliceState {
    filterTextObj: {
        arrActorMembers? : string[]
        arrCountries? : string[]
        arrDirMembers?: string[]
        arrGenres? : string[]
        arrGenresEN? : string[]
        arrYears? : string[]
        countRatingStart?: number[]
        ratingStart?: number[]
    }
}


const initialState: FilterTextSliceState = {
    filterTextObj: {}
}

const FilterTextSlice = createSlice({
    name: 'filterText',
    initialState: initialState,
    reducers: {
        getFilterTextObj(state, action) {
            state.filterTextObj = action.payload
        }
    }
})

export const {getFilterTextObj} = FilterTextSlice.actions

export const selectFilterText = (state) => state.filterText
export default FilterTextSlice.reducer