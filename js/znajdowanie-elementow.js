//wyszukiwanie elementow po indentyfikatorze
var parFirst = document.getElementById('parFirst');
 console.log(parFirst);

//wyszukiwanie elementow po klasie
var linki = document.getElementsByClassName('link');
console.log(linki);
console.log(linki[4]);

//wyszukiwanie po znaczniku p
var allP = document.getElementsByTagName('p');
console.log(allP);

//wyszukiwanie po znaczniku css
var linkiCss = document.querySelectorAll('#parFirst .link');
console.log(linkiCss);

//wyszukiwanie po znaczniku css - TYLKO pierwszego elementu
var linkCss = document.querySelector('#sectionFirst .link');
console.log(linkCss);