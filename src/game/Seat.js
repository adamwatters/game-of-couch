class Seat {
  constructor({isOnCouch, player}) {
    this.isOnCouch = isOnCouch
    this.player = player
  }

  isEmpty() {
    return this.player === null
  }

  takePlayerFrom(otherSeat) {
    this.player = otherSeat.player
    otherSeat.player = null
  }
}

export default Seat;
