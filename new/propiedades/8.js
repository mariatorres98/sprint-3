const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/8.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Apartment</div>
            <div class="rent">Sell</div>
            <div class="fav" name="8">🤍</div>
        </div>                  
        <div class="price">USD $106,274</div>
        <div class="lugar">Québec</div>
        <div class="directopn1">285 Saint-FranÃ§ois Street, Edmundston, New Brunswick</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>200 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);