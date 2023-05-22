import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filmId: null
}

const initialState: FilmsSliceState = {
    filmId: null
}


const FilmsSlice = createSlice({
    name: 'slice',
    initialState: initialState,
    reducers: {
        getFilmId(state, action) {
            console.log(action.payload)
            state.filmId = action.payload
        }
    }
})

export const {getFilmId} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer