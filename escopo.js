console.log("=== ESCOPO ===");
//funções seguram variaveis dentro do escopo. 
//Caso contrario pode ocorrer de alterar o valor de outra variavel(global, que esta fora de função).
function testeEscopo(){
    var escola = "MUsic Dot";
    return escola;
}