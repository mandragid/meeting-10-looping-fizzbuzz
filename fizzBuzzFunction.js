function fizzBuzz(param) {
	let result;
	for (let i = 1; i <= param; i++) {
		console.log(i);

		if (i % 15 == 0) {
			console.log("Fizz Buzz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else {
			result = i;
		}
	}
	return result;
}
fizz = fizzBuzz(14);
console.log(fizz);
