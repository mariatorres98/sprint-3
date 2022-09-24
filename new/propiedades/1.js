const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
    <section id="container__cards">      
    <article class="card" onclick="location.href='/../new/propiedades/1.html'">
    <figure>
        <img src="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg" alt="imagen" class="card__img">
    </figure>
    <div class="cardtop1">
        <div class="house">House</div>
        <div class="rent">sell</div>
        <div class="fav" name="1">🤍</div>
    </div>                  
    <div class="price">USD $380.909</div>
    <div class="lugar">Ontario</div>
    <div class="directopn1">445 Campbell St. W., Listowel, Ontario N4W 1J2</div>
    <div class="cardmiddle">
        <div class="contactt">Contact: Maria T.</div>
        <div class="parquing">Yes</div>
    </div>                    
    <div class="cardbottom">
        <div class="area"><strong>945 m2</strong> </div>
        <div class="rooms">🛏 3</div>
    </div> 
</article>
        </section>
        `
    };


renderCards(renderCards);