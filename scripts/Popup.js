export class Popup {
    constructor(selectorPopup){
        this._popupElement = document.querySelector(selectorPopup);
        this._popupCloseButton = document.querySelectorAll("form__exit-button");
        this._handleEscClose = this._handleEscClose.bind(this); // lo mantiene dentro del contexto.
        this._handleClickOutside = this._handleClickOutside.bind(this); // lo mantiene dentro del contexto.
    }
    open(){
        this._popupElement.classList.add("popup_opened"); // abre popup
        document.addEventListener("click", this._handleClickOutside);
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
        this._popupElement.classList.remove("popup_opened"); // cierra popup 

    }

    _handleEscClose(evt){
        //logica para cierre con la tecla ESC
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
        // this._popupCloseButton.addEventListener("click", () => {
        //     this.close();
        // });
        
        // this._popupCloseButton.forEach((button) => {
        //     button.addEventListener("click", () => {
        //         this.close();
        //     });
        // });

        // this._popupElement.addEventListener("click", (event) => {
        //     if(this._handleClickOutside(evt)){
        //         this.close();
        //     };
        // });
    }
}