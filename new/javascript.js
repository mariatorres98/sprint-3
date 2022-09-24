let searchI = document.getElementById('search');

let btn = document.getElementById('boton-busqueda');

const containerCards = document.getElementById('container__cards');

const API_URL = 'http://localhost:3000/inmuebles/';

let result = [];

let favorites1 = [];

let norepetido = [];








const handleSearch = async () => {
    let text = searchI.value;
     
    let queryUrl = `${API_URL}`;

    try {
        let response = await fetch(queryUrl);
        let info = await response.json();
        info.forEach((element)=>{
            images = element.direccion;
            images == text ? result.push(element) : console.log("sin coincidencia");
            ubicacio = element.ubicacion;
            ubicacio == text ? result.push(element) : console.log("sin coincidencia");
            areaa = element.area;
            areaa == text ? result.push(element) : console.log("sin coincidencia");
            habitacioness = element.habitaciones;
            habitacioness == text ? result.push(element) : console.log("sin coincidencia");
            tipoinmueblee = element.tipoinmueble;
            tipoinmueblee == text ? result.push(element) : console.log("sin coincidencia");
            rentaa = element.renta;
            rentaa == text ? result.push(element) : console.log("sin coincidencia");
            precioo = element.precio;
            precioo == text ? result.push(element) : console.log("sin coincidencia");
            parqueaderoo = element.parqueadero;
            parqueaderoo == text ? result.push(element) : console.log("sin coincidencia");
            propietarioo = element.propietario;
            propietarioo == text ? result.push(element) : console.log("sin coincidencia");
        });
                
                result.forEach( (elemen) => {
                if (!norepetido.includes(elemen)) {
                    norepetido.push(elemen)
                    favorites1.push(elemen);;
                }
                });   
                
        renderCards(norepetido);
       
    } catch (error) {
        
        console.log(error);
    }
}

btn.addEventListener('click', handleSearch);




const renderCards = data => {
   
    
    containerCards.innerHTML = '' ;
    data.forEach(elemento => {
        let urlImage = elemento.image;
        let urlNombre = elemento.direccion;
        let urlUbicacion = elemento.ubicacion;
        let urlarea = elemento.area;
        let urlhabitaciones = elemento.habitaciones;
        let urltipoinmueble = elemento.tipoinmueble;
        let urlrenta = elemento.renta;
        let urlprecio = elemento.precio;
        let urlparqueadero = elemento.parqueadero;
        let urlpropietario = elemento.propietario;
        let urldescripcion = elemento.descripcion;
        containerCards.innerHTML += `      
        <article class="card">
        <figure>
            <img src="${urlImage}" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">${urltipoinmueble}</div>
            <div class="rent">${urlrenta}</div>
            <div class="fav" name="${elemento.id}">🤍</div>
        </div>                  
        <div class="price">${urlprecio}</div>
        <div class="lugar">${urlUbicacion}</div>
        <div class="directopn1">${urlNombre}</div>
        <div class="cardmiddle">
            <div class="contactt">${urlpropietario}</div>
            
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>${urlarea}</strong> </div>
            <div class="rooms">🛏 ${urlhabitaciones}</div>
            <div class="parquing">🚗${urlparqueadero}</div>
        </div> 
    </article>
        `
    });
    result = [];
    norepetido = [];
}


let favorites = JSON.parse(sessionStorage.getItem('favoritesp'))||[];

document.addEventListener('click',({target})=>{
    if (target.classList.contains('fav')){
       const guardado = favorites1.find(item =>item.id==target.getAttribute('name'));
       const elementoe = favorites.some(item=>item.id==guardado.id);
       if (elementoe==false){
        favorites.push(guardado); 
        sessionStorage.setItem('favoritesp',JSON.stringify(favorites));
        console.log(favorites);
       }   
    }
})


