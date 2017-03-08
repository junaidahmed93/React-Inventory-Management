import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            signUp : '',
            password : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    submitSignUp(event){
        event.preventDefault();
        var signUpCredential = {
            'email' : this.state.email,
            'password' : this.state.password
        }
    }

    handleChange(event){
        this.setState({ [event.target.name] : event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitSignUp} >
                <input type="text" name="email" onChange={this.handleChange} placeholder="User-email"/>
                <input type="password" name="password" name="password" onChange={this.handleChange}/>
                <button type="submit">SignUP</button>
                </form>
            </div>
        );
    }
}

export default SignUp;