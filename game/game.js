const meta = require('./meta.js')

const getRoom = id => meta().rooms.find(r => r.meta.id === id)

const command = (id, auth, cmd) => {
  const room = getRoom(id)
  room.command(auth, cmd)
  return {}
}

const getUpdates = (id, auth) => {
  const room = getRoom(id)
  return room.sendable(auth)
}

const init = (id, auth, ids) => {
  const room = getRoom(id)
  return room.init(auth, ids)
}

module.exports = {
  command,
  getUpdates,
  init
}