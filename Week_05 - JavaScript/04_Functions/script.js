'use strict';

/* Opdracht 04.1: 
=================*/

/////////////////////////////////////////////////////////
// a) Maak een button en verbind er een functie aan. Zorg ervoor dat de functie in de
//console “Hello World” logt.
//
//function myFunction() {
//console.log("Helo World");
//}

/////////////////////////////////////////////////////////
// b) Maak een input element en geef het een bepaald ID. Sla dat ID op in een variabele via
//document.GetElementByID().
//function changeMyColor(myNewColor) {
//  var element = document.getElementById('ephrem');
//  element.style.color = myNewColor;
//}

/////////////////////////////////////////////////////////
/*// c)  Maak een functie met een parameter die deze in de console logt. Geef de ID variabele
hier aan mee. Wat zie je in de console?
*/

//let input = document.getElementById('ephrem-2')
//function getElement() {
//  console.log()
//}

/////////////////////////////////////////////////////////
/*// d) Geef je functie een return waarde, bijvoorbeeld de parameter * 2. Maak vervolgens
een nieuwe variabele “result”. Roep je functie op met een getal als parameter en wijs
de return waarde toe aan “result”. Log de variabele daarna in je console.
*/

//function loveGenerator (beautiful, ugly) {
//  const love = "Amazing Love  with beautiful $loveGenerator} girl";
//  return beautiful * 2;
//}
//const result = loveGenerator(1);
// console.log(result);


/* Opdracht 04.2: 
=================*/

/////////////////////////////////////////////////////////
// a) Onderzoek de volgende DOM methodes en gebruik ze in een voorbeeld:
// i) document.getElementsByClassName
// function myFunction() {
//  var x = document.getElementsByClassName("homework-4");
//  x[0].innerHTML = "Hello World!";
//}


/////////////////////////////////////////////////////////
// ii) document.getElementsByTagName
//function myFunction() {
//  var x = document.getElementsByTagName("p");
//  document.getElementById("homework-2").innerHTML = x[1].innerHTML;
//}


/////////////////////////////////////////////////////////
//iii) document.querySelector
//function myFunction() {
//  document.querySelector(".homework-5").style.backgroundColor = "green";
//}

// iv) document.querySelectorAll
//function myFunction() {
//  var x, i;
//  x = document.querySelectorAll(".homework-3");
//  for (i = 0; i < x.length; i++) {
//    x[i].style.backgroundColor = "green";
//  }
//}

// v) element.innerHTML
//function myFunction() {
//  document.getElementById("homework-4").innerHTML = "woow Paragraph changed!";
//}


/////////////////////////////////////////////////////////
// vi) element.innerText
//function myFunction() {
//  var x = document.getElementById("myBtn").innerText;
//  document.getElementById("content").innerHTML = x;
//}


/////////////////////////////////////////////////////////
// b) Maak een input element en geef het een bepaald ID. Sla dat ID op in een variabele via document.GetElementByID(). -------------// ???? - check again//

/* Bij opdracht 4.1c heb je een input als parameter meegegeven. Roep die functie nu
aan met een oninput ipv onchange, en console.log() de parameter.value ipv de
parameter. Zie je het verschil in beide gevallen? 
*/

//let input = document.getElementById('ephrem-2')
//function getElement() {
//  console.log()


/* Opdracht 4.3: 
=================*/

/////////////////////////////////////////////////////////
/*// a) Maak een functie randomNumber() en verbindt die aan een button. Zorg dat de
Math.random() geeft dus een getal 0 >= x < 1 terug - het kan wel 0 zijn, maar nooit 1. Als je
die laat afronden met Math.round(), zal het vaker afronden naar beneden dan naar boven.
Als je een willekeurig getal wil tonen, moet je Math.floor() gebruiken op Math.random(). Als
je dit zo doet, krijg je altijd 0 terug.
*/


//functie Math.random() in de console logt. Wat merk je op als je deze meerdere keren
//gebruikt?
//
//function randomNumber(x) {
//  return Math.floor(Math.random() * x);
//}

/* // b) Verander je functie nu dat hij een parameter x gebruikt, en zorg dat hij het volgende in
je console logt: Math.floor(Math.random() * x). Test nu je functie met verschillende
waardes voor x. Valt iets je op?
*/

//function randomNumber(x) {
//  return Math.floor(Math.random() * x);
//}
// console.log(randomNumber(1));


/////////////////////////////////////////////////////////
// c) Er zijn nog 2 belangrijke Math methods die handig zijn om te kennen. Onderzoek wat

//Math.min() en Math.max() doen. Kan je van beide al een voorbeeld geven?

//Math.Max  - example
//console.log(Math.max(1, 10, 4));
// expected output: 10

// Math.Min  - example
//console.log(Math.max(1, 10, 4));
// expected output: 1


/* Opdracht 4.4: 
=================*/

/////////////////////////////////////////////////////////
/*// a) Schrijf een functie waar je een naam aan mee kan geven. Laat de naam vergelijken
met de namen van mensen in je groepje. Wanneer je functie de naam wel/niet
herkent moet dat als boodschap teruggegeven worden.
*/

//function classMates (justin , vincent, charity) {
//  if (justin === 1) {
//    return "Justin  is Available";
//  }
//    else if  (vincent === 2){
//        
//    return "Vincent  is  Available";
//    }
//       
//  else "Not Available!";
//}
//console.log(classMates(1)); 


/////////////////////////////////////////////////////////
/*// b) Schrijf een 2e functie die de eerste functie aanroept, en vervolgens de teruggegeven
boodschap in een div element op je pagina toont. Denk aan de DOM methods!
*/

//function loveGenerator(love) {
//  return love;
//}

//function loveFinder(kidist, helina) {
//  const girl1 = loveGenerator(kidist);
//  const girl2 = loveGenerator(helina);

//  const loveRecomendation = `True love  with ${kidist} girl is good.`;
//  return loveRecomendation;
//}
//console.log(loveFinder(1));
//


/////////////////////////////////////////////////////////
// c) Schrijf nu het bovenstaande nogmaals, maar gebruik dit keer Arrow Functions. Als het niet overal lukt is dat niet erg! -------------// ???? - check again //

//// Arrow functions
//  const loveGenerator1 = love =>  return love;
//  const loveRecomendation1 = `True love  with ${kidist} girl is good.`;
//  return loveRecomendation;
//console.log(love(1));
