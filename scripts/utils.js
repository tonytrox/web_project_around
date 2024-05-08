export const popup = document.querySelector(".popup");
import {closePopupKeyEscape} from "./index.js"

export function changeVisibility() {

    popup.classList.toggle("popup_opened");
    if (popup.classList.contains("popup_opened")) {
      // Si el popup se abre, añade el escuchador de eventos keydown
      document.addEventListener("keydown", closePopupKeyEscape);
    } else {
      // Si el popup se cierra, elimine el escuchador de eventos keydown
      document.removeEventListener("keydown", closePopupKeyEscape);
    }
};
  
export function hideVisibility() {
    popup.classList.remove("popup_opened");
};