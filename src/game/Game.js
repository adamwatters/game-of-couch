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
    return this.forUI()
  }

  nextUp() {
    return this.seats.seatLeftOfEmpty().player.id
  }

  forUI() {
    return {
      seats: this.seats.forUI(),
      nextUp: this.nextUp(),
    }
  }
}

export default Game;