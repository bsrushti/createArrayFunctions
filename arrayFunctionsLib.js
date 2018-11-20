const map = function(mapper, elements){
  let result = [];
  for(element of elements){
    result.push(mapper(element));
  }
  return result;
}

module.exports = { map };
