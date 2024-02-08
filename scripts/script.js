// abrir y cerrar el Modal

const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".form");

const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const exitButton = document.querySelector(".form__exit-button");
const saveButtonProfile = document.querySelector("#save_profile");

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

exitButton.addEventListener('click', HideVisibility);
saveButtonProfile.addEventListener('click', HideVisibility);

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

saveButtonProfile.addEventListener("click", handleProfileFormSubmit);







// Contenedor de las tarjetas

function createCard() {
  
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


initialCards.forEach(function (card) {
  
  const containerCard = document.querySelector(".element__list");
  const listElement = document.createElement("li");
  
  const elementContainer = document.createElement("div");
  elementContainer.classList.add("element__container");
  
  const elementImage = document.createElement("img");
  elementImage.classList.add("element__img");
  elementImage.src = card.link;
  elementImage.alt = card.place;
  
  const elementDescription = document.createElement("div");
  elementDescription.classList.add("element__description");
  
  const elementText = document.createElement("h2");
  elementText.classList.add("element__text");
  elementText.textContent = card.place;

  const likeButton = document.createElement("button");
  likeButton.classList.add("element__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__like-button_active");
  } );

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("element__remove-button");
  deleteButton.addEventListener("click", function () {
    listElement.remove();
  } );

  containerCard.append(listElement);
  listElement.append(elementContainer);
  elementContainer.append(elementImage, elementDescription);
  elementDescription.append(elementText);
  elementDescription.append(likeButton);
  elementDescription.append(deleteButton);
  
});

};

createCard();

// Editar lugar

const placeName = document.querySelector(".element__text");
const placeImage = document.querySelector(".element__img");

const placeInput = document.querySelector(".form__place");
const imageInput = document.querySelector(".form__image-link");
const saveButtonPlace = document.querySelector("#save_place");

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  placeName.textContent = placeInput.value;
  placeImage.src = imageInput.value;
}

saveButtonPlace.addEventListener("click", handlePlaceFormSubmit);






// Abrir popup de la imagen // DESARROLLO

const imageZoomPopupTemplate = document.querySelector("#popup_1");
const containerCard = document.querySelector(".element__list");
let imageZoomPopupCopy = null;


containerCard.addEventListener("click", function (event) {
  const imageElement = event.target;

  if (imageElement.classList.contains("element__img")) {
    
    const imageZoomPopupCopy = imageZoomPopupTemplate.content.cloneNode(true);
    const imagePopup = imageZoomPopupCopy.querySelector("#image_popup");
    const textPopup = imageZoomPopupCopy.querySelector(".element__text_popup"); 

    const closeButton = imageZoomPopupCopy.querySelector("#form__exit-button"); 

    textPopup.textContent = imageElement.alt;
    imagePopup.src = imageElement.src;
    
    imageZoomPopupTemplate.style.display = "flex";     // popup (fondo)
    
    document.body.append(imageZoomPopupCopy);
    
    closeButton.addEventListener('click', function () {
      imageZoomPopupTemplate.style.display = "none";
      document.body.remove(imageZoomPopupCopy);
    });
    

  }
  

});

/* 
  <template id="popup_1">
    <div class="popup__container_1">
      <button class="form__exit-button_" id="form__exit-button">EXIT</button>
      <img class="element__img element__img_popup" id="image_popup" src="" alt="" />
      <h3 class="element__text_popup"></h3>
    </div>
  </template> */


