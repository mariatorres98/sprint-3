const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/6.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/07/26/08/04/inn-167578_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">House</div>
            <div class="rent">Sell</div>
            <div class="fav" name="6">🤍</div>
        </div>                  
        <div class="price">USD $1000</div>
        <div class="lugar">Columbia</div>
        <div class="directopn1">2644 Carstairs Dr, Courtenay, British Columbia V9N 4A3</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>300 m2</strong> </div>
            <div class="rooms">🛏 3</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);