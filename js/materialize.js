//funciones complementarias a MaterializeCSS
document.addEventListener('DOMContentLoaded', () =>{  
    //Navbar
    /*let elemsNabvar = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsNabvar);*/

    $(document).ready(function(){
        $('.sidenav').sidenav();
    });
     
    //barra filtrar y ordenar
    let elemsFilter = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemsFilter);

    //Elemento seleccion
    let elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect);

    indexView();

});




