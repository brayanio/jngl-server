const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('newRoom', body => {
    console.log('[new-room]')
    return roomService.create(new Auth(body))
  }
)