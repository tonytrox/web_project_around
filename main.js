/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var r=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))},(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonFormState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListenersForm",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonFormState()}))})),this._toggleButtonFormState()}},{key:"enableValidation",value:function(){this._setEventListenersForm()}}])&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var c=function(){return t=function t(e,n,r,o,i,u,c,a,l){var s=l.handleDeleteCard,f=l.handleAddLikes,p=l.handleRemoveLikes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._place=e,this._link=n,this._selector=r,this._handleCardClick=o,this._likes=i,this._id=u,this._owner=c,this._currentUserId=a,this._handleDeleteCard=s,this._handleAddLikes=f,this._handleRemoveLikes=p},(e=[{key:"_getCloneCard",value:function(){return document.querySelector(this._selector).content.querySelector(".element__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(t){var e=this,n=t.querySelector(".element__like-button"),r=t.classList.contains("element__like-button_active");n.addEventListener("click",(function(){r?e._handleAddLikes(e._id,(function(){t.classList.add("element__like-button_active"),t.querySelector(".element__counter").textContent=e._likes.length})):e._handleRemoveLikes(e._id,(function(){t.classList.remove("element__like-button_active"),t.querySelector(".element__counter").textContent=e._likes.length}))})),t.querySelector(".element__img").addEventListener("click",(function(){e._handleCardClick({src:e._link,alt:e._place})}))}},{key:"generateCard",value:function(){var t=this,e=this._getCloneCard();return e.querySelector(".element__remove-button").addEventListener("click",(function(){t._handleDeleteCard(t._id,(function(){e.remove()}))})),this._owner!=this._currentUserId&&e.querySelector(".element__remove-button").remove(),e.querySelector(".element__text").textContent=this._place,e.querySelector(".element__img").src=this._link,e.querySelector(".element__img").alt=this._place,e.querySelector(".element__counter").textContent=this._likes.length,this._setEventListeners(e),e}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}var f=function(){return t=function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=n},(e=[{key:"rendererElement",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}var m=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._popupCloseButton=document.querySelectorAll("#form__exit-button"),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickOutside=this._handleClickOutside.bind(this)},(e=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("click",this._handleClickOutside),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickOutside",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.forEach((function(e){return e.addEventListener("click",(function(){t.close()}))}))}}])&&y(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}function _(t,e,n){return e=S(e),function(t,e){if(e&&("object"==v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,g()?Reflect.construct(e,n||[],S(t).constructor):e.apply(t,n))}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(null,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}var k=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=_(this,e,[n]))._handleFormSubmit=t,r._formElement=r._popupElement.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r.setEventListeners(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(e,t),n=e,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;w(S(e.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._popupElement.querySelector(".form__save-button").textContent="Guardando...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).catch((function(t){return console.log(t)})).finally((function(){return t._popupElement.querySelector(".form__save-button").textContent="Guardar"}))}))}},{key:"close",value:function(){w(S(e.prototype),"close",this).call(this)}}])&&d(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(m);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,j(r.key),r)}}function j(t){var e=function(t,e){if("object"!=O(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(e)?e:e+""}function C(t,e,n){return e=T(e),function(t,e){if(e&&("object"==O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,P()?Reflect.construct(e,n||[],T(t).constructor):e.apply(t,n))}function P(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(P=function(){return!!t})()}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(null,arguments)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}var I=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=C(this,e,[t]))._imagePopup=document.querySelector("#popup__image"),n._imageCaption=document.querySelector("#popup__caption"),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(e,t),n=e,(r=[{key:"open",value:function(t){var n=t.alt,r=t.src;this._imagePopup.src=r,this._imagePopup.alt=n,this._imageCaption.textContent=n,x(T(e.prototype),"open",this).call(this)}}])&&L(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(m);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,D(r.key),r)}}function D(t){var e=function(t,e){if("object"!=R(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==R(e)?e:e+""}var N=function(){return t=function t(e){var n=e.userName,r=e.userDescription;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userDescription=r},(e=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userDescription:this._userDescription.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description;this._userName.textContent=e,this._userDescription.textContent=n}}])&&B(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,F(r.key),r)}}function F(t){var e=function(t,e){if("object"!=U(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==U(e)?e:e+""}var G=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl="https://around.nomoreparties.co/v1/web_es_10",this._headers={"content-type":"application/json",Authorization:"d1315ee3-c0aa-41a4-8107-d76afccb8021"},this._userId="3b1c7f7a9ba36cb4ce8e9c33"},(e=[{key:"getInfoProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"updateProfile",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})})}},{key:"postCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})})}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"putLikesCard",value:function(t){return console.log("put Likes"),fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers})}},{key:"RemoveLikesCard",value:function(t){return console.log("remove Likes"),fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers})}}])&&A(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Y(r.key),r)}}function Y(t){var e=function(t,e){if("object"!=V(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==V(e)?e:e+""}function z(t,e,n){return e=K(e),function(t,e){if(e&&("object"==V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,H()?Reflect.construct(e,n||[],K(t).constructor):e.apply(t,n))}function H(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(H=function(){return!!t})()}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(null,arguments)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}function Q(t,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Q(t,e)}var W=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,e,[t])}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Q(t,e)}(e,t),n=e,(r=[{key:"open",value:function(t){M(K(e.prototype),"open",this).call(this),this._onConfirm=t}},{key:"close",value:function(){M(K(e.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;M(K(e.prototype),"setEventListeners",this).call(this),document.querySelector("#remove_card").addEventListener("click",(function(){t._onConfirm().then((function(){t.close()}))}))}}])&&J(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(m);function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Z(){Z=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,u=Object.create(i.prototype),c=new x(r||[]);return o(u,"_invoke",{value:L(t,n,c)}),u}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",y="suspendedYield",h="executing",m="completed",v={};function d(){}function b(){}function _(){}var g={};l(g,u,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==n&&r.call(S,u)&&(g=S);var E=_.prototype=d.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,u,c){var a=f(t[o],t,i);if("throw"!==a.type){var l=a.arg,s=l.value;return s&&"object"==X(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(a.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,n,r){var o=p;return function(i,u){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw u;return{value:t,done:!0}}for(r.method=i,r.arg=u;;){var c=r.delegate;if(c){var a=j(c,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?m:y,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var u=i.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(X(e)+" is not iterable")}return b.prototype=_,o(E,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:b,configurable:!0}),b.displayName=l(_,a,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var u=new O(s(t,n,r,o),i);return e.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},k(E),l(E,a,"Generator"),l(E,u,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],c=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var a=r.call(u,"catchLoc"),l=r.call(u,"finallyLoc");if(a&&l){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function $(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}var tt,et={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},nt=document.querySelector(".profile__edit-button"),rt=document.querySelector(".profile__add-button"),ot=document.querySelector("#form_add-element"),it=document.querySelector("#form_edit-profile"),ut=document.querySelector(".elements__list"),ct=document.querySelector(".profile__title"),at=document.querySelector(".profile__description"),lt=document.querySelector(".profile__image"),st=document.querySelector(".form__name"),ft=document.querySelector(".form__description"),pt=new G,yt=pt._userId,ht=new N({userName:ct,userDescription:at}),mt=new k(function(){var t,e=(t=Z().mark((function t(e){var n,r;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ht.setUserInfo({name:e.name,description:e.description}),t.next=3,pt.updateProfile(e.name,e.description);case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,ct.textContent=r.name,at.textContent=r.about,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){$(i,r,o,u,c,"next",t)}function c(t){$(i,r,o,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),"#popup-edit-profile");function vt(t,e,n,r,o){return new c(t,e,"#card-template",_t,n,r,o,yt,{handleDeleteCard:function(t,e){gt.open((function(){return pt.deleteCard(t).then((function(){e()})).catch((function(t){console.log(t)}))}))},handleAddLikes:function(t){return pt.putLikesCard(t)},handleRemoveLikes:function(t){return pt.RemoveLikesCard(t)}}).generateCard()}nt.addEventListener("click",(function(){mt.open()}));var dt=new k((function(t){pt.postCard(t.place,t.link).then((function(t){return t.json()})).then((function(t){var e=vt(t.name,t.link,t.likes);tt.addItem(e)})).catch((function(t){console.log(t)}))}),"#popup-add-place");rt.addEventListener("click",(function(){dt.open()}));var bt=new I("#popup-image");function _t(t){bt.open(t)}bt.setEventListeners(),new r(ot,et).enableValidation(),new r(it,et).enableValidation();var gt=new W("#popup-confirm-card");gt.setEventListeners(),pt.getInfoProfile().then((function(t){return t.json()})).then((function(t){ct.textContent=t.name,at.textContent=t.about,lt.src=t.avatar,lt.alt=t.name})).then((function(){st.value=ct.textContent,ft.value=at.textContent})).catch((function(t){console.log(t)})),pt.getInitialCards().then((function(t){return t.json()})).then((function(t){console.log(t),(tt=new f({items:t,renderer:function(t){var e=vt(t.name,t.link,t.likes,t._id,t.owner._id);tt.addItem(e)}},ut)).rendererElement()})).catch((function(t){console.log(t)}))}();