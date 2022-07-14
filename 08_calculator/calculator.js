const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  let sum=0;
  arr.forEach(elem => sum+=elem);
  return sum;	
};

const multiply = function(arr) {
  let prod=0;
  if (arr.length>0){
    prod=1;
    arr.forEach(elem => prod*=elem);
    return prod;
  }
  	
};

const power = function(b,p) {
  return b**p;
	
};

const factorial = function(n) {
  let fact=1;
  let i=1;
  while (i<=n){
    fact*=i;
    i++;
  }
  return fact;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
