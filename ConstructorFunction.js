//Faz o que o Factory Function faz porém
//instacia o objeto através do New

function maquinaLavar(marca,modelo,kg){
    this.marca = marca,
    this.modelo = modelo,
    this.kg = kg;

    this.lavar = function(){
        console.log("Lavando");
    }
}

let maquina1 = new maquinaLavar('Bra', 'robusto', 20);
console.log(maquina1);