let button=document.getElementById('task-btn');
let toDoList=document.getElementById('todo-list');
let input=document.getElementById('input-task');

let toDos=[];

button.addEventListener('click', () =>{
    
    toDos.push(input.value);
    addtask(input.value);
    input.value=''
    
})

function addtask(todo) {

    if (!todo.trim()) {
        alert("Please enter a task!!"); 
        return; 
    }
    
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let removeDiv=document.createElement('div');
    removeDiv.innerHTML='<i class="fa fa-trash" aria-hidden="true" id="remove"></i> ';
    let text = document.createTextNode(todo);
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(removeDiv);
    toDoList.appendChild(listItem);

    removeDiv.addEventListener('click',()=>{
        toDoList.removeChild(listItem);
    })
}


