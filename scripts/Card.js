export class Card {
    constructor(place, link, selector) { //recibe 3 parametros
        this._place = place;
        this._link = link;
        this._selector = selector;
    }

    _getCloneCard() {
        const cardElement = document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(true);
        cardElement.querySelector(".element__text").textContent = this._place;
        cardElement.querySelector(".element__img").src = this._link;
        return cardElement;   
    }

    _setEventListen(element) {
        const buttonLike = element.querySelector(".element__like-button");
        buttonLike.addEventListener("click", this._handleLikeButton)

        const buttonTrash = element.querySelector(".element__remove-button");
        buttonTrash.addEventListener("click", this._handleRemoveButton);
    }
    
    _handleLikeButton(event) {
        event.target.classList.toggle("element__like-button_active");
    }

    _handleRemoveButton(event) {
        const listItem = event.target.closest(".element__card");
        listItem.remove();
    }
    
    generateCard(){ // metodo público
        const element = this._getCloneCard();
        this._setEventListen(element);
        return element;
    }
}