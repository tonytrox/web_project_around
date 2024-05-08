import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";
import {popup} from "./utils.js"
import {changeVisibility} from "./utils.js"
import {hideVisibility} from "./utils.js"

const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const exitButtons = document.querySelectorAll(".form__exit-button");
const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");

// selecciona ambos "form__exit-button" y añade el evento:
exitButtons.forEach((btn) => {
  btn.addEventListener("click", hideVisibility);
})

// Abre el formulario -> Edit Profile:
editButton.addEventListener("click", function () {
  changeVisibility();
  formEditProfile.style.display = "flex";
  formAddElement.style.display = "none";
});

// Abre el formulario -> Add Card:
addCardButton.addEventListener("click", function () {
  changeVisibility();
  formAddElement.style.display = "flex";
  formEditProfile.style.display = "none";
});

// Cerrar Popup con la tecla ESC
export function closePopupKeyEscape(event) {
  if (event.key === "Escape") {
    
    hideVisibility();
    formEditProfile.style.display = "none";
    formAddElement.style.display = "none";

    // cierra el popup-image de la imagen actual
    closePopup(imagePopupOpen);
    document.removeEventListener("keydown", closePopupKeyEscape);
  };
}

// Agregar un escuchador de eventos para la tecla 'Escape'
function addClosePopupKeyEscapeListener() {
  document.addEventListener("keydown", closePopupKeyEscape);
};

// Si se realiza click por fuera del formulario se cierra el popup
// al detectar que el target apunta fuera del formulario (capa semitransparente/popup).
popup.addEventListener("click", function(evt){
  if(evt.target === popup){
    hideVisibility();
  };
});



// CREACION EL POPUP IMAGEN

// se declara la variable que conecta con la etiqueta <Template> Origen.
const popupTemplate = document.querySelector("#popup-template");
const containerCard = document.querySelector(".elements__list");

// inicializar el popup como null (vacio)
let imagePopupOpen = null;

containerCard.addEventListener("click", function (evt) {
  const imageElement = evt.target;

  // se ejecutar el IF si la variable contiene la clase .element__img
  if (imageElement.classList.contains("element__img")) {

  // crea el template/clone con sus elementos hijos.
  // y se declaran las variables (de sus elementos)

  const popupTemplateCopy = popupTemplate.content.cloneNode(true);

  const popupPopup = popupTemplateCopy.querySelector(".popup__image");
  const imagePopup = popupTemplateCopy.querySelector("#popup__image");
  const textPopup = popupTemplateCopy.querySelector(".element__text_popup");
  const closeButton = popupTemplateCopy.querySelector("#form__exit-button");

  // obtendra la imagen y el nombre de las variables.

  imagePopup.src = imageElement.src;
  imagePopup.alt = imageElement.alt;
  textPopup.textContent = imageElement.alt;
  

  // lo añade al final del body (popup)
  document.body.append(popupTemplateCopy);

  // Se asigna el popup abierto a la variable de comprobación, que inicio como null.
  imagePopupOpen = popupPopup;
  
  closeButton.addEventListener('click', function () {
    closePopup(imagePopupOpen);
  });

  popupPopup.addEventListener('click', function (evt) {
    // se comprueba que no se este haciendo click sobre la imagen o el texto.
    // si el click se realiza por fuera, se cierra el popup
    if (evt.target !== imagePopup && evt.target !== textPopup) {
      closePopup(imagePopupOpen);
    };
  });

  // se agrega el evento luego de ser creado el popupTemplateCopy
  addClosePopupKeyEscapeListener()

};
});

// función cerrar popup:
function closePopup(event) {
  if (event) {
    event.classList.add("popup_image_remove");
  }
};

// POPUP PROFILE

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
  hideVisibility();
};

saveButtonProfile.addEventListener("click", handleSaveButtonProfile);


// FORMVALIDATOR

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const popupValidateAddElement = new FormValidator(formAddElement, settings);
popupValidateAddElement.enableValidation();

const popupValidateFormProfile = new FormValidator(formEditProfile, settings);
popupValidateFormProfile.enableValidation();



const initialCards = [
  {
    place: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    place: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    place: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    place: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    place: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    place: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const cardsConteiner = document.querySelector(".elements__list");

function addCards(place, link){
  const cards = new Card (place, link, "#card-template");
  const cardElement = cards.generateCard();
  cardsConteiner.prepend(cardElement);
}

// inicializar initialCards

initialCards.forEach((item) => {
  addCards(item.place, item.link)
});

// boton Guardar Form Add Place
const saveButtonPlace = document.querySelector("#save_place");

// Añadir Card desde el formulario Add Place:
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const placeInput = document.querySelector(".form__place");
  const imageInput = document.querySelector(".form__image-link");
  
  const place = placeInput.value;
  const link = imageInput.value;
  
  // Creación de Card mediante FormAddPlace
  addCards(place, link);

};
   
// Añade la tarjeta y cierra el formulario al presionar "CREAR"
function handleSaveButtonPlace(evt){
  handlePlaceFormSubmit(evt);
  hideVisibility();
};

saveButtonPlace.addEventListener("click", handleSaveButtonPlace);