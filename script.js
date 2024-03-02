const inputEle = document.querySelector(".input")
const bodyEle = document.querySelector("body")
inputEle.checked = JSON.parse(localStorage.getItem("mode"))
update()
function update(){
  if(inputEle.checked){
    bodyEle.style.background ="black"
  }
  else{
    bodyEle.style.background ="white"
  }
}

inputEle.addEventListener("input", ()=>{
  update()
  updateLocalStore()
})

function updateLocalStore(){
  localStorage.setItem("mode", JSON.stringify(inputEle.checked))
}
