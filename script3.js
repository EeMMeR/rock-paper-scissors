// welcome console
console.log("Welcome to Rock Paper Scissors Game")
console.log("Please Type 'new game' to start the game")

// Computer Play
function computerPlay() {
    const ranNo = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors']
    return choices[ranNo];
}

// Promt user for throw choice
function promptInput(msg) {
    let choice = String(window.prompt(msg)).toLowerCase();
    if(choice == 'scissors' || choice == 'paper' || choice == 'rock') {
        return choice;
    } else {
        return promptInput("You did not input the 'scissors, paper, rock', please try again");
    }
}

// Single Round Code
function playround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (
        playerSelection === 'rock' && computerSelection == 'scissors'
    ||  playerSelection === 'scissors' && computerSelection == 'paper'
    ||  playerSelection === 'paper' && computerSelection == 'rock') {
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
        console.log("=========")
        console.log("Round" + i);
        const choice = String(promptInput("Please throw rock, paper or scissors")).toLowerCase();
        const computerChoice = computerPlay();

        switch(playround(choice, computerChoice)) {
            case 'win':
                console.log(choice + " beats " + computerChoice);
                wins++;
                break;
            case 'lose':
                console.log(choice + " loses to " + computerChoice);
                losses++;
                break;
            case 'draw':
                console.log(choice + " tie to " + computerChoice);
                break;
        }
    }

console.log("=========")
if(wins > losses){
    console.log('Congrats! YOU WIN');
} else if (losses > wins){
    console.log('Nice try Dude! But the AI beats you, better luck next time!');
} else {
    console.log('It was a draw, better luck next time!')
}
console.log("you won " + wins + " rounds out of 5");

};