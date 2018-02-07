console.log("=== FUNÇÕES ===");

//expressão de função nomeada.

function saudacao(frase){
    var txt = "mensagem " + frase;
    
    console.log(txt);

    return txt.toUpperCase();
};

//expressão de função anônima..

var soma = function (){
    
    var total= 0;

    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }

    return total;
};