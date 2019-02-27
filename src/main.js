/* global M, POKEMON*/
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
        <h3>¿Qué es PokeChoose?
        </h3>
        <article id="tutorialone">
         <p>PokeChoose es una entretenida enciclopedia virtual pensada en aquellos jugadores de Pokémon Go que necesiten conocer en profundidad el mundo Pokémon de la Región de Kanto. 
         Podrás escoger entre todos   151 tipos de Pokémon cuál es la que más te sirve para enfrentarlo en una batalla, ¡y así convertirte en el mejor entrenador!
         </p>
         <img src="Image/-1523353928418.jpg" id="kanto" alt="Región de Kanto">
        </article>

        <article id="tutorialtwo">
         <p>Primero, para encontrar al Pokémon que buscas ¡debes seleccionar tu filtro!  Por su tipo, debilidad, cantidad de dulces que necesita  o la distancia que necesitarás recorrer para conseguir los huevos que te ayuden a mejorar tu Pokémon
         </p>
         <p>O bien, si prefieres ordenarlos alfabéticamente, por su número, o por el promedio de engendros que tendrán tus pokemones
         </p>
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
            <label>Cantidad de Candy</label>
               <select id="candycount" class="browser-default">
                <option value="all" actived>Todos</option>
                <option value="12">12</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="400">400</option>
               </select>
            <label>Distancia de huevos para encubar</label>
               <select id="eggs" class="browser-default">
                <option value="all" actived>Todos</option>
                <option value="2">2 km</option>
                <option value="5">5 km</option>
                <option value="7">7 km</option>
                <option value="10">10 km</option>
                <option value="Not in Eggs">Not in Eggs</option>
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
            <label>Numero</label>
               <select class="browser-default" id="numsort">
                <option actived>Escoja una opcion</option>                
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>            
               </select>  
            <label>Posibilidad de Engendros (%)</label>
               <select class="browser-default" id="spwanchancesort">
                <option actived>Escoja una opcion</option>                
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>            
               </select>  
            <label>Promedio de Engendros</label>
               <select class="browser-default" id="spwansort">
                <option actived>Escoja una opcion</option>                
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>            
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
        }else {
            let result =window.data.filterData(data, condition);
            showPokemonList(result);
        }
    });
    
    /*b) Filtro por debilidad de pokemon*/
    
    document.getElementById('weakness').addEventListener('change',()=>{
        let condition=document.getElementById('weakness').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result=window.data.filterData(data,condition);
            showPokemonList(result);
        }
    });

    /*c) Filtro por cantidad de candys*/
    
    document.getElementById('candycount').addEventListener('change',()=>{
        let condition=document.getElementById('candycount').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result=window.data.filterData(data,condition);
            showPokemonList(result);
        }
    });

    /*d) Filtro por distancia para incubar huevos*/
    
    document.getElementById('eggs').addEventListener('change',()=>{
        let condition=document.getElementById('eggs').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result=window.data.filterData(data,condition);
            showPokemonList(result);
        }
    });


    /*IV. Ordenar*/

    /*1) Ordenar por nombre */
    document.getElementById('namesort').addEventListener('change',()=>{
        let sortOrder =document.getElementById('namesort').value;
        let result =window.data.sortData(data,'name',sortOrder);
        showPokemonList(result);
    });

    /*2) Ordenar por numero */

    document.getElementById('numsort').addEventListener('change',()=>{
        let sortOrder =document.getElementById('numsort').value;
        let result =window.data.sortData(data,'num',sortOrder);
        showPokemonList(result);
    });

    /*3) Ordenar por posibilidad de engendro */

    /*document.getElementById('spwanchancesort'). addEventListener('change', ()=> {
        let sortOrder =document.getElementById('spwanchancesort').value; 
        let result =window.data.sortData(data,'spawn_chance',sortOrder);
        showPokemonList(result);
    });*/

    /*4) Ordenar por numero promedio de engendros */
    /*document.getElementById('spwansort').addEventListener('change',()=>{
        let sortOrder =document.getElementById('spwansort').value;
        let result =window.data.sortData(data,'avg_spawns',sortOrder);
        showPokemonList(result);
    });*/
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
            <img src="${element.img}" alt="${element.name}">
            <p>${element.num}</p>
            <p>${element.name}</p>
            
        </div>`  
    });
}

/*Dibuja todos los pokemon*/
function pokemonAll(){
    showPokemonList(data);
}

window.onload = showPokemonList(data);