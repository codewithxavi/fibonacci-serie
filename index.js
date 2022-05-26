// Solution Copilot
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


// Own solution
function fib(numero){
  let serie = [0,1];

  for(let i = 2; i <= numero; i++){
    serie.push(serie[i-1] + serie[i-2]);
  }

  return [serie, serie[numero]];
}

console.log("Serie completa:  ", fib(10)[0]);
console.log("Resultado fib:  ", fib(10)[1]);


