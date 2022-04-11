// Initial DOM
let betAmount = document.getElementById('betAmount');
let betPrint = document.getElementById('betAmmountPrint')
let welcomeMessage = document.querySelector('.welcomeMessage')
// gets bet number as a value
// let walletAmountNumber = document.getElementById('walletAmount').innerHTML
// gets html line
let walletAmount = document.getElementById('walletAmount')



// player DOM
let playerCards = document.getElementById('playerCards')
let hitButton = document.getElementById('hit')
let standButton = document.getElementById('stand')
let userCards = document.querySelector('.userCards')
let playerScore = document.getElementById('playerScore')
let playerHitCard = document.getElementById('playerHitCard')
let newGame = document.getElementById('newGame')
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
let deck = [];
let scoreValue = 0;
let betValue = 0;
let wallet = 100;

walletAmount.innerHTML = wallet
// changes bet value to the number player requested but doesnt envoke til button clicked
function getBetAmount(){
    betPrint.innerHTML = `Player Bets ${betAmount.value}$`
    return betValue = betAmount.value;
}

// Bet number is submitted wallet is updated and welcome message disappears
betButton.addEventListener('click', () => {
    getBetAmount();
    welcomeMessage.style.display = 'none';
    gameplay.style.display = 'inline';
    hitButton.style.display = 'inline';
    standButton.style.display = 'inline';
    newGame.style.display = 'none';
    updatedWallet = wallet - betValue;
    walletAmount.innerHTML = updatedWallet;
    dealCards();
    gameStarted = true;
    savage21();
})
// betValue is now the ammount the player chose

// Card deck
// https://www.programiz.com/javascript/examples/shuffle-card used as reference to create deck
let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let score = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]



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
    console.log(deck)
    return deck;
}

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

// deck is now random

// Score function with ace
function scoreCalculation(cardsInHand) {
    scoreValue = 0;
    console.log(cardsInHand)
    for (let i=0; i<cardsInHand.length; i++){
        let card = cardsInHand[i];
        console.log(card)
        scoreValue += card.score;
        console.log(scoreValue)
        if(card.rank === 'Ace') {
            if(dealerScore <= 10 || userScore <= 10){
                card.score = 11;
                scoreValue += card.score -1;
                console.log(scoreValue)
            } else if(dealerScore > 21 || userScore > 21){
                scoreValue += card.score - 11;
            } 
        } 
    }
    console.log(scoreValue)
    return scoreValue
    
}


// getScore
function getScore(){
    dealerScore = scoreCalculation(dealerCards)
    console.log(dealerScore)
    userScore = scoreCalculation(playerDealtCards)
    console.log(userScore)
}

// displays score
function scoreDisplay(){
    computerScore.innerHTML = `Dealer Score: ${dealerScore}`
    playerScore.innerHTML = `Player Score: ${userScore}`
}

// cards are dealt
function dealCards() {
    makeDeck();
    shuffle(deck);
    playerDealtCards = [deck.shift(), deck.shift()]
    dealerCards = [deck.shift(), deck.shift()]
    getScore();
    scoreDisplay();
    computerCardsDisplay.innerHTML = `Dealer Cards: ${dealerCards[0].rank} of ${dealerCards[0].suit} & ${dealerCards[1].rank} of ${dealerCards[1].suit}`
    playerCards.innerHTML = `${playerDealtCards[0].rank} of ${playerDealtCards[0].suit} & ${playerDealtCards[1].rank} of ${playerDealtCards[1].suit}`
}
let newCard = deck.shift();
// hit button
hitButton.addEventListener('click', () => {
    if (gameStarted === true) {
    newCard = deck.shift();
    playerDealtCards.push(newCard);
    }
    getScore();
    scoreDisplay();
    busted();
    scoreValue = 0;
    playerCards.append(` & ${newCard.rank} of ${newCard.suit}`)
    playerHitCard.innerHTML = `New Card: ${playerDealtCards[playerDealtCards.length-1].rank} of ${playerDealtCards[playerDealtCards.length-1].suit}`
})

standButton.addEventListener('click', ()=> {
    gameOver();
    if (dealerScore <= 16) {
        newCard = deck.shift();
        dealerCards.push(newCard);
        getScore();
        computerCardsDisplay.append(` & ${newCard.rank} of ${newCard.suit}`)
        if (dealerScore <= 16) {
            newCard = deck.shift();
            dealerCards.push(newCard);
            getScore();
            scoreDisplay();
            computerCardsDisplay.append(` & ${newCard.rank} of ${newCard.suit}`)
        }
    } 
    getScore();
    scoreDisplay();
    busted();
    gameWinner();
})

function gameOver(){
    hitButton.style.display = 'none'
    standButton.style.display = 'none'
    newGame.style.display ='inline'
}

// Check to see if user card is over 21
function busted(){
    if(userScore>21) {
        alert('Busted')
        gameStarted = false;
        gameOver();
        winningWallet();
        return
    } else if(dealerScore>21) {
        alert('Dealer Busted')
        gameStarted = false;
        playerWin = true;
        winningWallet();
        gameOver();
        return
    }
    savage21();
}
// 21 check
function savage21(){
    if (userScore === 21) {
        alert('21');
        gameStarted = false;
        playerWin = true;
        winningWallet();
        gameOver();
        return
    } else if (dealerScore === 21) {
        alert('dealer has 21!');
        gameStarted = false;
        gameOver();
        winningWallet();
    }
}

// check for game winner
function gameWinner() {
    if (userScore>dealerScore) {
        alert('Player Wins!')
        gameOver();
        playerWin = true;
        winningWallet();
        } else if (userScore<dealerScore && gameStarted === true) {
        alert('Dealer Wins!')
        gameOver();
        winningWallet();
        } else if (userScore === dealerScore){
        alert('Tie!');
        gameOver();
        winningsWallet = wallet
    }
}

// wallet update
function winningWallet(){
    if(playerWin === true){
        let winnings = betAmount.value*2;
        winningsWallet = updatedWallet + winnings
        walletAmount.innerHTML = winningsWallet
    } else {
        winningsWallet = updatedWallet
        
    }
}
let winningsWallet;
// new Game
newGame.addEventListener('click', () =>{
    welcomeMessage.style.display = 'inline';
    gameplay.style.display = 'none';
    gameStarted = false;
    deck = [];
    playerDealtCards = [];
    dealerCards = [];
    playerWin = false;
    dealerScore = 0;
    userScore = 0;
    updatedWallet = 0;
    betValue = 0;
    scoreValue = 0;
    playerHitCard.innerHTML = ''
    wallet = winningsWallet   
    walletAmount.innerHTML = `${wallet}`
})