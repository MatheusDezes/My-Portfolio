//Click e seleção da navbar
var menuItem = document.querySelectorAll('.menu-itens')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//Botão de expandir menu
var btnExp = document.querySelector('#btn-exp')
var navBar = document.querySelector('.navbar')

btnExp.addEventListener('click', function(){
    navBar.classList.toggle('expandir') 
})


