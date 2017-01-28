class Player {
  constructor({team, id}) {
    this.id = id
    this.team = team
  }

  answersTo(id) {
    return id === this.id
  }
}

export default Player;