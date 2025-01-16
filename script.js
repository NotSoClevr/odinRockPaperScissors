/*
pseudocode

get random number - 0, 1, or 2
random number relates to computers choice of "rock" "paper" or "scissors"
prompt user choice of "rock" "paper" or "scissors"
if user chooses "rock" and computer chooses "rock" - tie
if user chooses "rock" and computer chooses "paper" - computer wins
if user chooses "rock" and compter chooses "scissors" - user wins
if user chooses "paper" and computer chooses "rock" - user wins
if user chooses "paper" and computer chooses "paper" - tie
if user chooses "paper" and computer chooses "scissors" - computer wins
if user chooses "scissors" and computer chooses "rock" - computer wins
if user chooses "scissors" and computer chooses "paper" - user wins
if user chooses "scissors" and computer chooses "scissors" - tie
track users and computers score
track number of rounds
each time a user enters a valid choice and hits enter is one round
an entire game is five rounds
*/

/*
get random number and assign "rock" "paper" or "scissors" based on random number
*/
function getComputerChoice() {
	let randNum = Math.floor(Math.random() * 3);
	if (randNum === 0) {
		return "rock";
	} else if (randNum === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

/*
prompt user to enter choice
*/
function getHumanChoice() {
	let userChoice = prompt("Rock, Paper, or Scissors?", "");

	if (userChoice === null) {
		alert("Goodbye!");
	} else if (
		userChoice.toLowerCase() === "rock" ||
		userChoice.toLowerCase() === "paper" ||
		userChoice.toLowerCase() === "scissors"
	) {
		return userChoice.toLowerCase();
	} else {
		alert("Please enter a valid choice.");
	}
}

function playGame() {
	let round = 0;

	let humanScore = 0;

	let computerScore = 0;

	while (round < 5) {
		function playRound(humanChoice, computerChoice) {
			console.log(`Your choice: ${humanChoice}`);
			console.log(`Computer choice: ${computerChoice}`);
			if (humanChoice === null) {
				alert("Goodbye!");
			} else if (humanChoice === undefined) {
				round = round;
				humanScore = humanScore;
				computerScore = computerScore;
			} else if (
				(humanChoice === "rock" && computerChoice === "rock") ||
				(humanChoice === "paper" && computerChoice === "paper") ||
				(humanChoice === "scissors" && computerChoice === "scissors")
			) {
				round = round + 1;
				return console.log("Round tie!");
			} else if (
				(humanChoice === "rock" && computerChoice === "scissors") ||
				(humanChoice === "paper" && computerChoice === "rock") ||
				(humanChoice === "scissors" && computerChoice === "paper")
			) {
				humanScore = humanScore + 1;
				round = round + 1;
				return console.log(
					`Round win! ${humanChoice} beats ${computerChoice}.`
				);
			} else {
				computerScore = computerScore + 1;
				round = round + 1;
				return console.log(
					`Round lose! ${computerChoice} beats ${humanChoice}.`
				);
			}
		}

		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);

		console.log(`Your score: ${humanScore}`);
		console.log(`Computer score: ${computerScore}`);
		console.log(`Round: ${round}`);
	}

	if (round === 5) {
		if (humanScore > computerScore) {
			let winnerMessage = prompt("You win! Play again?", "yes");
			if (winnerMessage === null) {
				alert("Goodbye!");
			} else if (winnerMessage.toLowerCase() === "yes") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				playGame();
			} else if (winnerMessage.toLowerCase() === "no") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Goodbye!");
			} else {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Wise Guy, eh?!");
			}
		} else if (humanScore < computerScore) {
			let loserMessage = prompt("You lose! Play again?", "yes");
			if (loserMessage === null) {
				alert("Goodbye!");
			} else if (loserMessage.toLowerCase() === "yes") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				playGame();
			} else if (loserMessage.toLowerCase() === "no") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Goodbye!");
			} else {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Wise Guy, eh?!");
			}
		} else {
			let tieMessage = prompt("It's a tie! Play again?", "yes");
			if (tieMessage === null) {
				alert("Goodbye!");
			} else if (tieMessage.toLowerCase() === "yes") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				playGame();
			} else if (tieMessage.toLowerCase() === "no") {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Goodbye!");
			} else {
				humanScore = 0;
				computerScore = 0;
				round = 0;
				alert("Wise Guy, eh?!");
			}
		}
	}
}

playGame();
