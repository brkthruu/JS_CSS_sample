function reduce(func, arr, memo) {
	let len = arr.length;
	let i = 0;
	let accum = memo;

	for(; i < len ; i++) {
		accum = func(accum, arr[i]);
	}

	return accum;
}

let arr = [ 1, 2, 3, 4, 5];

var sum = function (x, y) {
	return x + y;
};

var multiply = function (x, y) {
	return x * y;
};

console.log(reduce(sum, arr, 0));
console.log(reduce(multiply, arr, 1));