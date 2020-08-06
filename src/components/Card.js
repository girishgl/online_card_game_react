import React, { Component } from 'react'

const PickedCard = () => {
    return (
        <thead>
            <tr>
                <th>Card</th>
                <th>Picked Time</th>
            </tr>
        </thead>
    )
}

const PickedCardBody = (props) => {
    const cardDetails = props.cardDetails.filter(card => card.UserId == props.user)
    const rows = cardDetails.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.Card}</td>
                <td>{row.PickedTime}</td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Card extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            cards: [20, 18, 22, 19, 23, 31, 26, 11, 26]
        };

        this.state = this.initialState;
    }

    PickCardHandler() {
        const { user, userName, gameDetails } = this.props
        var user2 = {}
        fetch('https://il2mhiio34.execute-api.ap-south-1.amazonaws.com/s1/pick_card', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "gameId": gameDetails.Id.toString(),
                    "user": userName,
                    "card": this.state.cards[this.props.counter].toString(),
                    "pickedTime": new Date()
                }
            )
        })
            .then(response => response.json())
            .then(json => {
                if (json.code == 200) {
                    fetch('https://il2mhiio34.execute-api.ap-south-1.amazonaws.com/s1/game_details?gameId=' + gameDetails.Id)
                        .then(response => response.json())
                        .then(gameData => {
                            this.props.pickCard(gameData.model)
                        })
                }
            })
        if (gameDetails.User1.Id == user) {
            user2 = gameDetails.User2
        } else {
            user2 = gameDetails.User1
        }

        this.props.ToggleTurn(user2.UserName, this.props.counter + 1)
    }

    render() {
        const { userName, turn, user, cardDetails } = this.props
        var isTurn = turn === userName ? false : true
        return (
            <div>
                Player: {userName}
                <table>
                    <PickedCard />
                    <PickedCardBody user={user} cardDetails={cardDetails} />
                </table>
                <button type="button" disabled={isTurn} onClick={() => this.PickCardHandler()}>Pick a Card</button>
            </div>

        )
    }
}

export default Card
