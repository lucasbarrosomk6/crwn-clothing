const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'||userInput === 'paper'||userInput === 'scissors'||userInput === 'bomb'){
    return userInput
  }else{
    console.log('Invalid Input')
  }
}
const getComputerChoice = () => {
  switch(Math.floor(Math.random()*3)){
    case 0: return 'rock'
      break;
    case 1: return 'paper'
      break;
    case 2: return 'scissors'
      break;
  }
}
const determineWinner = (UserChoice,computerChoice) => {
  if(UserChoice===computerChoice) return 'tie';
  if(UserChoice=== 'rock'){
    if(computerChoice === 'paper'){
      return 'skynet prevails'
    }else{
      return 'we live to fight another day'
    }
  }
  if(UserChoice=== 'paper'){
    if(computerChoice === 'scissors'){
      return 'skynet prevails'
    }else{
      return 'we live to fight another day'
    }
  }
  if(UserChoice=== 'scissors'){
    if(computerChoice === 'rock'){
      return 'skynet prevails'
    }else{
      return 'we live to fight another day'
    }
  }
  if(UserChoice=== 'bomb') return 'Sarah Connor exploded the mainframe';
}
const playGame = () =>{
  const userChoice =  getUserChoice('bomb');
  console.log(userChoice);
  const computerChoice = getComputerChoice(); 
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();