import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/configureStore';
import { ChatHistory, ChatInterface } from '../components/Chat';
import { Message } from '../store/chat/types';
import { sendMessage, clearMessage } from '../store/chat/actions';

interface StateToProps {
    userName: string;
    messages: Message[];
}
interface DispatchToProps {
    sendMessage: (message: Message) => void,
    clearMessage: () => void
}
type ChatPageProps = StateToProps & DispatchToProps;
const ChatPage: React.FunctionComponent<ChatPageProps> = (props) => {
    const [currentMessage, setCurrentMessage] = React.useState('');
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(event.target.value);
    };
    const handleSendMessage = (message: string) => {
        props.sendMessage({
            message,
            timestamp: new Date().getTime(),
            user: props.userName

        })
    }
    return (
        <div>
            <ChatHistory
                messages={props.messages}
            />
            <ChatInterface
                userName={props.userName}
                message={currentMessage}
                onMessageChange={handleMessageChange}
                onSendMessage={handleSendMessage}
                onClearMessage={props.clearMessage}
            />
        </div>
    );
}
const mapStateToProps = (state: AppState) => {
    return {
        userName: state.system.userName,
        messages: state.chat.messages,
    };
};
const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
    return {
        sendMessage: (message: Message) => dispatch(sendMessage(message)),
        clearMessage: () => dispatch(clearMessage())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);