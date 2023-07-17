const textAreaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("totalCounter")

const remainingCounterE1 = document.getElementById("remaining-counter")

textAreaE1.addEventListener("keyup",()=>{
    updateCounter()
})
function updateCounter(){
    totalCounterE1.innerText = textAreaE1.Value.length

    remainingCounterE1.innerText = textAreaE1.getAttribute("maxlength") -
}
