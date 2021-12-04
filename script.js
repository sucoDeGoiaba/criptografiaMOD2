function criptografandoCifraDeCesar(texto, passos){
    var textoCriptografado; 
    for(var i = 0; i < texto.length; i++){
        
        if((texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 90) || (texto[i].charCodeAt() >= 97 && texto[i].charCodeAt() <= 122)){            
            if(texto[i].charCodeAt() >= 97){
                // Checa se é minuscula
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
                textoCriptografado = texto[i]
            } else {
                textoCriptografado += texto[i]
            }
        }
    }
    return textoCriptografado;
}
console.log(criptografandoCifraDeCesar("Ugabuga/12Texto", 5));

//Maiusc - vai De 65 até 90

//Minusc - vai de 97 até 122