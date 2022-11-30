


const input = document.querySelector('.text-input')
const input2 = document.querySelector(".number-input")
const btn = document.querySelector('.add-btn')
const list = document.querySelector('.list')
const input3 = document.querySelector(".fam-input")



btn.addEventListener('click',() =>{
    meWork()
})
input2.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        meWork()
    }
})


function meWork(){
    if (input2.value !== "") {
        const newList = `<li class="list-group-item d-flex justify-content-evenly
                          align-items-center">
                          <div class="px-3 py-2 border rounded-circle mx-2 text-bg-success">
        ${input.value.slice(0,1).toUpperCase() + input3.value.slice(0,1).toUpperCase()}</div>
        <div class="d-flex flex-column mx-3"><span>${input.value}</span> <span>${input3.value}</span> </div>
         <span>${input2.value}</span>
        <button class="del-btn btn btn-danger">delete</button>
        </li>`

        list.innerHTML += newList
    }
    input2.value = ""
}


list.addEventListener('click',(e) =>{
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }

    if (e.target.classList.contains("checkbox")){
        e.target.parentNode.classList.toggle('line')
    }
})



//
// function addNewWork(){
//     if (input3.value !== "") {
//         const newList = `<li class="list-group-item d-flex justify-content-between
//                           align-items-center">
//         <span class="d-flex align-items-center"> <input type="checkbox" class="checkbox mx-1">
//          ${input.value}</span> <span>${input2.value}</span> <span>${input3.value}</span>
//         <button class="del-btn btn btn-danger">delete</button>
//         </li>`
//         list.innerHTML += newList
//     }
//     input3.value = ""
// }
//
//
//
// function addNewWork(){
//     if (input.value !== "") {
//         const newList = `<li class="list-group-item d-flex justify-content-between
//                           align-items-center">
//         <span class="d-flex align-items-center"> <input type="checkbox" class="checkbox mx-1">
//          ${input.value}</span> <span>${input2.value}</span> <span>${input3.value}</span>
//         <button class="del-btn btn btn-danger">delete</button>
//         </li>`
//         list.innerHTML += newList
//     }
//     input.value = ""
// }


// btn.addEventListener('click',() =>{
//     addNewWork()
// })
//
// input.addEventListener("keydown",(e) =>{
//     if(e.key === "Enter"){
//         addNewWork()
//     }
// })


// btn.addEventListener('click',() =>{
//     heWork()
// })
// input3.addEventListener("keydown",(e) =>{
//     if(e.key === "Enter"){
//         heWork()
//     }
// })








































































































































































































































































































































































































































































































