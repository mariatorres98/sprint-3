const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += ` 
        <article class="card" onclick="location.href='/../new/propiedades/2.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">House</div>
            <div class="rent">Sell</div>
            <div class="fav" name="2">🤍</div>
        </div>                  
        <div class="price">USD $529,463</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">830-832 Av. Belvédère, Québec (La Cité-Limoilou), Québec G1S3E8</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>991 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);