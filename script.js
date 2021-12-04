// const cripto = document.
// let escolhaCripto = cripto.addEventListener("click", function(){
//     for(var i = 0; i< cripto.length; i++){
//         if(cripto[i].checked){
//             // retorna o valor do item marcado
//             return cripto[i].value;
//         }
//     }
//     console.log(escolhaCripto);
// });

// Cifra

const listaDeCaracteresIgnorados = []

var string = "textougaBuga";
var stringConvertida;
var numeroIncrementos = 5
for(var i = 0; i < string.length; i++){
    if(stringConvertida === undefined){
        var iniciaEm = string[i].charCodeAt();
        var terminaEm = iniciaEm + numeroIncrementos;
        stringConvertida = String.fromCharCode(terminaEm)
    } else if(){
        continue;
    }
    var iniciaEm = string[i].charCodeAt();
    var terminaEm = iniciaEm + numeroIncrementos;
    stringConvertida += String.fromCharCode(terminaEm)
};


console.log(stringConvertida);