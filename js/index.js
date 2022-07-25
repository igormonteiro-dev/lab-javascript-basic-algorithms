// Iteration 1: Names and Input

const hacker1 = "James";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Clara";
console.log(`The navigator's name is ${hacker2}`);

const totalCharacters = hacker1.length + hacker2.length;

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let nameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  nameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(nameWithSpaces);

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i].toLowerCase();
}

console.log(reverseName);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus1

let texteLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat sapien, semper nec tortor non, tempus viverra elit. Sed aliquam rutrum tristique. Nullam sed tortor mauris. Sed dignissim tellus at ex euismod cursus. Aenean porta, massa vel mollis venenatis, diam sem placerat tellus, nec cursus nunc diam quis risus. Fusce eget tortor pretium, rhoncus purus eu, hendrerit enim. Praesent felis neque, ullamcorper in lacus eget, consequat porttitor tellus. Ut nisl felis, egestas sed accumsan at, suscipit aliquet ligula. Vestibulum pretium tortor at ultricies tempor. Mauris lobortis leo nec erat laoreet pretium. Maecenas lobortis rhoncus leo quis sagittis. Curabitur lacinia diam vitae neque interdum, nec laoreet nunc sollicitudin. Suspendisse non feugiat dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit./nEtiam neque risus, laoreet vel ligula vitae, accumsan lacinia nunc. Ut porttitor, nisl ac dapibus hendrerit, magna mauris pharetra orci, vel dictum massa ligula sed nisi. Integer urna nunc, egestas ut ipsum ultricies, euismod fringilla diam. Mauris luctus odio sit amet mauris imperdiet, at congue quam imperdiet. Phasellus dictum, libero eget tincidunt suscipit, sem odio viverra nunc, eu auctor elit turpis et velit. Duis pretium risus sapien, sed hendrerit nulla sollicitudin a. Vivamus risus enim, fringilla sit amet ipsum ut, dapibus imperdiet turpis. Nunc ut mollis sem. Sed eget neque elementum, pretium augue ut, porta arcu. Mauris leo nisi, rhoncus at volutpat id, accumsan et quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;/nIn leo urna, lobortis nec elementum et, maximus nec enim. Aliquam nec lacus in arcu maximus faucibus eget feugiat sapien. Praesent egestas nunc sed laoreet congue. Nulla facilisi. Duis nec gravida nulla. Maecenas tempor nisl a sem tincidunt, quis volutpat diam sodales. Proin commodo dolor a lobortis tristique. Suspendisse sollicitudin purus nisl, tempor varius turpis mattis sed. Fusce volutpat augue risus, quis aliquam massa hendrerit vel. Sed ligula tellus, ultrices volutpat nunc et, consequat congue lectus. Integer hendrerit tempor elit. In vel diam vitae urna vehicula fringilla sed ut urna. Fusce fermentum ullamcorper eros, sed luctus mauris consectetur ut.`;

// remove the white spaces than count the nb of words
function WordCount(string) {
  return string.split(" ").length;
}

console.log(WordCount(texteLorem));

// giving 2 parameters: the text/string and the word we want to count on it
function countOccurences(string, word) {
  return string.split(word).length;
}

console.log(countOccurences(texteLorem, "et"));

// BONUS 2

let phraseToCheck = "stack cats";

// function to reverse the value
function reverseWord(str) {
  // variable holds reverse string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  // return reverse string
  return reversed;
}

//  function checking string is palindrome or not
function ValueIsPalindrome(str) {
  reverse_str = reverseWord(str);

  //  condition checking if reverse str is
  // same as string it is palindrome
  // else not a palindrome
  if (reverse_str.replace(/\s+/g, "") === str.replace(/\s+/g, "")) {
    console.log("passed string is palindrome ");
  } else {
    console.log("passed string is not palindrome");
  }
}

ValueIsPalindrome(phraseToCheck);
