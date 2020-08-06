import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            user: '',
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.handleLogging(this.state.user)
        this.setState(this.initialState)
    }


    render() {
        const { user } = this.state
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="user">Enter UserId for playing the game</label>
                <input type="text" name="user" id="user" value={user} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm
