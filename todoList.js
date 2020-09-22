const creatingANewTask = (event) => {
  event.preventDefault();
  const input = document.querySelector('[data-form-input]');

  const value = input.value;
  input.value = ' ';

  const task = document.querySelector('[data-task]');
  const content = `<p class="content">${value}</p>`;

  task.innerHTML = content;
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', creatingANewTask);
