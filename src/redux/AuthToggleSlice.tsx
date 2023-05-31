import {createSlice} from '@reduxjs/toolkit'

interface AuthToggleSliceState {
    authWindow : {
        auth : boolean
    }
}

const initialState: AuthToggleSliceState = {
    authWindow : {
        auth : false
    }
}


const AuthToggleSlice = createSlice({
    name: 'AuthToggle',
    initialState: initialState,
    reducers: {
        toggle(state, action) {
            state.authWindow = action.payload
        }
    }
})

export const {toggle} = AuthToggleSlice.actions

export const selectToggle = (state) => state.authToggle
export default AuthToggleSlice.reducer