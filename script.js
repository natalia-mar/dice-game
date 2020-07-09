

const btn = document.getElementById("dice1")
const totalScore = document.getElementById("scorePlayer");

let addedScore = 0


function rollDice() {
    let rollValue =  Math.floor(Math.random() * 6) + 1;
    let roll = document.getElementById('rollStatus');

    switch(rollValue) {
        case 1: { document.querySelector("img").src = "/assets/dice1.png"; break;}
        case 2: { document.querySelector("img").src = "/assets/dice2.png"; break;}
        case 3: { document.querySelector("img").src = "/assets/dice3.png"; break;}
        case 4: { document.querySelector("img").src = "/assets/dice4.png"; break;}
        case 5: { document.querySelector("img").src = "/assets/dice5.png"; break;}
        case 6: { document.querySelector("img").src = "/assets/dice6.png"; break;}
  }
    roll.textContent =`You rolled ${rollValue}`
    

    if (rollValue != 1 ) {
        addedScore += rollValue;
        totalScore.textContent =  `You scored  ${addedScore}` 
        if (addedScore > 20) {
        totalScore.textContent = "You won!"
        addedScore=0
    }           
    } else {
        addedScore= 0;
        totalScore.textContent =  `You rolled 1! Start over`; 
    }

}

btn.addEventListener("click", rollDice)