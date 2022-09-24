const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/14.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">Rent</div>
            <div class="fav" name="14">🤍</div>
        </div>                  
        <div class="price">USD $2,133 per month</div>
        <div class="lugar">Otawa</div>
        <div class="directopn1">62 Rue Meadowvale, Dollard-Des Ormeaux, Québec H9H1N7</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Not</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>700 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);