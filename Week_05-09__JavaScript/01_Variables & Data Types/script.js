/* Opdracht 01.1: 
=================*/

/* We onderzoeken het verschil tussen var, let en const. Gegeven zijn een aantal voorbeelden -
schrijf eerst je verwachtingen op voordat je ze zelf nabootst. Kijk vervolgens wat er bij jou in
de console gelogd wordt - is dat wat je verwachtte? Zo nee, deel het dan aan het einde van
de dag met je groep.
*/

/////////////////////////////////////////////////////////
// a) 
// let letOefening = "Let Tekst";
// let letOefening = "Let Tekst Twee!";
//  console.log(letOefening); 


/////////////////////////////////////////////////////////
// b) 
//let letOefening = "Let Tekst";
//console.log(letOefening);
//
//letOefening = "Let Tekst Twee!";
//console.log(letOefening);

/////////////////////////////////////////////////////////
// c)
//const constOefening = "Const Tekst";
//console.log(constOefening);
//
//constOefening = "Const Tekst Twee!";
//console.log(constOefening);

/////////////////////////////////////////////////////////
// d)
//varOefening = "Var Tekst";
//console.log(varOefening);
//
//var varOefening = "Var Tekst Twee!";
//console.log(varOefening);
//
//var varOefening = "Var Tekst Drie!";
//console.log(varOefening);


/* Opdracht 01.2: 
=================*/

/////////////////////////////////////////////////////////
// a) Wat zie je in de console? Was dat wat je verwachtte?
//let typeQuestion ="number";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)

/////////////////////////////////////////////////////////
// b) Vervang bij het voorbeeld “Number” door de volgenden:


// i) True 
//let typeQuestion ="true";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion);


// ii) False
//let typeQuestion ="False";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// iii) Undefined (als je ‘= “Number”’ in zijn geheel weghaalt doet dat hetzelfde)
//let typeQuestion ="Undefined";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// iv) 22 
//let typeQuestion ="22";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// v) 22n 
//let typeQuestion ="22n";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// vi) Symbol() 
//let typeQuestion ="Symbole()";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// vii) null
//let typeQuestion ="null";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// viii) {} 
//let typeQuestion ="{}";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion)


// (xi) 
//let typeQuestion ="new Object()";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion);


// ix) new Object(); 
//let typeQuestion ="function calculateSomething(){}";
//console.log("This is a" + typeof typeQuestion + ", with the value" + typeQuestion);

//x) function calculateSomething() {} -------------// ???? - check again //

/* Opdracht 1.3: 
=================*/

//let someNumber = 5;
//let anotherNumber = 5; // "5"
//console.log(someNumber + anotherNumber)

/////////////////////////////////////////////////////////
// c) Wat komt hier uit? -------------// ???? - check again //

/////////////////////////////////////////////////////////
// d) Wat komt er uit als je van beiden een number maakt? -------------// ???? - check again //

/////////////////////////////////////////////////////////
// e) Wat komt er uit als je de + vervangt door:
// console.log(someNumber + anotherNumber)
// i) ==
//console.log(someNumber == anotherNumber); // 5

// ii) ===
//console.log(someNumber === anotherNumber); // true

// iii) !=
//console.log(someNumber != anotherNumber); //  false

// iv) !==
//console.log(someNumber !== anotherNumber); // false


/* Opdracht 01.4: 
=================*/

/////////////////////////////////////////////////////////
// a) Wat komt er uit het volgende?
//let increment = 1;
//console.log(++increment); // 2
//console.log(increment++);// 2

/////////////////////////////////////////////////////////
// b) Wat komt er uit als je de console.log() hierboven omdraait?
//let increment = 1;
//console.log(increment++);//1
//console.log(++increment); //3

/////////////////////////////////////////////////////////
// d) Wat komt er uit het volgende? (spaties toegevoegd voor helderheid)
//let modulo = 24 % 10;
//console.log(modulo); // 4

//let division = 24 / 10;
//console.log(division); // 2.4
//--
//let someNumber = "Tekst";
//console.log(! someNumber); // false

/////////////////////////////////////////////////////////
// e) Wat komt er uit bovenstaand als je someNumber verandert in:

// i) 5
//console.log(! 5); // false

// ii) Boolean
//console.log(! false); // true

// iii) false
//console.log(! Boolean); // false

// iv) “false”
//console.log(! "false)"; // Uncaught SyntaxError: missing ) after argument list

//v) true
//console.log(! true); // false

//vi) “true”
//console.log(! "true"); // false

// vii) null
//console.log(! null); // true

// viii) Undefined
//console.log(! undefined); // true

/////////////////////////////////////////////////////////
//f) -------------// ???? - check again //

/////////////////////////////////////////////////////////
//g) -------------// ???? - check again //
