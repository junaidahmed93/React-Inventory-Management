import React, { Component } from 'react';

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
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <div>
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