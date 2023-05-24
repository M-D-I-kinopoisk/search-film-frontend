import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filterObj: object
}

const initialState: FilmsSliceState = {
    filterObj: {
        // 'arrIdGenres': [
        //     1,
        //     2
        // ],
        // 'arrIdCountries': [
        //     1,
        //     2
        // ],
        'ratingStart': 1,
        'countRatingStart': 1000,
        // 'arrMembersFilterDto': [
        //     {
        //         'idMember': 1,
        //         'idProfession': 1
        //     }
        // ],
        'part': 1,
        'typeSorting': 'year'
    }
}


const FilterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        getFilterObj(state, action) {
            // console.log(action.payload)
            state.filterObj = action.payload
        }
    }
})

export const {getFilterObj} = FilterSlice.actions

export const selectFilms = (state) => state.filter
export default FilterSlice.reducer