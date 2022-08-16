const OutOfGrid = (row, col) => {
  if (row < 0 || col < 0) return true;
  if (row > 20 || col > 39) return true;

  return false;
};

export default OutOfGrid;
