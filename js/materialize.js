//funciones complementarias a MaterializeCSS
document.addEventListener('DOMContentLoaded', () =>{  
    //Navbar
    let elemsNabvar = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsNabvar);
     
    //carrusel estadística
    let elemsCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemsCarousel);

    //aside búsqueda
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    var elemsSelect = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elemsSelect);

    indexView();

});




