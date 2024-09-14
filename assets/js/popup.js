const opens = document.querySelectorAll('.open');

opens.forEach((open) => {
  const popupContainer = open.parentElement.nextElementSibling;
  open.addEventListener('click',()=> {
    popupContainer.classList.add('appear');
  })

  const close = popupContainer.querySelector('.close');
  close.addEventListener('click',()=> {
    popupContainer.classList.remove('appear');
  })
});