import {createSlice} from '@reduxjs/toolkit'

interface FilterTextSliceState {
    filterTextObj: object
}


const initialState: FilterTextSliceState = {
    filterTextObj: {
        // 'arrGenres': [
        //     1,
        //     2
        // ],
        // 'arrIdCountries': [
        //     1,
        //     2
        // ],
        // 'ratingStart': 1,
        // 'countRatingStart': 1000,
        // 'arrMembersFilterDto': [
        //     {
        //         'idMember': 1,
        //         'idProfession': 1
        //     }
        // ],
        // 'part': 1,
        // 'typeSorting': 'year'
    }
}

const FilterTextSlice = createSlice({
    name: 'filterText',
    initialState: initialState,
    reducers: {
        getFilterTextObj(state, action) {
            // console.log(action.payload)
            state.filterTextObj = action.payload
        }
    }
})

export const {getFilterTextObj} = FilterTextSlice.actions

export const selectFilterText = (state) => state.filterText
export default FilterTextSlice.reducer