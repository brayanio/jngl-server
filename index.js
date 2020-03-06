const http = require('http')
const fs = require('fs')

let routes = {
  getRoom: require('./routes/get-room'),
  newRoom: require('./routes/new-room')
}

let meta = {
  rooms: []
}

const parseReqBody = async req => {
  let body = await (new Promise((res, rej) => {
    let body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => res(body))
  }))
  return body
}

const safeJSON = (json, parsed) => {
  try { parsed = JSON.parse(json)} 
  catch (e) {}
  return parsed
}

http.createServer(async (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  let body = await parseReqBody(req)
  let path = req.url.substr(1)
  let route = routes[req.url.substr(1)]
  if(route)
    res.write(JSON.stringify(route(meta, {body, path}) || {error: 'Route Not Found'}))
  else{
    let index = fs.readFileSync('./index.html', 'utf8')
      .split('%')
      .join(JSON.stringify(Object.keys(routes)))
    res.write(index)
  }
  res.end()
})
.listen(4404)