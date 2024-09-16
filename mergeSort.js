const merge = (array1, array2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (j < array1.length && i < array2.length) {
    if (array1[j] <= array2[i]) {
      result.push(array1[j]);
      j++;
    } else {
      result.push(array2[i]);
      i++;
    }
  }

  while (j < array1.length) {
    result.push(array1[j]);
    j++;
  }

  while (i < array2.length) {
    result.push(array2[i]);
    i++;
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length === 1) return array;
  const firstHalf = mergeSort(array.slice(0, array.length / 2));
  const secondHalf = mergeSort(array.slice(array.length / 2));
  return merge(firstHalf, secondHalf);
};
