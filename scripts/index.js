const popup = document.querySelector(".popup");
const formElement = document.querySelector(".form");
const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const exitButtons = document.querySelectorAll(".form__exit-button");
const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");

function changeVisibility() {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
    // Si el popup se abre, añade el escuchador de eventos keydown
    document.addEventListener("keydown", closePopupKeyEscape);
  } else {
    // Si el popup se cierra, elimine el escuchador de eventos keydown
    document.removeEventListener("keydown", closePopupKeyEscape);
  }
};

function hideVisibility() {
  popup.classList.remove("popup_opened");
};

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
function closePopupKeyEscape(event) {
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
const popupTemplate = document.querySelector("#popup__template");
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