// function sum(a, b) {
//   return +a + +b;
// }
//
// try {
//   sum(1, 2);
// } catch (err) {
//   console.log(err);
// }

function sum(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw new TypeError();
  } else {
    return +a + +b;
  }
}

module.exports = sum;
