import React, { Component } from 'react';
import Player from './player';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      players: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/27", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "6462aa3ccemsh47629e37f2aa647p1116ebjsnf21ea82f9921"
      }
    })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.api.players.map(players => (
      {
        name: `${players.firstName} ${players.lastName}`,
        yearsPro: `${players.yearsPro}`,
      }
    )))
    .then(players => this.setState({
      players,
      isLoading: false
    }))
    .catch(error => console.log('Parsing failed', error))
  }

  render() {
    const {players, isLoading, index} = this.state

    return (
      <ul className="players grid">
        {
          !isLoading && players.length > 0 ? players.map(players => {
            return (
              <Player key={index} players={players} />
            )
          }) : null
        }
        <p>{isLoading ? "Loading True" : "Loading False"}</p>
      </ul>
    )
  }
}

export default Players;