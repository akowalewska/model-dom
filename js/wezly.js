var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//zwroci wezel rodzic
console.log(pierwszyDiv.parentNode);

//zwroci element rodzic
console.log(pierwszyDiv.parentElement);

//lista wezlow dzieci
console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[0]);

//tylko do elementow
console.log(pierwszyDiv.children);

//targetuje pierwszy node
console.log(pierwszyDiv.firstChild);

//targetuje ostatni node
console.log(pierwszyDiv.lastChild);

var link = document.getElementById('link');

//target poprzedni node rodzenstwo
console.log(link.nextSibling);

//target nastepny node rodzenstwo
console.log(link.previousSibling);

//target kolejny element rodzenstwo
console.log(link.nextElementSibling);

//target poprzedni element rodzenstwo
console.log(link.previousElementSibling);

//nodeType - okresla rodzaj wezla (numerycznie)