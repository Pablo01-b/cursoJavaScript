//MINI PROJETO: ENCONTRE O STRING
//criar um método para ler propriedades do tipo string que estão nesse objeto
//exibir somente as propriedades do tipo string que estão nesse objeto

const notebook = {
    modelo: 'Acer',
    ano: 2020,
    processador: 'Intel core i5-10400',
    memoriaRam: '16 Gb DDR 4',
    armazenamento: 500
}

exibirAtributos(notebook);
function exibirAtributos(objeto){
    for(atributos in objeto){
        if(typeof objeto[atributos] === 'string'){
            console.log(atributos,objeto[atributos]);
        }
    }
}