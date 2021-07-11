/////////////////////////////////////////////////////////
// - CODE CHALLENGE 03

/* Opdracht:
Een palindroomgetal is een getal dat je aan beide kanten hetzelfde getal leest. Het grootste palindroomgetal dat je met twee 2-cijferige getallen kan maken is 9009: 91 x 99.
Vind het grootste palindroomgetal dat je met twee 3-cijferige getallen kan maken.
*/

// - Method 01: - KIm Sing
function findHighestPalindroom() {
  let highestPalindroom = 0;
  for (let i = 999; i > 100; i--) {
      for (let j = 999; j > 100; j--) {
          const result = i * j; // first calculation is 999 * 999 = 998001
          const resultInString = result.toString(); // convert to string to be able to loop through each number "998001"
          //find palindroom
          let isPalindroomNumber = true;
          for (let k = 0; k < resultInString.length - 1; k++) {
              // compare  two numbers to see if it's the same. If it's not the same, than it's not a palindroom.
              if (!(resultInString[k] === resultInString[resultInString.length - 1 - k])) {
                  isPalindroomNumber = false;
                  break;
              }
          }
          if (isPalindroomNumber && highestPalindroom < result) {
              highestPalindroom = result;
          }
      }
  }
  return highestPalindroom;
}
console.log(findHighestPalindroom());
// - Method 02: - Jeans
// Als je op 906609 uitkwam, had je het goed!
        // Hieronder mijn code en stappen die ik heb doorlopen.
        ​
        // Eerst moet ik voor een getal kunnen bepalen of het een palindroomgetal is
​
        // Daarvoor wil ik van een gegeven getal de eerste + laatste vergelijken
        // Daarna de tweede + een na laatste etc.
        // Als het getal een oneven lengte heeft (bijv 90109) dan maakt het middelste getal niet uit.
​
        function isPalindrome(input) {
            // Ik kan niet gelijk met input.length kijken hoeveel getallen er in mijn input zitten.
            // Door er een string van te maken kan ik dat wel
            input = String(input)
​
            // Hoe vaak moet ik getallen gaan vergelijken?
            // Bij lengte 5 moet het bijvoorbeeld 2 zijn
            // Dus ik pak de helft van de lengte en rond die naar beneden af.
            let runtime = Math.floor(input.length / 2)
​
            // Nu moet ik berekenen of iets wel of niet een palindroom is
            // Ik begin met "wel waar" en als het niet waar is verander ik dit.
            let palindrome = true
​
            // Nu moet ik herhaaldelijk gaan vergelijken
            // Ik probeerde het eerst met alleen eerste en laatste!
            // input.charAt(0) === input.charAt(input.length - 1)?
​
            // Daarna breidde ik het uit met een for loop
            for (let index = 0; index < runtime; index++) {
                if (!(input.charAt(index) === input.charAt(input.length - (index + 1)))) {
                    // Hier komt hij binnen als ze NIET gelijk zijn.
                    // Dan zetten we palindrome op false en stoppen we de loop
                    // Bij een palindroomgetal, bijv. 9009, komt hij hier nooit binnen.
                    palindrome = false;
                    break;
                }
            }
            // Hier zorg ik dat de waarde wordt teruggegeven, zodat ik die ook ergens anders kan gebruiken.
            return palindrome;
        }
        // Nu controleer ik of mijn isPalindrome() functie werkt zoals verwacht
        // console.log(isPalindrome(9009))
        // console.log(isPalindrome(900))
        // console.log(isPalindrome(90509))
​
        // Nu moet ik getallen gaan doorzoeken om te kijken of ze een palindroom zijn.
        // Als je het grootste getal van 2 cijfers wil, tel je af vanaf het maximum: 99 x 91
​
        // Je kan nu 2 kanten op:
        // 1 getal decrementen en de andere op 99 laten.
        // 2 getallen tegelijk decrementen.
        // Hoe weet je welk resultaat groter is?
​
        // We laten de computer het voor ons berekenen.
        // Als we eerst 1 getal van 99 x 99 naar 99 x 1 doen
        // Daarna 98 x 98 naar 98 x 1 etc.
        // Dan komen we alle combinaties langs.
​
        // Ik begin dus met 1 tegelijk decrementen
        function decrementOne(numberOne, numberTwo) {
            // Ik weet niet wanneer het gaat stoppen
            // Dus ik gebruik while(true)
            while (true) {
                // Vermenigvuldig de parameters en geef hett resultaat
                let outcome = numberOne * numberTwo
                // Is het een palindroom?
                if (isPalindrome(outcome)) {
                    // De functie stopt en geeft het palindroomgetal terug.
                    return outcome
                    // Als de functie door zou gaan, zou hij na 91 x 99 bijv. 90 x 99 proberen
                    // Maar zelfs als dat een palindroom is, kan het niet groter zijn.
                    // Daarom lekker returnen om de functie te stoppen.
                }
                // Is het geen palindroom? Dan decrement je 1 getal.
                numberTwo--
                // En omdat het een while loop is, kijkt hij daarna door.
            }
        }
        // Nu test ik mijn functie.
        // console.log(decrementOne(99, 99))
        // Toont dit 9009 zoals ik verwacht?
​
        // Nu moet ik nog rekening houden met 98 x 98 en lager.
        function decrementBoth(numberOne, numberTwo) {
            // Eerst kijken wat het resultaat is van startwaarde,
            let largestDecremented = decrementOne(numberOne, numberTwo)
            while (numberOne > 1) {
                // Zolang de getallen boven de 1 zijn zal dit draaien.
                numberOne--
                numberTwo--
                // Beiden een keer decrementen - de laatste waardes worden beiden 0.
                // Hogere waardes zoals 98 x 99 zijn eerder al gedekt!
                // Nu gaan we 98 x 98 tot 98 x 1 controleren op het grootste palindroomgetal
                let newResult = decrementOne(numberOne, numberTwo)
                // Is dat getal groter dan onze vorige grootste?
                // Dan wordt de grootste gelijk aan dit nieuwe resultaat.
                if (newResult > largestDecremented) largestDecremented = newResult
            }
            return largestDecremented
        }
        // Dit is al genoeg om het antwoord te vinden
        // console.log(decrementBoth(999, 999))
        // Toch wil ik het wat mooier hebben: dat staat hieronder
​
        const input = document.querySelector('input')
        const display = document.querySelector('#answer')
​
        function calculate(event) {
            let value = event.target.value
            console.log(value)
            // Mijn pc vindt hele grote getallen niet zo leuk
            // We valideren de input
            if (value < 1) value = 1
            if (value > 4) value = 4
            let startValue = ''
            for (let i = 0; i < value; i++) {
                startValue += 9
            }
            console.log(startValue)
            display.innerText = decrementBoth(startValue, startValue)
        }

        input.onchange = calculate;

// - Method 03:
        let c = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
            let m = i * j
            let p1 = String(m).slice(0, 3)
            let p2 = String(m).slice(3)
            if (p1[0] == p2[2] && p1[1] == p2[1] && p1[2] == p2[0]) {
                if( m > c ) c = m
            }
        }
    }
console.log(c)

// - Method 04:
function grootsePalim() {
  let max = 0;
  for (let i = 999; i > 100; i--) {
     for (let j = i; j > 100; j--) {
        let mul = j * i;
        if (isPalim(mul) && mul > max) {
           max = i * j;
        }
     }
  }
  return max;
}
function isPalim(i) {
  i = '' + i;
  return i === i.split("").reverse().join("");
}
console.log(grootsePalim());

/////////////////////////////////////////////////////////
// - CODE CHALLENGE 02

/*
02 - Misschien ben je al bekend met de Reeks van Fibonacci; een getallenreeks waarbij elk getal een optelsom van de vorige 2 is: 0,1, 1, 2, 3, 5, 8, 13 etc. Deze reeks heeft even en oneven getallen.

Zoek een optelsom van alle even getallen onder de vier miljoen in de Reeks van Fibonacci
*/
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// - Method 01:
function fibonacci(arr, totalCount) {
  const firstNumber = arr[arr.length - 2]; //1
  const secondNumber = arr[arr.length - 1]; //2
  const sum = firstNumber + secondNumber; // 3
  console.log(`lengte van array ${arr.length}. totalCount ${totalCount}`)
  if (arr.length < totalCount) {
    arr.push(sum) // [0, 1, 1, 2, 3]
    // console.log(arr);
    return fibonacci(arr /** [0,1,1,2,3] **/ , totalCount /** 30 **/ );
  }
  // hier terecht
  return arr;
}
console.log(fibonacci([0, 1], 30));
// - Method 02:
const arr = [0, 1];
let sumEvenFibonacciNumbers = 0;
while (true) {
  const sum = arr[arr.length - 2] + arr[arr.length - 1];
  if (sum > 4000000) {
    break;
  }
  if (sum % 2 === 0) {
    sumEvenFibonacciNumbers += sum;
  }
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
}
console.log(sumEvenFibonacciNumbers);

/////////////////////////////////////////////////////////
// - CODE CHALLENGE 01

/*
01 - Als je een lijst maakt van alle getallen onder de 10 die een meervoud zijn van 3 of 5 krijg je 3, 5, 6 en 9. De optelsom van deze getallen is 23.
Geef de optelsom van alle getallen onder de 1000 die een meervoud van 3 of 5 zijn.
*/

// -  Method 01:
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

// - Method 02:
arrayNum = [];
sum = 0;
for (i = 0; i < 1000; i += 3) {
  arrayNum.push(i);
  sum += i;
}

for (j = 0; j < 1000; j += 5) {
  arrayNum.push(j);
  sum += j;
}

console.log(sum);
