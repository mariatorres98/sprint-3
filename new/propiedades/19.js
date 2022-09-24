const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/19.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Offices</div>
            <div class="rent">Rent</div>
            <div class="fav" name="19">🤍</div>
        </div>                  
        <div class="price">USD $2,133 per month</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">291 Rue St-Vallier E., La Cité-Limoilou, QC G1K3P5, CA, La Cité-Limoilou, Québec</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Not</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>200 m2</strong> </div>
            <div class="rooms">🛏 1</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);