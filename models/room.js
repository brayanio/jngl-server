const guid = require('../util/guid.js')

module.exports = class {

  constructor() {
    this.meta = {
      id: guid(),
      players: [],
      isOpen: true,
      host: null
    }

    this.game = {
      map: null
    }
  }

}