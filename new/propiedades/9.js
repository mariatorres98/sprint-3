const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/9.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2020/03/07/15/50/hampstead-4910147_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">House</div>
            <div class="rent">Sell</div>
            <div class="fav" name="9">🤍</div>
        </div>                  
        <div class="price">USD $609,454</div>
        <div class="lugar">Ontario</div>
        <div class="directopn1">USD $609,454</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>500 m2</strong> </div>
            <div class="rooms">🛏 5</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);