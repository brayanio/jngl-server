const guid = require('../util/jngl-guid.js')

module.exports = class {

  constructor (options) {
    this.id = guid()
    this.units = []
    this.rect = {
      x: options.x || 0,
      y: options.y || 0,
      w: options.w || 100,
      h: options.h || 100
    }
    this.changes = []
  }

}