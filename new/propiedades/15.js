const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/15.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">Rent</div>
            <div class="fav" name="15">🤍</div>
        </div>                  
        <div class="price">USD $655 per month </div>
        <div class="lugar">Québec</div>
        <div class="directopn1">Magnificent multi-level property of over 1790 sf in the heart of Dollard-Des-Ormeaux! Spacious and bright, this home has 3+1 bedrooms, a living room.</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Not</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>985 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);