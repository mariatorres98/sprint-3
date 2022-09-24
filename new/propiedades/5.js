const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/5.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/07/25/22/32/house-2539802_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">House</div>
            <div class="rent">Sell</div>
            <div class="fav" name="5">🤍</div>
        </div>                  
        <div class="price">USD $326,820</div>
        <div class="lugar">Columbia</div>
        <div class="directopn1">The well-constructed and maintained building features access to a gym, heated outdoor pool, hot tub, owner ski lockers, ski home trail, BBQ area, games room, kids room, free shuttles nearby, and the convenience of friendly front desk services. </div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>100m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);