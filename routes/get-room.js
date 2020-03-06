const roomService = require('../game/room.js')

const RoomNotFoundError = { error: 'Room Not Found' }

module.exports = (body, path) => {
  let id = body.id
  let isOpen = body.isOpen
  let res

  if(id)
    res = roomService.getRoom(id) || RoomNotFoundError 
  
  if(isOpen)
    res = roomService.getOpenRooms()

  return res
}