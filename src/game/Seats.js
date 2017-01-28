import Seat from './Seat'

class Seats {
  constructor() {
    this.seats = []
  }

  makeFor(players) {
    const seats = []
    const numSeats = players.length() + 1
    for (let c = 0; c < numSeats; c++) {
      let isOnCouch = (numSeats - c < 5)
      seats.push(new Seat({
        isOnCouch: isOnCouch,
        player: players.getByPosition(c) || null,
      })) 
    }
    this.seats = seats;
  }

  couchPositions() {
    return this.seats.filter(s => s.isOnCouch)
  }

  emptySeat() {
    return this.seats.filter(seat => seat.isEmpty())[0]
  }

  seatLeftOfEmpty() {
    const emptyPosition = this.seats.indexOf(this.emptySeat())
    return emptyPosition !== 0 ? this.seats[emptyPosition - 1] : this.seats[this.seats.length - 1]
  }

  move(player) {
    const currentSeat = this.seats.filter(seat => seat.player === player)[0]
    this.emptySeat().takePlayerFrom(currentSeat)
  }

  forUI() {
    return this.seats.map((seat) => {
      return {
        playerId: seat.player ? seat.player.id : null,
        playerTeam: seat.player ? seat.player.team : null,
        isOnCouch: seat.isOnCouch,
      }
    })
  }

}

export default Seats;