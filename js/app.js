document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", validarFormulario);
});

const validarFormulario = (evento) => {
  evento.preventDefault();

  validateName();
  validateLastname();
  validateEmail();
  validatePassword();

  if (validateName() === true && validateLastname() === true && validateEmail() === true && validatePassword() === true) {
    formulario.submit();
  }

}


const validateName = () => {
  const inputName = document.getElementById("name").value;
  const icon = document.querySelector(".icon-name");
  const p = document.querySelector(".p-input-name");
  console.log(icon);
  if (inputName.length == 0 || inputName.length > 30 || inputName.length < 6) {
    p.classList.add("p-input-active");
    icon.classList.add("icon-active");
    return false;
  } else {
    p.classList.remove("p-input-active");
    icon.classList.remove("icon-active")
    return true;
  }
}

const validateLastname = () => {
  const inputLastName = document.getElementById("lastname").value;
  const icon = document.querySelector(".icon-lastname");
  const p = document.querySelector(".p-input-lastname");
  if (inputLastName.length == 0 || inputLastName.length > 30 || inputLastName.length < 6) {
    p.classList.add("p-input-active");
    icon.classList.add("icon-active");
    return false;
  } else {
    p.classList.remove("p-input-active");
    icon.classList.remove("icon-active");
    return true;
  }
}


const validateEmail = () => {
  const inputEmail = document.getElementById("email").value;
  const icon = document.querySelector(".icon-email");
  const p = document.querySelector(".p-input-email");
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(inputEmail)) {
    p.classList.remove("p-input-active");
    icon.classList.remove("icon-active");
    return true;
  } else {
    p.classList.add("p-input-active");
    icon.classList.add("icon-active");
    return false;
  }
}

const validatePassword = () => {
  const inputPassword = document.getElementById("password").value;
  const icon = document.querySelector(".icon-password");
  const p = document.querySelector(".p-input-password");
  if (inputPassword.length == 0 || inputPassword.length > 30 || inputPassword.length < 6) {
    p.classList.add("p-input-active");
    icon.classList.add("icon-active");
    return false;
  } else {
    p.classList.remove("p-input-active");
    icon.classList.remove("icon-active");
    return true;
  }

}

const validateAll = () => {
  
}