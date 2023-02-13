function createBox(){
    const a = document.createElement("a");
    a.classList.add("todo");
    return a
}

function createContent(color){
    let content = document.createElement("div");
    content.classList.add("todo-content");
    content.style.backgroundColor = `${color}80`;
    return content
}

function createFooter(){
    const foot = document.createElement("div");
    foot.classList.add("todo-foot");
    return foot
}

function createTitle(title, fontSize){
    const todoTitle = document.createElement("h1");
    todoTitle.textContent = title;
    todoTitle.style.fontSize = fontSize;
    return todoTitle
}

function createDeleteButton(){
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("delete");
    return deleteButton
}

function createProgressBar(tasks){
    const completed = tasks.reduce((acc, curr) => {
        if(curr.completed){
            acc++
        }
        return acc
    }, 0);

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML = `(${completed} / ${tasks.length}) TAREAS COMPLETADAS`;
    text.classList.add("progress-bar-text");

    const progressBar = document.createElement("progress");
    progressBar.value = completed;
    progressBar.max = tasks.length;
    progressBar.classList.add("progress-bar");

    div.append(text, progressBar);
    
    if(!tasks.length){
        text.innerText = "No Existen Tareas";
        div.removeChild(progressBar);
    };
    
    return div
}