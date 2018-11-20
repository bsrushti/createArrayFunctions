const assert = require('assert');
const lib = require('./arrayFunctionsLib.js');
const {
  map,
} = lib;

const square = function(number) { 
  return number * number;
}

const testMap = function() {
  assert.deepEqual(map(square,[]),[]);
  assert.deepEqual(map(square,[1]),[1]);
  assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
  assert.deepEqual(map(square,[-1,-2,-3]),[1,4,9]);
}

testMap();
