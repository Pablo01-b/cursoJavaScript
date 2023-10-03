// MINI PROJETO: OBJETO POSTAGEM DE BLOG
//Criar um objeto de postagem de blog que contém as propriedades:
/*
titulo
mensagem
autor
visualizações
cometários(autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizações: 10,
    comentários: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'c', mensagem: 'h' }
    ],

    estaAoVivo : true
}

console.log(postagem);