const sha52 = require('../util/sha52.js')

module.exports = class {

  constructor (body) {
    this.username = body.username
    this.password = sha52(body.password)
    this.email = body.email
  }

  sendable(){
    return {
      username: this.username
    }
  }

}