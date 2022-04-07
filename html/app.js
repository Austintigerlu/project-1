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
let playerScore = document.getElementById('playerScore')

// computer DOM
let computerCards = document.querySelector('.gameplay')
let computerCardsDisplay = document.getElementById('computerCardsDisplay')
let computerScore = document.getElementById('computerScore')

// gameplay DOM
let gameplay = document.querySelector('.gameplay');
gameplay.style.display = 'none';
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
    gameplay.style.display = 'inline';
    let updatedWallet = walletAmountNumber - betValue;
    walletAmount.innerHTML = updatedWallet;
})
// betValue is now the ammount the player chose

// Card deck

let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let score = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

let deck = [];

// Creating the deck with suit, rank, and scores
for (let i = 0; i<suit.length; i++) {
    for(let j=0; j<rank.length; j++){
        let card = {
            suit: suit[i],
            rank: rank[j],
            score: score[j]
        };
        deck.push(card);
    }
}
// randomCard from the deck
let cardsinHand= [];
function randomCard(){
    let random = Math.floor(Math.random()*51)
    cardsinHand.push([deck[random].suit, deck[random].rank, deck[random].score])
}
console.log(cardsinHand)

// player cards
let userCard1;
let userCard2;
function randomUserCards(){
    userCard1 = randomCard();
    userCard2 = randomCard();
}

randomUserCards()

let combinedScore = cardsinHand[0][2] + cardsinHand[1][2]
console.log(combinedScore)
// Player cards print on screen after bet amount
playerCards.innerHTML = `Player Cards: ${cardsinHand[0][1]} of ${cardsinHand[0][0]} & ${cardsinHand[1][1]} of ${cardsinHand[1][0]}`
playerScore.innerHTML = `Player Score: ${combinedScore}`

// computer cards
let computerCard1;
let computerCard2;
function randomComputerCards(){
    computerCard1 = randomCard();
    computerCard2 = randomCard();
}
randomComputerCards()
