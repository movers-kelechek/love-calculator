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


