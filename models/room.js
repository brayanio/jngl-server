const guid = require('../util/guid.js')

const Map = require('./map.js')

const RoomNotOpen = { error: 'Room no longer open.' }
const RoomFull = { error: 'Room is full.' }


const TICKS_PER_SECOND = 6

module.exports = class {

  constructor (auth) {
    this.meta = {
      id: guid(),
      players: [auth.sendable()],
      isOpen: true,
      host: auth.sendable(),
      start: null
    }

    this.game = {
      tick: 0,
      map: null,
      changes: []
    }
  }

  join (auth) {
    if(!this.meta.isOpen)
      return RoomNotOpen
    if(this.meta.players.length >= 6)
      return RoomFull
    if(!this.meta.players.find(p => p.username === auth.username))
      this.meta.players.push(auth.sendable())
    return this.meta
  }

  status (auth) {
    if(this.isOpen)
      return { status: 'Room is open', players: this.meta.players }
    return this.init(auth)
  }

  sendable (auth) {
    return {
      id: this.meta.id,
      map: this.game.map.sendable(auth.username)
    }
  }

  init (auth, ids) {
    return {
      id: this.meta.id,
      map: this.game.map.init(auth.username, ids)
    }
  }

  startGame (options) {
    const p = this.meta.players
    this.game.map = new Map([ p[0], p[1], p[2] ], [ p[3], p[4], p[5] ], options || {})
    this.meta.start = new Date()
  }

  cmd_getPlayer (username) {return this.game.map.getPlayer(username)}
  cmd_getUnit (username, id) {return this.game.map.getUnit(username, id)}

  command (auth, cmd) {
    if(cmd.type = 'sprite'){
      const units = cmd.selectedSprites.map(id => this.cmd_getUnit(auth.username, id))
      const fn = cmd.fn
      const params = cmd.params
      const tick = this.getCurrent()
      if(units && fn && params && tick)
        units.forEach(u => this.game.changes.push(u[fn](tick, params)))
    }
  }

  getCurrent () {
    return Math.floor((new Date() - this.meta.start) / (1000 / TICKS_PER_SECOND))
  }

  tick () {
    const lastTick = this.game.tick
    const curTick = this.getCurrent()
    const dif = curTick - lastTick
    if (dif > 0) {
      let i = lastTick
      while(i < curTick){
        i++
        this.game.map.tick(i)
      }
      this.game.tick = curTick
    }
  }

  stop () {
    if(this.meta.interval !== null){
      clearInterval(this.meta.interval)
      this.meta.interval = null
    }
  }

}