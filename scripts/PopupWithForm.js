import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector){
        super(popupSelector); // llama al constructor padre y le manda el selector..
        this._handleFormSubmit = handleFormSubmit; // función..
        this._formElement = this._popupElement.querySelectorAll(".popup__form");
        this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input")); //crea un array de los input
    }
    
    _getInputValues(){ // recopila los input y sus valores en un nuevo objeto
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    setEventListeners(){
        super.setEventListeners();
        super._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this._getInputValues()); // le pasa los input al manejador de envio de datos
        })
    }

    close(){
        super.close();
        this._popupElement.reset();
    }
}
