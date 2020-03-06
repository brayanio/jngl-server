const meta = require('./meta.js')
const Room = require('../models/room.js')

const newRoom = () => {
  let room = new Room()
  meta.rooms.push(room)
  return room
}

const getRoom = id => meta.rooms.find(r => r.id === id)

module.exports = {newRoom, getRoom}