/* Opdracht 02.1: 
=================*/

// let someKittens = "De poes van de buuren heeft kittens gehad! Hij vraagt of wij nog kittens willen?";

/////////////////////////////////////////////////////////
// a) Splits de string op in 2 aparte zinnen. Stop beiden in een aparte variabele.
//let someKittens = "De poes van de buuren heeft kittens gehad!";

//console.log(someKittens);
//someKittens = " Hij vraagt of wij nog kittens willen?";
//console.log(someKittens);

/////////////////////////////////////////////////////////
// b) Zo’n geweldig nieuws verdient upper case. Zet someKittens om naar hoofdletters.
// c) Geef de eerste en laatste index van KITTENS.
// d) Gebruik charAt() op beiden. Welk teken krijg je terug?

//let kittens = "Zo’n geweldig nieuws verdient upper case.";
//let index = 5;
//KITTENS = "Zet someKittens om naar hoofdletters.";
//index = 6;
//console.log(`The character at index ${index} is ${kittens.charAt(index)}`);

/* Opdracht 02.2: 
=================*/

/* substring() en slice() kunnen 2 waardes meegegeven worden - een index waar de nieuwe
waarde begint en een index waar deze moet eindigen.*/

/////////////////////////////////////////////////////////
// a) Wat doet substring() als het eerste getal hoger is dan het tweede getal? -------------// ???? - check again//

/////////////////////////////////////////////////////////
// b) Wat doet slice() als het eerste getal hoger is dan het tweede getal? -------------// ???? - check again//


/* Deze waardes hoeven niet per se positief te zijn - je kan ook negatieve getallen meegeven. 
 */

// c) Wat doet substring() bij negatieve waardes? -------------// ???? - check again//
// d) Wat doet slice() bij negatieve waardes? -------------// ???? - check again//

//let str = "AdiLove";
//console.log(str.substring(1, 4)); // diL


/* Opdracht 2.3: 
=================*/

//let someKittens = "Die nieuwe kittens zijn zo schattig!";

/////////////////////////////////////////////////////////
//let words = someKittens.split(' ');
//console.log(words[2]); // kittens


//const chars = someKittens.split('');
//console.log(chars[4]); // n
//
//const strCopy = someKittens.split();
//console.log(strCopy); //Array [ "Die nieuwe kittens zijn zo schattig!" ]
//
//                    // 0: "Die nieuwe kittens zijn zo schattig!"
//
//                    // length: 1
