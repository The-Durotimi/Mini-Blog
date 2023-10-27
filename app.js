const form = document.querySelector(".form")
const clear = document.querySelector(".clear")
let output = document.querySelector(".output-area")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let text =  document.querySelector(".text").value
    if(!text){
        alert("Please fill the required field")
    }

   let output_area =  `<small>
    <article>
        <p>${text}</p>
    </article>
</small>`

output.innerHTML += output_area
})


clear.addEventListener("click", function(){
    let text = document.querySelector(".text").value = ""
})