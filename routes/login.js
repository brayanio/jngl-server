const server = require('../util/server.js')
const authService = require('../game/auth.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('login', body => {
    const auth = new Auth(body)
    console.log('[login]', auth.sendable())  
    return authService.login(auth)
  }
)