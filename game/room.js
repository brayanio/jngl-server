const meta = require('./meta.js')
const Room = require('../models/room.js')

const newRoom = () => {
  let room = new Room()
  meta().rooms.push(room)
  return room
}

const getRoom = id => meta().rooms.find(r => r.meta.id === id)

const getOpenRooms = () => meta().rooms.filter(r => r.meta.isOpen)

module.exports = {newRoom, getRoom, getOpenRooms}