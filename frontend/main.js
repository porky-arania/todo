async function getTodos(url){
    return await fetch(url)
    .then((response) => {
        if(response.status === 200){
            return response.json()
        }
        throw new Error(`${response.status} - ${response.statusText}`);
    })
};

getTodos("todos.json")
.then((response) => {
    if(!response.length){
        console.log("boludo nomas")
    }else{
        for(let todo of response){
            displayToDo(todo);
        }
    }
})
.catch((error) => {
    console.log(error);
});

function displayToDo({title, id, color, tasks}){
    const fontSize = "250%";
    const grid = document.querySelector('#grid');
    
    const a = createBox(id);
    const content = createContent(tasks, color, title, fontSize, a);
    // const foot = createFooter(grid, a);
    const plusButtom = createPlusButton(grid, a)
    
    a.addEventListener('click', (e) =>{
        //Redirect to To-Do edit page
    })
    
    a.append(content);
    a.append(plusButtom);
    
    grid.append(a);

    const todoH1 = content.childNodes[0];
    reduceFontOnOverflow(todoH1, a);
};

const newToDo = document.querySelector('.new-todo');
newToDo.addEventListener('click', (e) => {
    displayToDo({title: 'Nuevo TODO!', id: "0123", color:"#000000", tasks:[]})//Temporary
    //Display "Create To-Do" modal
})