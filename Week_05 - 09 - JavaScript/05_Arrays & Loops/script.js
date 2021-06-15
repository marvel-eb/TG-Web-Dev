/* Opdracht 05.1:
=================*/

/////////////////////////////////////////////////////////
// a) Maak een array met 1 t/m 10 in willekeurige volgorde en log dit.

//const myNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//console.log(myNumbers);
//const myNumbers2 = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//console.log(myNumbers2;)


/////////////////////////////////////////////////////////
// b) Maak een array met Appel, Aardbei en 3 andere fruitsoorten. Log dit.

//const fruits = ['Apple', 'Strawberry', 'Banana', 'Orange', 'Lemon'];
//console.log(fruits);


/////////////////////////////////////////////////////////
// c) Gebruik de indexwaarde om Appel en Aardbei in de console te loggen.

//console.log(fruits[0]);
//console.log(fruits[1]);


/////////////////////////////////////////////////////////
// d) ??????????????????????????????????? - check again


//let randomItem = fruits[Math.floor(Math.random() * fruits.length)];
//document.body.innerHTML = randomItem;
//console.log(randomItem);


/////////////////////////////////////////////////////////
// e) Console log de length property van je fruitsoorten array.

//console.log(fruits.length);


/////////////////////////////////////////////////////////
// f) Fix de vorige error met modulo en de lengte.


//Fix de vorige error met modulo en de lengte.


/////////////////////////////////////////////////////////
// g) Verander “Appel” naar “Peer”

//fruits[0] = 'Peer';
//console.log(fruits);

/////////////////////////////////////////////////////////
// h) Verwissel “Peer” en “Aardbei” van positie. Kan je dit ook al met/zonder Array method?

//With Array
//const temp = fruits[0];
//fruits[0] = fruits[1];
//fruits[1] = tmp;
//console.log(fruits);

//Without Array
//[fruits[1], fruits[0]] = [fruits[0],
//  [1]
//];
//console.log(fruits);


/* Opdracht 05.2:
=================*/


/////////////////////////////////////////////////////////
// a) Loop door het array heen en log de items 1 voor 1 in je console.

//const dutchsports = ['Voetbal', 'Hockey', 'Schaatsen'];
//console.log(dutchsports[0]);
//console.log(dutchsports[1]);
//console.log(dutchsports[2]);


/////////////////////////////////////////////////////////
// b) Doe nu hetzelfde met een for...in en een for...of loop

//for (let i = 0; i < dutchsports.length; i++) {
//  console.log(dutchsports[0]);
//  console.log(dutchsports[1]);
//  console.log(dutchsports[2]);
//}


/////////////////////////////////////////////////////////
// c)  Maak een for loop die van de getallen 1 t/m 20 de even getallen logt.


//- Even Number with Loop
//let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//for (let i = 0; i < allNumbers.length; i++) {
//  if ((i % 2) == 1)
//    console.log(allNumbers[i]);
//};
//- Even Number without Loop
//let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//let evenNumbers = allNumbers.filter(function (item) {
//  return (item % 2 == 0);
//});
//console.log(evenNumbers);


/////////////////////////////////////////////////////////
// d) Maak daarbinnen een for-loop die 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 logt.

//let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/////////////////////////////////////////////////////////
// e) Volg die op met een 2e nested loop die 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 logt.


//let numbers2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

/////////////////////////////////////////////////////////
// f) Volg die weer op met een 3e nested loop die 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 logt.

//Volg die weer op met een 3 e nested loop die 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 logt.
//Nu maken we het iets lastiger.De Reeks van Fibonacci is een lijst met getallen waarbij elk
//getal een opsomming is van de vorige 2 getallen.
//
//let numbers3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
//console.log(numbers1);
//console.log(numbers2);
//console.log(numbers3);


// g) Begin met het array [0,1]. Maak vervolgens een loop die dit array vult met de eerste 50 getallen van de Reeks van Fibonacci. Log dit array.  -------------// ???? - check again //


//Begin met het array [0,1]. Maak vervolgens een loop die dit array vult met de eerste 50
//getallen van de Reeks van Fibonacci. Log dit array.

//for (let i = 0; i < numbers1.length; i++) {
//  for (let j = 0; j < numbers2.length; j++) {
//   for (let j = 0; j < numbers3.length; k++) {
//    if (numbers1[i] === numbers3[k]) {
//      // console.log('Both loops have the number: ' + numbers3[k])
//    }
//  }
//}
//};


// h)  Bouw een loop die het gegeven array met bubblesort sorteert.  -------------// ???? - check again //


/* Opdracht 5.3:
=================*/

/////////////////////////////////////////////////////////
// a) Voeg Zeilen en Zwemmen toe aan het einde van het array

// const dutchSports = [ 'Voetball', 'HotKey', 'Schaatsen'];

/////////////////////////////////////////////////////////
// b) - Add Elements to the end of  the array

// dutchSports.push('Zeilen', 'Zwemmen');
// console.log(dutchSports);

/////////////////////////////////////////////////////////
// c) Add Elements from the begining of the array

// dutchSports.unshift('Vollyball');
// console.log(dutchSports);

/////////////////////////////////////////////////////////
// d) Remove Elemnets from the array

// dutchSports.pop();
// console.log(dutchSports);

//?????????????????????????? - check again
// e) Sorteer het dutchSports array.

//
//dutchSports.sort(function(a, c){return c-a});

/////////////////////////////////////////////////////////
// f) Log elk item in de console.

//console.log(dutchSports);

//?????????????????????????? - check again
// Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.


/* Opdracht 5.4:
=================*/

/////////////////////////////////////////////////////////
// a) Gebruik Array.from() om er een nieuw array van te maken.

//let fruitsArr = "LOVE";
//console.log(Array.from('lOVE'));

// Onderzoek de volgende array methods en maak voor elke een voorbeeld:
//let friends = [{
//    friend: "Sara",
//    age: 25
//  },
//  {
//    friend: "Eleni",
//    age: 20
//  },
//  {
//    friend: "Loz",
//    age: 25
//  },
//  {
//    friend: "Serkadis",
//    age: 35
//  },
//  {
//    friend: "Rahel",
//    age: 28
//  },
//  {
//    friend: "Kidist",
//    age: 29
//  },
//]


/////////////////////////////////////////////////////////
// b) filter()

//let filteredFriends = friends.filter((friend) =>{
//    return friend.age <= 22
//});
////console.log(friends);
//console.log(filteredFriends); // 0: {friend: "Eleni", age: 20}length: 1__proto__: Array(0)

/////////////////////////////////////////////////////////
// c) find()

//let finedFriend = friends.find((friends) => {
//    return friends.friend === "Rahel"
//});
//console.log(finedFriend); // {friend: "Rahel", age: 28}

/////////////////////////////////////////////////////////
// d) some()

//let youngeAge = friends.some((friends) => {
//    return friends.age <= 25
//});
//console.log(youngeAge); // true

//////////////////////////////////////////////////////////
// e) every()

//let youngeAge = friends.every((friends) => {
//    return friends.age <= 22
//});
//console.log(youngeAge); // false

/////////////////////////////////////////////////////////
// f) includes()

//let friends2 = [
//  "Sara",
//  "Eleni ",
//  "loz",
//  "Serkadis",
//  "Rahel",
//  "Kidist"
//]
//console.log(friends2.includes('Serkadis'));
//console.log(friends2.includes("Kidist"));
