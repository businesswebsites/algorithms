//test array for sort algorithms
let arr = [10, 80, 30, 90, 40, 50, 70];
let n = arr.length - 1;

//First Part QUICKSORT ALOGORITHM
//recursion of the quicksort algorithm
const quicksort_function = require("./quicksort");
//quicksort_function.quicksort(arr, 0, n);

//Second Merge Sort
const merge_sort_function = require("./merge_sort");
merge_sort_function.mergeSort(arr, 0, n);

console.log(arr)