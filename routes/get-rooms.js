const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('getRooms', body => {
    console.log('[get-rooms]', body)
    return roomService.getOpen(new Auth(body))
  }
)