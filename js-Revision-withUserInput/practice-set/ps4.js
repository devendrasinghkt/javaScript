// question 1
let name = "harry";
console.log(name.length)

let name2 = 'harry\nRam'
console.log(name2.length)

// question 2
const sentence = 'The quick brown fox jumps over the lazy dog. ';
const word = 'fox1';
console.log(sentence.includes(word))
// adv
console.log(`The word "${word}" ${sentence.includes(word)? 'is' :'is not'}  in the sentence`);
const str = "Saturday night plans";

console.log(str.startsWith("Sat"));
// Expected output: true

console.log(str.startsWith("Sat", 3));
// Expected output: false

// question 3
const sentence2 = "Ram is good Boy"
console.log(sentence2.toLowerCase());


// question 4
let str2 = `Please give rs 1000`
let amount = str2.slice(15)
console.log(amount)
console.log(typeof amount)
let amount2 = Number.parseInt(str2.slice(15))
console.log(amount2)
console.log(typeof amount2)

// question 5
let name4 = 'Harry coder'
console.log(name4)
name4[3] = 'y'
console.log(name4) // existing string is not changed because string is immutable(not change string in js)

