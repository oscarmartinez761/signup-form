document.addEventListener("DOMContentLoaded", function () {
    form.addEventListener('submit', checkForm);
})

let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.form input');


const checkForm = (e) => {
    e.preventDefault();
    
    inputs.forEach(input =>{
       if(!input.value) {
           input.parentElement.classList.add('error');
       } else {
        input.parentElement.classList.remove('error');
        if(input.type==='email'){
            if(validateEmail(input.value)){
                input.parentElement.classList.remove('error');
            }else {
                input.parentElement.classList.add('error');
            }
        }

       }
    });

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };