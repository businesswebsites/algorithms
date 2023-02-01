//test array for sort algorithms
let arr = [10, 80, 30, 90, 40, 50, 70];

//First Part QUICKSORT ALOGORITHM
//recursion of the quicksort algorithm
function quicksort(arr, low, high){
    if(low < high){
        let pivot = quicksort_algo(arr, low, high);
        quicksort(arr, low, pivot-1);
        quicksort(arr, pivot+1, high);
    }
}
//quicksort algo
function quicksort_algo(arr, low, high){
    let pivot = arr[high];
    let i = (low - 1);
    for(let j = low; j <= high-1; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }
        swap(arr, i+1, high);
        return (i+1);
}

//swap elements
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let n = arr.length - 1
quicksort(arr, 0, n-1);
console.log(arr);

//