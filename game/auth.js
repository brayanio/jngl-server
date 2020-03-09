const meta = require('./meta.js')
const Auth = require('../models/auth.js')

const UsernameTakenError = { error: 'Username already in use.' }
const EmailTakenError = { error: 'Email already in use.' }
const BadLoginError = { error: 'Incorrect credentials.' }

const signup = body => {
  if(body.username && body.password && body.email){
    let auth = new Auth(body)
    let username = meta().profiles.find(profile => profile.username === auth.username)
    if(username)
      return UsernameTakenError
    let email = meta().profiles.find(profile => profile.email === auth.email)
    if(email)
      return EmailTakenError
    console.log('signup', auth.sendable())
    meta().profiles.push(auth)
    return auth.sendable()
  }
  return BadLoginError
}

const match = (a, b, key) => a[key] === b[key]
const login = body => {
  let auth = new Auth(body)
  console.log('login', auth.sendable())
  let profile = meta().profiles.find(profile => match(profile, auth, 'username') && match(profile, auth, 'password'))
  if(profile)
    return profile.sendable()
  return BadLoginError
}

module.exports = { signup, login }