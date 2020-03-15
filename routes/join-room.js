const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('joinRoom', body => {
    console.log('[join-room]')
    return roomService.join(body.id, new Auth(body.auth))
  }
)