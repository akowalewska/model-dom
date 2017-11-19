//jezeli nie przypisujem wartosci do innerHTML, to pobieramy wnetrze danego elementu
console.log(document.getElementById('header').innerHTML);

//za pomoca innerhtml, jestesmy w stanie wstrzykiwac nowe znaczniki
document.getElementById('header').innerHTML = '<p class="nowa_klasa">jakis text</p>';

var new_par = document.querySelector('#header p');
console.log(new_par.className);

//innerText
new_par.innerText = '<span>jakis konkretny tekst</span>';

console.log(document.getElementById('header').outerHTML);

//set/get klasy odbywa sie za pomoca metody .className - mozliwe jest ustawianie wiecej niz jednej klasy
document.getElementById('header').className = 'nowa_klasa nowa_klasa2';

var linki = document.getElementsByClassName('link');
console.log(linki);

linki[2].href = 'http://google.com';

for(var i=0; i < linki.length; i++){
    linki[i].style.color = 'red';
}

