
// criar função e por para rodar um player nela
function tocaSom (idAudio) {
    const elemento = document.querySelector(idAudio)

    if (elemento && elemento.localName === 'Audio') {
        elemento.play()
    }else {
        console.log("Elemeno não encontrado ou seletor invalido")
    }
}

// criar lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla')

// estrutura de repetição: para cont = 0; cada vez que cont menor que tamanho da lista de teclas; cont + 1
for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    // const que contém as classe da lista de teclas, apenas para facilitar o uso do listaDeTeclas[cont] em todo codigo
    const tecla = listaDeTeclas[cont]

    //acessar a 2° classe classe da lista
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio)

    //acessar lista de teclas e passar uma função anonima que executa a string que esta sendo montada a cada interação do while (idAudio)
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    //console.log(cont)

    //adicionar cor ao presionar tecla do teclado
    tecla.onkeydown = function (event) {
        //console.log(event)

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa') 
        }    
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

