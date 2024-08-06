import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
    }

    open() {
        super.open();        
    }
    
    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        
    }
    
}
