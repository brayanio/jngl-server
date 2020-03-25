const server = require('../util/server.js')
const gameService = require('../game/game.js')
const Auth = require('../models/auth.js')
const Cmd = require('../models/cmd.js')

module.exports = () => server.post('game-command', body => {
    console.log('[game-command]', body)
    return gameService.command(body.id, new Auth(body.auth), new Cmd(body.cmd))
  } 
)