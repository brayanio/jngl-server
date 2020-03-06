const roomService = require('../game/room.js')

module.exports = (body, path) => {
  let id = body.id
  let room = roomService.getRoom(id) || {error: 'Room Not Found'}

  return room
}