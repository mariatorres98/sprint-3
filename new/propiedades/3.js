const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/3.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2021/08/27/16/49/mansion-6579100_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">House</div>
            <div class="rent">Sell</div>
            <div class="fav" name="3">🤍</div>
        </div>                  
        <div class="price">USD $571,363</div>
        <div class="lugar">Ontario</div>
        <div class="directopn1">391 Churchill Court #A, Waterloo, Ontario N2L 6B4</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>120 m2</strong> </div>
            <div class="rooms">🛏 4</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);