console.log("=== REGEXP ===");
//regexp cria padrões para avaliar os dados.
//regexp para cep - ^[0-9]{5}\-?[0-9]{3}$
//rexexp para email ^[A-z0-9\.\-]{1,}\@\w+\.\w{2,}(\.\w{2})?$
// site validador de regexp ==== regex101.com
//   
/*

^  inicio da linha
$  fim da linha
[] lista permitida
{} multiplocador
\c usado para caracter numerico
?  opcional
\w alfa numerico
+  repetidor
() cria um agrupador
\d pega digito
\s pega espaço
. pega todos os caracteres

    livro de expressão regular(regexp) piazinho
*/
var cep = "08030-190"
var pattern =/^\d{5}\-\d{3}$/;
//var cep = prompt("Digite seu cep");
console.log(
/^[0-9]{5}\-?[0-9]{3}$/.test(cep),
 pattern.exec(cep)
);
//ouuu
console.log(
    cep.match(/^\d{5}\-?\d{3}$/)
)

