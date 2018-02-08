console.log("=== model pattern ===");

var MODULO = (function (){
    console.log("start app");

    var meuGA = {};
    meuGA.contador = 0;
    meuGA.clicaBotao = function(){
        return meuGA.contator += 1;
    };
    meuGA.zeraContador =  function(){
        return meuGA.contator = 0;
    }

    
    return { add: meuGA.clicaBotao,
             reset: meuGA.zeraContador
    };//API

})(); // (function(){}); ~~expressão de função~~ ();executa a função anonima.
     //nome dessa estrututa I.I.F.E.(função imediata)