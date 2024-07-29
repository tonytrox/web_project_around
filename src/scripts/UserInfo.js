export class UserInfo {
    constructor({userName, userDescription}){ // recibe un objeto con dos propiedades
        this._userName = userName;
        this._userDescription = userDescription;
    }

    getUserInfo(){
        //devuelve un objeto con la información del usuario. 
        //obtiene el contenido de texto de los elementos correspondientes del DOM
        return {
            userName: this._userName.textContent,
            userDescription: this._userDescription.textContent,
        }
    }
    setUserInfo(data){
        const {name, description} = data;
        this._userName.textContent = name;
        this._userDescription.textContent = description;
        // toma los datos del nuevo usuario y los agrega en la página.
    }
}
