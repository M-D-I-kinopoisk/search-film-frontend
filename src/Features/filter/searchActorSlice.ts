'use client'

import {createSlice} from '@reduxjs/toolkit'

export interface SearchActorState {
    value: string
}

const initialState: SearchActorState = {
    value: ''
}

export const searchActorSlice = createSlice({
    name: 'searchActor',
    initialState,
    reducers: {
        fetchData : () => {

        },
        search: (state) => {
            state.value += 1
        },

    }
})

export const {search} = searchActorSlice.actions

export default searchActorSlice