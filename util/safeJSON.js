module.exports = (json, parsed) => {
  try { parsed = JSON.parse(json) } 
  catch (e) {}
  return parsed
}