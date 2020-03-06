const fs = require('fs')

module.exports = (htmlPath, routes) => {
  let index = fs.readFileSync(htmlPath, 'utf8')
    .split('%')
    .join(JSON.stringify(Object.keys(routes)))
  return index
}