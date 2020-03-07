const roomService = require('../game/room.js')

module.exports = (body, path) => {
  let room = roomService.newRoom()

  console.log('Route: newRoom')

  return room
}