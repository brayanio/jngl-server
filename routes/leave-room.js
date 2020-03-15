const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('leaveRoom', body => {
    console.log('[leave-room]')
    return roomService.leave(body.id, new Auth(body.auth))
  }
)