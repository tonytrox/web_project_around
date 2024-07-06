export class Card {
    constructor(place, link, selector, handleCardClick) { //recibe 3 parametros
        this._place = place;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    _getCloneCard() {
        const cardElement = document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(true);
        // cardElement.querySelector(".element__text").textContent = this._place;
        // cardElement.querySelector(".element__img").src = this._link;
        // cardElement.querySelector(".element__img").alt = this._place;
        return cardElement;   
    }

    _setEventListen(element) {
        const buttonLike = element.querySelector(".element__like-button");
        buttonLike.addEventListener("click", this._handleLikeButton)

        const buttonTrash = element.querySelector(".element__remove-button");
        buttonTrash.addEventListener("click", this._handleRemoveButton);

        element.querySelector('.element__img').addEventListener('click', () => {
            console.log("boton: ", this._link, this._place);
            this._handleCardClick({ src: this._link, alt: this._place });
          });
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
        element.querySelector(".element__text").textContent = this._place;
        element.querySelector(".element__img").src = this._link;
        element.querySelector(".element__img").alt = this._place;
        this._setEventListen(element);
        return element;
    }
}