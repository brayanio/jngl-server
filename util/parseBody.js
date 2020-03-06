module.exports = async req => {
  let body = await (new Promise((res, rej) => {
    let body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => res(body))
  }))
  return body
}