// var texto = document.querySelectorAll("#texto");


const cripto = document.querySelector(".tipoDeCripto");

cripto.addEventListener("click", function(){
    let criptoEscolhida;
    const escolhendoCripto = document.getElementsByName("cifraDeCesarOuB64");
    for(var i = 0; i < escolhendoCripto.length; i++){
        if(escolhendoCripto[i].checked){
            criptoEscolhida = escolhendoCripto[i].value;
        }
    }

    while(true){

        if(criptoEscolhida === "cifra"){
            let decidindoIncrementos = document.createElement("div")
            decidindoIncrementos.innerHTML = `
            <label for="incrementos">
                Digite o numero de incrementos na criptografia:
                <input type="number" name="incrementos" id="incrementos">
            </label>
            `;
            cripto.append(decidindoIncrementos);
    }

    } 
});
