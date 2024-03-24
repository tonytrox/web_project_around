
//////-- PROFILE EDIT --//////

const saveButtonProfile = document.querySelector("#save_profile");

// Seleccionar los campos: Profile Info
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");

// Recibir los valores del formulario:
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

// Muestra los valores en los campos "input" del formulario
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

// El botón guarda los datos y cierra el popup
function handleSaveButtonProfile(evt) {
  handleProfileFormSubmit(evt);
  HideVisibility();
};

saveButtonProfile.addEventListener("click", handleSaveButtonProfile);
