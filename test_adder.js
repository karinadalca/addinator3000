const add = require('./adder.js');

class TestSuite {
	runTests() {
		this.testAddPositiveNumbers();
		this.testAddNegativeNumbers();
		this.testAddNegativeAndPositiveNumbers();
	}

	assertEquals(a, b){
		return a === b;
	}

	testAddPositiveNumbers() {
		const result = this.assertEquals(add(5,7), 12);
		console.log(result, 'testAddPositiveNumbers');
	}

	testAddNegativeNumbers() {
		const  result = this.assertEquals(add(-5,-7), -12);
		console.log(result, 'testAddNegativeNumbers');
	}

	testAddNegativeAndPositiveNumbers() {
		const result = this.assertEquals(add(5,-7), -2);
		console.log(result, 'testAddNegativeAndPositiveNumbers');
	}
}

const testSuite = new TestSuite();
testSuite.runTests();