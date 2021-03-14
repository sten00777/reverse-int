module.exports = function reverse (n) {
    let absolut = Math.abs(n);
  let str = absolut.toString().split('').reverse().join('');
  let res = parseInt(str);
  return res;
}

