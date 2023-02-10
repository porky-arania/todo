async function getTodos(url){
    const todos = await fetch(url);
    if(todos.status !== 200){
        return `Status: ${todos.status}`
    }
    return todos.json()
}

getTodos("todos.json")
.then((response) => {
    console.log(response)
})