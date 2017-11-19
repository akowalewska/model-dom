document.addEventListener('DOMContentLoaded', function(){
//    tutaj nazwy funkcji, odpalane przy danym zdarzeniu
    changeColor();
    hoverLinks();
})

function changeColor() {
//tworze zmienna, trzyma tablice z elementami o klasie
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
        
    }
}

function hoverLinks(){
    var linki = document.getElementsByClassName('link');
    for(var i=0; i < linki.length; i++) {
        linki[i].style.transition = 'all 0.4s';
        
        linki[i].addEventListener('mouseover', function(){
            this.style.color = 'blue';
        })
        linki[i].addEventListener('mouseout', function(){
            this.style.color = 'red';
        })
    }
}