// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	let n1 = m - l + 1;
	let n2 = r - m;

	// Create temp arrays
	let left_array = new Array(n1);
	let right_array = new Array(n2);

	// Copy data to temp arrays left_array[] and right_array[]
	for (let i = 0; i < n1; i++)
		left_array[i] = arr[l + i];
	for (let j = 0; j < n2; j++)
		right_array[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	let i = 0;

	// Initial index of second subarray
	let j = 0;

	// Initial index of merged subarray
	let k = l;

	while (i < n1 && j < n2) {
		if (left_array[i] <= right_array[j]) {
			arr[k] = left_array[i];
			i++;
		}
		else {
			arr[k] = right_array[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// left_array[], if there are any
	while (i < n1) {
		arr[k] = left_array[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// right_array[], if there are any
	while (j < n2) {
		arr[k] = right_array[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	let m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}
module.exports = { mergeSort }