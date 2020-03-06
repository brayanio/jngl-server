const roomService = require('../game/room.js')

module.exports = (data, req) => {
  let id = req.body.id
  let room = roomService.getRoom(id) || {error: 'Room Not Found'}

  return room
}