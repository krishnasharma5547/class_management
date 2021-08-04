import { Reducer } from "redux"
import { LOGIN_ME, LOGIN_PASSWORD_TOGGLE, ME_FETCH } from "../actions/auth.actions"

export interface AuthState {
    id?: number;
    passwordToggle : boolean
}

const initialState = {
    passwordToggle: false
}

export const authReducer:Reducer<AuthState> = (state = initialState, action) => {
    switch(action.type){
        case ME_FETCH:
        case LOGIN_ME:
            const userId = action.payload.id as number
            return {...state, id:userId}
        case LOGIN_PASSWORD_TOGGLE:
            return{...state, passwordToggle:action.payload}
        default:
            return state;
    }
}