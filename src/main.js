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

function tutorialView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `<section >
        <h4>breve introducción de que es PokeChoose, indicando que son 151 pokemon de kanto (quizás agregar un mapa)</h1>
        <article>
        <h4>explicar las distintas funcionalidades de la página</h1>
        </article>
    </section>`
}


function searchView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section class="row">     
    <div class="col s12 m12 l3 fullheight">
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
    </div>           
    
    <section id="pokemonresult" class="col s12 m12 l9" >
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>
      <h1>Resultado pokemon</h1>    
    </section>

  </section>  
  `
  let elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);

  let elemsSelect = document.querySelectorAll('select');
  M.FormSelect.init(elemsSelect);
}


/*II.Manejo del DOM */
/*a)Página de inicio*/
document.getElementsByTagName('a')[0].addEventListener('click', () => {
    indexView();
})

Array.from(document.getElementsByClassName('tutorial')).forEach(element => {
    element.addEventListener('click', () =>{
        tutorialView();
    })
});

Array.from(document.getElementsByClassName('search')).forEach(element => {
    element.addEventListener('click', () =>{
        searchView();
    })
});



