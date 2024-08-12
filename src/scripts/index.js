import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";
import {Section} from "./Section.js";
import {Popup} from "./Popup.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {UserInfo} from "./UserInfo.js";
import {Api} from "./Api.js";
import {PopupWithConfirmation} from "./PopupWithConfirmation.js";
import "../pages/index.css";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");
const cardContainerSelector = document.querySelector(".elements__list");

// Seleccionar los campos: Profile Info
let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__description");
let profileAvatar = document.querySelector(".profile__image");
// Recibir los valores del formulario:
let nameInput = document.querySelector(".form__name");
let descriptionInput = document.querySelector(".form__description");

const api = new Api();
const currentUserId = api._userId;

// Popup Edit Profile
const userInformation = new UserInfo({
  userName: profileName,
  userDescription: profileDescription
});

const popupProfileUser = new PopupWithForm ((data) => {
  // Actualizar la interfaz con los datos del perfil
  userInformation.setUserInfo({
    name: data.name,
    description: data.description
  });

  api.updateProfile(data.name, data.description)
  .then(res => res.json())
  .then((user) => {
    profileName.textContent = user.name;
    profileDescription.textContent = user.about
  })
  .catch((err) => {
    console.log(err);
  });
}, "#popup-edit-profile");

editButton.addEventListener("click",() => {
  popupProfileUser.open();
});



let cardSection;

function createCard(name, link, likes, _id, owner) {
  const card = new Card(name, link, "#card-template", handleCardClick, likes, _id, owner, popupDeleteCard, currentUserId, handleDeleteCard); // constructor
  return card.generateCard();
}



const popupAddPlace = new PopupWithForm ((formData) => {
//no es necesario llamar formData.likes por que ya lo recibe el constructor una vez que se crea el objeto
// no es necesario llamarlo antes de su creación
  api.postCard(formData.place, formData.link) // llama a la API
  .then(res => res.json())
  .then((cardData) => {
    const cardPlace = createCard(cardData.name, cardData.link, cardData.likes); // constructor
    cardSection.addItem(cardPlace);
  })
  .catch((err) => {
    console.log(err);
  });
  

},"#popup-add-place");

addCardButton.addEventListener("click",() => {
  popupAddPlace.open();
});




// Popup Image  
const imagePopupModal = new PopupWithImage("#popup-image");
imagePopupModal.setEventListeners();

function handleCardClick(data) {
  imagePopupModal.open(data);
}




function handleDeleteCard(cardId, callback) {
    return api.deleteCard(cardId)
    .then(() => {
      callback();
    });
  }






const popupValidateAddElement = new FormValidator(formAddElement, settings);
popupValidateAddElement.enableValidation();

const popupValidateFormProfile = new FormValidator(formEditProfile, settings);
popupValidateFormProfile.enableValidation();

const popupDeleteCard = new PopupWithConfirmation("#popup-confirm-card");
popupDeleteCard.setEventListeners();


// API

api.getInfoProfile() // llama a la API
.then(res => res.json())
.then((data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profileAvatar.src = data.avatar;
  profileAvatar.alt = data.name;
})
.then(() => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
})
.catch((err) => {
  console.log(err);
});


api.getInitialCards() // llama a la API
.then(res => res.json()) // Lee y transforma la respuesta en datos JSON y se lo pasa al siguiente .then
.then((data) => {
  console.log(data);
  cardSection = new Section({
  items: data,
  renderer: (item) => {
    const cardElement = createCard(item.name, item.link, item.likes, item._id, item.owner._id);
    cardSection.addItem(cardElement);
  },
}, cardContainerSelector);

cardSection.rendererElement();
})

.catch((err) => {
  console.log(err);
});

