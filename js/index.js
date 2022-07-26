// Iteration 1: Names and Input

let hacker1 = "Carol";
console.log(`The driver's name is ${hacker1}`);
// expected output: "The driver's name is Eli"
let hacker2 = "Carlos";
console.log(`The navigator's name is ${hacker2}`);
// expected output: "The navigator's name is Javi"

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// expected output in this case: "It seems that the navigator has the longest name, it has 4 characters."


// Iteration 3: Loops
// Count the number of words (option 2, in one line):
// we convert the text into an array by identifying each blank space and then we get the array's length

/* console.log(`Second word count is ${trimmedLorem.split(" ").length}.`); */

// Iteration 3.1 'Name' to 'N A M E'
let upperCaseName = "";
for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseName.trim());

// Iteration 3.2 'Name' to 'emaN'
let reverseName = "";
for (let k = hacker1.length - 1; k >= 0; k--) {
  reverseName += hacker1[k];
}
console.log(reverseName);

// Iteration 3.3 Lexicographic order
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Palindromes

let text = "Amor Roma";
let backwardsText = "";

for (let h = text.length - 1; h >= 0; h--) {
  backwardsText += text[h];
}

if (text.toLowerCase() === backwardsText.toLowerCase()) {
  console.log(`${text} is a Palindrome`);
} else {
  console.log(`${text} is not a Palindrome`);
}


// Bonus 2: Lorem ipsum counter
 const loremIpsum =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

// first we trim the extra blank spaces
let trimmedLorem = loremIpsum.trim();

// Count the number of words (option 1):
// we count the blank spaces in the text and add 1 more (for the last word)
let wordCount = 0;
for (character of trimmedLorem) {
  if (character === " ") wordCount += 1;
}
console.log(`Word count is ${wordCount + 1}.`);


/* // Bonus 2: Lorem ipsum counter
const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue condimentum porta. Donec sem tellus, tincidunt et est eu, fringilla vestibulum turpis. Fusce dapibus, leo et auctor lacinia, nunc lacus malesuada est, at interdum nibh leo sed leo. Fusce aliquam finibus tortor quis auctor. Proin maximus mi in dictum auctor. Cras fermentum nisi sed mi consequat, sit amet rhoncus magna tristique. Mauris aliquam tincidunt nunc hendrerit malesuada. Praesent eget nisl augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lorem ligula, malesuada eleifend quam sed, molestie dapibus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus velit lectus, ullamcorper pharetra nisl nec, tincidunt hendrerit urna. Sed id ullamcorper leo, ut vulputate quam. Sed eu arcu at elit rhoncus lacinia. Sed aliquam libero sed turpis pulvinar, sed blandit nisi mollis. Mauris felis nulla, tempus sit amet ante eu, condimentum vestibulum justo.

Maecenas non nisi viverra, semper justo a, hendrerit ligula. Fusce interdum metus elit, ut imperdiet turpis posuere eu. Nullam dignissim sollicitudin libero, ut lacinia purus varius nec. Fusce interdum ex in bibendum imperdiet. Proin ac eros diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque dui purus, viverra quis scelerisque at, sodales vitae nisl. Sed scelerisque massa at lobortis pellentesque. Pellentesque in consequat diam, nec congue dolor. Proin ac est ultrices, ultricies lectus sit amet, pellentesque dolor. Maecenas vitae elit metus.

Curabitur at ex eu augue tempor maximus. Fusce sodales diam ac leo volutpat, sodales molestie neque molestie. Praesent et pretium elit, accumsan sagittis sem. Proin euismod, enim vitae mollis cursus, ante magna iaculis ex, quis mollis ipsum sapien a nulla. Donec ultrices, risus vel ultricies vulputate, quam enim vestibulum massa, vitae euismod lorem lorem ac tortor. Etiam vulputate id sem eget pellentesque. Sed malesuada tristique quam ut auctor. Sed quam metus, maximus quis faucibus sit amet, semper ac purus. Quisque sed ipsum arcu. Vestibulum non urna pellentesque quam volutpat porta vel et nisl. Nam imperdiet auctor ipsum ac cursus. Integer vel nunc eget ligula porta dictum.
`;


let etCounter = 0;

for (var i = 0; i < lorem.length; i++) {
    if (lorem[i] === "e" && lorem[i+1] === "t") {
        if (lorem[i-1] === " " && lorem[i+2] === " ") {
            etCounter++;
        }
    }
}

console.log(`Lorem Ipsum contains ${etCounter} 'et' words.`); */
 


 
