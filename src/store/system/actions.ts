import { LoggedInAction, LOGGED_IN } from "./types";

export function loggedIn(userName: string): LoggedInAction {
    return {
        type: LOGGED_IN,
        payload: userName
    }
}