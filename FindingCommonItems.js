// Findiing common items between two arrays in Javascipt problem solving approaches

const arr1 = ['q', 'b', 'a', 't'];
const arr2 = ['1', 'c', 'a'];



const findCommon = (array1, array2) => {
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
        return true;
      }
    }
  }

  return false;

  // time complexity
  // O(a*b)

  // space complexity
  // O(1)
}

//findCommon(arr1, arr2);


const findCommon1 = (array1, array2) => {
  let map = {};

  for(let i = 0; i < array2.length; i++){
    if(!map[array1[i]]){
      map[array1[i]] = true;
    }
  }


  for(let i = 0; i < array2.length; i ++){
    if(map[array2[i]]){
      return true;
    }
  }


  return false;

  // time complexity
  // O(a+b)

  // space complexity
  // O(a)
}


//findCommon1(arr1, arr2);


const findCommon2 = (array1, array2) => {
  return array1.some(i => array2.includes(i));


  // time complexity
  // O(a+b)

  // space complexity
  // O(1)
}


findCommon2(arr1, arr2);









