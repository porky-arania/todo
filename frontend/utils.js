function createBox(id){
    const anchor = document.createElement("a");
    anchor.classList.add("todo");
    anchor.classList.add("hover");

    anchor.addEventListener('click', e => {
        location.href = `/edit/${id}?`
    })

    return anchor
};

function createContent(tasks, color, title, fontSize){
    const content = document.createElement("div");
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

function createPlusButton(grid){
    const plusButtom = document.createElement("button");
    plusButtom.innerHTML = `<p>+</p>`;
    plusButtom.classList.add("plus-buttom");

    plusButtom.addEventListener('click', (e) => {
        e.stopPropagation()
        // Open modal for creating new task
    })

    return plusButtom
};

function createProgressBar(tasks, color){
    const completed = tasks.reduce(
        (acc, curr) => curr.completed ? acc++ : acc,
        0
    );

    const div = document.createElement("div");
    div.classList.add('bar')

    const progressBar = document.createElement("progress");
    progressBar.value = completed;
    progressBar.max = tasks.length;   
    progressBar.classList.add("progress-bar");
    progressBar.style.setProperty('--pb-background-color', `${color}`)
    
    div.append(progressBar);
    
    return div
};