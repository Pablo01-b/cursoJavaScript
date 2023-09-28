//MINI PROJETO 02: FIZZBUZZ
//Divisível por 3: Fizz
//Divisível por 5: Buzz
//Divisível por 3 e 5: FizzBuzz
//Não é é divisível por 3 ou 5: entrada
//Se o valor digitado não for um número mostre a mensagem: "Não é um número"

const resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return "Não é um número";
    }else if(entrada % 3 === 0 && entrada % 5 === 0){
        return "FizzBuzz";
    }else if(entrada % 3 !== 0 && entrada % 5 !== 0){
        return entrada;
    }else if(entrada % 3 === 0){
        return "Fizz";
    }else if(entrada % 5 === 0){
        return "Buzz";
    }
}