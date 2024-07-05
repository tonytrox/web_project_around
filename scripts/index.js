import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";
import {Section} from "./Section.js";
import {Popup} from "./Popup.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {UserInfo} from "./UserInfo.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

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

const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");
const popupTemplate = document.querySelector("#popup-template");
const containerCard = document.querySelector(".elements__list");
const popup = document.querySelector(".popup");
const saveButtonProfile = document.querySelector("#save_profile");
const cardContainerSelector = document.querySelector(".elements__list");
const saveButtonPlace = document.querySelector("#save_place");

// Seleccionar los campos: Profile Info
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
// Recibir los valores del formulario:
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__description");

const placeInput = document.querySelector(".form__place");
const imageInput = document.querySelector(".form__image-link");
  
const place = placeInput.value;
const link = imageInput.value;

// inicializar el popup image como null (vacio)
let imagePopupOpen = null;





// renderiza los elementos en el contenedor (Section.js)
const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item.place, item.link);
    cardSection.addItem(cardElement);
  },
}, cardContainerSelector);

const popupValidateAddElement = new FormValidator(formAddElement, settings);
popupValidateAddElement.enableValidation();

const popupValidateFormProfile = new FormValidator(formEditProfile, settings);
popupValidateFormProfile.enableValidation();


// Codigo ejecutable

cardSection.rendererElement();

// Muestra los valores en los campos "input" del formulario
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;





// Popup Edit Profile
const userInformation = new UserInfo({
  userName: profileName,
  userJobs: profileJob
});

const popupProfileUser = new PopupWithForm ((data) => {
  userInformation.setUserInfo({
    name: data.name,
    description: data.description
  });

}, "#popup-edit-profile");

editButton.addEventListener("click",() => {
  popupProfileUser.open();
});




// Popup Add Card
const popupAddPlace = new PopupWithForm ((data) => {
  const cardPlace = createCard(data.place, data.image-link);
  cardSection.addItem(cardPlace);
  
},"#popup-add-place");

addCardButton.addEventListener("click",() => {
  popupAddPlace.open();
});




// EVENTOS

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

};
});


//FUNCIONES

// función cerrar image popup:
function closePopup(event) {
  if (event) {
    event.classList.add("popup_image_remove");
  }
};


// recibe los parametros y genera el elemento card (Card.js)
function createCard(place, link){ 
  const card = new Card (place, link, "#card-template");
  return card.generateCard();
}

// const imagePopupModal = new PopupWithImage(".popup__image");


