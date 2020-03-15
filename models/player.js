const Hero = require('./hero.js')

module.exports = class {

  constructor (username) {
    this.username = username
    this.hero = new Hero()
    this.units = [hero]
  }



}