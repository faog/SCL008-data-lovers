/* Manejo del DOM */

document.getElementsByTagName('a')[0].addEventListener('click', () => {
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `<section>
      <img src="Image/welcomeimage.jpg" id="welcomeimage" alt="Imagen de bienvenida">
        <h2>¿QUIERES SER EL MEJOR MAESTRO POKÉMON?</h2>
        <h3>Junto a PokeChoose podrás conseguirlo</h3>
        <button id="start">Comenzar</button>
    </section>
    <section>
        <h3>Estadísticas</h3>
    </section>`

})


document.getElementsByTagName('li')[0].addEventListener('click', () =>{
    document.getElementById('dinamicpage').innerHTML='';
    document.getElementById('dinamicpage').innerHTML+= `<section><h3> Como funciona </h3> </section>`; 
})

document.getElementsByTagName('li')[1].addEventListener('click', () =>{
    document.getElementById('dinamicpage').innerHTML='';
    document.getElementById('dinamicpage').innerHTML+= `<aside> <h3> Aquí va el filtro </h3> </aside>`; 
})

document.getElementsByTagName('button')[0].addEventListener('click', () =>{
    document.getElementById('dinamicpage').innerHTML='';
    document.getElementById('dinamicpage').innerHTML+= `<aside> <h3> Aquí va el filtro </h3> </aside>`; 
})
