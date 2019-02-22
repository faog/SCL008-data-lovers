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
        <h3>Curiosidades</h3>
    <section>
        <h4>Estadistica</h4>
        <div class="container-fluid">
            <div class="row">
                <div class="col l4 m6 s12">1</div>
                <div class="col l4 m6 s12">2</div>
                <div class="col l4 m6 s12">3</div>
                <div class="col l4 m6 s12">4</div>
                <div class="col l4 m6 s12">5</div>
                <div class="col l4 m6 s12">6</div>
            </div>
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


//funciones complementarias a MaterializeCSS
document.addEventListener('DOMContentLoaded', () =>{
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});