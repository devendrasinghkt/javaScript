function fn (msg){
  let count = 0;
  let arr = [];
  for(let i = 0 ; i<msg.length;i++){
    if(msg[i] == 'a' || msg[i]== 'e' || msg[i] == 'i'  || msg[i] == 'o' || msg[i]=='u' ){
      arr.push(msg[i])
      count++;
    }
    else {
      console.log("No vowels in this sentence")
    }
  
  }
  console.log(`Total No. of vowels ${count} `)
  console.log(arr)
}
fn("my name is devendra singh");