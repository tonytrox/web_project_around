import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector){
        super(popupSelector); // llama al constructor padre y le manda el selector..
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".popup__form");
        this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input"));

        this.setEventListeners(); // setea los eventos a todos los formularios que vengan de popup
    }
    
    _getInputValues(){ // recopila los inputs del form
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
            this._popupElement.querySelector(".form__save-button").textContent = "Guardando..."

            this._handleFormSubmit(this._getInputValues()) // obtiene los valores del form (como si fuese un apiResponse de la API) convirtiendose en una promesa
            .then(() => this.close())
            .catch((err) => console.log(err))
            .finally(() => this._popupElement.querySelector(".form__save-button").textContent = "Guardar");
        })
    }

    close(){
        super.close();
        //this._formElement.reset();
    }
}
