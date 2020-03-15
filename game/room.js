const meta = require('./meta.js')
const Room = require('../models/room.js')

const RoomNotFound = { error: 'Room not found.' }

const create = (auth) => {
  console.log('create', auth)
  if(auth.username){
    let room = new Room(auth)
    meta().rooms.push(room)
    return room.meta
  }
}

const getRoom = id => meta().rooms.find(r => r.meta.id === id)

const getOpen = () => meta().rooms.filter(r => r.meta.isOpen)

const clear = () => meta().rooms = []

const join = (id, auth) => {
  let room = getRoom(id)
  if(room)
    return room.join(auth)
  return RoomNotFound
}

const checkStatus = (id, auth) => {
  let room = getRoom(id)
  if(room)
    return room.status()
  return RoomNotFound
}

const start = (id, auth) => {
  let room = getRoom(id)
  if(room){
    room.startRoom()
    return room.game
  }
  return RoomNotFound
}

const leave = (id, auth) => {
  let room = getRoom(id)
  if(room)
    room.meta.players = room.meta.players.filter(p => p.username !== auth.username)
  return getOpen()
}

module.exports = {
  create,
  getOpen,
  clear,
  join,
  checkStatus,
  start,
  leave
}