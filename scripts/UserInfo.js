export class UserInfo {
    constructor({userName, userJobs}){ // recibe un objeto con dos selectores
        this._userName = userName;
        this._userOcupation = userJobs;
    }

    getUserInfo(){
        //devuelve un objeto con información sobre el usuario. 
        // Este método será útil para casos en los que es necesario mostrar los datos del usuario en el formulario abierto.
        return {
            userName: this._userName.textContent,
            userJobs: this._userOcupation.textContent,
        }
    }
    setUserInfo(data){
        const {name, ocupation} = data;
        this._userName.textContent = name;
        this._userOcupation.textContent = ocupation;
        // toma los datos del nuevo usuario y los agrega en la página.
    }
}
