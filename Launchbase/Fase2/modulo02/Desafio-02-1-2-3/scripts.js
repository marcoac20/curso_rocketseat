const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards){
    card.addEventListener("click", function(){ //registra um evento
        const cursoId = card.getAttribute("id") //retorna o valor de um atributo da DOM
        modalOverlay.classList.add('active') //add uma classe
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`;
    })
}

document.querySelector('.maximize-modal').addEventListener("click", function(){
    modal.classList.add("maximize")
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = "";
    modal.classList.remove("maximize")
})

