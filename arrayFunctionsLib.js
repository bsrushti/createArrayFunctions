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

module.exports = { 
  map, 
  filter
};
