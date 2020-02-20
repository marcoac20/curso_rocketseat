const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards){
    card.addEventListener("click", function(){ //registra um evento
        const cursoId = card.getAttribute("id") //retorna o valor de um atributo da DOM
        window.location.href = `/courses/${cursoId}`
        
    })
}