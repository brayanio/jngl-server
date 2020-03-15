const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('clearRooms', body => {
    console.log('[clear-rooms]', body)
    return roomService.clear(new Auth(body))
  } 
)