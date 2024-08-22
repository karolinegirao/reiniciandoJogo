let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute> numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor');
        } else{
            exibirTextoNaTela('p','Número secreto é maior');
        }
        tentativas++;
        limparcampo();
   
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}     

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}












