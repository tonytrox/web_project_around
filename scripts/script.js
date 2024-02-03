// abrir y cerrar el Modal

const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".form");

const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const exitButton = document.querySelector(".form__exit-button");
const saveButton = document.querySelector(".form__save-button");

const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");


function ChangeVisibility() {
  popupElement.classList.toggle("popup_opened");
}

function HideVisibility() {
  popupElement.classList.remove("popup_opened");
}

// mediante el evento click, se activa la función ChangeVisibility
// y se activa la función que cambia la visibilidad de los formularios

editButton.addEventListener("click", ChangeVisibility);
editButton.addEventListener("click", function () {
  formEditProfile.style.display = "flex";
  formAddElement.style.display = "none";
})

addCardButton.addEventListener("click", ChangeVisibility);
addCardButton.addEventListener("click", function () {
  formAddElement.style.display = "flex";
  formEditProfile.style.display = "none";
})

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


// Editar lugar




// Contenedor de las tarjetas

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];



