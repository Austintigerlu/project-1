// Initial DOM
let betAmount = document.getElementById('betAmount');
let betPrint = document.getElementById('betAmmountPrint')
let welcomeMessage = document.querySelector('.welcomeMessage')
// gets bet number as a value
let walletAmountNumber = document.getElementById('walletAmount').innerHTML
// gets html line
let walletAmount = document.getElementById('walletAmount')
let betValue = 0;

// player DOM
let playerCards = document.getElementById('playerCards')
let hitButton = document.getElementById('hit')
let stayButton = document.getElementById('stay')
let userCards = document.querySelector('.userCards')

userCards.style.display = 'none';
// hitButton.style.display = 'none';
// stayButton.style.display = 'none';

// changes bet value to the number player requested but doesnt envoke til button clicked
function getBetAmount(){
    betPrint.innerHTML = `Player Bets ${betAmount.value}$`
    betValue = betAmount.value;
}

// Bet number is submitted wallet is updated and welcome message disappears
betButton.addEventListener('click', () => {
    getBetAmount();
    welcomeMessage.style.display = 'none';
    userCards.style.display = 'inline';
    let updatedWallet = walletAmountNumber - betValue;
    walletAmount.innerHTML = updatedWallet;
})
// betValue is now the ammount the player chose

// Card deck

let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let score = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]


