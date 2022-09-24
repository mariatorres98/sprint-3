const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/7.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/07/18/03/50/sgt-2514669_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">Sell</div>
            <div class="fav" name="7">🤍</div>
        </div>                  
        <div class="price">USD $658,972 </div>
        <div class="lugar">Québec</div>
        <div class="directopn1">101 Rue Peel #962, Montréal (Le Sud-Ouest), Québec H3C0Y1</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>500 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);