function arrayToList (arr){
  for ( var i = arr.length - 1; i >=0; i--){
    //assign values this way?
    //works backwards from last item in the array to the first 
    //in order to get nested lists
    var list = { value: arr[i], rest: list};
  }
  return list;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray (list){
  var listArray = [];
  //node begins as list; while node is not undefined; node becomes node.rest
  //this moves from the outermost list to the innermost sublist
  for (var node = list; node; node = node.rest){
    listArray.push(node.value);
  }
  return listArray;
}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//assigns keys and values just like arrayToList
function prepend (elem, list){
  var newList = {value: elem, rest: list};
  return newList;
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//recursive version
function nth (list, num){
    
  //if not list, return undefined
  if (!list){
    return undefined;
    //if num is 0, you can return whatever is at value
    //because that is the outermost list
  } else if (num === 0){
    return list.value;
    //if num is not 0, it refers to an inner list
    //in that case, pass in list.rest to get to the next layer down
    //keep going down until num ==== 0
  } else {
    return nth(list.rest, num-1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20