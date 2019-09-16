{
function playGame(playerInput){
  
  clearMessages();

  //global variables
  const rock ='kamien';
  const paper = 'papier';
  const scissors = 'nozyce';
  //computerMove
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId){
    
    if(argMoveId == 1){
      return rock;
    } 
    else if(argMoveId == 2) {
      return paper;
    }
    else if(argMoveId == 3){
      return scissors;
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  console.log('computerMove to ' + computerMove);

  argComputerMove=computerMove;

  let playerMove = getMoveName(playerInput);
  argPlayerMove=playerMove;

  function displayResult(argPlayerMove, argComputerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == rock && argPlayerMove == paper){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == rock && argPlayerMove == scissors){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == rock && argPlayerMove == rock){
      printMessage('Remis! Gramy jeszcze raz');
    }
    else if( argComputerMove == paper && argPlayerMove == paper){
      printMessage('Remis! Gramy jeszcze raz');
    }
    else if( argComputerMove == paper && argPlayerMove == scissors){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == paper && argPlayerMove == rock){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == scissors && argPlayerMove == paper){
      printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == scissors && argPlayerMove == rock){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == scissors && argPlayerMove == scissors){
      printMessage('Remis! Gramy jeszcze raz');
    }
    else printMessage('Fatal error ;-)');
  }

  displayResult(argPlayerMove, argComputerMove);
} //function playGame ends

document.getElementById('play-rock').addEventListener('click', function(){
  playGame (1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

}

