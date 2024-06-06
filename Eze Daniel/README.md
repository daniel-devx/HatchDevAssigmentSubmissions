# Quicksort Algorithm in Typescript

This document provides an overview of the Quicksort algorithm implemented in Typescript. Quicksort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

## Quicksort Function

The `Quicksort` function takes an array of numbers as input and returns a sorted array.

```javascript
function Quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return [...Quicksort(left), ...middle, ...Quicksort(right)];
}
```
