const meta = require('./meta.js')
const Room = require('../models/room.js')

const newRoom = body => {
  let room = new Room(body)
  if(body && room.meta.host)
    meta().rooms.push(room)
  return room
}

const getRoom = id => meta().rooms.find(r => r.meta.id === id)

const getOpenRooms = () => meta().rooms.filter(r => r.meta.isOpen)

const clearRooms = () => meta().rooms = []

module.exports = {newRoom, getRoom, getOpenRooms, clearRooms}