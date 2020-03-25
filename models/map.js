const Player = require('./player.js')

module.exports = class {

  constructor(teamA, teamB, options) {
    this.width = options.width || 1200
    this.height = options.height || 800

    this.spawnPoints = options.spawnPoints || []
    this.teamA = teamA ? teamA.filter(e => e).map(o => new Player(o, true)) : []
    this.teamB = teamB ? teamB.filter(e => e).map(o => new Player(o, false)) : []
    this.creepCamps = options.creepCamps || []
    this.changes = []

    this.players = {}
    this.teamA.forEach(e => this.players[e.username] = e)
    this.teamB.forEach(e => this.players[e.username] = e)
  }

  getPlayer (username) {
    return this.players[username]
  }

  getUnit (username, id) {
    return this.getPlayer(username).team[id]
  }

  sendable (username) {
    const player = this.players[username]
    let players = {}
    Object.keys(this.players).forEach(key => {
      const me = key === username
      const ally = this.players[key].isTeamA === player.isTeamA
      players[key] = this.players[key].sendable(me, ally)
    })
    return {
      players
    }
  }

  init (username, ids) {
    const player = this.players[username]
    let players = {}
    Object.keys(this.players).forEach(key => {
      const me = key === username
      const ally = this.players[key].isTeamA === player.isTeamA
      players[key] = this.players[key].init(me, ally, ids)
    })
    return {
      size: {w: this.width, h: this.height},
      players
    }
  }

  tick (currentTick) {
    Object.values(this.players).forEach(player => player.tick(currentTick))
  }

}