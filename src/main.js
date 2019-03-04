/* global M, POKEMON*/
const data= POKEMON.pokemon; 

/*I.Declaración de vistas*/
/*a)Pagina de inicio*/

function indexView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section id="welcomeimage">
        <h2 class="center-align">¿QUIERES SER EL MEJOR MAESTRO POKÉMON?</h2>          
        <h3 class="center-align">Junto a PokeChoose podrás conseguirlo</h3>
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
    `
    <section id="onetutorial" class="row" >       
        <h3>¿Qué es PokeChoose?</h3>        
        <article class="col s12 m12 l8"> 
            <h4>PokeChoose es una entretenida enciclopedia virtual pensada en aquellos jugadores de 
            Pokémon Go que necesiten conocer en profundidad el mundo Pokémon de la Región de Kanto.</h4> 
        </article> 
        <picture id="goldpokeball" class="col s12 m12 l4">
            <img src="Image/pokeballtutorial.png"  alt="Pokebola dorada">        
        </picture>       
    </section> 

    <section id="twotutorial" class="row"> 
        <h3>¡Conócelos a todos!</h3>
        <article class="col s12 m12 l6">
            <h4>Podrás escoger entre los 151 tipos de Pokémon de la región de Kanto,  cuál es la que más 
            te sirve para enfrentarlo en una batalla, ¡y así convertirte en el mejor entrenador!</h4>
        </article>
        <picture class="col s12 m12 l6">
            <img src="Image/pokemontutorial.png" id="startedpokemon" alt="Pokemon inicio">        
        </picture>       
    </section> 

    <section id="threetutorial" class="row"> 
        <h3>¿Cómo funciona PokeChoose?</h3>
        <article class="col s12 m12 l12">
            <h4>Debes ingresar a la opcion "Iniciar búsqueda" y seguir los siguientes pasos:</h4>
            <ul>
                <li>Primero, lo primero: para encontrar al Pokémon que buscas ¡debes seleccionar tu filtro!</li>
                <li>Por su tipo, debilidad, cantidad de dulces que necesita  o la distancia que necesitarás 
                recorrer para conseguir los huevos que te ayuden a mejorar tu Pokémon</li>
                <li>O bien, si prefieres ordenarlos alfabéticamente, por su número, cuál es su peso o su tamaño</li>
            </ul>
            <h4>¡Y listo! Ahora estás preparado para encontrar y conocer a tu Pokémon favorito.</h4>
        </article >
    </section>`
}

/*c)Pagina de busqueda*/
function searchView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section id="searchview" class="row"> 
    <h3>Pokemón región de Kanto</h3>  
        <section class="col s12 m12 l4" id="sectionfilter">
        <h5>¡Este es tu buscador! Selecciona una opción</h5>
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header">Filtrar</div>
                    <div class="collapsible-body">
                        <label>Tipo</label>
                        <select id="type" class="browser-default">
                            <option value="all" selected>Todos</option>  
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
                            <option value="all" selected>Todos</option>  
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
                            <option value="all" selected>Todos</option>
                            <option value="12">12</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="400">400</option>
                            <option value="notcandy">Sin candy</option>
                        </select>
                        <label>Distancia de huevos para encubar</label>
                        <select id="eggs" class="browser-default">
                            <option value="all" selected>Todos</option>
                            <option value="2 km">2 km</option>
                            <option value="5 km">5 km</option>
                            <option value="10 km">10 km</option>
                            <option value="Not in Eggs">Not in Eggs</option>
                        </select>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header">Ordenar</div>
                    <div class="collapsible-body">
                        <label>Nombre</label>
                        <select class="browser-default" id="namesort">
                            <option selected>Escoja una opción</option>                
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>            
                        </select>  
                        <label>Número</label>
                        <select class="browser-default" id="numsort">
                            <option selected>Escoja una opción</option>                
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>            
                        </select>  
                        <label>Peso</label>
                        <select class="browser-default" id="weightsort">
                            <option selected>Escoja una opción</option>                
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>            
                        </select>  
                        <label>Tamaño</label>
                        <select class="browser-default" id="heightsort">
                            <option selected>Escoja una opción</option>                
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>            
                        </select>  
                    </div>
                </li>
            </ul>       
        </section>           
        
        <section id="pokemonresult" class="col s12 m12 l8" >      
            <h4 id="resulttitle">Escoge un pokémon y ¡descubre sus caracteristicas!</h4>         
            <figure id="searchresult" class="row">
            

            </figure>
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
            let result = window.data.filterData(data, (element)=>{
                return element.type.includes(condition);
            });

            showPokemonList(result);
        }
    });
    
    /*b) Filtro por debilidad de pokemon*/
    
    document.getElementById('weakness').addEventListener('change',()=>{
        let condition=document.getElementById('weakness').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result = window.data.filterData(data, (element)=>{
                return element.weaknesses.includes(condition);
            });

            showPokemonList(result);
        }
    });

    /*c) Filtro por cantidad de candys*/
    
    document.getElementById('candycount').addEventListener('change',()=>{
        let condition=document.getElementById('candycount').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result=window.data.filterData(data,(element)=>{
                if (condition==="notcandy"){
                    return element.candy_count===undefined;
                }else{
                    return element.candy_count=== parseInt(condition);
                }
            });
            showPokemonList(result);
        }
    });

    /*d) Filtro por distancia para incubar huevos*/
    
    document.getElementById('eggs').addEventListener('change',()=>{
        let condition=document.getElementById('eggs').value; 
        if(condition==='all'){
            pokemonAll();
        }else {
            let result=window.data.filterData(data,(element)=>{
                return element.egg===(condition)
            });
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

    /*3) Ordenar por peso */

    document.getElementById('weightsort').addEventListener('change', ()=>{
        let sortOrder =document.getElementById('weightsort').value;
        let result =window.data.sortData(data, 'weight', sortOrder);
        showPokemonList(result);
    });

    /*4) Ordenar por altura*/

    document.getElementById('heightsort').addEventListener('change',()=>{
        let sortOrder =document.getElementById('heightsort').value;
        let result =window.data.sortData(data,'height',sortOrder);
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
    document.getElementById('searchresult').innerHTML='';
    pokemons.forEach(element => {
        //Pre-Evoluciones
        let preEvolutions = "";
        if(element.prev_evolution){
            element.prev_evolution.forEach(pre => {
                preEvolutions += `<p>${pre.name}</p>`
            })
        }
        else {
            preEvolutions += "Ninguna";
        }
        //Evoluciones siguientes
        let nextEvolutions = "";
        if(element.next_evolution){
            element.next_evolution.forEach(next => {
                nextEvolutions += `<p>${next.name}</p>`
            })
        }
        else {
            nextEvolutions += "Ninguna";
        }

        document.getElementById('searchresult').innerHTML +=
        `
        <div id="pokemonbox" class="col s12 m6 l4">
            <!--Llamada al modal -->
            <a href="#modal${element.num}" class="modal-trigger">
                <!--Información visible antes de elegir el modal-->
                <img src="${element.img}" alt="${element.name}">
                <h6>${element.num}</h6>
                <h6>${element.name}</h6>
            </a>  
            <div id="modal${element.num}" class="modal">
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect btn-flat">X</a>
                </div>
                <!--Información de la ficha de pokemon (modal)-->
                <div class="modal-content row">                                    
                    <h6>${element.num}</h6>
                    <h6>${element.name}</h6>
                    <div class="col s12 m12 l12">
                        <img class="modalimg" src="${element.img}" alt="${element.name}">
                    </div>

                    <div>
                        <div class="col s4 m4 l4 elementtitle">Tipo</div>
                        <div class="col s4 m4 l4 elementtitle">Peso</div>
                        <div class="col s4 m4 l4 elementtitle">Altura</div>
                        <div class="col s4 m4 l4 elementdata">${element.type}</div>
                        <div class="col s4 m4 l4 elementdata">${element.weight}</div>
                        <div class="col s4 m4 l4 elementdata">${element.height}</div>
                        
                        <div class="elementtitle">Debilidades</div>
                        <div class="elementdata">${element.weaknesses}</div>

                        <div class="col s6 m6 l6 elementtitle">Cantidad de candys</div>
                        <div class="col s6 m6 l6 elementtitle">Km huevos</div>
                        <div class="col s6 m6 l6 elementdata">${element.candy_count?element.candy_count:"Sin candys"}</div>
                        <div class="col s6 m6 l6 elementdata">${element.egg}</div>

                        <div class="elementdata">Ver evoluciones</div>
                        <div class="col s6 m6 l6 elementtitle">Previa</div>
                        <div class="col s6 m6 l6 elementtitle">Posterior</div>
                        <div class="col s6 m6 l6 ">${preEvolutions}</div>
                        <div class="col s6 m6 l6 ">${nextEvolutions}</div>
                      
                    </div>

                </div>

            </div>
        </div>`
          
    });
    //Modales
    let elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);
}

/*Dibuja todos los pokemon*/
function pokemonAll(){
    showPokemonList(data);
}

