!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var r=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))},(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonFormState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListenersForm",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonFormState()}))})),this._toggleButtonFormState()}},{key:"enableValidation",value:function(){this._setEventListenersForm()}}])&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var c=function(){return t=function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._place=e,this._link=n,this._selector=r,this._handleCardClick=o},(e=[{key:"_getCloneCard",value:function(){return document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(!0)}},{key:"_setEventListen",value:function(t){var e=this;t.querySelector(".element__like-button").addEventListener("click",this._handleLikeButton),t.querySelector(".element__remove-button").addEventListener("click",this._handleRemoveButton),t.querySelector(".element__img").addEventListener("click",(function(){e._handleCardClick({src:e._link,alt:e._place})}))}},{key:"_handleLikeButton",value:function(t){t.target.classList.toggle("element__like-button_active")}},{key:"_handleRemoveButton",value:function(t){t.target.closest(".element__card").remove()}},{key:"generateCard",value:function(){var t=this._getCloneCard();return t.querySelector(".element__text").textContent=this._place,t.querySelector(".element__img").src=this._link,t.querySelector(".element__img").alt=this._place,this._setEventListen(t),t}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}var f=function(){return t=function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=n},(e=[{key:"rendererElement",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}var b=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._popupCloseButton=document.querySelectorAll("#form__exit-button"),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickOutside=this._handleClickOutside.bind(this)},(e=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("click",this._handleClickOutside),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickOutside",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.forEach((function(e){return e.addEventListener("click",(function(){t.close()}))}))}}])&&y(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}function _(t,e,n){return e=E(e),function(t,e){if(e&&("object"==v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,S()?Reflect.construct(e,n||[],E(t).constructor):e.apply(t,n))}function S(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(S=function(){return!!t})()}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(null,arguments)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}var k=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=_(this,e,[n]))._handleFormSubmit=t,r._formElement=r._popupElement.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r.setEventListeners(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(e,t),n=e,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;g(E(e.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){g(E(e.prototype),"close",this).call(this)}}])&&h(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(b);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!=C(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(e)?e:e+""}function O(t,e,n){return e=T(e),function(t,e){if(e&&("object"==C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,L()?Reflect.construct(e,n||[],T(t).constructor):e.apply(t,n))}function L(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(L=function(){return!!t})()}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(null,arguments)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}var I=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=O(this,e,[t]))._imagePopup=document.querySelector("#popup__image"),n._imageCaption=document.querySelector("#popup__caption"),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(e,t),n=e,(r=[{key:"open",value:function(t){var n=t.alt,r=t.src;this._imagePopup.src=r,this._imagePopup.alt=n,this._imageCaption.textContent=n,q(T(e.prototype),"open",this).call(this)}}])&&P(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(b);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,D(r.key),r)}}function D(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var U=function(){return t=function t(e){var n=e.userName,r=e.userDescription;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userDescription=r},(e=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userDescription:this._userDescription.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description;this._userName.textContent=e,this._userDescription.textContent=n}}])&&R(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,F(r.key),r)}}function F(t){var e=function(t,e){if("object"!=N(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==N(e)?e:e+""}var V,G=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl="https://around.nomoreparties.co/v1/web_es_10",this._headers={"content-type":"application/json",Authorization:"d1315ee3-c0aa-41a4-8107-d76afccb8021"}},(e=[{key:"getInfoProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"updateProfile",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})})}},{key:"postCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})})}},{key:"setLikes",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers})}}])&&A(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},z=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),M=document.querySelector("#form_add-element"),K=document.querySelector("#form_edit-profile"),Q=document.querySelector(".elements__list"),W=document.querySelector(".profile__title"),X=document.querySelector(".profile__description"),Y=document.querySelector(".profile__image"),Z=document.querySelector(".form__name"),$=document.querySelector(".form__description"),tt=new G,et=new U({userName:W,userDescription:X}),nt=new k((function(t){et.setUserInfo({name:t.name,description:t.description}),tt.updateProfile(t.name,t.description).then((function(t){return t.json()})).then((function(t){W.textContent=t.name,X.textContent=t.about})).catch((function(t){console.log(t)}))}),"#popup-edit-profile");function rt(t,e){return new c(t,e,"#card-template",ut).generateCard()}z.addEventListener("click",(function(){nt.open()}));var ot=new k((function(t){tt.postCard(t.place,t.link).then((function(t){return t.json()})).then((function(t){var e=rt(t.name,t.link);V.addItem(e)})).catch((function(t){console.log(t)}))}),"#popup-add-place");H.addEventListener("click",(function(){ot.open()}));var it=new I("#popup-image");function ut(t){it.open(t)}it.setEventListeners(),new r(M,J).enableValidation(),new r(K,J).enableValidation(),tt.getInfoProfile().then((function(t){return t.json()})).then((function(t){W.textContent=t.name,X.textContent=t.about,Y.src=t.avatar,Y.alt=t.name})).then((function(){Z.value=W.textContent,$.value=X.textContent})).catch((function(t){console.log(t)})),tt.getInitialCards().then((function(t){return t.json()})).then((function(t){(V=new f({items:t,renderer:function(t){var e=rt(t.name,t.link);V.addItem(e)}},Q)).rendererElement()})).catch((function(t){console.log(t)}))}();