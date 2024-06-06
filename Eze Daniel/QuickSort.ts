function Quicksort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }
  const Value = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < Value);
  const middle = arr.filter((x) => x === Value);
  const right = arr.filter((x) => x > Value);
  return [...Quicksort(left), ...middle, ...Quicksort(right)];
}
const UnsortedArrays = [23, 34, 12, 9, 17, 55];
const SortedArrays = Quicksort(UnsortedArrays);
console.log(SortedArrays);
