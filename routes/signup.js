const server = require('../util/server.js')
const authService = require('../game/auth.js')
const Auth = require('../models/auth.js')

module.exports = () => server.post('signup', body => {
    const auth = new Auth(body)
    console.log('[signup]', auth.sendable())
    return authService.signup(auth)
  }
)