/* global M,POKEMON*/
const data= POKEMON.pokemon; 

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
    `<section >
        <h4>breve introducción de que es PokeChoose, indicando que son 151 pokemon de kanto (quizás agregar un mapa)</h1>
        <article>
        <h4>explicar las distintas funcionalidades de la página</h1>
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
              <select id="type" class="browser-default">
                <option value="all" actived>Todos</option>  
                <option value="Steel">Acero</option>
                <option value="Water">Agua</option>
                <option value="Dragon">Dragon</option>
                <option value="Electric">Eléctrico</option>
                <option value="Ghost">Fantasma</option>
                <option value="Fire">Fuego</option>
                <option value="Fairy">Hada</option>
                <option value="Ice">Hielo</option>
                <option value="Bug">Insecto</option>
                <option value="Normal">Normal</option>
                <option value="Fighting">Luchador</option>
                <option value="Dark">Oscuro</option>
                <option value="Grass">Planta</option>
                <option value="Psychic">Psíquico</option>
                <option value="Rock">Roca</option>  
                <option value="Ground">Suelo</option>
                <option value="Poison">Veneno</option>
                <option value="Flying">Volador</option>
               </select>   
            <label>Debilidad</label>
                <select id="weakness" class="browser-default">
                <option value="all" actived>Todos</option>  
                <option value="Steel">Acero</option>
                <option value="Water">Agua</option>
                <option value="Dragon">Dragon</option>
                <option value="Electric">Eléctrico</option>
                <option value="Ghost">Fantasma</option>
                <option value="Fire">Fuego</option>
                <option value="Fairy">Hada</option>
                <option value="Ice">Hielo</option>
                <option value="Bug">Insecto</option>
                <option value="Normal">Normal</option>
                <option value="Fighting">Luchador</option>
                <option value="Dark">Oscuro</option>
                <option value="Grass">Planta</option>
                <option value="Psychic">Psíquico</option>
                <option value="Rock">Roca</option>  
                <option value="Ground">Suelo</option>
                <option value="Poison">Veneno</option>
                <option value="Flying">Volador</option>
               </select>     
          </div>
        </li>
        <li>
          <div class="collapsible-header">Ordenar</div>
          <div class="collapsible-body">
          <label>Nombre</label>
          <select class="browser-default" id="namesort">
            <option actived>Escoja una opcion</option>                
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>            
           </select>   
          </div>
        </li>
      </ul>       
    </section>           

    <section id="pokemonresult" class="col s12 m12 l9" >
    <p>Resultados obtenidos</p>
        <div id="result" class="row">
 
        </div>
      
    </section>

  </section>  
  `
    pokemonAll()
    
  let elemsFilter = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elemsFilter);

  let elemsSelect = document.querySelectorAll('select');
  M.FormSelect.init(elemsSelect);
 /*III. Filtrar*/

    /*a) Filtro por tipo de pokemon*/
    document.getElementById('type').addEventListener('change',()=>{
        let condition =document.getElementById('type').value;
    if(condition==='all'){
        pokemonAll();
    }
    else {
        let result =window.data.filterData(data, condition);
        showPokemonList(result);
    }
});
    
    /*b) Filtro por debilidad de pokemon*/
    
    document.getElementById('weakness').addEventListener('change',()=>{
        let conditionWeakness=document.getElementById('weakness').value; 
    if(conditionWeakness==='all'){
        pokemonAll();
    }
    else {
        let result=window.data.filterData(data,condition);
        showPokemonList(result);
    }
});
    

    /*Ordenar por nombre */
    document.getElementById('namesort').addEventListener('change',()=>{
        let sortOrder =document.getElementById('namesort').value;
        let result =window.data.sortData(data,'name',sortOrder);
        showPokemonList(result);
    });

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


/*c) Página Busqueda*/
Array.from(document.getElementsByClassName('search')).forEach(element => {
    element.addEventListener('click', () =>{
        searchView();
       
    })
});

/*Dibuja la lista de pokemon dependiendo del arreglo de pokemones recibido */
function showPokemonList(pokemons)
{
    document.getElementById('result').innerHTML='';
    pokemons.forEach(element => {
        document.getElementById('result').innerHTML +=
        `<div id="pokemonbox" class="col s12 m6 l4">
            <img src="${element.img}" alt="${element.name}"
            <p>${element.num}</p>
            <p>${element.name}</p>
            
        </div>`  
    });
}

/*Dibuja todos los pokemon*/
function pokemonAll(){
    showPokemonList(data);
}