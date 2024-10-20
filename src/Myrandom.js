const arr = [
  [1, 2],
  [3, 4, [1, 2, 4], 5],
  [9, [4, [1]]]
];

function flat(data){
  const result = [];

  if(Array.isArray(data)){
    data.forEach((ele) => {
      const response = flat(ele);
      result.push(...response);
    })
  }
  else{
    result.push(data);
  }

  return result;
}

const ans = flat(arr);
console.log(ans);
