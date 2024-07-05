import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selectorPopup){
        super(selectorPopup);
        this._imagePopup = document.querySelector("#popup__image");
        this._imageCaption = document.querySelector("#popup__caption")
    }
    
    open({image, name}){
        this._imagePopup.src = image;
        this._imagePopup.alt = name;
        this._imageCaption.textContent = name;

        super.open();
    } 
}