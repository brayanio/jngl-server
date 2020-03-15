const guid = require('../util/guid.js')

const Map = require('./map.js')

const RoomNotOpen = { error: 'Room no longer open.' }
const RoomFull = { error: 'Room is full.' }

module.exports = class {

  constructor (auth) {
    this.meta = {
      id: guid(),
      players: [auth],
      isOpen: true,
      host: auth
    }

    this.game = {
      map: null
    }
  }

  join (auth) {
    if(!this.meta.isOpen)
      return RoomNotOpen
    if(this.meta.players.length >= 6)
      return RoomFull
    if(!this.meta.players.find(p => p.username === auth.username))
      this.meta.players.push(auth)
    return this.meta
  }

  status () {
    if(this.isOpen)
      return { status: 'Room is open', players: this.meta.players }
    return this.game
  }

  startGame (options) {
    const p = this.meta.players
    this.game.map = new Map([ p[0], p[1], p[2] ], [ p[3], p[4], p[5] ], options)
  }

}