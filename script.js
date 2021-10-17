prompt(`What is your name?`);
prompt(`What is their name?`);

let n=Math.random()*100;
n=Math.floor(n)+1;

if(n>70){
    alert(`Your love score is `+n +`% . You love each other like kanye loves Kiki`);
}
if(n>30 && n<=70){
    alert(`Your love score is `+n+`%. `);
}
if(n<=30){
    alert(`Your love score is `+n+`%. You go together like oil and water`);
}




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



