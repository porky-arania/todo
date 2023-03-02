function displayTodoModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.style.opacity = 0;

  const close = closeButton();
  const title = modalTitle();
  const input = inputTodoName();
  const confirm = confirmButton(input);

  modalContent.append(close, title, confirm, input);

  modal.append(modalContent);
  document.body.append(modal);

  // Fade-IN transition bug fix 
  setTimeout(() => {
    modalContent.style.opacity = 1
  }, 0);
}

function closeButton() {
  const close = document.createElement('span');
  close.classList.add('close');
  close.innerText = 'X';

  close.addEventListener('click', closeModal)

  return close
}

function modalTitle() {
  const title = document.createElement('p');
  title.classList.add('modal-body');
  title.innerText = 'New TODO';

  return title
}

function confirmButton(input) {
  const confirm = document.createElement('button');
  confirm.classList.add('modal-confirm');
  confirm.innerText = 'Create TODO';

  confirm.addEventListener('click', e => {
    // Add TODO's name validation
    //
    // const valid = isValidInput(input.value)
    // if(valid) {
      // fetch('../todo/create', {
      //   method: 'POST',
      //   body: JSON.stringify({ "title": input.value })
      // })
    // }
    closeModal(e);
  });

  return confirm
}

function inputTodoName() {
  const input = document.createElement('input');
  input.placeholder = "TODO's name...";
  input.type = 'text';
  input.classList.add('modal-input');

  return input
}

function closeModal(e) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.style.opacity = 0;

  const modal = document.querySelector('.modal');

  setTimeout(() => document.body.removeChild(modal), 100);
}