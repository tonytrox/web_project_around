export class Popup {
    constructor(selectorPopup){
        this._popupElement = document.querySelector(selectorPopup);
        this._popupCloseButton = document.querySelectorAll("#form__exit-button"); //selecciona todos los botones de cierre de popups.
        this._handleEscClose = this._handleEscClose.bind(this); // lo mantiene dentro del contexto.
        this._handleClickOutside = this._handleClickOutside.bind(this); // lo mantiene dentro del contexto.
    }
    open(){
        this._popupElement.classList.add("popup_opened"); 
        document.addEventListener("click", this._handleClickOutside);
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("click", this._handleClickOutside);
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape"){
            this.close();
        }
    }

    _handleClickOutside(evt){
        if (evt.target.classList.contains("popup_opened")){
            this.close();
        };
    }

    setEventListeners(){
        this._popupCloseButton.forEach(button => button.addEventListener("click", () => {
                this.close();
            })
        );
    }
}