import React, { Component } from 'react';
import { Link } from 'react-router'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '' , password : '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name , "----" , event.target.value , "===== type ====" ,event.target.type);
        
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state.password);
        event.preventDefault();
        var credential = {
            'email' : this.state.email,
            'password' : this.state.password
        }

        console.log(this.props);
        this.props.loginReq(credential)
    }

    render() {
        return (
            <div>
                <p> <Link to="/Signup"> Signup </Link> </p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                          <input type="email"  name="email" onChange={this.handleChange} />
                          <input type="password" name="password" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Login;