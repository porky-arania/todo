function createBox(){
    const a = document.createElement("a");
    a.classList.add("todo");
    a.classList.add("hover");
    return a
};

function createContent(color, title, fontSize){
    let content = document.createElement("div");
    content.classList.add("todo-content");
    content.style.backgroundColor = `${color}80`;

    const todoTitle = createTitle(title, fontSize);
    content.append(todoTitle);

    return content
};

function createFooter(tasks, grid, a){
    const foot = document.createElement("div");
    foot.classList.add("todo-foot");
    
    const deleteButton = createDeleteButton(grid, a);
    const progressBar = createProgressBar(tasks);

    foot.append(deleteButton);
    foot.append(progressBar);

    return foot
};

function createTitle(title, fontSize){
    const todoTitle = document.createElement("h1");
    todoTitle.textContent = title;
    todoTitle.style.fontSize = fontSize;
    return todoTitle
};

function createDeleteButton(grid, a){
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("delete");

    //Delete button "onClick" event
    deleteButton.addEventListener('click', (e) => {
        grid.removeChild(a);//Temporary
        //Display confirmation modal
    })

    return deleteButton
};

function createProgressBar(tasks){
    const completed = tasks.reduce((acc, curr) => {
        if(curr.completed){
            acc++;
        }
        return acc
    }, 0);

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML = `(${completed} / ${tasks.length}) Tareas Completadas`;
    text.classList.add("progress-bar-text");

    const progressBar = document.createElement("progress");
    progressBar.value = completed;
    progressBar.max = tasks.length;
    progressBar.classList.add("progress-bar");

    div.append(text, progressBar);
    
    if(!tasks.length){
        text.innerText = "Has click para agregar tareas";
        div.removeChild(progressBar);
    } else if(completed === tasks.length){
        text.innerText = `Todas las Tareas Completadas!!`;
    };
    
    return div
};

function reduceFontOnOverflow(todoH1, a){
    const minFont = 160;
    while(todoH1.scrollWidth > a.offsetWidth){
        let currFont = parseInt(todoH1.style.fontSize.slice(0,-1));
        if(currFont < minFont) break;
        todoH1.style.fontSize = `${currFont - 1}%`;
    };
}