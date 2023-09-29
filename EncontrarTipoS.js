//MINI PROJETO: ENCONTRE O STRING
//criar um método para ler propriedades do tipo string que estão nesse objeto
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor',
}

exibirAtributos(filme);
function exibirAtributos(objeto){
    for(atributos in objeto){
        if(typeof objeto[atributos] === 'string'){
            console.log(atributos,objeto[atributos]);
        }
    }
}