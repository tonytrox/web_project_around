export class Section {
    constructor({items, renderer}, containerSelector){
        this._items = items; //recibe el array
        this._renderer = renderer; //renderiza los datos
        this._container = containerSelector; //selector del contenedor
    }

    rendererElement(){
         this._items.forEach((item) => {
            // pasa una función por el parametro _renderer (constructor)
            this._renderer(item);
         })
    }

    addItem(elem){ //toma un elemento y lo añade al contenedor
        this._container.prepend(elem);
    }
 }  