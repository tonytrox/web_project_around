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
// const editAvatarButton = document.querySelector(".profile__edit-avatar");
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
let cardSection;

const api = new Api();
const currentUserId = api._userId;

// Popup Edit Profile
const userInformation = new UserInfo({
  userName: profileName,
  userDescription: profileDescription
});


// (2) Actualizar la interfaz con los datos recibidos de la API
const popupProfileUser = new PopupWithForm (async(data) => {
  userInformation.setUserInfo({
    name: data.name,
    description: data.description
  });

//(1) obtiene los datos completos de la API y actualiza la interfaz
  const apiResponse = await api.updateProfile(data.name, data.description)
  const respondeJson = await apiResponse.json();
  profileName.textContent = respondeJson.name;
  profileDescription.textContent = respondeJson.about;
  return respondeJson;
  
}, "#popup-edit-profile");

editButton.addEventListener("click",() => {
  popupProfileUser.open();
});


function createCard(name, link, likes, _id, owner) {
  const card = new Card(
    name,
    link,
    "#card-template",
    handleCardClick,
    likes,
    _id,
    owner,
    currentUserId,
    {handleDeleteCard: (cardId, callback) => {
      popupWithConfirm.open(() => {
        return api.deleteCard(cardId)
        .then(() => {
          callback();
        })
        .catch((err) => {
          console.log(err);
        });
      })
    },
    handleAddLikes: (cardId) => {
      return api.putLikesCard(cardId)
    },
    handleRemoveLikes: (cardId) => {
      return api.removeLikesCard(cardId)
    }

    }
  ); // constructor
  return card.generateCard();
}



const popupAddPlace = new PopupWithForm ((formData) => {
  return api.postCard(formData.place, formData.link) // llama a la API
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



const popupValidateAddElement = new FormValidator(formAddElement, settings);
popupValidateAddElement.enableValidation();

const popupValidateFormProfile = new FormValidator(formEditProfile, settings);
popupValidateFormProfile.enableValidation();

const popupWithConfirm = new PopupWithConfirmation("#popup-confirm-card");
popupWithConfirm.setEventListeners();


// API

api.getInfoProfile() // llama a la API
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

const editAvatarButton = document.querySelector(".profile__avatar");

const formEditAvatar = new PopupWithForm((data) => {
const avatarUrl = data.link; // Obtener la URL del input

 return api.updateAvatar(avatarUrl)
    .then(responseJson => {
      profileAvatar.src = responseJson.avatar; // Actualizar el src de la imagen del avatar
    })
    .catch(err => {
      console.log(err);
    });
}, "#popup-edit-avatar");

editAvatarButton.addEventListener("click", () => {
  formEditAvatar.open();
});