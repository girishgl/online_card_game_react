import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import Card from './components/Card'


class App extends React.Component {
    state = {
        players: [],
        user1: '',
        user2: 'system',
        isLoggedIn: false
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i != index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    render() {
        const { user1, user2, isLoggedIn } = this.state
        if (!this.state.isLoggedIn) {
            return (
                <div className="container">
                    <LoginForm />
                </div>
            )
        }else {
            return (
                <div className="container">
                    <Card />
                    <Card />
                </div>
            )
        }
    }
}

export default App