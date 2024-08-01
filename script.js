
let computerScore=0;
let playerScore=0;
let rounds=0;
let totalRounds=5;

const options=['rock','paper','scissors'];
const circle=document.querySelectorAll('.circle');
const player=document.querySelector('.player');
const machine=document.querySelector('.machine');
const p=document.querySelector('p i');
const reset=document.querySelector('.reset-box');
const round=document.querySelector('.round');

function resetScores(){
    rounds=0;
    computerScore=0;
    playerScore=0;
    p.textContent='WELCOME, CLICK ON THE ROCK, PAPER OR SCISSORS BUTTON TO START...';
    round.textContent='';
    updateScores();
}

reset.addEventListener("click",resetScores);

function getComputerChoice(){
    const choice=Math.floor(Math.random()*(3));
    return options[choice];
}

circle.forEach((option,index)=>{
    option.addEventListener("click",()=>{
        const computerChoice=getComputerChoice();
        if(computerChoice==='rock' && options[index]==='scissors' || computerChoice==='paper' && options[index]==='rock' || 
            computerChoice==='scissors' && options[index]==='paper'){
                p.textContent=`THE COMPUTER WON THIS ROUND!`;
                computerScore++;
        }else if(computerChoice==='scissors' && options[index]==='rock' || computerChoice==='rock' && options[index]==='paper' || 
        computerChoice==='paper' && options[index]==='scissors'){
            p.textContent=`YOU WON THIS ROUND!`;
            playerScore++;
        }else{
            p.textContent=`IT'S A TIE!`;
        }
        rounds++;
        round.textContent=rounds;
        if(rounds===totalRounds)
            resetScores();
        else
            updateScores();
    })
})

function updateScores(){
    
    player.children[0].textContent=`${playerScore}`;
    machine.children[0].textContent=`${computerScore}`;
}
