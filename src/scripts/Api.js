export class Api {
    constructor(){
      this._baseUrl = "https://around.nomoreparties.co/v1/web_es_10";
      this._headers = {
        "content-type": "application/json",
        "Authorization": "d1315ee3-c0aa-41a4-8107-d76afccb8021"
    }}

    getInfoProfile(){
      return fetch (`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: this._headers
      })
    };
    
    // obtiene los datos completos de las tarjetas
    getInitialCards() {
      return fetch (`${this._baseUrl}/cards`, {
        method: "GET",
        headers: this._headers
      })
    };
  
    // pasar los datos del formulario a la API
    updateProfile(name, about) { // espera 2 valores!
      return fetch (`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: name, 
          about: about
        })
      })
    };

    postCard(name, link) {
      return fetch (`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name, 
          link: link
        })
      })
    };

    deleteCard(cardId) {
      return fetch (`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      })
    };

    // putLikes(cardId) {
    //   return fetch (`${this._baseUrl}/cards/likes/${cardId}`, {
    //     method: "PUT",
    //     headers: this._headers,
    //   })
    // };

  };


