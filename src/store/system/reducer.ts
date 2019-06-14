import { SystemState, SystemActionTypes, LOGGED_IN } from "./types";

const initialState: SystemState = {
    userName: '',
    loggedIn: false
}
export function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
    switch (action.type) {
        case LOGGED_IN: {
            return {
                ...state,
                loggedIn: true,
                userName: action.payload
            }
        }
        default: return state;
    }

};