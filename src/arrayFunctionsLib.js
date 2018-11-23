const map = function(mapper, elements){
  let result = [];
  for(element of elements){
    result.push(mapper(element));
  }
  return result;
}

const filter = function(predicate, elements) {
  let result = [];
  for(element of elements){
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

const reduce = function(reducer, accumulator, elements) { 
  let result = elements[0];
  let index = 1;

  if(accumulator) {
    result = accumulator;
    index = 0;
  }

  while(index < elements.length) {
    result = reducer(result, elements[index++]);
  }
  return result;
}

const mapPrime = function(mapper, elements) { 
  return reduce(reducerOfMap(mapper), [], elements);
}

const reducerOfMap = function(mapper) { 
  return function(accumulator, element) {
    accumulator.push(mapper(element));
    return accumulator;
  }
}

module.exports = { 
  map, 
  filter,
  reduce,
  mapPrime
};
