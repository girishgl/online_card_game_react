import React, { Component } from 'react'

class StartGame extends Component {
    startTheGame() {
        const { user1, user2 } = this.props
        try {
            fetch('https://il2mhiio34.execute-api.ap-south-1.amazonaws.com/s1/start_game', {
                method: 'post',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { "user1": user1, "user2": user2 }
                )
            })
                .then(response => response.json())
                .then(data => {
                    if (data.code != 200) {
                        var gameId = data.model.gameId
                        fetch('https://il2mhiio34.execute-api.ap-south-1.amazonaws.com/s1/game_details?gameId=' + gameId)
                            .then(response => response.json())
                            .then(gameData => {
                                this.props.startGame(gameData.model.gameDetails)
                            })
                    } else {
                        this.props.startGame(data.model.gameDetails)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { user1, user2 } = this.props
        return (
            <div>
                <div>Logged In as: {user1}</div>
                <div>
                    Player 2: {user2}
                </div>
                <br />
                <div>
                    <button type="button" onClick={() => this.startTheGame()}>Start the Game</button>
                </div>

            </div>
        )
    }
}

export default StartGame
