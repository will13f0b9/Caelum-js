console.log("=== Array ===");

//array literal

var carros = []; // array vazio



//array construtor

var cars = new Array(); // array vazio
console.log(carros.constructor,cars.constructor1);
console.dir(Array.prototype);

carros.push("gol", "corsa", "palio")    // push usa pra adicionar um elemento no final do array
carros.unshift("fox");                  // adiciona um elemento no começo do array
carros.pop();                           // deleta o ultimo elemento do array
carros.shift();                         // deleta o primeiro elemtno do array

console.log("carros" , carros);
console.log("cars" , cars); 