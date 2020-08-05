import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        const {user1} = this.props
        return (
            <form>
                <label htmlFor="user">Enter UserId for playing the game</label>
                <input type="text" name="user1" id="user1" value={user1} onChange='' />
                <input type="button" value="submit" onClick='' />
            </form>
        )
    }
}

export default LoginForm
