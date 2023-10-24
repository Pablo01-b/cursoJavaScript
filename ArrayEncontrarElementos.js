//ENCONTRANDO ELEMENTOS (PRIMITIVOS)

/*const numeros = [1,2,3,4,1];
console.log(numeros.indexOf(5)); //retorna o indice ou -1 caso não encontre
console.log(numeros.lastIndexOf(1)); //retorna a ultima ocorrência do número informado na posição do array*/

/*const numeros = [1,2,3,4,5,6,];
console.log(numeros.indexOf(2) !== -1);*/

/*const numeros = [1,2,3,4,5,6,7,8];
console.log(numeros.includes(9)); //retorna se o array tem o elemento informado.*/

//===========================================================================================================
// ENCONTRANDO ELEMENTOS (TIPOS REFERÊNCIA)

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);


