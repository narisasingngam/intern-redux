export interface SystemState{
    userName: string,
    loggedIn: boolean,
    
}
// action name
export const LOGGED_IN = 'LOGGED_IN';
export interface LoggedInAction{
    type: typeof LOGGED_IN;
    payload: string;
}
export type SystemActionTypes = LoggedInAction;