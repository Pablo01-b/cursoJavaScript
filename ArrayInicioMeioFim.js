//ADICIONANDO ELEMENTOS

const numeros = [1,2,3];

//Inicio
numeros.unshift(0);
console.log(numeros);

//Meio
numeros.splice(1,0,'a'); 
console.log(numeros);
/* o primeiro numero se refere a posição
o segundo se refere a quantos numeros do array eu quero excluir
e o terceiro elemento se refere a o que eu quero adicionar.*/

//Fim
numeros.push(5);
console.log(numeros);