module.exports = r =>
  'xxxx-jngl-4xxx-yxxx'.replace(/[xy]/g, c => 
    (r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8))
    .toString(16))