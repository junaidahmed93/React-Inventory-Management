import { connect } from 'react-redux';
import Login from '../components/login/login';
import { loginRequest } from '../store/actions/login';

function mapStateToProps(state){
    return {
        app : state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginReq : (userData)=>dispatch(loginRequest(userData))
    }
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;