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


// Pega, edita e salva as escolhas do usuário.
let opcoesForm = {
    // Escolha da criptografia
    criptoEscolhida : "",
    getCriptoEscolhida: function(){
        return this.criptoEscolhida;
    },
    setCriptoEscolhida : function(escolha){
        this.criptoEscolhida = escolha;
    },
    
    //O que será feito
    acaoEscolhida : "",
    getAcaoEscolhida: function(){
        return this.acaoEscolhida;
    },
    setAcaoEscolhida : function(escolha){
        this.acaoEscolhida = escolha;
    },
}

// Vê se o usuário escolheu cifra
const escolhendoCifra = document.querySelector("#crifaDeCesar");
escolhendoCifra.addEventListener("click", function(){
    if(escolhendoCifra.checked === true){
        // Se o usuário escolhe cifra irá aparecer uma obção de incrementos
        const containerIncrementos = document.querySelector(".containerIncrementos");
        if(containerIncrementos.style.display === "none"){
            containerIncrementos.style.display = "flex";
        }
        
        // Salva essa escolha no objeto opcoesForm
        opcoesForm.setCriptoEscolhida("cifra");
    }
});

// Vê se o usuário escolheu base64
const escolhendoBase64 = document.querySelector("#base64");
escolhendoBase64.addEventListener("click", function(){
    if(escolhendoBase64.checked === true){
        // Escolhendo B64 não precisa de incrementos, logo, os faz sumir.
        const containerIncrementos = document.querySelector(".containerIncrementos");
        if(containerIncrementos.style.display !== "none"){
            containerIncrementos.style.display = "none";
        }

        // Salva essa escolha no objeto opcoesForm
        opcoesForm.setCriptoEscolhida("base64");
    }
});

// Vê se o usuário escolheu criptografar
const acaoCriptografando = document.querySelector("#criptografar");
acaoCriptografando.addEventListener("click", function(){
    if(acaoCriptografando.checked === true){
        // Salva escolha no opcoesForm
        opcoesForm.setAcaoEscolhida("criptografar");
    }
    // Edita o texto interno do botão
    const botaoAcao = document.querySelector("#botaoAcao");
    botaoAcao.innerText = "Criptografar";
});

// Vê se o usuário escolheu descriptografar
const acaoDescriptografando = document.querySelector("#descriptografar");
acaoDescriptografando.addEventListener("click", function(){
    if(acaoDescriptografando.checked === true){
         // Salva escolha no opcoesForm
        opcoesForm.setAcaoEscolhida("descriptografar");
    }

    // Edita o texto interno do botão
    const botaoAcao = document.querySelector("#botaoAcao");
    botaoAcao.innerText = "Descriptografar";
});

// Daqui pra cima "OK"
let manipulandoTexto = {
    pegandoTexto : function(){
        texto = document.querySelector("#texto");
        return texto.innerText;
    },
    
    textoCriptografado : "",
    setTextoCriptografado : function(texto){
        this.textoCriptografado = texto;
    }
}

const confirmacaoAcao = document.querySelector("#botaoAcao");
confirmacaoAcao.addEventListener("click", function(e){
    e.preventDefault()
    // console.log("uga");
    if(opcoesForm.getAcaoEscolhida() === "criptografar"){
        if(opcoesForm.getCriptoEscolhida() === "cifra"){
            // irá chamar a função criptografandoCifraDeCesar(texto, passos)
            
        }
    }
});





// function criptografandoBase64(texto){
//     // btoa() codfi
//     // atob() decodfi
// }
