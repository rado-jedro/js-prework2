//global variables
let rock ='kamien';
let paper = 'papier'
let scissors = 'nozyce';


//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = randomNumber;

if(randomNumber == 1){
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
printMessage('Ruch komputera to: ' + computerMove);

//playerMove and playerInput

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
printMessage('Gracz wpisał: ' + playerInput);

let playerMove = playerInput;

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

