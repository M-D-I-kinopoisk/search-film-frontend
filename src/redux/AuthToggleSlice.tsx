import {createSlice} from '@reduxjs/toolkit'

interface AuthToggleSliceState {
    auth : {
        registration : boolean
        authorization : boolean
    }
}

const initialState: AuthToggleSliceState = {
    auth : {
        registration : false,
        authorization : false
    }
}


const AuthToggleSlice = createSlice({
    name: 'AuthToggle',
    initialState: initialState,
    reducers: {
        toggle(state, action) {
            state.auth = action.payload
        }
    }
})

export const {toggle} = AuthToggleSlice.actions

export const selectToggle = (state) => state.authToggle
export default AuthToggleSlice.reducer