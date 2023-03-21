function menuShow(){
    let manuMobile = document.querySelector( ".mobile-menu");
    if(menuMobile.classList.contains('opem')){
        menuMobile.classList.remove('opem');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add(open);
        document.querySelector('.icon').serc = "img/close_white_36dp.svg";
    }
}