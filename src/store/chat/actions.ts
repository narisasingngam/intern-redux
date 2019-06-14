import { Message, SEND_MESSAGE, CLEAR_MESSAGE } from "./types";

export function sendMessage(message: Message) {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

export function clearMessage() {
    return {
        type: CLEAR_MESSAGE
    }
}