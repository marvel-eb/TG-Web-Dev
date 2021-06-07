/* Opdracht 06.1:
=================*/

/////////////////////////////////////////////////////////
/* // a) Maak meerdere objects Pet met een naam en een soort. Maak een ander dier met elk
van de 5 soorten constructor uit de voorbeelden en log deze in de console.Zie je een
onverwachte property?
*/


// Literal Constructor Method:
// let pet1 = {
//   name: "panda",
//   age: "12",
//   location: "china",
//   color: "white&black",
//   kind: "animal"
// }
// console.log(pet1);

//  Object Constructor Method:
// let pet2 = new Object();
// pet2.name = "panda"
// pet2.age = "12"
// pet2.location = "china"
// pet2.color = "white&black"
// pet2.kind = "animal"
// console.log(pet2);

// Function Constructor Method:
// function pet3(name, age, location, color, color, kind){
//   this.name = name
//   this.age = age
//   this.location = location
//   this.color = color
//   this.kind = kind
// }
// let pets = new pet3 ("panda", "12", "china", "white&black", "animal")
// console.log(pet3);

// Singleton Constructor Method:
// let pet4 = new function () {
//   this.name = "panda",
//   this.age = "12",
//   this.location = "china",
//   this.color = "white&black",
//   this.kind = "animal"
// }
// console.log(pet4);

// Class-based Constructor Mthod:  -------------// ???? - check again //
// class pet5 {
// constructor(name, age, location, color, color, kind){
//   this.name = "panda"
//   this.age = "12"
//   this.location = "china"
//   this.color = "white&black"
//   this.kind = "animal"
// } }
// let classConstructed = new pet5 ("panda", "12", "china", "white&black", "animal")
// console.log(pet5);

/////////////////////////////////////////////////////////
/* // b) Gebruik Object.create() om een Object aan te maken. Doe dit voor elke Pet die je in de
vorige opdracht hebt gemaakt, en log ze in de console. Valt er iets op aan de
prototype?
- De laatste veelgebruikte manier om Objecten aan te maken is met Object.create()
*/

// let pet6 = {
//   name: "panda",
//   age: "12",
//   location: "china",
//   color: "white&black",
//   kind: "animal",
//   printIntroduction: function(){
// console.log(`This is ${this.name}. Is animal? ${this.kind}`);
//   }
// };
// let pet = Object.create(pet6);
// pet.printIntroduction();

/////////////////////////////////////////////////////////  -------------// ???? - check again //
/* // c) Maak een array met 10 Person Objects, die een naam en leeftijd hebben. Gebruik
vervolgens Array methods om je personen te sorteren op leeftijd.
*/

//var myFriends = [
//[{name: 'Selam', age: 35}],
//[{name: 'Serkadis', age: 39}],
//[{name: 'Rahel', age: 26}],
//[{name: 'Eleni', age: 22 }],
//[{name: 'Kidist', age: 27}],
//[{name: 'Hana', age: 21}],
//[{name: 'Joeri', age: 26}],
//[{name: 'Elly', age: 45 }],
//[{name: 'Justin', age: 27}],
//[{name: 'Sani', age: 39}]]
//grouped = [];
//console.log(myFriends);

/* Opdracht 06.2:
=================*/
/////////////////////////////////////////////////////////  -------------// ???? - check again //


//let club = {
/* // a) Maak een Club object dat het volgende bijhoudt:
   i) Naam
   ii) Type club
   iii) Aantal :Leden
*/
//      "name":"Club Amsterdam",
//      "type Club":"Dance",
//      "Aantal :Leden": {
/* b) Maak een Contactinformatie object aan en voeg die toe aan elk Club object. De
   Contactinformatie houdt het volgende bij:
  i) Adres
  ii) Telefoonnummer
  iii) Contactpersoon
  */
//         "address":"v.d street 2080DA, Amsterdam",
//         "telefoonnummer":"06-48276-45",
//         "Contactpersoon":"Jens"
//      }
//   }
/* c) Maak een array met 5 verschillende Clubs aan. Itereer door het array heen en log voor
elke Club de naam, het telefoonnummer en de contactpersoon.
*/
//console.log(club);
