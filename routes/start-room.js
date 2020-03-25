const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('startRoom', body => {
    console.log('[start-room]', body)
    return roomService.start(body.id, new Auth(body.auth))
  } 
)