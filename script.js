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

document.write(isLeap(2000)+"<br>");
document.write(isLeap(2001)+"<br>");