function fn (msg){
  let countVowels = 0;
  let arr = [];
  for(let i = 0 ; i<msg.length;i++){
    if(msg[i] == 'a' || msg[i]== 'e' || msg[i] == 'i'  || msg[i] == 'o' || msg[i]=='u' ){
      arr.push(msg[i])
      countVowels++;
    }
  }
  if(countVowels == 0) console.log('No vowel in this sentence')
  console.log(`Total No. of vowels ${countVowels} are : ${arr}`)
}
let sentence = 'my name is devendra singh'
fn(sentence);