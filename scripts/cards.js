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
// Selecciona el contenedor de las imagenes

const containerCard = document.querySelector(".elements__list");


function createCard(card){
  
  const Element = document.createElement("li");
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
    Element.remove();
  } );
  
  // añade el Elemento creado al inicio del contenedor de imagenes.
  containerCard.prepend(Element);
  Element.append(elementContainer);
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



///////-- CREACION EL POPUP IMAGEN --////////

// se declara la variable que conecta con la etiqueta <Template> Origen.
const popupTemplate = document.querySelector("#popup__template");

// inicializar el popup como null (vacio)
let imagePopupOpen = null;

containerCard.addEventListener("click", function (evt) {
  const imageElement = evt.target;

  // se ejecutar el IF si la variable contiene la clase .element__img

  if (imageElement.classList.contains("element__img")) {

  // crea el template/clone con sus elementos hijos.
  // se declaran las variables  

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

// función cerrar popup:
function closePopup(event) {
  if (event) {
    event.classList.add("popup_image_remove");  
  }
};