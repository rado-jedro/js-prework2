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

else {computerMove = 'Cos poszll nie tak';
}
console.log('Ruch komputera to: ' + computerMove);


//playerMove and playerInput

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = playerInput;

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}
  else {playerMove = 'Cos poszlo nie tak';
}
console.log('Twój ruch to: ' + playerMove);


//result 