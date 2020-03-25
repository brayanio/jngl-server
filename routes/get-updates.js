const server = require('../util/server.js')
const gameService = require('../game/game.js')
const Auth = require('../models/auth.js')
const Cmd = require('../models/auth.js')

module.exports = () => server.post('get-updates', body => 
  gameService.getUpdates(body.id, new Auth(body.auth))
)