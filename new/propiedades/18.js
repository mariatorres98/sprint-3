const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/18.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Offices</div>
            <div class="rent">Rent</div>
            <div class="fav" name="18">🤍</div>
        </div>                  
        <div class="price">USD $914 per month</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">305 Rue Principale, Sainte-Monique, QC J0G1N0, CA, Sainte-Monique, Québec</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>600 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);