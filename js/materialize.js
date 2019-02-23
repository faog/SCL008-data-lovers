//funciones complementarias a MaterializeCSS
document.addEventListener('DOMContentLoaded', () =>{
    //Navbar
    let elemsNabvar = document.querySelectorAll('.sidenav');
    let instancesNavbar = M.Sidenav.init(elemsNabvar);
     
    //carrusel estadística
    let elemsCarousel = document.querySelectorAll('.carousel');
    let instancesCarousel = M.Carousel.init(elemsCarousel);

    /*let instancesCarousel = M.Carousel.init({
    fullWidth: true,
    indicators: true
    });*/
});

