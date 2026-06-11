const contain = document.querySelector("#container")
const slide = document.querySelector("#slide")
const slideVal = document.querySelector("#slideVal")

slide.addEventListener("input", ()=>{
    slideVal.textContent = slide.value
})

const button = document.querySelectorAll("button")

button.forEach(button => {
    button.addEventListener("click", () =>{
        if(button.textContent === "GENERATE")
            generate(parseInt(slide.value))
        if(button.textContent === "RESET")
            contain.innerHTML = ""
    })
})
function generate(val){
    contain.innerHTML = ""
    const containWidth = contain.clientWidth
    const containHeight = contain.clientHeight
    for(let i = 1; i<=(val*val); i++){
        const block = document.createElement("div")
        block.style.backgroundColor = "black"
        block.style.border = "1px solid gray"
        block.style.height = `${containHeight/val}px`
        block.style.width = `${containWidth/val}px`
        block.style.boxSizing = "border-box"
        contain.append(block)

        let isDrawing = "false"
        contain.addEventListener("mousedown", ()=>{
            isDrawing  = true
        })
        contain.addEventListener("mouseup", ()=>{
            isDrawing  = false
        })
        block.addEventListener("mouseenter", ()=>{
            if(isDrawing){
                block.style.backgroundColor = "white"
                block.style.border = "white"
            }
        })

        block.addEventListener("click", ()=>{
            if(isDrawing){
                block.style.backgroundColor = "white"
                block.style.border = "white"
            }
        })
    }
}
