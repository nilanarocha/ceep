const DeleteButton = () => {
  const deleteButton = document.createElement('button');

  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  return deleteButton;
};

const deleteTask = (event) => {
  const deleteButton = event.target;

  const finishTask = deleteButton.parentElement;

  finishTask.remove();
  return deleteTask;
};

export default DeleteButton;
