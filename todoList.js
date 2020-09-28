(() => {
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
    list.appendChild(task);
    input.value = ' ';
  };

  const newTask = document.querySelector('[data-form-button]');

  newTask.addEventListener('click', creatingANewTask);

  const TickButton = () => {
    const tickButton = document.createElement('button');
    console.log(tickButton);
    tickButton.classList.add('check-button');
    tickButton.innerText = 'Finish';
    tickButton.addEventListener('click', finishTask);
    return tickButton;
  };

  const finishTask = (event) => {
    const tickButton = event.target;

    const taskDone = tickButton.parentElement;

    taskDone.classList.toggle('done');
  };
})();
