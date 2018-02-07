console.log("=== OBJETOS ===");
//objeto é dividido em duas partes:
//1º atributo(propriedades,caracteristicas) do objeto.           
//2º metodos(ações) do objeto.

//sintaxe de um objeto literal.

var pessoa = {};

//propriedades -- dot notation(notação de ponto)
//objeto.propriedade = valor;
pessoa.altura = 1.89;
pessoa.nome = "pedro";
//propriedades - bracket notation
//objeto["propriedade"] = valor;
pessoa["idade"] = 25;
pessoa["sexo"] = "M";


//metodos -- dot notation
//objeto.metodo = function(){};
pessoa.falar = function(){
    return "bla bla bla";
};
//métodos -- bracket notation
//objeto["metodo" = function(){};
pessoa["dormir"] = function(){
    return "zzz";
};
console.log(pessoa);
//objeto autodefinido
var carro = {
    modelo: "fox",
    ano: "2016",
    fabricante: {nome: "vw", pais: "alemanha"},
    versoes: [1.0 ,1.6 ,1.8],
    status: false,
    ligar: function(){
        return this.status = true;
    },
    desligar: function(){
        return this.status = false;
    }
};
console.log(carro);
