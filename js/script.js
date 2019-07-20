//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = randomNumber;

if(randomNumber == 1){
  computerMove = 'kamien';
}
else if (randomNumber==2) {
    computerMove = 'papier';
}
else if (randomNumber==3) {
    computerMove = 'nozyce';
}
else {computerMove = 'Cos poszlo nie tak';
}
printMessage('Ruch komputera to: ' + computerMove);

//playerMove and playerInput

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
printMessage('Gracz wpisał: ' + playerInput);

let playerMove = playerInput;

if(playerInput == '1'){
  playerMove = 'kamien';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nozyce';
}
  else {playerMove = 'Nieprawidlowy wybor !';
}
printMessage('Twój ruch to: ' + playerMove);

//result consol log

if( computerMove == 'kamien' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == 'kamien' && playerMove == 'nozyce'){
  printMessage('Ty przegrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamien'){
  printMessage('Remis! Gramy jeszcze raz');
}
else if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis! Gramy jeszcze raz');
}
else if( computerMove == 'papier' && playerMove == 'nozyce'){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == 'papier' && playerMove == 'kamien'){
  printMessage('Ty przegrywasz!');
}
else if( computerMove == 'nozyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
}

else if( computerMove == 'nozyce' && playerMove == 'kamien'){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == 'nozyce' && playerMove == 'nozyce'){
  printMessage('Remis! Gramy jeszcze raz');
}
else printMessage('Fatal error')

