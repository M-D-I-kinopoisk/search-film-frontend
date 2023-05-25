import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filmId: null,
    FilmById: null
}

const initialState: FilmsSliceState = {
    filmId: null,
    FilmById: null
}


const FilmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        getFilmId(state, action) {
            state.filmId = action.payload
        }
    }
})

export const {getFilmId} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer