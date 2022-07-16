/* Opdracht 03.1: 
=================*/

/////////////////////////////////////////////////////////
// a) Wat is het verschil tussen == en ===? -------------// ???? - check again//

/////////////////////////////////////////////////////////
// b) Wat is het verschil tussen > en >=? En tussen < en -------------// ???? - check again//


/////////////////////////////////////////////////////////
// c) Schrijf de If conditie zo, dat je alleen Results ziet als x==4 en y==8
// d) Schrijf het nu zo dat je alleen Results ziet als x==4 OF y==8

//let x = 4;
//let y = 8;
//if (x == 4) {
//  console.log("Result!");
//} else {
//}


/////////////////////////////////////////////////////////
// e) Zet nu de console.log(“Results”) in een Else { } na de If. Kan je de conditie omdraaien zodat je alsnog Results te zien krijgt?


//let x = 4;
//let y = 8;
//if (x == 4) {} else {
//  console.log("Result!");
//}


/////////////////////////////////////////////////////////
// f) Kan je het vorige antwoord ook geven zonder || te gebruiken? ------------// ???? - check again//

//let value = 1;

/////////////////////////////////////////////////////////
// g) Log het in je console als de waarde groter dan 5 EN kleiner dan 10 is.

//if (value > 5 || value< 10) { 
//console.log("greater than 5");
//console.log("less than 10");
//}


/////////////////////////////////////////////////////////
// h) Zo niet, log dan in je console als de waarde 11 of groter EN 20 of kleiner is.
//else if (value > 11 || value< 20){
//
//console.log("greater than 11");
//console.log("less than 20");
//}

/////////////////////////////////////////////////////////
// i) Zo niet, log dan in je console als de waarde 21 of 23 is.
//else if (value > 21 || value < 23){
//
//console.log("greater than 21");
//console.log("less than 23");
//}


/////////////////////////////////////////////////////////
// j) Zo niet, log dan in je console als de waarde kleiner dan 35 OF tussen de 40 en 45 is.
//else if (value > 35 || value < 35){
//
//console.log("greater than 35");
//console.log("less than 35");
//}

/////////////////////////////////////////////////////////
// k) Test of je bij alle uitkomsten kan komen. Verandert er iets als je alle If/Else omzet in aparte If blokken?

//
//else {
//   console.log("b/n 40 & 45");
//}


/* Opdracht 03.2: 
=================*/

/////////////////////////////////////////////////////////
/*
a) Schrijf een If/Else blok die een eigen variabele controleert:
- i) Gelijk aan 3?
- ii) Groter dan 4?
- iii) Groter dan 11?
- iv) Kleiner dan 3?
b) Test je variabele met 2, 3, 4, 5 en 20. Gebeurt er iets onverwachts?

*/
// Method 1 //

//var x = 2;
//x = 3;
//x = 4;
//x = 5;
//x = 20;
//if (x == 3)
//  console.log('x equal to 3');
//else if (x > 4 || x > 11 || x < 3) {
//  console.log("greater than 4");
//  console.log("greater than 11");
//  console.log("less than 3");
//} else {
//  console.log("There is Nothing");
//}


// Method 2 //

//let x = 3;
//if (x == 3)
//  console.log('x equal to 3');
//else if (x > 4 || x > 11 || x < 3) {
//  console.log("greater than 4");
//  console.log("greater than 11");
//  console.log("less than 3");
//} else {
//  console.log("b/n 40 & 45");
//}


/////////////////////////////////////////////////////////
// c) Schrijf een If/Else die een variabele op numerieke waarde controleert, en de passende maand in je console logt.


//let value = 01;
//if (value == 02) {
//  console.log("Feb");
//} else if (value == 03) {
//  console.log("Mar");
//} else if (value == 04) {
//  console.log("Apr");
//} else if (value == 05) {
//  console.log("May");
//} else if (value == 06) {
//  console.log("Jun");
//} else if (value == 07) {
//  console.log("Jul");
//} else if (value == 08) {
//  console.log("Aug");
//} else if (value == 09) {
//  console.log("Sep");
//}else if (value == 10) {
//  console.log("Oct");
//}
//else if (value == 11) {
//  console.log("Nov");
//} else if (value == 12) {
//  console.log("Dec");
//} else if (value == 01) {
//  console.log("Jan");
//} else {
//  console.log("Geen Geldige Maand");
//}

/////////////////////////////////////////////////////////
// d) Bouw nu opdracht C met een Switch/case.

//let value = 01;
//switch (value = 01) {
//  case 02:
//    value = "Feb";
//    console.log("Feb");
//    break;
//  case 03:
//    value = "Mar";
//    console.log("Mar");
//    break;
//  case 04:
//    value = "Apr";
//    console.log("Apr");
//    break;
//  case 05:
//    value = "May";
//    console.log("May");
//    break;
//  case 06:
//    value = "Jun";
//    console.log("Jun");
//    break;
//  case 07:
//    value = "Jul";
//    console.log("Jul");
//    break;
//  case 08:
//    value = "Aug";
//    console.log("Aug");
//  case 09:
//    value = "Sep";
//    console.log("Sep");
//  case 10:
//    value = "Oct";
//    console.log("Oct");
//  case 11:
//    value = "Nov";
//    console.log("Nov");
//  case 12:
//    value = "Dec";
//    console.log("Dec");
//  case 01:
//    value = "Jan";
//    console.log("Jan");
//  default:
//    console.log("Geen Geldige Maand");
//}

/////////////////////////////////////////////////////////
// e) Herschrijf dit als een Ternary Operator. -------------// ???? - check again//

//let x = 3;
//let results;
//
//if (x<=4 && x>=0) {
//results = 2;
//}
//
//else {
//    results = 5;
//}
//console.log(results);


/////////////////////////////////////////////////////////
//Gegeven de volgende code:

//let x = 3;
//let results;
//if (x<4=4 & x>=0) {
//    results = 2
//}
//
//else {
//    results = 5
//}
//console.log(results)
//Antwood
//let result = x =< 4 && x=>0 ? 2 : 5;
