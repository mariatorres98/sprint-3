const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/12.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/01/25/20/53/lifestyle-3107041_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">Rent</div>
            <div class="fav" name="12">🤍</div>
        </div>                  
        <div class="price">USD $1,752 per month </div>
        <div class="lugar">Ontario</div>
        <div class="directopn1">6355 PERTH Street, Richmond, Ontario K0A 2Z0</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>700 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);