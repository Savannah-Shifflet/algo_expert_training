function nonConstructibleChange(coins) {
    let currentSum = 0;
    coins.sort(function (a, b) { return a - b });
    for(let i=0; i<coins.length; i++){
      if(coins[i]>currentSum+1 ){
        return currentSum+1;
      }
      currentSum+=coins[i];
    }
    return currentSum+1;
  }