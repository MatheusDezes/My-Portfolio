//Click e seleção da navbar
var navLink = document.querySelectorAll('.nav-link')

function selectlink(){
    navLink.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

navLink.forEach((item)=>
    item.addEventListener('click', selectlink)
)

