import {createSlice} from '@reduxjs/toolkit'

interface FilmsSliceState {
    filmId: null,
    modalOpen: {
        modalState: boolean,
        value: string
    },
    commentValue: string
}

const initialState: FilmsSliceState = {
    filmId: null,
    modalOpen: {
        modalState: false,
        value: 'creators'
    },
    commentValue: ''
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
        },
        getInputValue(state, action) {
            state.commentValue = action.payload
        }
    }
})

export const {getFilmId, setOpenModal, getInputValue} = FilmsSlice.actions

export const selectFilms = (state) => state.films
export default FilmsSlice.reducer