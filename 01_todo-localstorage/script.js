document.addEventListener('DOMContentLoaded', () => {
  const inputButton = document.getElementById('add-task-btn');
  const taskinput = document.getElementById('todo-input');
  const todolist = document.getElementById('todo-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => {
    renderTasks(task);
  });

  inputButton.addEventListener('click', function(){
    const tasktext = taskinput.value;
    if(tasktext === "") return;
    const newTask = {
      uniqueId: Date.now(),
      completed: false,
      text: tasktext
    }
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    taskinput.value = "";
    console.log(tasks);
  })

  function renderTasks(task){
    const li = document.createElement('li');
    li.setAttribute("data-id", task.uniqueId);
    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>`;
    todolist.appendChild(li);

    li.addEventListener('click',(e)=>{
      if(e.target.tagName === 'BUTTON') return;
      task.completed = !task.completed;
      li.classList.toggle('completed');
      saveTasks();
    });

    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      li.remove();
      saveTasks();
    })

  }

  function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})