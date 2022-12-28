 // currying
 const multiply = (a,b) => a*b;
 const curriedMultiply = (a) => (b) => a*b;
 curriedMultiply(3)(4);     // returns 12

 //Compose 
 const compose = (f,g) => (a) => f(g(a)); 

 const sum = (num) => num + 1;

 compose(sum, sum)(5);


 //Avoiding side effect, function purity
 