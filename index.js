let burger = document.querySelector('.burger')
let navitems = document.querySelector('.navitems')
burger.addEventListener('click',()=>{
    console.log('clicked')
    navitems.classList.toggle('active')
})