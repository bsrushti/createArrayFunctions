const assert = require('assert');
const lib = require('../src/arrayFunctionsLib.js');
const {
  map,
  filter,
  reduce
} = lib;

const square = function(number) { 
  return number * number;
}

const increment = function(incrementBy) { 
  return function(number) {
    return number + incrementBy;
  }
}

const isEven = function(number) {
  return number % 2 === 0;
}

const add = function(number1, number2) { 
  return number1 + number2;
}

const returnTrue = function() { 
  return true;
}

const returnFalse = function() { 
  return false;
}

const multiplication = function(firstNumber, secondNumber) { 
  return firstNumber * secondNumber;
}

describe('Map',function(){

  incrementBy = increment(1);
  it('should return empty array, when empty array is passed',function() {
    assert.deepEqual(map(square,[]),[]);
    assert.deepEqual(map(incrementBy,[]),[]);
  });

  it('should return array of single element, when array of single element is passed',function() {
    assert.deepEqual(map(square,[0]),[0]);
    assert.deepEqual(map(incrementBy,[0]),[1]);
    assert.deepEqual(map(square,[1]),[1]);
    assert.deepEqual(map(incrementBy,[1]),[2]);
  });

  it('should preserve the length of array, when array of multiple elements is passed',function() {
    assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
    assert.deepEqual(map(square,[-1,-2,-3]),[1,4,9]);
    assert.deepEqual(map(incrementBy,[1,2,3]),[2,3,4]);
    assert.deepEqual(map(incrementBy,[-1,-2,-3]),[0,-1,-2]);
  });

});

describe('Filter',function(){

  it('should return empty array, when empty array is passed',function() {
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(returnTrue,[]),[]);
  });

  it('should return array of single element,when only one element is true',function() {
    assert.deepEqual(filter(isEven,[2,1,3]),[2]);
    assert.deepEqual(filter(returnTrue,[2]),[2]);
  });

  it('should return array of multiple elements, when more than one element is true',function(){
    assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
    assert.deepEqual(filter(isEven,[-1,-2,-3,-4,-5,-6]),[-2,-4,-6]);
    assert.deepEqual(filter(returnTrue,[1,2,3,4,5,6]),[1,2,3,4,5,6]);
    assert.deepEqual(filter(returnTrue,[-1,-2,-3,-4,-5,-6]),[-1,-2,-3,-4,-5,-6]);
    assert.deepEqual(filter(returnFalse,[-1,-2,-3,-4,-5,-6]),[]);
  });

});

describe('Reduce',function(){

  it('should return value of accumulator, when empty array is passed',function() { 
    assert.equal(reduce(add, 1, []),1);
    assert.equal(reduce(multiplication, 1, []),1);
  });

  it('should return result, when one or more elements in array is passed',function() { 
    assert.equal(reduce(add, 0, [1]),1);
    assert.equal(reduce(add, 3, [1,2]),6);
    assert.equal(reduce(add, 5, [5,5,5,5]),25);
    assert.equal(reduce(add, -1, [-1,-2,-2,-3]),-9);
    assert.equal(reduce(multiplication, 1, [0]),0);
    assert.equal(reduce(multiplication, 3, [1,2]),6);
    assert.equal(reduce(multiplication, -1, [-1,-2,-2]),4);
  });

});

