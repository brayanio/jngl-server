const roomService = require('../game/room.js')

module.exports = (data, req) => {
  let room = roomService.newRoom()

  return room
}