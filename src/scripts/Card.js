import { Popup } from "./Popup.js";
export class Card {
    constructor(place, link, selector, handleCardClick, likes, _id, owner, currentUserId, { handleDeleteCard }) {  // iniciar el constructor añadiendo nuevos atributos
        this._place = place;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._likes = likes;
        this._id = _id;
        this._owner = owner;
        this._currentUserId = currentUserId;
        this._handleDeleteCard = handleDeleteCard;
    }

    _getCloneCard() {
        const cardElement = document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(true);
        return cardElement;   
    }

    _setEventListeners(element) {
        const buttonLike = element.querySelector(".element__like-button");

        buttonLike.addEventListener("click", (event) => {
            this._handleLikeButton(event);
        })


        element.querySelector('.element__img').addEventListener('click', () => {
            this._handleCardClick({ src: this._link, alt: this._place });
        });
    }
    
    _handleLikeButton(event) {
        const buttonLikeActive = event.target.classList.toggle("element__like-button_active");
        console.log(event.target);

    }
    
    generateCard(){
        const element = this._getCloneCard();
        
        element.querySelector(".element__remove-button").addEventListener("click", () => {
            this._handleDeleteCard(this._id, () => {
                element.remove();
            })
        });

        if (this._owner != this._currentUserId) {
            element.querySelector(".element__remove-button").remove();
        }
        
        element.querySelector(".element__text").textContent = this._place;
        element.querySelector(".element__img").src = this._link;
        element.querySelector(".element__img").alt = this._place;
        element.querySelector(".element__counter").textContent = this._likes.length;
        this._setEventListeners(element);
        return element;
    }
}