function Find(target, array)
{
    // write code here
  if (array.length === 0 && array[0].length === 0) {
    return false;
  }
  let row = array.length - 1,
      col = 0;
  while (row >= 0 && col <= array[0].length - 1) {
    if (array[row][col] > target) {
      row--;
    } else if (array[row][col] < target) {
      col++;
    } else return true;
  }
  return false;
}