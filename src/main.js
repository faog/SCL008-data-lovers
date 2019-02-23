/* Manejo del DOM */
document.getElementsByTagName('a')[0].addEventListener('click', () => {
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `<section id="welcomeimage">
        <h2 class="center-align">¿QUIÉRES SER EL MEJOR MAESTRO POKÉMON?</h2>          
        <h3 class="center-align">Junto a PokeChoose podrás conseguirlo.</h3>
        <div class="center-align"> 
            <button id="start">Comenzar</button>
        </div>     
    </section>   
    <h3>Estadistica</h3>
    <!--Carrusel con contenido de materialize-->
    <section class="carousel carousel-slider center">
        <div class="carousel-item red white-text center">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
        </div>
        <div class="carousel-item amber white-text center">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
        </div>
        <div class="carousel-item green white-text center">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
        </div>
        <div class="carousel-item blue white-text center">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
        </div>        
    </section>`
    document.getElementsByTagName('button')[0].addEventListener('click', () =>{
        document.getElementById('dinamicpage').innerHTML='';
        document.getElementById('dinamicpage').innerHTML+= `<aside> <h6> Aquí va el filtro </h6> </aside>`; 
    })
})

Array.from(document.getElementsByClassName('tutorial')).forEach(element => {
    element.addEventListener('click', () =>{
        document.getElementById('dinamicpage').innerHTML='';
        document.getElementById('dinamicpage').innerHTML+= `<section><p>h</p><h1> Como funciona </h1> </section>`; 
    })
});

Array.from(document.getElementsByClassName('search')).forEach(element => {
    element.addEventListener('click', () =>{
        document.getElementById('dinamicpage').innerHTML='';
        document.getElementById('dinamicpage').innerHTML+= `<aside><p>h</p> <h1> Iniciar búsqueda </h1> </aside>`; 
    })
});

document.getElementsByTagName('button')[0].addEventListener('click', () =>{
    document.getElementById('dinamicpage').innerHTML='';
    document.getElementById('dinamicpage').innerHTML+= `<aside><p>h</p> <h1> Iniciar búsqueda </h1> </aside>`; 
})


