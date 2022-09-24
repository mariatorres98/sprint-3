const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/16.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/03/28/00/31/lighthouse-3267925_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Offices</div>
            <div class="rent">Rent</div>
            <div class="fav" name="16">🤍</div>
        </div>                  
        <div class="price">USD $3,619 per month </div>
        <div class="lugar">Québec</div>
        <div class="directopn1">5122 Av. du Parc, Le Plateau-Mont-Royal, QC H2V4G5, CA, Le Plateau-Mont-Royal, Québec</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>700 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);