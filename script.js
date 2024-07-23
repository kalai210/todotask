document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
            const todoList = document.getElementById('todo-list');
            data.todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.todo;
                if (todo.completed) {
                    li.classList.add('completed');
                }
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching the todos:', error));
});
