const popup = document.querySelector(".popup");
const formElement = document.querySelector(".form");
const editButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const exitButtons = document.querySelectorAll(".form__exit-button");
const formAddElement = document.querySelector("#form_add-element");
const formEditProfile = document.querySelector("#form_edit-profile");

function ChangeVisibility() {
  popup.classList.toggle("popup_opened");
};

function HideVisibility() {
  popup.classList.remove("popup_opened");
};

// selecciona ambos "form__exit-button" y añade el evento:
exitButtons.forEach((btn) => {
  btn.addEventListener("click", HideVisibility);
})

// Abre el formulario -> Edit Profile:
editButton.addEventListener("click", function () {
  ChangeVisibility();
  formEditProfile.style.display = "flex";
  formAddElement.style.display = "none";
});

// Abre el formulario -> Add Card:
addCardButton.addEventListener("click", function () {
  ChangeVisibility();
  formAddElement.style.display = "flex";
  formEditProfile.style.display = "none";
});

// Cerrar Popup con la tecla ESC
function closePopupKeyEscape(event) {
  if (event.key === "Escape") {
    
    HideVisibility();
    formEditProfile.style.display = "none";
    formAddElement.style.display = "none";

    // cierra el popup-image de la imagen actual
    closePopup(imagePopupOpen);
  }
}

// Agregar un escuchador de eventos para la tecla 'Escape'
document.addEventListener("keydown", closePopupKeyEscape);


// Si se realiza click por fuera del formulario se cierra el popup
// al detectar que el target apunta fuera del formulario (capa semitransparente/popup).
popup.addEventListener("click", function(evt){
  if(evt.target === popup){
    HideVisibility();
  };
});
