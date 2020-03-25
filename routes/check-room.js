const server = require('../util/server.js')
const roomService = require('../game/room.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('checkRoom', body => {
    console.log('[check-rooms]', body)
    return roomService.checkStatus(body.id, new Auth(body.auth))
  } 
)