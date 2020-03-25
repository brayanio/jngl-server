let meta = {
  rooms: [],
  active: [],
  profiles: []
}

const TICKS_PER_SECOND = 6

setInterval(() => {
  meta.active.forEach(room => {
    room.tick()
  })
}, 1000 / TICKS_PER_SECOND)

module.exports = () => meta