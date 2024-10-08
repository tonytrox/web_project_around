import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
    }

    open(callback) {
        super.open();
        this._onConfirm = callback;        
    }
    
    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();

        const removeCardButton = document.querySelector("#remove_card");

        removeCardButton.addEventListener("click", () => {
           this._onConfirm()
           .then(() => {
               this.close();
           })
        });

    }
    
}
