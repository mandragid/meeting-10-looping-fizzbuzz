function fizzBuzz(param) {
	let result = "";
	for (let i = 1; i <= param; i++) {
		console.log(i);

		if (i % 15 == 0) {
			result = "Fizz Buzz";
		} else if (i % 5 == 0) {
			result = "Buzz";
		} else if (i % 3 == 0) {
			result = "Fizz";
		} else {
			result = "";
		}
	}
	return result;
}

number = fizzBuzz(20);
console.log(number);
