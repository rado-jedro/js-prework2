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
console.log('Ruch komputera to: ' + computerMove);


//playerMove and playerInput

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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
console.log('Twój ruch to: ' + playerMove);

//result 

if( computerMove == 'kamien' && playerMove == 'papier'){
  console.log('Ty wygrywasz!');
}
else if( computerMove == 'kamien' && playerMove == 'nozyce'){
  console.log('Ty przegrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamien'){
  console.log('Remis! Gramy jeszcze raz');
}
else if( computerMove == 'papier' && playerMove == 'papier'){
  console.log('Remis! Gramy jeszcze raz');
}
else if( computerMove == 'papier' && playerMove == 'nozyce'){
  console.log('Ty wygrywasz!');
}
else if( computerMove == 'papier' && playerMove == 'kamien'){
  console.log('Ty przegrywasz!');
}
else if( computerMove == 'nozyce' && playerMove == 'papier'){
  console.log('Ty przegrywasz!');
}

else if( computerMove == 'nozyce' && playerMove == 'kamien'){
  console.log('Ty wygrywasz!');
}
else if( computerMove == 'nozyce' && playerMove == 'nozyce'){
  console.log('Remis! Gramy jeszcze raz');
}
else console.log('Fatal error')

