import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    film: object,
    filmInfo: object,
    actors: object[],
    filmId: null,
    FilmById: null,
    comments: object[]
}

const initialState: FilmsSliceState = {
    film: {},
    filmInfo: {},
    actors: [],
    filmId: null,
    FilmById: null,
    comments: []
}


const FilmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        getFilmId(state, action) {
            state.filmId = action.payload
        },
        getFilms(state, action) {
            state.film = action.payload
        },
        getFilmsInfo(state, action) {
            state.filmInfo = action.payload
        },
        getActors(state, action) {
            state.actors = action.payload
        },
        getComments(state, action) {
            state.actors = action.payload
        }
    }
})

export const {getFilmId, getFilms, getFilmsInfo, getActors, getComments} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer