const assert = require('assert');
const lib = require('./arrayFunctionsLib.js');
const {
 map,
} = lib;

const square = function(number) { 
  return number * number;
}

const testMap = function() {
 assert.deepEqual(map([],square),[]);
 assert.deepEqual(map([1],square),[1]);
 assert.deepEqual(map([1,2,3],square),[1,4,9]);
 assert.deepEqual(map([-1,-2,-3],square),[1,4,9]);
}

testMap();
