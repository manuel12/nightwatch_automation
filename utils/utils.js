const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

function timestamp(joinChar) {
  let joinWith = joinChar || ' '; 
  let joinTimeWith = joinChar || ':';
  let d = new Date();
  let time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(joinTimeWith);
  return [d.getDate(), months[d.getMonth()], time].join(joinWith);
}

function generateNumberBetween(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  timestamp,
  generateNumberBetween
}
