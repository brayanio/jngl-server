module.exports = class {

  constructor (cmd) {
    this.type = cmd.type || ''
    this.selectedSprites = cmd.selectedSprites || []
    this.fn = cmd.fn || ''
    this.params = cmd.params || ''
  }

}