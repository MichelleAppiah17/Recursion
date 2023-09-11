const  fibs = (n) => {
    const results = [0,1];
  for(let i = 2; i <= n ; i++){
    var firstResult = results[i - 1];
    var secondResult = results[i - 2];

    results.push(firstResult + secondResult);
  } 
  return results ;
}

console.log(fibs(8));


//Recursive Solution
const fibsRec = (n, results = [0, 1]) => {
    if (n <= 1) {
      return results;
    }
  
    const nextFib = results[results.length - 1] + results[results.length - 2];
    results.push(nextFib);
  
    return fibsRec(n - 1, results);
  };
  
  console.log(fibsRec(5));
  
  
  
  
  