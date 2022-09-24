const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/17.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Offices</div>
            <div class="rent">Rent</div>
            <div class="fav" name="17">🤍</div>
        </div>                  
        <div class="price">USD $2,628 per month</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">17 1/2 Rue Sainte-Ursule, Québec, Québec G1R 4C7, CA, Québec, Québec</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>600 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);