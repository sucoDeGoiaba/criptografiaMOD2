function criptografandoCifraDeCesar(texto, passos){
    var textoCriptografado; 
    for(var i = 0; i < texto.length; i++){
        // checa se é uma letra pelo charCode
        if((texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 90) || (texto[i].charCodeAt() >= 97 && texto[i].charCodeAt() <= 122)){            
            if(texto[i].charCodeAt() >= 97){
                // Checa se é minuscula ou maiuscula
                if(textoCriptografado === undefined){
                    textoCriptografado = String.fromCharCode((texto[i].charCodeAt() - 97 + passos) % 26 + 97);
                } else {
                    textoCriptografado += String.fromCharCode((texto[i].charCodeAt() - 97 + passos) % 26 + 97);
                }
            } else {
                if(textoCriptografado === undefined){
                    textoCriptografado = String.fromCharCode((texto[i].charCodeAt() - 65 + passos) % 26 + 65);
                } else {
                    textoCriptografado += String.fromCharCode((texto[i].charCodeAt() - 65 + passos) % 26 + 65);
                }
            }
        } else {
            if(textoCriptografado === undefined){
                textoCriptografado = texto[i];
            } else {
                textoCriptografado += texto[i];
            }
        }
    }
    return textoCriptografado;
}
// console.log(criptografandoCifraDeCesar("Ugabuga/12Texto", 5));


// function pegandoTexto(){
//     var selecionandoTexto = document.querySelector("#texto");
//     return selecionandoTexto.innerText;
// }

// var escolhendoCifra = document.querySelector("#crifaDeCesar");
// escolhendoCifra.addEventListener("click", function(){
//     if(escolhendoCifra.checked === true){
//         // Checar se há a "aba" de incrementos
//         // Faltar arrumar isso
//         escolhendoIncrementos = document.createElement("label");
//         escolhendoIncrementos.id = "valorIncrementos";
//         const containerEscolhaDeCripto = document.querySelector("#containerEscolhaDeCripto");
//         containerEscolhaDeCripto.append(escolhendoIncrementos);
        
//         escolhendoIncrementos.innerHTML = `
//         Digite o numero de incrementos:
//         <input type="number" name="valorIncrementos" id="valorIncrementos">
//         `;
//     }
// });

// function criptografandoBase64(texto){
//     // btoa() codfi
//     // atob() decodfi
// }


// // var uga = {
// //     pegandoTexto : function(){
// //         var selecionandoTexto = document.querySelector("#texto");
// //         return selecionandoTexto.innerText;
// //     },
// //     escolhendoCripto : function(){

// //     }
// // }

let opcoesForm = {
    criptoEscolhida : "",
    setCriptoEscolhida : function(escolha){
        this.criptoEscolhida = escolha;
    },
    acaoEscolhida : "",
    setAcaoEscolhida : function(escolha){
        this.acaoEscolhida = escolha;
    }
}



const escolhendoCifra = document.querySelector("#crifaDeCesar");
escolhendoCifra.addEventListener("click", function(){
    if(escolhendoCifra.checked === true){

        const containerIncrementos = document.querySelector(".containerIncrementos");
        if(containerIncrementos.style.display === "none"){
            containerIncrementos.style.display = "flex";
        }

        opcoesForm.setCriptoEscolhida("cifra");
        // console.log(opcoesForm.criptoEscolhida);
    }
});

const escolhendoBase64 = document.querySelector("#base64");
escolhendoBase64.addEventListener("click", function(){
    // Faz sumir com a escolha de incrementos
    const containerIncrementos = document.querySelector(".containerIncrementos");
    if(containerIncrementos.style.display !== "none"){
        containerIncrementos.style.display = "none";
    }

    if(escolhendoBase64.checked === true){
        opcoesForm.setCriptoEscolhida("base64");
        // console.log(opcoesForm.criptoEscolhida);
    }
});

const acaoCriptografando = document.querySelector("#criptografar");
acaoCriptografando.addEventListener("click", function(){
    if(acaoCriptografando.checked === true){
        opcoesForm.setAcaoEscolhida("criptografar");
        // console.log(opcoesForm.acaoEscolhida);
    }
});

const acaoDescriptografando = document.querySelector("#descriptografar");
acaoDescriptografando.addEventListener("click", function(){
    if(acaoDescriptografando.checked === true){
        opcoesForm.setAcaoEscolhida("descriptografar");
        // console.log(opcoesForm.acaoEscolhida);
    }
});

