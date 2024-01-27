let playGame = confirm("Would you like to play Rock! Paper! Scissors!");
if (playGame) 
{
    while (playGame)
    {
        const playerChoice = prompt("What do you choose? Rock, Paper or Scissors ?");
        if (playerChoice || playerChoice === "") 
        {
            const playerOne = playerChoice.trim().toLowerCase();
            if ((playerOne === "rock") || (playerOne === "paper") || (playerOne === "scissors") )
            {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock","paper","scissors"];
                const computer = rpsArray[computerChoice] ;
                const result = playerOne === computer ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                alert(result);
                playGame = confirm("Play again?");
                if (!playGame) {
                    alert("Ok, Thanks for playing!")
                    break;
                }
            }
            else 
            {
                alert("You've entered something invalid...");
                continue;
            }
        }
        else
        {
            alert("Maybe you've changed your mind, we'll play next time.");
            break;
        }
    }
}
else 
{
    alert("Alright, Maybe next time.");
}