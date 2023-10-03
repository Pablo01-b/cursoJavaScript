//MINI PROJETO: CRIANDO PROJETO ENDERECO
//Criar um objeto endereco que contem:
//rua
//cidade
//CEP
//exibirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);