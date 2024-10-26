let addBtn = document.getElementById('add-button')
let modal = document.querySelector('.addModal')
addBtn.addEventListener('click', () => {
    modal.style.visibility = "visible"
})

let closeBtn = document.getElementById('close-btn')

closeBtn.addEventListener('click', () => {
    modal.style.visibility = "hidden"
})

function add() {
    let txt = document.getElementById('input').value
    let listItem = document.createElement("li")
    listItem.className = 'list-item'
    listItem.id = ++id
    listItem.innerHTML = `<input type="checkbox" name="" class="list-check" id="inp${id}" onclick="removeTask(this)">${txt}`
    todolist.appendChild(listItem)
    modal.style.visibility = "hidden"
    txt = ""
}

function removeTask(element){
    let confirmation = confirm('Do you want to remove the task?')
    console.log(confirmation);
    if(confirmation){
        element.parentElement.remove()
    }else{
        element.checked = false
    }

}

function clear() {
    let txt = document.getElementById('input')
    txt.value = ""
}

// let todolist = document.querySelectorAll("todolist");
let todolist = document.getElementById("todolist");
let saveBtn = document.getElementById('save');
let id = 0;
saveBtn.addEventListener('click', function () {
    add()
    clear()
})


modal.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        add()
        clear()
    }
})




let clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', function () {
    clear()
})

let checkboxes = document.querySelectorAll('input')
