// abrir y cerrar el Modal

const formElement = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const exitButton = document.querySelector(".form__exit-button");
const saveButton = document.querySelector(".form__save-button");

function ChangeVisibility() {
  formElement.classList.toggle("popup_view");
}

function HideVisibility() {
  formElement.classList.remove("popup_view");
}

editButton.addEventListener("click", ChangeVisibility);
exitButton.addEventListener('click', HideVisibility);
saveButton.addEventListener('click', HideVisibility);


// Editar el perfil

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

saveButton.addEventListener("click", handleProfileFormSubmit);