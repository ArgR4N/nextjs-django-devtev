export function disarmPostsArray(array, n) {
  let disarmedArray = [...Array(n).keys()].map((_) => []);
  let newArray = Object.assign({}, disarmedArray);

  let ref = 0;
  let cont = 0;
  array.forEach((value, index) => {
    if (cont === n) {
      cont = 0;
      ref++;
    }

    if (index >= n) {
      newArray[`${index - n * ref}`].push(value);
    } else newArray[`${index}`].push(value);
    cont++;
  });
  for(let pos in newArray) {
    disarmedArray[pos] = newArray[pos];
  }
  console.log(disarmedArray);
  return disarmedArray;
}
