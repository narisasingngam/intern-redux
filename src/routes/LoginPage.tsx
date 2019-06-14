import React from 'react';
import LoginPanel from '../components/LoginPanel';
import { connect } from 'react-redux';
import { login } from '../store/system/actions';
import { withRouter, RouteComponentProps } from 'react-router';

interface DispathchToProps{
    login: (userName:string) => void;
}
type LoginPageProp = DispathchToProps & RouteComponentProps;
const LoginPage: React.FunctionComponent<LoginPageProp> = (props) => {
    const [userName,setUserName] = React.useState('');
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(event.target.value); 
    };
    const handleLogin = (userName:string) =>{
        // call login api
        props.login(userName);
        // props.history.push('/chat');
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
        login: (userName:string) => dispathch(login(userName)),
    };
};
export default connect(undefined,mapDispatchToProps)(withRouter(LoginPage));