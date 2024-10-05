document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  const taskQueue = [];
  let activeTasks = 0;
  const maxInProgressTasks = 3;

  const executeTask = (task) => {
    return new Promise((resolve) => {
      task.classList.add('in-progress');
      setTimeout(() => {
         task.classList.remove('in-progress');
         task.classList.add('completed');
        resolve();
      }, 10000);
    });
  };

  const processQueue = () => {
    if (taskQueue.length === 0 || activeTasks >= maxInProgressTasks) {
      return;
    }
    const task = taskQueue.shift();
    activeTasks++;
    executeTask(task).then( () => {
      activeTasks--;
      processQueue();
    })
  };

  const addTaskToQueue = () => {
    const listItem = document.createElement('li');
    listItem.classList.add("task-item");
    listItem.textContent = `Task ${taskList.children.length + 1}`;
    taskList.appendChild(listItem);
    taskQueue.push(listItem);
    processQueue();
  };

  document.addEventListener('click', addTaskToQueue);

});
