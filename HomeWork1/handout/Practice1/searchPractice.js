'use strict'

function search(input, target) {
  for(var i=0;i<input.length;i++){
    if(input[i]== target) return i; 
  }
  return -1;
  // var index = -1;
  // input.every(function(element, i){
  //   if(element == target){
  //     index = i;
  //     return true;
  //   }
  // })
  //   return index;
  

  //return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
