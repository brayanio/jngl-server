const server = require('./util/server.js')

server('./index.html', {
  getRoom: require('./routes/get-room'),
  newRoom: require('./routes/new-room')
})