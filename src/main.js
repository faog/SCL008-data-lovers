/* global M*/

/*I.Declaración de vistas*/
/*a)Pagina de inicio*/
function indexView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `<section id="welcomeimage">
        <h2 class="center-align">¿QUIÉRES SER EL MEJOR MAESTRO POKÉMON?</h2>          
        <h3 class="center-align">Junto a PokeChoose podrás conseguirlo.</h3>
        <div class="center-align"> 
            <button id="btnstart">Comenzar</button>
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
        searchView(); 
    })
    let elemsCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemsCarousel);

}
/*b)Pagina tutorial*/
function tutorialView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `<section id="tutorial">
        <h4>¿Qué es PokeChoose?</h4>
        <article>
        <h2>explicar las distintas funcionalidades de la página</h2>
        </article>
    </section>`
}




/*c)Pagina de busqueda*/
function searchView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section class="row">     
    <section class="col s12 m12 l3 sectionfilter">
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">Filtrar</div>
          <div class="collapsible-body">
            <label>Tipo</label>
              <select class="browser-default">
                <option actived>Todos</option>                
                <option>Agua</option>
                <option>Fuego</option>
                <option>Planta</option>
               </select>   
            <label>Debilidad</label>
            <select class="browser-default">
                <option actived>Todos</option>                
                <option>Agua</option>
                <option>Fuego</option>
                <option>Planta</option>
            </select> 
            <button id="btnfilter">Filtar</button>          
          </div>
        </li>
        <li>
          <div class="collapsible-header">Ordenar</div>
          <div class="collapsible-body">
          <label>Nombre</label>
          <select class="browser-default">
            <option actived>Escoja una opcion</option>                
            <option>A-Z</option>
            <option>Z-A</option>            
           </select>   
        <button id="btnshort">Ordenar</button>   
          </div>
        </li>
      </ul>       
    </section>           

    <section id="pokemonresult" class="col s12 m12 l9" >
    <h1>Resultados obtenidos</h1>
        <div class="row" id="allpokemon" >
 
        </div>
      
    </section>

  </section>  
  `
    pokemonAll()
  let elemsFilter = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elemsFilter);

  let elemsSelect = document.querySelectorAll('select');
  M.FormSelect.init(elemsSelect);
 
}


/*II.Manejo del DOM */
/*a)Página de inicio*/
document.getElementsByTagName('a')[0].addEventListener('click', () => {
    indexView();
})
/*b)Página Tutorial*/
Array.from(document.getElementsByClassName('tutorial')).forEach(element => {
    element.addEventListener('click', () =>{
        tutorialView();
    })
});

function pokemonAll(){
    const data= POKEMON.pokemon; 
         for (let i=0; i<data.length; i++){   
            document.getElementById('allpokemon').innerHTML+=
            `
            <div id="pokemonbox" class="col s12 m6 l4">
            <img src="${data[i].img}" alt="${data[i].name}">
            <p>${data[i].num}</p>
            <p>${data[i].name}</p>
            

            </div>  
           
                        
           `
        }
    
    

}


/*c) Página Busqueda*/
Array.from(document.getElementsByClassName('search')).forEach(element => {
    element.addEventListener('click', () =>{
        searchView();
        pokemonAll();
    })
});




