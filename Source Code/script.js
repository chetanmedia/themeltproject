const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const team = document.querySelector('#team')
const menu = document.querySelector('.menu')
const displayTeam = document.querySelector('.displayteam')
const closedisplayTeam = document.querySelector('.closeteam')

var animation = bodymovin.loadAnimation({
    container : document.querySelector('.lottie'), 
    path:'logo animation.json',
    render: 'svg',
    loop:true,
    autoplay:true,
    name:'logo amnimation'
});


menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

function addTeam(){
    menu.style.display = 'none'
    displayTeam.classList.add('active')
    
}

function removeTeam(){
    displayTeam.classList.remove('active')
    menu.style.display = 'flex'
    
}

function showTeam(){

    const isDisplay = displayTeam.classList.contains('active')
    if(isDisplay){
        removeTeam()

    }else{
        addTeam()
    }

}

team.addEventListener('click',showTeam)
closedisplayTeam.addEventListener('click',removeTeam)
