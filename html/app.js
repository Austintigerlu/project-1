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
let standButton = document.getElementById('stand')
let userCards = document.querySelector('.userCards')
let playerScore = document.getElementById('playerScore')
let playerHitCard = document.getElementById('playerHitCard')

// computer DOM
let computerCards = document.querySelector('.gameplay')
let computerCardsDisplay = document.getElementById('computerCardsDisplay')
let computerScore = document.getElementById('computerScore')

// gameplay DOM
let gameplay = document.querySelector('.gameplay');
gameplay.style.display = 'none';

// Global variables
let gameStarted = false;
let playerDealtCards = [];
let dealerCards = [];
let playerWin = false;
let dealerScore = 0;
let userScore = 0;
let updatedWallet =0;

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
    updatedWallet = walletAmountNumber - betValue;
    walletAmount.innerHTML = updatedWallet;
    dealCards();
    gameStarted = true;
})
// betValue is now the ammount the player chose

// Card deck
// https://www.programiz.com/javascript/examples/shuffle-card used as reference to create deck
let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let score = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

let deck = [];

// Creating the deck with suit, rank, and scores
function makeDeck(){
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
    return deck;
}
makeDeck()
//  deck should have 52 cards
// shuffle deck
function shuffle(deck){
for (let i=0; i<deck.length; i++) {
    let random = Math.floor(Math.random() *52);
    let deckshuffle = deck[i];
    deck[i] = deck[random];
    deck[random] = deckshuffle;
    // console.log(deck[random])
}
}
shuffle(deck)
// deck is now random

// Score function with ace
function scoreCalculation(cardsInHand) {
    let scoreValue = 0;
    for (let i=0; i<cardsInHand.length; i++){
        let card = cardsInHand[i];
        scoreValue += card.score;
        if(card.rank === 'Ace') {
            if(scoreValue <= 11){
                card.score = 10;
                scoreValue += card.score;
            }
        } 
    }
    return scoreValue
}

// User and dealer have cards in hand
playerDealtCards = [deck.shift(), deck.shift()]
dealerCards = [deck.shift(), deck.shift()]
console.log(playerDealtCards)

// getScore
function getScore(){
    dealerScore = scoreCalculation(dealerCards)
    userScore = scoreCalculation(playerDealtCards)
}

// displays score
function scoreDisplay(){
    computerScore.innerHTML = `Dealer Score: ${dealerScore}`
    playerScore.innerHTML = `Player Score: ${userScore}`
}

// cards are dealt
function dealCards() {
    getScore();
    scoreDisplay();
    computerCardsDisplay.innerHTML = `Dealer Cards: ${dealerCards[0].rank} of ${dealerCards[0].suit} & ${dealerCards[1].rank} of ${dealerCards[1].suit}`
    playerCards.innerHTML = `${playerDealtCards[0].rank} of ${playerDealtCards[0].suit} & ${playerDealtCards[1].rank} of ${playerDealtCards[1].suit}`
}

// hit button
hitButton.addEventListener('click', () => {
    let newCard = deck.shift();
    playerDealtCards.push(newCard);
    getScore();
    scoreDisplay();
    busted();
    console.log(newCard)
    playerCards.append(` & ${newCard.rank} of ${newCard.suit}`)
    playerHitCard.innerHTML = `New Card: ${playerDealtCards[playerDealtCards.length-1].rank} of ${playerDealtCards[playerDealtCards.length-1].suit}`
})

standButton.addEventListener('click', ()=> {
    hitButton.style.display = 'none'
    if (scoreCalculation(dealerCards) <= 16) {
        let newCard = deck.shift();
        // console.log(newCard)
        dealerCards.push(newCard);
        getScore();
        scoreDisplay();
        busted();
        computerCardsDisplay.append(` & ${newCard.rank} of ${newCard.suit}`)
    } else{
        gameWinner();
        getScore();
        scoreDisplay();
    }
})

// Check to see if user card is over 21
function busted(){
    if(scoreCalculation(playerDealtCards)>21) {
        alert('Busted')
        gameStarted = false;
        return
    } else if (scoreCalculation(playerDealtCards) === 21) {
        alert('21');
        gameStarted = false;
        winningWallet();
        return
    }
    if(scoreCalculation(dealerCards)>21) {
        alert('Dealer Busted')
        gameStarted = false;
        winningWallet();
    }
}

// check for game winner
function gameWinner() {
    if (scoreCalculation(playerDealtCards)>scoreCalculation(dealerCards)) {
        alert('Player Wins!')
        winningWallet();
        } else if (scoreCalculation(playerDealtCards)<scoreCalculation(dealerCards)) {
        alert('Dealer Wins!')
    }
}

// wallet update
function winningWallet(){
    let winnings = betAmount.value*2;
        let winningsWallet = updatedWallet + winnings
        walletAmount.innerHTML = winningsWallet
}