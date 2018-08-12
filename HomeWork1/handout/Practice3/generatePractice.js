'use strict'



function sort(array){
  return array.sort((a,b) => a-b); 
}

function search(array, target){
  return array.indexOf(target);
}
function generateArray(value){
  var array = [];
  for(var i=0;i<value;i++){
    array[i] = Math.floor(Math.random()*101);
  }
  sort(array);
  return array;
}
function generate(testLengthArray){

  var arrAll = [];
  for(var i = 0;i<testLengthArray.length-3;i++){
    var array = generateArray(testLengthArray[i]);
    var obj = {
        input : array,
        target : 10,
        output : search(array,10)
    }
    arrAll.push(obj);
  }
    // special case 
    
    // first index
    array = generateArray(testLengthArray[testLengthArray.length-3]);
    obj = {
      input : array,
      target : array[0],
      output : search(array,array[0])
    }
    arrAll.push(obj);
    // last index
    array = generateArray(testLengthArray[testLengthArray.length-2]);
    obj = {
      input : array,
      target : array[array.length-1],
      output : search(array,array[array.length-1])
    }
    arrAll.push(obj);
    /*
    // middle index
    array = generateArray(testLengthArray[testLengthArray.length-2]);
    var num = Math.floor(Math.random() * ((array.length-2) - 1 + 1)) + 1;
    obj = {
      input : array,
      target : num,
      output : search(array,num)
    }
    arrAll.push(obj);
    */

    // not in array
    array = generateArray(testLengthArray[testLengthArray.length-1]);
    
    obj = {
      input : array,
      target : 1000,
      output : search(array,1000)
    }
    arrAll.push(obj);
    
    return arrAll;
  
} 


  /*
  return Array.from({length : testLengthArray.length})
    .map(item => ({
      input: Array.from({length: item}).map(item => []),
      target: 0,
      output: -1
    })
  ); // Remove this line and change to your own algorithm
  */


module.exports = generate
