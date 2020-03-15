const Player = require('./player.js')

module.exports = class {

  constructor(teamA, teamB, options) {
    this.width = options.width || 1200
    this.height = options.height || 800

    this.spawnPoints = options.spawnPoints || []
    this.teamA = teamA ? teamA.map(o => new Player(o)) : []
    this.teamB = teamB ? teamB.map(o => new Player(o)) : []
    this.creepCamps = options.creepCamps || []
    this.changes = []
  }

}