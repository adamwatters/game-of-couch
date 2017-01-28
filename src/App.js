import React, { Component } from 'react';
import Game from './game/Game';
import SelectPlayerForm from './SelectPlayerForm';
import positionToCoordinates from './positionToCoordinates';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.game = new Game(this.setState.bind(this))
    this.game.init()
    this.state = {
      game: this.game.forUI()
    }
  }

  render() {
    const {nextUp, seats, players, winner} = this.state.game
    const width = 70;
    const height = 70;
    const seatElements = seats.map((seat, index) => {
      const {x,y} = positionToCoordinates(index)
      const styles = {
        transform: `translate(${x - width / 2}px, ${(y * -1) - height / 2}px)`,
        width: `${width}px`,
        height: `${height}px`,
        color: seat.isOnCouch ? 'white' : 'black',
        backgroundColor: seat.isOnCouch ? 'black' : 'white',
      }
      return (
        <div style={styles} className='seat' key={`seat-${index}`}>{seat.isOnCouch ? 'couch' : 'seat'}</div>
      )
    })
    const playerElements = seats.map((seat, index) => {
      const {x,y} = positionToCoordinates(index)
      const styles = {
        transform: `translate(${x - width / 2}px, ${(y * -1) - height / 2}px)`,
        width: `${width}px`,
        height: `${height}px`,
        lineHeight: `${height}px`,
        backgroundColor: seat.playerTeam,
        borderColor: seat.playerTeam,
      }
      if (seat.playerId === null) {return null}
      return (
        <div style={styles} className='player' key={`seat-${index}`}>{seat.playerId}</div>
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>{winner ? `${winner} team wins!` : 'Game Of Couch'}</h2>
        </div>
        <h2>{nextUp}</h2>
        <div className='game'>
          {seatElements}
          {playerElements}
        </div>
        <div className='controls'>
          <SelectPlayerForm handleSubmit={this.game.handleInput.bind(this.game)}/>
        </div>
      </div>
    )
  }
}

export default App;
