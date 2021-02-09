/***** Variablen 01 *******/

// Zeilenkommentar

/**
 * Blockkommentar
 */

// Ausgabe
//console.log("hallo");
//console.log(firstName + " " + familyName);

/* Deklaration + Wertzuweisung I 
let firstName;// Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
let familyName = "Mütze"; // Dekl. + Wert.
console.log(firstName);
console.log(familyName);
console.log(firstName + " " + familyName);
*/

/* Deklaration + Wertzuweisung II 
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben!");
familyName = prompt("Bitte Namen eingeben!");
console.log("Hallo, " + firstName + " " + familyName + "!");
*/

// JS ist eine untypisierte Sprache! | untyped
/*
let test;  // Deklaration
test = "hi";  // String
test = 2; // Number
test = true; // Boolean

console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/

/***** Variablen 02 *******/

//Deklaration
/*
let ageJohn, ageMark;
let birthYearJohn, birthYearMark, now;

//Wertzuweisung | Assignment
let date = new Date();
now = date.getFullYear();
ageJohn = 25;
ageMark = 30;

//Operation (Differenz)
birthYearJohn = now - ageJohn;
birthYearMark = now - ageMark;

//Ausgabe
console.log("bAktuelles Jahr:" + now);
console.log("birthYearJohn:" + birthYearJohn);
console.log("birthYearMark:" + birthYearMark);
console.log("---------------------");
*/

/***** Variablen 03 *******/
/*
//Deklaration/Wertzuweisung
let ageJohn, ageMark;
ageJohn = 55;
ageMark = 30;

//Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);

//isURLvalid() | Beispiel

console.log(isJohnOlder);
*/

/***** Variablen 04 *******/

let nix;
let ageJohn = 28;
let ageMark = 30;
let firstName = "John";
let isJohnOlder = (ageJohn > ageMark);

console.log("nix: " + typeof nix);
console.log("ageJohn: " + typeof ageJohn);
console.log("name: " + typeof firstName);
console.log("isJohnolder: " + typeof isJohnOlder);
