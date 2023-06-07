import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filterObj: {
        arrIdGenres?: number[] | undefined
        arrIdCountries?: number[] | undefined
        arrMembersFilterDto?: [
            {
                idMember?: number,
                idProfession?: number
            }
        ] | undefined
        ratingStart?: number
        countRatingStart?: number,
        'yearStart'?: number,
        'yearEnd'?: number,
        'part'?: number,
        'typeSorting'?: string
    }
}

const initialState: FilmsSliceState = {
    filterObj: {
        'ratingStart': 1,
        'countRatingStart': 1000,
        'yearStart': 0,
        'yearEnd': 0,
        'part': 1,
        'typeSorting': 'year'
    }
}


const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        getFilterObj(state, action) {
            state.filterObj = action.payload
        }
    }
})

export const {getFilterObj} = FilterSlice.actions

export const selectFilter = (state) => state.filter
export default FilterSlice.reducer