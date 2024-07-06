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
const cardContainerSelector = document.querySelector(".elements__list");

// Seleccionar los campos: Profile Info
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
// Recibir los valores del formulario:
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__description");


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
  const cardPlace = createCard(data.place, data.link);
  cardSection.addItem(cardPlace);
},"#popup-add-place");

addCardButton.addEventListener("click",() => {
  popupAddPlace.open();
});





// recibe los parametros y genera el elemento card (Card.js)
function createCard(place, link){ 
  const card = new Card (place, link, "#card-template", handleCardClick);
  return card.generateCard();
}

// renderiza los elementos en el contenedor (Section.js)
const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item.place, item.link);
    cardSection.addItem(cardElement);
  },
}, cardContainerSelector);



// Popup Image  
const imagePopupModal = new PopupWithImage("#popup-image-container");
imagePopupModal.setEventListeners();

function handleCardClick(data) {
  imagePopupModal.open(data);
}


const popupValidateAddElement = new FormValidator(formAddElement, settings);
popupValidateAddElement.enableValidation();

const popupValidateFormProfile = new FormValidator(formEditProfile, settings);
popupValidateFormProfile.enableValidation();


// Codigo ejecutable
cardSection.rendererElement();

// Muestra los valores en los campos "input" del formulario
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;


