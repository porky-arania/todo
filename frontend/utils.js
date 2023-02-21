function createBox(){
    const a = document.createElement("a");
    a.classList.add("todo");
    a.classList.add("hover");
    return a
};

function createContent(tasks, color, title, fontSize){
    let content = document.createElement("div");
    content.classList.add("todo-content");
    
    const todoTitle = createTitle(title, fontSize, color);
    const progressBar = createProgressBar(tasks, color);

    content.append(todoTitle);
    content.append(progressBar);

    return content
};

function createFooter(tasks, grid, a){
    const foot = document.createElement("div");
    foot.classList.add("todo-foot");
    
    const deleteButton = createPlusButton(grid, a);

    foot.append(deleteButton);

    return foot
};

function createTitle(title, fontSize, color){
    const todoTitle = document.createElement("h1");
    todoTitle.textContent = title;
    todoTitle.style.fontSize = fontSize;
    // todoTitle.style.color = color;
    return todoTitle
};

function createPlusButton(grid, a){
    const plusButtom = document.createElement("div");
    plusButtom.innerHTML = `<p>+</p>`;
    plusButtom.classList.add("plus-buttom");

    plusButtom.addEventListener('click', (e) => {
        //Add redirect to --> /(todo-id)
    })

    return plusButtom
};

function createProgressBar(tasks, color){
    const completed = tasks.reduce((acc, curr) => {
        if(curr.completed){
            acc++;
        }
        return acc
    }, 0);

    const div = document.createElement("div");
    div.classList.add('bar')
    // const text = document.createElement("p");
    // text.innerHTML = `(${completed} / ${tasks.length}) Tareas Completadas`;
    // text.classList.add("progress-bar-text");

    const progressBar = document.createElement("progress");
    progressBar.value = completed;
    progressBar.max = tasks.length;   
    progressBar.classList.add("progress-bar");
    progressBar.style.setProperty('--pb-background-color', `${color}`)
    
    div.append(progressBar);
    
    // if(!tasks.length){
    //     text.innerText = "Has click para agregar tareas";
    //     div.removeChild(progressBar);
    // } else if(completed === tasks.length){
    //     text.innerText = `Todas las Tareas Completadas!!`;
    // };
    
    return div
};

function reduceFontOnOverflow(todoH1, a){
    const minFont = 180;
    while(todoH1.scrollWidth > a.offsetWidth){
        
        let currFont = parseInt(todoH1.style.fontSize.slice(0,-1));
        if(currFont < minFont) break;
        todoH1.style.fontSize = `${currFont - 1}%`;
    };
    if(!(todoH1.scrollWidth > a.offsetWidth))return
    
    todoH1.style.textOverflow = "ellipsis"
}