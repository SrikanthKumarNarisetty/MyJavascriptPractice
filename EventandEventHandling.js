var scores,roundscores,activePlayer,dice;

scores = [0,0];
round = 0;
activePlayer = 1;

dice = Math.floor(Math.random) * 1;

document.querySelector('#-current' + activePlayer).text.content = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

var x = document.querySelector('#score-0').text.content;
console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementByID('score-0').textContent='o';
document.getElementByID('score-1).textContent = '0';
document.getElementByID('current-0').text.Content = '0';
document.getElementByID('current-0').text.Content =""

function btn(){
    //Do something here
}
btn();

document.querySelector('btn-roll').addEventListener('click', function() {
    
    //1. Random number
    
    var dice = Math.floor(Math.floor*6) + 1;
    
    //2. Display the Result
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display = 'block';
    diceDOM.src = '-dice' + dice + '.png' 
    //document.querySelector('.dice').style.display = 'block';
    
    
});