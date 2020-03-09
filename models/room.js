const guid = require('../util/guid.js')

module.exports = class {

  constructor(body) {
    console.log(body)
    this.meta = {
      id: guid(),
      players: [body.auth],
      isOpen: true,
      host: body.auth
    }

    this.game = {
      map: null
    }
  }

}