const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/11.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">Rent</div>
            <div class="fav" name="11">🤍</div>
        </div>                  
        <div class="price">USD $2,666 per month </div>
        <div class="lugar">Québec</div>
        <div class="directopn1">1011 Rue Labelle #3, Mont-Tremblant, Québec J8E2W5</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Not</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>800 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);