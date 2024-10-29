let botaoSom = document.querySelector('.botao-som')
let video = document.querySelector('.video')
let botao = document.querySelector('.link-info')
let modal = document.querySelector('.modal')
let audio = document.querySelector('.audio')

//ligar som//


//mostrar modal//
botao.addEventListener('click', mostrarModal)
modal.addEventListener('click', esconderModal)

function mostrarModal(){
modal.style.display = 'block'
}

function esconderModal(){
    modal.style.display = 'none'
}


window.addEventListener('load', tocarAudio)



function tocarAudio(){
      audio.play()
 }

 