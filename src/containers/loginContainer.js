import { connect } from 'react-redux';
import Login from '../components/login/login';
import {LoginInitial} from '../store/actions/login';


function mapStateToProps(state) {
    return {
        login : state.applicatoin
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginRequest : () =>dispatch(LoginInitial())
    }
}

const LoginContainer = connect(mapStateToProps , mapDispatchToProps) (Login);

export default LoginContainer;