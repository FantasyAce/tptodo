function createTodo(todoInput) {
    const todoHtml = `
        <div class="todo">
            <input type="checkbox" id="checkbox">
            <label for="checkbox"> ${todoInput}</label>
            <button onclick="closeTodo(this.previousElementSibling.previousElementSibling, this.parentNode)" class="bt-close">&times;</button>
        </div>
    `;
    
    document.getElementById('todolist').innerHTML += todoHtml
}

    function checkInput(val) {
        return val.length > 2;
    }

    function closeTodo(checkboxTag, todoTag) {
       if(checkboxTag.checked) {
        const response = confirm('Es tu sure?');
        if(!response) return;
       } document.getElementById('todolist').removeChild(todoTag)
    }

document.forms.todo.addEventListener(
    'submit',
    function(e) {
        e.preventDefault();
        if(checkInput(this.todoInput.value)){
            createTodo(this.todoInput.value);
        }else{
         const errorMsg = document.getElementById('error');
         errorMsg.style.display = 'block';
         setTimeout(() => {
             errorMsg.style.display = 'none';
         },2500 );
        }
        
    }
)
