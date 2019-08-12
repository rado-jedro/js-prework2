//global variables
let rock ='kamien';
let paper = 'papier'
let scissors = 'nozyce';


//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);
//let computerMove = randomNumber;

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamien';
  } 
  else if(argMoveId == 2) {
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nozyce';
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


/*if(randomNumber == 1){
  computerMove = rock;
}
else if (randomNumber==2) {
    computerMove = paper;
}
else if (randomNumber==3) {
    computerMove = scissors;
}
else {computerMove = 'Cos poszlo nie tak';
}
*/
//printMessage('Ruch komputera to: ' + computerMove);

//playerMove and playerInput


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
printMessage('Gracz wpisał: ' + playerInput);

//let playerMove = playerInput;
let playerMove = getMoveName(playerInput);
argPlayerMove=playerMove;

argComputerMove=computerMove;

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}

/*
if(playerInput == '1'){
  playerMove = rock;
}
else if(playerInput == '2'){
  playerMove = paper;
}
else if(playerInput == '3'){
  playerMove = scissors;
}
  else {playerMove = 'Nieprawidlowy wybor !';
}
*/
printMessage('Twój ruch to: ' + playerMove);

//result consol log

if( computerMove == rock && playerMove == paper){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == rock && playerMove == scissors){
  printMessage('Ty przegrywasz!');
}
else if( computerMove == rock && playerMove == rock){
  printMessage('Remis! Gramy jeszcze raz');
}
else if( computerMove == paper && playerMove == paper){
  printMessage('Remis! Gramy jeszcze raz');
}
else if( computerMove == paper && playerMove == scissors){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == paper && playerMove == rock){
  printMessage('Ty przegrywasz!');
}
else if( computerMove == scissors && playerMove == paper){
  printMessage('Ty przegrywasz!');
}
else if( computerMove == scissors && playerMove == rock){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == scissors && playerMove == scissors){
  printMessage('Remis! Gramy jeszcze raz');
}
else printMessage('Fatal error');
argComputerMove=computerMove;


console.log(argComputerMove);
console.log(argPlayerMove);
console.log(displayResult);

