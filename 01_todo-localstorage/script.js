document.addEventListener('DOMContentLoaded', () => {
  const inputButton = document.getElementById('add-task-btn');
  const taskinput = document.getElementById('todo-input');
  const todolist = document.getElementById('todo-list');

  let tasks = JSON.parse(localStorage.setItem) || [];

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
    taskinput.value = "";
    console.log(tasks);
  })

  function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})