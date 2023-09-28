//MINI PROJETO 02: FIZZBUZZ
//Divisível por 3 = Fizz
//Divisível por 5 = Buzz
//Divisível por 3 e 5 = FizzBuzz
//Não é é divisível por 3 ou 5 = entrada
//Se o valor não é um número = "Não é um número"

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        console.log("Não é um número");
    }else if(entrada % 3 === 0 && entrada % 5 === 0){
        console.log("FizzBuzz");
    }else if(entrada % 3 !== 0 && entrada % 5 !== 0){
        console.log(entrada);
    }else if(entrada % 3 === 0){
        console.log("Fizz");
    }else if(entrada % 5 === 0){
        console.log("Buzz");
    }
}