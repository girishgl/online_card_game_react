import React, { Component } from 'react'

const PickedCard = () => {
    return (
        <thead>
            <tr>
                <th>Card</th>
                <th>Card Name</th>
                <th>Suit Name</th>
                <th>Color</th>
                <th>Card Value</th>
                <th>Picked Time</th>
            </tr>
        </thead>
    )
}

const PickedCardBody = (props) => {
    var cardMap = [
        {
            "id": 1,
            "cardNo": "A",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 1
        },
        {
            "id": 2,
            "cardNo": "2",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 2
        },
        {
            "id": 3,
            "cardNo": "3",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 3
        },
        {
            "id": 4,
            "cardNo": "4",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 4
        },
        {
            "id": 5,
            "cardNo": "5",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 5
        },
        {
            "id": 6,
            "cardNo": "6",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 6
        },
        {
            "id": 7,
            "cardNo": "7",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 7
        },
        {
            "id": 8,
            "cardNo": "8",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 8
        },
        {
            "id": 9,
            "cardNo": "9",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 9
        },
        {
            "id": 10,
            "cardNo": "10",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 10
        },
        {
            "id": 11,
            "cardNo": "J",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 11
        },
        {
            "id": 12,
            "cardNo": "Q",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 12
        },
        {
            "id": 13,
            "cardNo": "K",
            "suitName": "Spades",
            "color": "Black",
            "cardVal": 13
        },
        {
            "id": 14,
            "cardNo": "A",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 1
        },
        {
            "id": 15,
            "cardNo": "2",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 2
        },
        {
            "id": 16,
            "cardNo": "3",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 3
        },
        {
            "id": 17,
            "cardNo": "4",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 4
        },
        {
            "id": 18,
            "cardNo": "5",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 5
        },
        {
            "id": 19,
            "cardNo": "6",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 6
        },
        {
            "id": 20,
            "cardNo": "7",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 7
        },
        {
            "id": 21,
            "cardNo": "8",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 8
        },
        {
            "id": 22,
            "cardNo": "9",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 9
        },
        {
            "id": 23,
            "cardNo": "10",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 10
        },
        {
            "id": 24,
            "cardNo": "J",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 11
        },
        {
            "id": 25,
            "cardNo": "Q",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 12
        },
        {
            "id": 26,
            "cardNo": "K",
            "suitName": "Clubs",
            "color": "Black",
            "cardVal": 13
        },
        {
            "id": 27,
            "cardNo": "A",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 1
        },
        {
            "id": 28,
            "cardNo": "2",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 2
        },
        {
            "id": 29,
            "cardNo": "3",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 3
        },
        {
            "id": 30,
            "cardNo": "4",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 4
        },
        {
            "id": 31,
            "cardNo": "5",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 5
        },
        {
            "id": 32,
            "cardNo": "6",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 6
        },
        {
            "id": 33,
            "cardNo": "7",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 7
        },
        {
            "id": 34,
            "cardNo": "8",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 8
        },
        {
            "id": 35,
            "cardNo": "9",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 9
        },
        {
            "id": 36,
            "cardNo": "10",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 10
        },
        {
            "id": 37,
            "cardNo": "J",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 11
        },
        {
            "id": 38,
            "cardNo": "Q",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 12
        },
        {
            "id": 39,
            "cardNo": "K",
            "suitName": "Hearts",
            "color": "Red",
            "cardVal": 13
        },
        {
            "id": 40,
            "cardNo": "A",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 1
        },
        {
            "id": 41,
            "cardNo": "2",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 2
        },
        {
            "id": 42,
            "cardNo": "3",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 3
        },
        {
            "id": 43,
            "cardNo": "4",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 4
        },
        {
            "id": 44,
            "cardNo": "5",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 5
        },
        {
            "id": 45,
            "cardNo": "6",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 6
        },
        {
            "id": 46,
            "cardNo": "7",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 7
        },
        {
            "id": 47,
            "cardNo": "8",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 8
        },
        {
            "id": 48,
            "cardNo": "9",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 9
        },
        {
            "id": 49,
            "cardNo": "10",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 10
        },
        {
            "id": 50,
            "cardNo": "J",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 11
        },
        {
            "id": 51,
            "cardNo": "Q",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 12
        },
        {
            "id": 52,
            "cardNo": "K",
            "suitName": "Diamonds",
            "color": "Red",
            "cardVal": 13
        }
    ]

    const cardDetails = props.cardDetails.filter(card => card.UserId == props.user)
    const rows = cardDetails.map((row, index) => {
        const cardMapDtl = cardMap.filter(crdMp => crdMp.id == row.Card)
        return (
            <tr key={index}>
                <td>{row.Card}</td>
                <td>{cardMapDtl[0].cardNo}</td>
                <td>{cardMapDtl[0].suitName}</td>
                <td>{cardMapDtl[0].color}</td>
                <td>{cardMapDtl[0].cardVal}</td>
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
