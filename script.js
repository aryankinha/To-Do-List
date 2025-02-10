const text = document.getElementById("adding")
const add_btn = document.getElementById("addingBtn")
const container = document.querySelector(".container")


add_btn.addEventListener( "click" , () => {
    let value = text.value.trim()
    if (value == ""){
        alert("Please enter a task!");
    }else{
        newElement(value)
        text.value = ""
    }
})

function newElement(value){
    let new_div = document.createElement("div")
    let new_label = document.createElement("label")
    let new_input = document.createElement("input")
    let new_btn = document.createElement("button")
    
    new_input.setAttribute("type","checkbox")
    new_btn.innerText = "❌"
    new_label.innerText = value

    new_btn.addEventListener("click" , () => {
        new_div.remove()
    })

    new_input.addEventListener( "click", () => {
        if (new_input.checked) {
            new_label.style.textDecoration = "line-through";
            new_label.style.color = "#888";
        } else {
            new_label.style.textDecoration = "none";
            new_label.style.color = "#333";
        }
    })
    
    new_div.appendChild(new_input)
    new_div.appendChild(new_label)
    new_div.appendChild(new_btn)
    
    new_div.classList.add("new_div")
    container.appendChild(new_div)
}

