function createTodo(todoInput) {
    const todoHtml = `
        <div class="todo">
            <input type="checkbox" id="checkbox">
            <label for="checkbox"> ${todoInput}</label>
            <button class="bt-close">&times;</button>
        </div>
    `;
    
    document.getElementById('todolist').innerHTML += todoHtml
}

    function checkInput(val) {
        return val.length > 2;
    }

document.forms.todo.addEventListener(
    'submit',
    function(e) {
        e.preventDefault();
        if(checkInput(this.todoInput.value)){
            createTodo(this.todoInput.value);
        }
        
    }
)
