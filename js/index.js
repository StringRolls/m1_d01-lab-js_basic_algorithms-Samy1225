// Iteration 1: Names and Input
let hacker1 = "Samy";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pepi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name and it has ${hacker1.length} characters`)
}

    else if (hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name and it has ${hacker2.length} characters`)
    }
    
    else if (hacker1.length === hacker2.length){
        console.log(`Wow, you both have equally long names and they have ${hacker1.length} characters!`)
    }



// Iteration 3: Loops
// Iteration 3.1 'Name' to 'N A M E'
let driverName = "";

for (let i = 0; i < hacker1.length; i++){
  driverName += hacker1[i].toUpperCase() + " "
}

console.log(driverName.trim());


// Iteration 3.2 'Name' to 'emaN'
let nameReverse = "";

for (let i = hacker1.length -1; i >= 0; i--){
    nameReverse = nameReverse + hacker1[i]
}

console.log(nameReverse);
// Iteration 3.3 Lexicographic order

let driversArray = [hacker1, hacker2];
let myArray = driversArray.sort();

for (let i = 0; i < myArray.length; i++){
    if (myArray === hacker1){
        console.log("The driver's name goes first.")
     }
     
     else if(myArray === hacker2){
         console.log("Yo, the navigator goes first definitely.")

     }
     
     else{
         console.log("What?! You both have the same name?")
     }

    }


// Bonus 1: Palindromes

// Bonus 2: Lorem ipsum counter
