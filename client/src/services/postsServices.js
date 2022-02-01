export function disarmPostsArray(array, n) {
  let disarmedArray = [...Array(n).keys()].map((_) => []);

  let ref = 0;
  let cont = 0;
  array.forEach((value, index) => {
    if (cont === n) {
      cont = 0;
      ref++;
    }
    if (index < n) disarmedArray[`${index}`].push(value);
    if (index >= n) disarmedArray[`${index - n * ref}`].push(value);
    cont++;
  });
  return disarmedArray;
}

export function getColsNumber(width){ return Math.floor(width / 252) }
