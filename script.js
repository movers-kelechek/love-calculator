/*Love calculator */

let yourName = prompt(`Write your name:`);
let yourPartnersName = prompt(`Write your partner's name:`);

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 70) {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You love each other very much!👩‍❤️‍👨 </h3>`
  );
} else if (loveScore < 70 && loveScore > 49) {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You are good friends👫👩‍❤️</h3>`
  );
} else {
  document.write(
    `<h2> ${yourName} + ${yourPartnersName}</h2> <br><h3>Your love score is ${loveScore}% <br>You can't be together💔</h3>`
  );
}

const h3t = document
  .querySelector("h3")
  .setAttribute(
    "style",
    "color: pink; font-size: 36px; text-align: center; margin-top:50px;font-family: cursive;"
  );
const h2t = document
  .querySelector("h2")
  .setAttribute(
    "style",
    "color: pink; font-size: 50px; text-align: center; margin-top:10px font-family: cursive;"
  );  



/*leap year*/

function isLeap(year){
if(year%4==0){
    if(year%100===0){
        if(year%400===0){
            return "Leap year";
        }else{
            return "not leap year";
        }
        return "Leap year";
    }else{
    return "not leap year";
}
}else{
    return "not leap year";
}           
}

console.log(isLeap(2000)+"<br>");
console.log(isLeap(2001)+"<br>");


let names=["Anjela","Jack", "pan", "James", "Lara", "Jason"];
console.log(names.length);
console.log(names[1]);
console.log(names.includes("pany"));



/*массивы и добавление данных*/
let output=[];
let count=1;
function fizzBuzz(){
    while(count <=100){
    if(count%3===0 && count%5===0){
      output.push("FizzBuzz");  
    } else if(count%3===0){      
output.push("Fizz");
    }
    else if(count%5===0){      
output.push("Buzz");
    }
    else{ 
output.push(count); 
    }
count++;
}
    console.log(output);
}
fizzBuzz();
 
 
/*фиббоначи*/

function finonacciGenerator(n){
    let output=[];
    if(n===1){
        output=[0];
    }else if(n===2){
        output=[0,1];
    }else{
        output=[0,1];
        for (let i=2; i<n; i++){
        output.push(output[output.length-2]+output[output.length-1]);
        }
    
    }
    return output;
    }
    
    output=finonacciGenerator(5);
    console.log(output);



