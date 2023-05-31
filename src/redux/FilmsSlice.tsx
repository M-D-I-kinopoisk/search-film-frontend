import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filmId: null,
    modalOpen: {
        modalState: boolean,
        value: string
    }
}

const initialState: FilmsSliceState = {
    filmId: null,
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
        setOpenModal(state, action) {
            state.modalOpen = action.payload
        }
    }
})

export const {getFilmId, setOpenModal} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer