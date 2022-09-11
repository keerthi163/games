let count = 0;
let msg1 = document.getElementById("message1");
let computer = Math.floor((Math.random() * 25) + 1);
function Mediumguessing(){
    let user = document.getElementById("inputtext").value;
    if( computer == user ){
        document.getElementById("inputtext").style.border = 'solid 4px green';
        count++;
        document.getElementById('row_1').innerHTML = 'YOU USED ' + count+'CHOICES TO GUESS THE NUMBER';
        msg1.textContent = "";
    }
    else if( computer > user ){
        document.getElementById("inputtext").style.border = 'solid 4px blue';
        count += 1;
        msg1.textContent = " No. of Guesses:  " + count;                                 
    }
    else if( user > computer){
        document.getElementById("inputtext").style.border = 'solid 4px red';
        count += 1;
        msg1.textContent = " No. of Guesses:  " + count;                    
    }
}