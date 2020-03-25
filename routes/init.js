const server = require('../util/server.js')
const gameService = require('../game/game.js')
const Auth = require('../models/auth.js')
const Cmd = require('../models/auth.js')

module.exports = () => server.post('init', body => 
  gameService.init(body.id, new Auth(body.auth), body.ids)
)