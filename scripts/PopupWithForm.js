import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector){
        super(popupSelector); // llama al constructor padre y le manda el selector..
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input"));

        this.setEventListeners(); // setea los eventos a todos los formularios que vengan de popup
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
        
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); // le pasa los input al manejador de envio de datos
            this.close();
        })
    }

    close(){
        super.close();
        //this._formElement.reset();
    }
}
