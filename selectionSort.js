function selectionSort(arr){
    let i = 0;
    let j = i + 1;
    let temp
    while(i < arr.length-1){
        temp = i;
        for(j = i+1; j < arr.length; j++)
        if(arr[j] < arr[temp])
            temp = j;
            
        swap(arr, temp, i);
        i++;
    }
}

function swap(arr, current, next){
    let temp = arr[current];
    arr[current] = arr[next];
    arr[next] = temp;
}

module.exports = {selectionSort}