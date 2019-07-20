function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//variable declaration

//kodilla
let computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
// task1
let playerMove = 'papier';
printMessage('Zagralem ' + playerMove + '! Jesli Twoj ruch to kamien to przegrywasz! ');