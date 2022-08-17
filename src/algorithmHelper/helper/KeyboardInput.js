function incrementRow(x) {
  if (x < 21) return x + 1;
  return x;
}

function decrementRow(x) {
  if (x > 0) return x - 1;
  return x;
}

function incrementCol(x) {
  if (x < 39) return x + 1;
  return x;
}

function decrementCol(x) {
  if (x > 0) return x - 1;
  return x;
}

const actionXMap = {
  ArrowLeft: decrementCol,
  ArrowRight: incrementCol,
};

const actionYMap = {
  ArrowDown: incrementRow,
  ArrowUp: decrementRow,
};

const actionXMapD = {
  a: decrementCol,
  d: incrementCol,
};

const actionYMapD = {
  s: incrementRow,
  w: decrementRow,
};

export { actionXMap, actionYMap, actionXMapD, actionYMapD };
