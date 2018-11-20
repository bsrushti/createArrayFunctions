const map = function(elements, mapper){
 let processedElements = [];
 for(element of elements){
   processedElements.push(mapper(element));
 }
 return processedElements;
}

module.exports = {
  map
}
