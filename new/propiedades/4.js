const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/4.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2019/09/03/16/35/house-4449787_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">Sell</div>
            <div class="fav" name="4">🤍</div>
        </div>                  
        <div class="price">USD $266,636</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">147 Ch. au Pied-de-la-Montagne #2102, Mont-Tremblant, Québec J8E1T1</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>303m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);