import React from 'react';
import LoginPanel from '../components/LoginPanel';
import { connect } from 'react-redux';
import { AppState } from '../store/configureStore';
import { loggedIn } from '../store/system/actions';
import { withRouter, RouteComponentProps } from 'react-router';

interface DispathchToProps{
    loggedIn: (userName:string) => void;
}
type LoginPageProp = DispathchToProps & RouteComponentProps;
const LoginPage: React.FunctionComponent<LoginPageProp> = (props) => {
    const [userName,setUserName] = React.useState('');
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(event.target.value); 
    };
    const handleLogin = (userName:string) =>{
        // call login api
        props.loggedIn(userName);
        props.history.push('/chat');
    }
    return (
        <div>
            <LoginPanel
            userName={userName}
            onUserNameChange={handleUserNameChange}
            onLogin={handleLogin}
            />
        </div>
        );
    }
const mapDispatchToProps = (dispathch: Function):DispathchToProps =>{
    return {
        loggedIn: (userName:string) => dispathch(loggedIn(userName)),
    };
};
export default connect(undefined,mapDispatchToProps)(withRouter(LoginPage));