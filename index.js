const openDialogButton = document.querySelector('button');
const dialog = document.querySelector('dialog');
const closeDialogButton = dialog.querySelector('button');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  dialog.close();
});