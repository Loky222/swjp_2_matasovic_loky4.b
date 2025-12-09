
/* 
Kako pristupiti h1 elementu preko ID-ja title i promijeniti mu boju u crvenu?
document.getElementById("title").style.color = "red";

Kako pomoću getElementsByTagName odabrati sve <li> elemente i prvome promijeniti tekst u “Promijenjeno”?
document.getElementsByTagName("li")[0].textContent = "Promijenjeno";

Kako dohvatiti sve elemente s klasom list pomoću getElementsByClassName i zadnjem dodati klasu highlight?
let items = document.getElementsByClassName("list");
items[items.length - 1].classList.add("highlight");

Kako pomoću querySelector odabrati prvi <a> element unutar liste i promijeniti mu atribut href na https://www.bing.com?
document.querySelector("ul a").setAttribute("href", "https://www.bing.com");

Kako pomoću querySelectorAll odabrati sve <li> elemente i svakome postaviti textContent na: “Stavka”?
document.querySelectorAll("li").forEach(li => li.textContent = "Stavka");

Kako pomoću classList.add dodati klasu active na gumb koji ima klasu btn?
document.querySelector(".btn").classList.add("active");

Kako pomoću classList.remove ukloniti klasu list s drugog <li> elementa?
document.getElementsByTagName("li")[1].classList.remove("list");

Kako pristupiti tekstu unutar <h1> i promijeniti ga u “Welcome”? (koristeći innerHTML)
document.querySelector("h1").innerHTML = "Welcome";

Kako dohvatiti tekst prvog <li> elementa koristeći textContent?
document.querySelector("li").textContent;

Kako dohvatiti atribut href iz <a> elementa pomoću getAttribute?
document.querySelector("a").getAttribute("href");

Kako postaviti novi atribut title="Google link" na <a> element pomoću setAttribute?
document.querySelector("a").setAttribute("title", "Google link");

Kako pomoću querySelector dohvatiti <ul> s ID-em list i dodati mu još jednu stavku pomoću innerHTML?
document.querySelector("#list").innerHTML += "<li>Nova stavka</li>";

Kako pomoću getElementById promijeniti pozadinsku boju cijelog <ul> elementa u svijetloplavu?
document.getElementById("list").style.backgroundColor = "lightblue";

Kako pomoću querySelectorAll odabrati sve <li> elemente i svakome dodati klasu blue-text?
document.querySelectorAll("li").forEach(li => li.classList.add("blue-text"));

Kako dohvatiti checkbox i provjeriti je li označen?
document.querySelector("input[type='checkbox']").checked;

Kako gumbu .btn promijeniti tekst u “Pressed!” pomoću textContent?
document.querySelector(".btn").textContent = "Pressed!";

Kako pristupiti trećem <li> elementu koristeći getElementsByClassName?
document.getElementsByClassName("list")[2];

Kako pomoću querySelector dohvatiti button.btn i promijeniti mu inline stil: veličinu fonta na 20px?
document.querySelector("button.btn").style.fontSize = "20px";

Kako pomoću getElementsByTagName odabrati prvi <input> i postaviti mu atribut checked na "true"?
document.getElementsByTagName("input")[0].setAttribute("checked", "true");

Kako pomoću querySelectorAll odabrati sve <a> linkove i promijeniti im boju teksta na zelenu?
document.querySelectorAll("a").forEach(a => a.style.color = "green");
 */



/*document.getElementById('title').textContent = 'Pozdrav';

document.getElementById('second').style.color = 'blue';

document.querySelector('input[type="checkbox"]').checked;

document.getElementsByClassName('btn')[0].classList.add('active');

document.querySelector('ul:first-of-type a').setAttribute('href','https://example.com');

document.querySelectorAll('ul:first-of-type li')[0].textContent = 'Promijenjeno';

document.querySelectorAll('ul:first-of-type li')[1].classList.remove('list');

document.querySelectorAll('a')[1].setAttribute('href','https://yahoo.com');

document.querySelector('ol a:nth-of-type(2)').getAttribute('href');

document.querySelector('a').setAttribute('title','Web stranica');

document.getElementsByClassName('list2')[1].classList.remove('list2');

document.querySelectorAll('#list2 li')[2];

document.getElementsByTagName('h2')[0].style.background = 'yellow';

document.querySelector('#list2').innerHTML = '';

document.querySelector('.btn').textContent = 'Kliknuto!';

document.querySelector('a').style.color = 'green';

document.getElementsByClassName('list')[0].style.fontSize = '24px';

document.querySelector('#list2 li').textContent = 'Novi tekst';

document.querySelector('input[type="checkbox"]').setAttribute('checked','true');

document.querySelectorAll('ul:first-of-type li')[1].style.background = 'blue';
*/