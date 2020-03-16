import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  render () {
    const {name, yearsPro} = this.props.players;
    return (
      <li className="player grid__item" data-grid-small="6" data-grid-large="4">
        <p className="player__name t-list-copy">{name}</p>
        <p className="player__years t-body">Years Pro: {yearsPro}</p>
      </li>
    )
  }

}
Player.propTypes = {
  players: PropTypes.object.isRequired
}

export default Player;