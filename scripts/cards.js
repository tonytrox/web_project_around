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

// Crea los elementos de las tarjetas

function createCard(card){
  
  const elementCard = document.createElement("li");
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
    elementCard.remove();
  } );
  
  // añade el Elemento creado al inicio del contenedor de imagenes.
  containerCard.prepend(elementCard); // Variable declarado en index.js

  elementCard.append(elementContainer);
  elementContainer.append(elementImage, elementDescription);
  elementDescription.append(elementText);
  elementDescription.append(likeButton);
  elementDescription.append(deleteButton);
};

function inicializarInitialCards(){
  initialCards.forEach(function (card) {
    createCard(card);
  });
};

inicializarInitialCards();

// boton Guardar Form Add Place
const saveButtonPlace = document.querySelector("#save_place");

// Añadir Card desde el formulario Add Place:
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const placeInput = document.querySelector(".form__place");
  const imageInput = document.querySelector(".form__image-link");
  
  const card = {
    place: placeInput.value,
    link: imageInput.value,
  };

  createCard(card);
};

// Añade la tarjeta y cierra el formulario al presionar "CREAR"
function handleSaveButtonPlace(evt){
  handlePlaceFormSubmit(evt);
  hideVisibility();
};

saveButtonPlace.addEventListener("click", handleSaveButtonPlace);