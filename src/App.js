import React, { Component } from 'react';
import Game from './game/Game';
import './App.css';

const toRadians = (angle) => {
  return angle * (Math.PI / 180);
}

const positionToCoordinates = (position) => {
  const r = 220
  const angle = (position + 1) * 36
  let angleAsRadians
  if (angle <= 90) {
    angleAsRadians = toRadians(angle)
    return {
      x: Math.cos(angleAsRadians) * r,
      y: Math.sin(angleAsRadians) * r,
    }
  }
  if (angle <= 180) {
    angleAsRadians = toRadians(180 - angle)
    return {
      x: -1 * Math.cos(angleAsRadians) * r,
      y: Math.sin(angleAsRadians) * r,
    }
  }
  if (angle <= 270) {
    angleAsRadians = toRadians(angle - 180)
    return {
      x: -1 * Math.cos(angleAsRadians) * r,
      y: -1 * Math.sin(angleAsRadians) * r,
    }
  }
  angleAsRadians = toRadians(360 - angle)
  return {
    x: Math.cos(angleAsRadians) * r,
    y: -1 * Math.sin(angleAsRadians) * r,
  }
}

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
    console.log(this.state.game)
    const {nextUp, seats, players} = this.state.game
    const width = 70;
    const height = 70;
    const seatElements = seats.map((seat, index) => {
      const {x,y} = positionToCoordinates(index)
      const styles = {
        transform: `translate(${x - width / 2}px, ${(y * -1) - height / 2}px)`,
        width: `${width}px`,
        height: `${height}px`
      }
      return (
        <div style={styles} className='seat' key={`seat-${index}`}>seat</div>
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
          <h2>Game Of Couch</h2>
        </div>
        <h2>{nextUp}</h2>
        <div className='game'>
          {seatElements}
          {playerElements}
        </div>
        <div className='controls'>
          <form onSubmit={(event) => {
              event.preventDefault();
              this.game.handleInput()
            }} >
            <input name='name' type="text"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
