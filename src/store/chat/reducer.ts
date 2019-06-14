import { ChatState, SEND_MESSAGE,ChatActionType, CLEAR_MESSAGE } from "./types";

const initialState: ChatState = {
    messages: [],
};

export function chatReducer(state = initialState, action: ChatActionType): ChatState {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
        }
        case CLEAR_MESSAGE:{
            return{
                ...state,
                messages:[]
            }
        }
        default: return state;
    }
};
// export {chatReducer}