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

describe('Map',function(){

  describe('Square',function(){
    it('should get square of empty array as empty',function() {
      assert.deepEqual(map(square,[]),[]);
    });

    it('should get square of array of single element',function() {
      assert.deepEqual(map(square,[1]),[1]);
    });

    it('should get square of array of positive elements',function() {
      assert.deepEqual(map(square,[1,2,3]),[1,4,9]);
    });

    it('should get square of array of negative elements',function() {
      assert.deepEqual(map(square,[-1,-2,-3]),[1,4,9]);
    });
  });

  describe('Increment',function(){
    incrementBy = increment(1);
    it('should get increment of empty array as empty',function() {
      assert.deepEqual(map(incrementBy,[]),[]);
    });

    it('should get increment all positive array elements by one',function() {
      assert.deepEqual(map(incrementBy,[1,2,3]),[2,3,4]);
    });

    it('should get increment all negative array elements by one',function() {
      assert.deepEqual(map(incrementBy,[-1,-2,-3]),[0,-1,-2]);
    });
  });

});

describe('Filter',function(){

  it('should filter even elements from empty array as empty',function(){
    assert.deepEqual(filter(isEven,[]),[]);
  });

  it('should filter even elements from  array of single element',function(){
    assert.deepEqual(filter(isEven,[1]),[]);
  });

  it('should filter even elements from array of positive elements',function(){
    assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  });

  it('should filter even elements from array of negative elements',function(){
    assert.deepEqual(filter(isEven,[-1,-2,-3,-4,-5,-6]),[-2,-4,-6]);
  });

});

describe('Reduce',function(){

  it('testing for empty array, should return value of accumulator',function() { 
    assert.equal(reduce(add, 1, []),1);
  });

  it('should get summition of array of single element',function() { 
    assert.equal(reduce(add, 0, [1]),1);
  });

  it('should get summition of array of positive elements',function() { 
    assert.equal(reduce(add, 3, [1,2]),6);
    assert.equal(reduce(add, 5, [5,5,5,5]),25);
  });

  it('should get summition of array of negative elements',function() { 
    assert.equal(reduce(add, -1, [-1,-2,-2,-3]),-9);
  });

});

