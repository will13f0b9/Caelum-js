console.log("=== hoisting ===");
//qualquer variavel global pode ser usada dentro de um escopo interno,caso ela não esteja declarada com msm nome dentro da função[escopo interno](closure)
//hoisting, o interpretador do js, ao carregar uma função ele cria primeiro as variaveis pra dps executa as linhas de codigos.

var escopo = "global";

function teste(){
    console.log(escopo);
   // var escopo ="local";
   // console.log(escopo);

};