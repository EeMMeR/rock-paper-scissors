/*  Inuhoo's method

// welcome message
console.log("Welcome to Rock-Paper-Scissors Club");
console.log("When you're ready please type 'new game' to begin your match: Best of 5");

// random generator for computers throw
function computerPlay() {
 const ranNo = Math.floor(Math.random() * 3);
 const choices = ['rock', 'paper', 'scissors']
 return choices[ranNo];
}

// prompt user for throw choice
function promptInput(msg) {
 let choice = String(window.prompt(msg)).toLowerCase();
 if(choice == 'scissors' || choice == 'paper' || choice == 'rock') {
     return choice;
 } else {
     return promptInput("That's not a legal throw, try again");
 }
}

// single round code
function playRound(playerSelection, computerSelection) {
 if (playerSelection === computerSelection) {
     return 'draw';
 } else if (
     playerSelection === 'rock' && computerSelection == 'scissors'
 ||  playerSelection === 'paper' && computerSelection == "rock"
 ||  playerSelection === 'scissors' && computerSelection == 'paper') {
     return 'win';
 } else {
     return 'lose'
 }
}

// main game best of 5 loop
function game() {

 let wins = 0;
 let losses = 0;

 for(let i = 1; i < 6; i++) {
     console.log("=========");
     console.log("ROUND " + i);
     const choice = String(promptInput("Please choose rock, paper or scissors")).toLowerCase();
     const computerChoice = computerPlay();

     switch(playRound(choice, computerChoice)) {
         case 'win':
             console.log(choice + " beats " + computerChoice);
             wins++;
             break;
         case 'lose':
             console.log(choice + " loses to " + computerChoice);
             losses++;
             break;
         case 'draw':
             console.log("Close one, two " + choice +"s makes it a draw!");
             break;
     }
 }

 console.log("=========");
 if(wins > losses) {
     console.log('CONGRATULATIONS! YOU WIN');
 } else if (losses > wins) {
     console.log('Nice try but the AI beat you, better luck next time!')
 } else {
     console.log('It was a draw, better luck next time!')
 }
 console.log("you won " + wins + " rounds out of 5");
}; ---end --- */

/*
// Almyrav's Method

function computerPlay(){
    const randomNum = Math.floor((Math.random()*3) + 1);
    return (randomNum === 3) ? "rock" :
      (randomNum === 2) ? "paper" :
      "scissors";
  }

  // signle round code
  function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
      return "You lose. Paper beats rock."
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
      return "You win! Rock beats scissors."
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
      return "You win! Paper beats rock."
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
      return "You lose. Scissors beat paper."
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
      return "You lose. Rock beats scissors."
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
      return "You win! Scissors beat paper."
    }else{
      return "It's a tie!"
    }
  }
  function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
      const playerSelection = prompt("Rock, Paper, or Scissors?");
      const computerSelection = computerPlay();
      console.log(`Computer played "${computerSelection}"`);
      const consoleOutput = playRound(playerSelection,computerSelection);
      console.log(consoleOutput);
      if(consoleOutput.includes("win", 4)){
        ++playerScore;
      }else{
        ++computerScore;
      }
    }
    if(playerScore<computerScore){
      console.log("You lose the game.");
    }else if(playerScore>computerScore){
      console.log("You win the game!");
    }else{
      console.log("You are tied.");
    }
  }
  game();

  */

  // DudeOnix's method

  function computerPlay() {
    const computerOptions = [
      'paper',
      'rock',
      'scissors',
      'rock',
      'scissors',
      'paper',
      'scissors',
      'paper',
      'rock',
      'paper',
      'scissors',
      'rock',
    ];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
  }
  
  function validatePlayerInput(playerInput) {
    let validatedPlayerInput = playerInput;
    if (!validatedPlayerInput) {
      validatedPlayerInput = prompt('Pick a hand (Paper, Scissors or Rock):');
    } else {
      validatedPlayerInput = playerInput.toLowerCase();
    }
    if (validatedPlayerInput === null) return 'Quit game';
    validatedPlayerInput = validatedPlayerInput.toLowerCase();
    switch (validatedPlayerInput) {
      case 'scis':
      case 'sciz':
      case 'scissor':
      case 'scissr':
      case 'scizzor':
      case 'scizzr':
      case 'scizzors':
      case 'scizzrs':
      case 'scisors':
      case 'scisrs':
      case 'scizors':
      case 'scizrs':
      case 'scisor':
      case 'scisr':
      case 'scizor':
      case 'scizr':
      case 's':
        validatedPlayerInput = 'scissors';
        break;
      case 'roc':
      case 'rok':
      case 'rocc':
      case 'rck':
      case 'rokk':
      case 'rokc':
      case 'r':
        validatedPlayerInput = 'rock';
        break;
      case 'papr':
      case 'pape':
      case 'papar':
      case 'pap':
      case 'p':
        validatedPlayerInput = 'paper';
        break;
      default:
        break;
    }
    return validatedPlayerInput;
  }
  
  function pickWinner(playerSelection, computerSelection, i) {
    switch (playerSelection + computerSelection) {
      case 'paperrock':
        return `Round ${i}: \nYou win!, Your Paper covers my Rock.`;
      case 'rockscissors':
        return `Round ${i}: \nYou win!, Your Rock smashes my Scissors.`;
      case 'scissorspaper':
        return `Round ${i}: \nYou win!, Your Scissors cut my Paper.`;
      case 'rockpaper':
        return `Round ${i}: \nYou lose!, My Paper covers your Rock.`;
      case 'scissorsrock':
        return `Round ${i}: \nYou lose!, My Rock smashes your Scissors.`;
      case 'paperscissors':
        return `Round ${i}: \nYou lose!, My Scissors cut your Paper.`;
      default:
        return `Round ${i}: \nDraw!`;
    }
  }
  
  function playRound(i = 1, playerInput) {
    const computerSelection = computerPlay();
    const playerSelection = validatePlayerInput(playerInput);
    if (playerSelection === 'Quit game') {
      return 'Quit game';
    } else if (
      playerSelection !== 'rock' &&
      playerSelection !== 'paper' &&
      playerSelection !== 'scissors'
    ) {
      alert(`Round ${i}: Invalid Selection!!! \nYou picked > ${playerSelection}??? <`);
      return `Round ${i}: Invalid Selection!!! \nYou picked > ${playerSelection}??? <`;
    }
    console.log(`Player picked ${playerSelection}`);
    console.log(`Computer picked ${computerSelection}`);
    const roundWinner = pickWinner(playerSelection, computerSelection, i);
    alert(roundWinner);
    return roundWinner;
  }
  
  function game() {
    let i = 0;
    let totalPlayerWins = 0;
    let totalComputerwins = 0;
    while (i < 5) {
      i += 1;
      const roundWinner = playRound(i);
      if (roundWinner === 'Quit game') {
        break;
      } else if (/You win/i.test(roundWinner)) {
        totalPlayerWins += 1;
      } else if (/(You lose)|(invalid)/i.test(roundWinner)) {
        totalComputerwins += 1;
      }
    }
    if (totalComputerwins === totalPlayerWins) {
      console.log("Woah!!!\nit's a draw!!!");
      alert(`Woah!!! \n Player score: ${totalPlayerWins} ---- Comp score: ${totalComputerwins} \nit's a draw!!!`);
    } else if (totalPlayerWins > totalComputerwins) {
      alert(`You've won the game!!!!\n Player score: ${totalPlayerWins} ---- Comp score: ${totalComputerwins} \nCongratulations!!!`);
      console.log("You've won the game!!!! \nCongratulations!!!");
    } else {
      alert(`You've lost the game!!!\n Comp score: ${totalComputerwins} ---- Player score: ${totalPlayerWins} \nBetter luck next time!!!`);
      console.log("You've lost the game!!! \nBetter luck next time!!!");
    }
  }



