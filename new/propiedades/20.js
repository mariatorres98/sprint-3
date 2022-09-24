const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/20.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/03/21/21/17/gardening-3248249_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Offices</div>
            <div class="rent">Rent</div>
            <div class="fav" name="20">🤍</div>
        </div>                  
        <div class="price">USD $838 per month</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">1655 Rue Atateken, Ville-Marie, QC H2L3L4, CA, Ville-Marie, Québec</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Not</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>500 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);