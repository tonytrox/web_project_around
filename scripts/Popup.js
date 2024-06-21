export class Popup {
    constructor(selectorPopup){
        this._popupElement = document.querySelector(selectorPopup);
        // this._popupCloseButton = document.querySelectorAll("form__exit-button");
        this._handleEscClose = this._handleEscClose.bind(this); // lo mantiene dentro del contexto.
        this._handleClickOutside = this._handleClickOutside.bind(this); // lo mantiene dentro del contexto.
    }
    open(){
        this._popupElement.classList.add("popup_opened"); // abre popup
        document.addEventListener("click", () => {
            this._handleEscClose()
            this._handleClickOutside()
        })
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
        return (evt.target.classList.contains("popup__opened"));
    }

    setEventListeners(){
        // this._popupCloseButton.addEventListener("Click", () => {
        //     this.close();
        // });

        popup.addEventListener("click", (event) => {
            if(this._handleClickOutside(event)){
                this.close();
            };
        });
    }
}