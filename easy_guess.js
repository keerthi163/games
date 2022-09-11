let count = 0;
let msg1 = document.getElementById("message1");
let computer = Math.floor((Math.random() * 10) + 1);
function Easyguessing(){
    let user = document.getElementById("inputtext").value;
    if( computer == user ){
        document.getElementById("inputtext").style.border = 'solid 4px green';
        count++;
        msg1.textContent = count + "  Choises used to guess the number";
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
