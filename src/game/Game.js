import Seats from './Seats';
import Players from './Players';

class Game {
  constructor(setState) {
    this.setState = setState
    this.players = new Players()
    this.seats = new Seats()
  }

  init() {
    this.players.make(9)
    this.seats.makeFor(this.players)
  }

  handleInput(id) {
    const{seats, players} = this
    seats.move(players.getById(id))
    this.setState({game: this.forUI()})
  }

  winner() {
    const playersOnCouch = this.seats.couchPositions().map(p => p.player)
    if (playersOnCouch.every(p => p && p.team === 'red')) return 'red'
    if (playersOnCouch.every(p => p && p.team === 'blue')) return 'blue'
    return null
  }

  nextUp() {
    return this.seats.seatLeftOfEmpty().player.id
  }

  forUI() {
    return {
      seats: this.seats.forUI(),
      nextUp: this.nextUp(),
      winner: this.winner(),
    }
  }
}

export default Game;