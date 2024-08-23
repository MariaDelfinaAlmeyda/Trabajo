
const navChange=()=>{
    
  
  if(window.innerHeight*0.5 < window.scrollY  ){
      document.querySelector("nav").classList.add("fondoNav")
      
  }else{
  document.querySelector("nav").classList.remove("fondoNav")
      
     
  }}

  
  function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let target = event.target;


  if (target.classList.contains("contenedor")) {
    
      if (target.getAttribute("data-imagen") === data) {
          if (target.children.length === 1) { 
              target.appendChild(document.getElementById(data));
              target.querySelector("p").style.display = "none"; 
          }
      } else {
          alert("¡Esta imagen no corresponde a este lugar!");
      }
  } else if (target.tagName === "P") { 
      let container = target.parentElement;
      if (container.getAttribute("data-imagen") === data) {
          if (container.children.length === 1) { 
              container.appendChild(document.getElementById(data));
              target.style.display = "none"; 
          }
      } else {
          alert("¡Esta imagen no corresponde a este lugar!");
      }
  }
}
function reinicio() {
  window.location.reload();
}
iniciar()
