function deepSearch(arr, n, i){
    let root = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if(leftChild < n && arr[root] < arr[leftChild]){
        root = leftChild;
    }
    if(rightChild < n && arr[root] <arr[rightChild]){
        root = rightChild;
    }
    if(root !=  i){
        swap(arr, i, root);
        deepSearch(arr, n, root);
    }
}

function heapSort(arr){
    let n = arr.length;

    for(let i = Math.floor(n/2) - 1; i>-1; i--){
        deepSearch(arr, n, i);
    }

    for(let i = n-1; i> 0; i--){
        swap(arr, 0, i);
        deepSearch(arr, i, 0);
    }
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = {heapSort}