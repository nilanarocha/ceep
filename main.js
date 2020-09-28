import TickButton from './components/finishTask.js';
import DeleteButton from './components/deleteTask.js';

const creatingANewTask = (event) => {
  event.preventDefault();

  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const value = input.value;

  const task = document.createElement('li');
  task.classList.add('task');
  const content = `<p class="content">${value}</p>`;

  task.innerHTML = content;
  task.appendChild(TickButton());
  task.appendChild(DeleteButton());
  list.appendChild(task);
  input.value = ' ';
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', creatingANewTask);
