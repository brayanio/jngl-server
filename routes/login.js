const authService = require('../game/auth.js')

module.exports = (body, path) => {
  let profile = authService.login(body)
  return profile
}