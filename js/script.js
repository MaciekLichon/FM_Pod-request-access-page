
const form = document.querySelector('.hero__form');
const formInput = form.querySelector('.hero__input');
const errorMsg = form.querySelector('.hero__formErrorMsg');
const emailTemplate = /.+\@.+\..+/;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputValue = formInput.value;
  
  if (!inputValue || !inputValue.match(emailTemplate)) {
    errorMsg.classList.add('error');
  } else {
    errorMsg.classList.remove('error');
    form.reset();
  }
})
