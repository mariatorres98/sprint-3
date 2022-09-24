const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/13.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2018/02/13/10/58/home-3150464_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">Rent</div>
            <div class="fav" name="13">🤍</div>
        </div>                  
        <div class="price">USD $6,475 per month</div>
        <div class="lugar">Alberta</div>
        <div class="directopn1">2869 Ch. des Chênes E., La Conception, Québec J0T1M0</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>800 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);