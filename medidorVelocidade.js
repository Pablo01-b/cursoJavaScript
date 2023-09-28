//MINI PROJETO 01: MEDIDOR DE VELOCIDADE.
//REQUISITOS:
//1- A velocidade máxima permitida é de até 70 km/h
//2- A cada 5km acima do limite você ganha 1 ponto na carteira
//3- caso os pontos > 12: mostrar a mensagem: "Carteira suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5
    if(velocidade <= velocidadeMaxima){
        console.log('OK');
    }else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / 
        kmPorPonto));
        if(pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}