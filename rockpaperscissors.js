const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if ((userInput === 'rock') ||
        (userInput === 'paper') ||
        (userInput === 'scissors') ||
        (userInput === 'bomb')){
      return userInput;
    } else {
      console.log("invalid input")
    }
  }
  
  
  
  const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'other';
      }
  }
  
  
  /* Test it
  let rockCount = 0;
  let paperCount = 0;
  let scissorsCount = 0;
  let otherCount = 0;
  
  for (var i = 0; i < 1000; i++){
    computerChoice = getComputerChoice();
    if (computerChoice === 'rock'){
      rockCount++
    } else if (computerChoice === 'paper'){
      paperCount++;
    } else if (computerChoice === 'scissors'){
     scissorsCount++ 
    } else {
      console.log("error: ",computerChoice);
    }
  }
  
  console.log("rockCount: ", rockCount);
  console.log("paperCount: ", paperCount);
  console.log("scissorsCount: ", scissorsCount);
  */
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == 'bomb'){
      return 'user won'; // cheat!
    } else if (userChoice == computerChoice){
      return 'tie';
    }  else {
      if (userChoice == 'rock'){
        if (computerChoice == 'paper'){
          return 'computer won';
        } else {
          return 'user won';
        }
            } else if (userChoice == 'paper'){
        if (computerChoice == 'rock') {
          return 'user won';
        } else { //computer's choice was scissors
         return 'computer won';
        }
         } else { //user choice is scissors
        if (computerChoice == 'rock'){
         return 'computer won';
        } else { //computer's choice was paper
         return 'user won';
        }
         }
    }
  }
  
  const playGame = (userChoiceIn) => {
      let userChoice = getUserChoice(userChoiceIn);
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    
    console.log("U: ", userChoice, "C: ", computerChoice, "Winner: ", result);
  }
  
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  playGame('rock');
  
  
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  playGame('paper');
  
  
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  playGame('scissors');
  
  
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  playGame('bomb');
  
  
  