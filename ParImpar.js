//MINI PROJETO: PAR OU IMPAR
//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar

mostrarTipo(10);
function mostrarTipo(quantidade){
    for(let i = 0; i <= quantidade; i++){
        if(i % 2 === 0){
            console.log(`${i} "PAR"`);
        }else{
            console.log(`${i} "IMPAR"`);
        }
    }
}