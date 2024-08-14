let listaDeNumeroSorteados=[];
let numeroLimite=10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag,texto){
    let campo =document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","jogo do número secreto");
    exibirTextoNaTela("p","Escolha um numero de 1 a 10");
}


function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);  // sorteio do número
    let quantidadeDeNumerosSorteados = listaDeNumeroSorteados.length;

    if(quantidadeDeNumerosSorteados==numeroLimite){
        listaDeNumeroSorteados=[];
    }



    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;

    }
}

exibirMensagemInicial();

function verificarChute(){
    let chute=document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela("h1","Acertou");
        let palavraTentativa= tentativas>1?'tentativas':'tentativa';
        let mensagemTentativa=`você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');//Aqui peguei o segundo botão pelo Id, com o . chamei uma função do javascript chamado removeAtribute e removi o 
        //atributo do botão que estaava como  disabled
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela("p", "o número secreto é menor");
        }else{
            exibirTextoNaTela("p","o numero secreto é maior");
        }
        tentativas++
        limparCampo();
    }

}

function limparCampo(){
    chute = document.querySelector('input'); //puxando o dado que esta na tag input
    chute.value= ''; //mudando o conteúdo da tag input puxado anteriormente e trocando ele para um texto vazio
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}