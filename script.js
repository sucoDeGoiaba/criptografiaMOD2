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


function pegandoTexto(){
    var selecionandoTexto = document.querySelector("#texto");
    return selecionandoTexto.innerText;
}

var escolhendoCifra = document.querySelector("#crifaDeCesar");
escolhendoCifra.addEventListener("click", function(){
    if(escolhendoCifra.checked === true){
        // Checar se há a "aba" de incrementos
        // Faltar arrumar isso
        escolhendoIncrementos = document.createElement("label");
        escolhendoIncrementos.id = "incrementos";
        const containerEscolhaDeCripto = document.querySelector("#containerEscolhaDeCripto");
        containerEscolhaDeCripto.append(escolhendoIncrementos);
    }
});

function criptografandoBase64(texto){
    // btoa() codfi
    // atob() decodfi
}