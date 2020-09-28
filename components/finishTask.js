const TickButton = () => {
  const tickButton = document.createElement('button');

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

export default TickButton;
