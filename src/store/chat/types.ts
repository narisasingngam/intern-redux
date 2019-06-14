export interface ChatState{
    messages: Message[];
    
}
export interface Message {
    user: string;
    message: string;
    timestamp: number;
}

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export interface SendMessageAction{
    type: typeof SEND_MESSAGE,
    payload: Message;
}
export interface ClearMessageAction{
    type: typeof CLEAR_MESSAGE
}
export type ChatActionType = SendMessageAction & ClearMessageAction;