const guid = require('../util/jngl-guid.js')

module.exports = class {

  constructor (options) {
    this.id = guid()
    this.rect = {
      x: options.x || 0,
      y: options.y || 0,
      w: options.w || 100,
      h: options.h || 100
    }
    this.history = []
    this.speed = 20
    this.target = null
    this.action = 'idle'
  }

  command(fn, tick, params) {
    const cmd = JSON.parse(JSON.stringify({fn, params, tick}))
    this.history.push(cmd)
    return cmd
  }

  move(tick, target){
    this.target = target
    this.action = 'move'
    return this.command('move', tick, target)
  }

  sendable(){
    return {
      id: this.id,
      rect: this.rect
    }
  }

  init(){
    return {
      id: this.id,
      rect: this.rect
    }
  }

  tick(curTick){
    switch(this.action){
      case 'move':
        const r = this.rect
        const t = this.target
        const c = {
          x: r.x + r.w / 2,
          y: r.y + r.h / 2
        }
        const s = this.speed
        if(c.x > t.x)
          this.rect.x -= s
        if(c.x < t.x)
          this.rect.x += s
        if(c.y > t.y)
          this.rect.y -= s
        if(c.y < t.y)
          this.rect.y += s
        if(c.x - s <= t.x 
        && c.x + s >= t.x 
        && c.y - s <= t.y 
        && c.y + s >= t.y)
          this.action = 'idle'
        break;
    }
  }

}