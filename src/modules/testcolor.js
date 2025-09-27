export function createTestElement(){
    const div = document.createElement("div")
     div.classList.add("test-element")
  
function getRandomRgb(){
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        return `rgb(${red}, ${green}, ${blue})`
    }

    div.addEventListener("click",()=>{
        document.body.style.backgroundColor = getRandomRgb()
    })
    document.body.appendChild(div)
}
document.addEventListener("DOMContentLoaded", createTestElement)
