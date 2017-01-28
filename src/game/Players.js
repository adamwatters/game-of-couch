import Player from './Player'

class Players {
  constructor() {
    this.players = []
  }

  length() {
    return this.players.length
  }

  getByPosition(c) {
    return this.players[c]
  }

  make(num) {
    const players = [];
    for (let c = 0; c < num; c++) {
      let team = (c % 2 === 0) ? 'red' : 'blue'
      players.push(new Player({team: team, id: c})) 
    }
    this.players = players;
  }

  getById(id) {
    return this.players.filter(player => player.answersTo(id))
  }

}

export default Players;