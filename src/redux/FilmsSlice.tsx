import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    film: object,
    filmInfo: object,
    actors: object[],
    filmId: null,
    FilmById: null,
    comments: object[],
    modalOpen: {
        modalState: boolean,
        value: string
    }
}

const initialState: FilmsSliceState = {
    film: {},
    filmInfo: {},
    actors: [],
    filmId: null,
    FilmById: null,
    comments: [],
    modalOpen: {
        modalState: false,
        value: 'creators'
    }
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
        getComments(state, action) {
            state.actors = action.payload
        },
        setOpenModal(state, action) {
            state.modalOpen = action.payload
        }
    }
})

export const {getFilmId, getFilms, getFilmsInfo, getComments, setOpenModal} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer