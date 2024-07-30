import { Popup } from "./Popup.js";
export class Card {
    constructor(place, link, selector, handleCardClick) { //recibe 3 parametros
        this._place = place;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    _getCloneCard() {
        const cardElement = document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(true);
        return cardElement;   
    }

    _setEventListen(element) {
        const buttonLike = element.querySelector(".element__like-button");
        buttonLike.addEventListener("click", this._handleLikeButton)

        const buttonTrash = element.querySelector(".element__remove-button");
        buttonTrash.addEventListener("click", this._handleRemoveButton);       

        element.querySelector('.element__img').addEventListener('click', () => {
            this._handleCardClick({ src: this._link, alt: this._place });
        });
    }
    
    _handleLikeButton(event) {
        const buttonLikeActive = event.target.classList.toggle("element__like-button_active");
        const counter = event.target.closest(".element__card").querySelector(".element__counter"); 
        //counter.textContent = likes.length;
        
        if (buttonLikeActive) {
            counter.textContent = "1";
        } else {
            counter.textContent = "0";
        }

    }

    _handleRemoveButton(event) {
        
        const popupConfirmCard = document.querySelector("#popup-confirm-card");
        popupConfirmCard.classList.add('popup_opened');
        
        const buttonTrash = event.target.closest(".element__card").querySelector(".element__remove-button");
        buttonTrash.addEventListener("click", this._handleRemoveButton);

        // const listItem = event.target.closest(".element__card");
        // listItem.remove();
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