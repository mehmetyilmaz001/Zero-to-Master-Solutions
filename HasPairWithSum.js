// Find pairs sum equals the giving value
// sum = 6

const arr = [1, 2, 5, 3, 3];

console.log(arr);

// Naive
const hasPairWithSum = (array, sum) => {
  const len =  array.length;

  for(let i = 0; i < len - 1; i++){
    for(let j = i + 1; j < len; j++){
      if(array[i] + array[j] === sum){
        return true;
      }
    }
  }

  return false;
}

console.log(hasPairWithSum(arr, 5));


// Better
const hasPairWithSum2 = (array, sum) => {

  const mySet = new Set();
  const len = array.length;

  for(let i = 0; i < len; i++){
    if(mySet.has(array[i])){
      return true;
    }

    mySet.add(sum - arr[i]);
    // 6, 5, 
  }

  return false;

}

console.log(hasPairWithSum2(arr, 7));