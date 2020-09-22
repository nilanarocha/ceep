const creatingANewTask = (event) => {
  event.preventDefault();
  const input = document.querySelector('[data-form-input]');

  const inputValue = input.value;
  console.log(inputValue);
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', creatingANewTask);
