// function fn (msg){
//   let countVowels = 0;
//   let arr = [];
//   for(let i = 0 ; i<msg.length;i++){
//     if(msg[i] == 'a' || msg[i]== 'e' || msg[i] == 'i'  || msg[i] == 'o' || msg[i]=='u' ){
//       arr.push(msg[i])
//       countVowels++;
//     }
//   }
//   console.log(`Total No. of vowels are : ${countVowels}`)
//   console.log(arr)
// }
// let sentence = 'My nick name is dev'
// fn(sentence);

              // Second way

function countVowels(str){
  let count = 0;
  for(const char of str){
    if(char == 'a' || char== 'e' || char == 'i'  || char == 'o' || char=='u' ){
      count++;
    }
  }
  return count;
}
let str = 'dry'
console.log(countVowels(str))