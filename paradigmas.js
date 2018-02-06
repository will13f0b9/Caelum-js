console.log("===paradigmas===");

//sintaxe literal
var escola = "caelum"; // string implicito

//sintaxe construtor(OOP)
var school = new String("Caelum"); // string explicito

console.log("escola" , escola, typeof escola, escola.constructor);
console.log("escola" , school, typeof school, school.constructor);
console.dir(String.prototype);// lista da função string