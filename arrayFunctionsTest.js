const assert = require('assert');
const lib = require('./arrayFunctionsLib.js');
const {
  map,
  filter
} = lib;

const square = function(number) { 
  return number * number;
}

const isEven = function(number) {
  return number % 2 === 0;
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

testMap();
testFilter();
