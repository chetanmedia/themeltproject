let ws = new WebSocket('wss://touchdesigner-socket-server.herokuapp.com:443')

let sceneSelected

let spill = document.querySelector('#spill')
let storm = document.querySelector('#storm')
let melt = document.querySelector('#melt')
let underneath = document.querySelector('#underneath')
let closeBtn = document.querySelector('.close')
let spillText = document.querySelector('.bg-text-spill')
let stormText = document.querySelector('.bg-text-storm')
let meltText = document.querySelector('.bg-text-melt')
let underneathText = document.querySelector('.bg-text-underneath')
let blurbg = document.querySelector('.blurbg')


spillText.classList.add('active')


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
      calculateHeight: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
        slideChange: function () {
      const index_currentSlide = swiper.realIndex;
      const currentSlide = swiper.slides[index_currentSlide]

      switch(index_currentSlide) {
        case 0:
            
            stormText.classList.remove('active')
            meltText.classList.remove('active')
            underneathText.classList.remove('active')
            spillText.classList.add('active')
          break;
        case 1:
          // code block
          
          spillText.classList.remove('active')
          meltText.classList.remove('active')
          underneathText.classList.remove('active')
          stormText.classList.add('active')
          break;
        case 2:
          // code block
          spillText.classList.remove('active')
          stormText.classList.remove('active')
          underneathText.classList.remove('active')
          meltText.classList.add('active')
          break;
        case 3:
         // code block
          spillText.classList.remove('active')
          stormText.classList.remove('active')
          meltText.classList.remove('active')
          underneathText.classList.add('active')
        break;
        default:
          // code block
      }
      


      },
    },
 
   
  });


  


spill.addEventListener('click',()=>{
        sceneSelected = "spill"
        console.log(sceneSelected)
        ws.send(JSON.stringify({'sceneSelected':sceneSelected}))

})

storm.addEventListener('click',()=>{
    sceneSelected = "storm"
    console.log(sceneSelected)
    ws.send(JSON.stringify({'sceneSelected':sceneSelected}))


    stormText.classList.add('activce')
})

melt.addEventListener('click',()=>{
    sceneSelected = "melt"
    console.log(sceneSelected)
    ws.send(JSON.stringify({'sceneSelected':sceneSelected}))
    
})

underneath.addEventListener('click',()=>{
    sceneSelected = "underneath"
    console.log(sceneSelected)
    ws.send(JSON.stringify({'sceneSelected':sceneSelected}))
    
})



