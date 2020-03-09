const server = require('./util/server.js')

server('./index.html', {
  getRoom: require('./routes/get-room'),
  clearRooms: require('./routes/clear-rooms'),
  newRoom: require('./routes/new-room'),
  signup: require('./routes/signup'),
  login: require('./routes/login')
})