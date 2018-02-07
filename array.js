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
carros.shift();                        // deleta o primeiro elemento do array
carros.push("fusca","tempra", "a3", "c4");
carros.splice(2,1, "uno"); // 1 parametro: posicao do array... 2 parametro: 0(não deleta nenhum item a partir da posicao) 1(deleta 1 item).... 3 parametro o que vc quer adicionar
carros.splice(5,0, "q3");
carros.splice(3,1);
carros.sort(); // orderna os elementos da lista 
carros.reverse(); // inverte os elementos da lista
carros.forEach(function(carro,indice){ // recebe uma função(callback) q é executada para cada item do array
    console.log("==>",arguments[0],carro,arguments[1],indice); //arguments é um array que ve os valores que o callback recebe, so funciona dentro de uma função.
}); 


console.log("carros" , carros);
console.log("cars" , cars); 