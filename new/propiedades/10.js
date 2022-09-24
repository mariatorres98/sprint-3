const containerCards = document.getElementById('container__cards');


const renderCards =  () => {
  
    containerCards.innerHTML = '' ;
        containerCards.innerHTML += `          
        <article class="card" onclick="location.href='/../new/propiedades/10.html'">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2019/02/01/04/53/shirakawa-go-3968395_960_720.jpg" alt="imagen" class="card__img">
        </figure>
        <div class="cardtop1">
            <div class="house">Townhouse</div>
            <div class="rent">sell</div>
            <div class="fav" name="10">🤍</div>
        </div>                  
        <div class="price">USD $266,636</div>
        <div class="lugar">Otawa</div>
        <div class="directopn1">600 Av. Wilfrid-Laurier #803, Québec (La Cité-Limoilou), Québec G1R2L5</div>
        <div class="cardmiddle">
            <div class="contactt">Contact: Maria T.</div>
            <div class="parquing">Yes</div>
        </div>                    
        <div class="cardbottom">
            <div class="area"><strong>935 m2</strong> </div>
            <div class="rooms">🛏 2</div>
        </div> 
    </article>
        `
    };


renderCards(renderCards);