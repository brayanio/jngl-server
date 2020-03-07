const http = require('http')

const parseBody = require('./parseBody.js')
const safeJSON = require('./safeJSON.js')
const indexHTML = require('./indexHTML.js')

const RouteNotFoundError = { error: 'Route Not Found' }

module.exports = (htmlPath, routes, port) => {
  http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200, {'Content-Type': 'text/html'})

    let body = await parseBody(req) || '{}'
    let path = req.url.substr(1)

    let route = routes[req.url.substr(1)]

    if(route)
      res.write(JSON.stringify(route(safeJSON(body), path) || RouteNotFoundError))
    else 
      res.write(indexHTML(htmlPath, routes))

    res.end()
  })
  .listen(port || 4404)
}