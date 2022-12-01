const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const team = document.querySelector('#team')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')


menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})


logo.addEventListener('click',()=>{
    console.log('control')
    window.location.replace('/index.html')
})