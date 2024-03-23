const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonFormState = (inputList, buttonElement, setting) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(setting.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(setting.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const showInputError = (formElement, inputElement, errorMessage, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(setting.inputErrorClass);
  errorElement.classList.add(setting.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(setting.inputErrorClass);
  errorElement.classList.remove(setting.errorClass);
  errorElement.textContent = "";
};


const checkInputValidity = (formElement, inputElement, setting) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, setting);
  } else {
    hideInputError(formElement, inputElement, setting);
  }
};

const setEventListenersForm = (formElement, setting) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, setting);
      toggleButtonFormState(inputList, buttonElement, setting);
    });
    });
    
    const buttonElement = formElement.querySelector(setting.submitButtonSelector);
    toggleButtonFormState(inputList, buttonElement, setting);
};


const enableValidation = (setting) => {
  const formList = Array.from(document.querySelectorAll(setting.formSelector));
  
  formList.forEach((formElement) => { // intera en todos los elementos del form
    formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
    setEventListenersForm(formElement, setting);
  });

};

enableValidation({
        formSelector: ".popup__form",
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__button",
        inactiveButtonClass: "popup__button_disabled",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
      });
      
