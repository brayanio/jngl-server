const Hero = require('./hero.js')

module.exports = class {

  constructor (auth, isTeamA) {
    this.username = auth.username
    this.hero = new Hero()
    this.isTeamA = isTeamA
    this.team = {}
    this.team[this.hero.id] = this.hero
  }

  sendable (me, ally) {
    let team = {}
    Object.keys(this.team).forEach(key => team[key] = this.team[key].sendable())
    return {
      username: this.username,
      team
    }
  }

  init (me, ally, ids) {
    let team = {}
    if(ids)
      ids.forEach(id => {
        if(this.team[id])
          team[id] = this.team[id].init()
      })
    else
      Object.keys(this.team).forEach(id => team[id] = this.team[id].init())
    return {
      username: this.username,
      team,
      isMe: me,
      isAlly: ally
    }
  }

  tick (currentTick) {
    Object.values(this.team).forEach(unit => unit.tick(currentTick))
  }

}