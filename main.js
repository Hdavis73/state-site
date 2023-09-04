const submit = document.querySelector('.form-submit');

// submit.addEventListener('click', () => {
//   let inputs = Array.from(document.querySelectorAll('input'));
//   const formMessage = document.querySelector('.form-message');

//   if (inputs[0].value === inputs[1].value && inputs[0].length > 0 && inputs[1].length > 0) {
//     formMessage.classList.remove('hidden');
//     formMessage.innerText = "Thanks for your message! We'll get back to you ASAP.";
//   } else {
//     formMessage.classList.remove('hidden');
//     formMessage.innerText = 'Please ensure the Email and Confirm Email fields are filled out and matching';
//     formMessage.style.color = 'red';

//     setTimeout(() => {
//       formMessage.classList.add('hidden');
//     }, 3000);
//   }

//   console.log(inputs[0].value);
//   console.log(inputs[1].value);
// });

function checkEmail() {
  let email = document.querySelector('.enter-email').value;
  let confirmEmail = document.querySelector('.confirm-email').value;


  if (email === confirmEmail) {

    showMessage(true)
        return true;


  } else {
    showMessage(false)
    return false;
  }
}

function showMessage(matching){
    const formMessage = document.querySelector('.form-message');

    if(matching === true){
        formMessage.classList.remove('hidden');
        formMessage.innerText = "Thanks for your message! We'll get back to you ASAP.";
        formMessage.style.color = 'green';
        
        console.log('matching')
    }else{
        formMessage.classList.remove('hidden');
        formMessage.innerText = 'Please ensure the Email and Confirm Email fields are filled out and matching';
        formMessage.style.color = 'red';

        console.log('not matching')
    }

    setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 3000);
}
