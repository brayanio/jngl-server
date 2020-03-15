const server = require('./util/server.js')

require('./routes/clear-rooms.js')()
require('./routes/get-rooms.js')()
require('./routes/join-room.js')()
require('./routes/leave-room.js')()
require('./routes/login.js')()
require('./routes/new-room.js')()
require('./routes/signup.js')()

server.serve(4200)