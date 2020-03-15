const meta = require('./meta.js')
const Auth = require('../models/auth.js')

const UsernameTakenError = { error: 'Username already in use.' }
const EmailTakenError = { error: 'Email already in use.' }
const BadLoginError = { error: 'Incorrect credentials.' }
const BadSignupError = { error: 'Requires Username, Password, and Email.' }

const signup = auth => {
  if(auth.username && auth.password && auth.email){
    let username = meta().profiles.find(profile => profile.username === auth.username)
    if(username)
      return UsernameTakenError
    let email = meta().profiles.find(profile => profile.email === auth.email)
    if(email)
      return EmailTakenError
    meta().profiles.push(auth)
    return auth.sendable()
  }
  return BadSignupError
}

const match = (a, b, key) => a[key] === b[key]
const login = auth => {
  let profile = meta().profiles.find(profile => 
    match(profile, auth || {}, 'username') && 
    match(profile, auth || {}, 'password'))
  if(profile)
    return profile.sendable()
  return BadLoginError
}

module.exports = { signup, login }