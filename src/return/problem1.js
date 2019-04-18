/*let f = x => (x > 10 ? 'hello' : x > 5 ? 'goodbye' : undefined);*/

function f(x) {
  if (x > 10) return 'hello';
  if (x > 5) return 'goodbye';
}

module.exports = f;
