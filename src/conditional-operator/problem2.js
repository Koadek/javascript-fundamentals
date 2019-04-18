// Remove the conditional operator from these functions
// USE IF STATEMENTS

function iLike(x) {
  if (x === 'chinese food') return true;
  return false;
}

function iLikeLessPicky(x) {
  if (x === 'chinese food') return true;
  if (x === 'french food') return true;
  return false;
}

module.exports = { iLike, iLikeLessPicky };
