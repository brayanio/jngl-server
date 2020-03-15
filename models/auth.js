const sha52 = require('../util/sha52.js')

module.exports = class {

  constructor (body) {
    this.username = body.username 
      ? body.username.substr(0, 1).toUpperCase()
      + body.username.substr(1).toLowerCase()
      : null
    this.password = body.password ? sha52(body.password) : null
    this.email = body.email || null
  }

  sendable(){
    return {
      username: this.username
    }
  }

}