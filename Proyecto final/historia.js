
const navChange=()=>{
    
  
    if(window.innerHeight*0.5 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
       
    }
    } 

const video = document.querySelector('video');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();  
});