const DeletButton = () => {
  const deletButton = document.createElement('button');

  deletButton.innerHTML = 'Delet';
  deletButton.addEventListener = ('click', deletTask);
  return deletButton;
};

const deletTask = (event) => {
  const deletButton = event.target;
  const finishTask = deletButton.parentElement;
  finishTask.remove();
  return deletTask;
};

export default DeletButton;
