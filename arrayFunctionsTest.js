const assert = require('assert');
const lib = require('./arrayFunctionsLib.js');
const {
  map,
  filter,
  reduce
} = lib;

const square = function(number) { 
  return number * number;
}

const isEven = function(number) {
  return number % 2 === 0;
}

const add = function(number1, number2) { 
  return number1 + number2;
}

const testMap = function() {
  assert.deepEqual(map(square,[]),[]);
  assert.deepEqual(map(square,[1]),[1]);
  assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
  assert.deepEqual(map(square,[-1,-2,-3]),[1,4,9]);
  console.log("map function tested");
}

const testFilter = function() {
  assert.deepEqual(filter(isEven,[]),[]);
  assert.deepEqual(filter(isEven,[1]),[]);
  assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  assert.deepEqual(filter(isEven,[-1,-2,-3,-4,-5,-6]),[-2,-4,-6]);
  console.log("filter function tested");
}

const testReduce = function() { 
  assert.equal(reduce(add, 1, []),1);
  assert.equal(reduce(add, 0, [1]),1);
  assert.equal(reduce(add, 3, [1,2]),6);
  assert.equal(reduce(add, 5, [5,5,5,5]),25);
  assert.equal(reduce(add, -1, [0,2,-2,0]),-1);
  console.log("reduce function tested");
}

testMap();
testFilter();
testReduce();
