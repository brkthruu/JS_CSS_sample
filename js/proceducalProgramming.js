function sum(arr) {
	let len = arr.length;
	let i = 0, sum = 0;

	for (; i < len; i++) {
		sum += arr[i];
	}

	return sum;
}

function multiply(arr) {
	let len = arr.length;
	let i = 0, result = 1;

	for (; i < len; i++) {
		result *= arr[i];
	}
	return result;
}

let arr = [ 1, 2, 3, 4, 5 ];

console.log(sum(arr));
console.log(multiply(arr));

