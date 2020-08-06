import React, { Component } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import StartGame from './components/StartGame.js'
import Card from './components/Card'


class App extends Component {
    state = {
        user1: '',
        user2: 'system',
        isLoggedIn: false,
        isGameOn: false,
        isGameOver: false,
        turn: '',
        counter: 0,
        gameDetails: {},
        cardDetails: [],
    }

    handleLogging = user => {
        this.setState({ user1: user, isLoggedIn: true, turn: user })
    }

    startGame = (game) => {
        this.setState({ gameDetails: game, isGameOn: true })
        alert('Game is on')
    }

    pickCard = (game) => {
        this.setState({
            gameDetails: game.gameDetails,
            cardDetails: game.cardDetails,
        })
        if (game.gameDetails.Status == 0) {
            this.setState({
                isGameOver: true
            })
        }
    }

    ToggleTurn = (user, counter) => {
        this.setState({ turn: user, counter: counter })
    }

    render() {
        const { isLoggedIn, isGameOn, gameDetails, cardDetails, turn, isGameOver, counter } = this.state
        if (!isLoggedIn) {
            return (
                <div className="container">
                    <Header />
                    <LoginForm handleLogging={this.handleLogging} />
                </div>
            )
        } else if (!isGameOn) {
            return (
                <div className="container">
                    <Header />
                    <StartGame user1={this.state.user1} user2={this.state.user2} startGame={this.startGame} />
                </div>
            )
        } else if (isGameOver) {
            return (
                <div className="container">
                    <Header />
                    <div>
                        Game Over <br />
                        Winner: {gameDetails.Result == gameDetails.User1.Id ? gameDetails.User1.UserName : gameDetails.User2.UserName}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <Header />
                    <Card user={gameDetails.User1.Id} userName={gameDetails.User1.UserName} turn={turn} gameDetails={gameDetails} cardDetails={cardDetails} pickCard={this.pickCard} ToggleTurn={this.ToggleTurn} counter={counter} />
                    <Card user={gameDetails.User2.Id} userName={gameDetails.User2.UserName} turn={turn} gameDetails={gameDetails} cardDetails={cardDetails} pickCard={this.pickCard} ToggleTurn={this.ToggleTurn} counter={counter} />
                </div>
            )
        }
    }
}

export default App