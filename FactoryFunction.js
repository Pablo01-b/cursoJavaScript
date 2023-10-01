// Factory functions(função de fábrica)
//Retornam um objeto

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        liga(){
            console.log("Fazendo Ligação...");
        }
    }
}

const celular1 = criarCelular('SmartPhone', 5.5, 5000);
console.log(celular1);