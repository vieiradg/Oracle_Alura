const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const trocarImgBt = document.querySelector('.app__card-primary-button-icon')

const tempoNaTela = document.querySelector('#timer')
const reiniciarTempo = document.querySelector('.app__card-secundary-button')

const musica = new Audio('../sons/lofi.mp3')
const comecar = new Audio('/Oracle_Alura/Fokus/sons/play.wav')
const pausar = new Audio('/Oracle_Alura/Fokus/sons/pause.mp3')
const terminar = new Audio('/Oracle_Alura/Fokus/sons/beep.mp3')

const modal = document.getElementById("modal");
const closeBt = document.querySelector(".close");


let tempoDecorridoEmSegundos = 1500
let intervaloId = null

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

musica.loop = true

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./assets/${contexto}.png`)

   switch (contexto) {
    case "foco":
        titulo.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;

    case "descanso-curto":
        titulo.innerHTML = `Que tal dar uma respirada? <br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
    
    case "descanso-longo":
        titulo.innerHTML = `Hora de voltar à superfície. <br>
        <strong class="app__title-strong">
        Faça uma pausa longa.</strong>`
        break;
   
    default:
        break;
   }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        terminar.play()
        zerar()
        alert('Tempo Finalizado')
        return
    }

    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        zerar()
        pausar.play()
        return
    }

    comecar.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    trocarImgBt.setAttribute('src', '../assets/pause.png')
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    trocarImgBt.setAttribute('src', '../assets/play_arrow.png')
    intervaloId = null
}

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()

reiniciarTempo.addEventListener('click', () => {
    zerar(); 
    switch (html.getAttribute('data-contexto')) {
        case 'foco':
            tempoDecorridoEmSegundos = 1500;
            break;
        case 'descanso-curto':
            tempoDecorridoEmSegundos = 300; 
            break;
        case 'descanso-longo':
            tempoDecorridoEmSegundos = 900; 
            break;
        default:
            tempoDecorridoEmSegundos = 1500; 
            break;
    }
    mostrarTempo(); 
});

function abrirModal() {
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
}

closeBt.addEventListener("click", fecharModal);

document.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});

abrirModal();
