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
let playerHitCard = document.getElementById('playerHitCard')

// computer DOM
let computerCards = document.querySelector('.gameplay')
let computerCardsDisplay = document.getElementById('computerCardsDisplay')
let computerScore = document.getElementById('computerScore')

// gameplay DOM
let gameplay = document.querySelector('.gameplay');
gameplay.style.display = 'none';
let gameStarted = false;
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
//  deck should have 52 cards
// shuffle deck
for (let i=0; i<deck.length; i++) {
    let random = Math.floor(Math.random() *52);
    let deckshuffle = deck[i];
    deck[i] = deck[random];
    deck[random] = deckshuffle;
    // console.log(deck[random])
}
// deck is now random
function scoreCalculation(cardsInHand) {
    let scoreValue = 0;
    for (let i=0; i<cardsInHand.length; i++){
        let card = cardsInHand[i];
        console.log(card)
        if(card.rank === 'Ace') {
            if(scoreValue <= 11){
                card.score = 11;
                scoreValue += card.score;
            }
        } else {
            scoreValue += card.score;
        }
    }
    console.log(scoreValue
    )
}

let playerDealtCards = [deck.shift(), deck.shift()]
let dealerCards = [deck.shift(), deck.shift()]
scoreCalculation(playerDealtCards)
function dealCards() {
    computerCardsDisplay.innerHTML = `Dealer Cards: ${dealerCards[0].rank} of ${dealerCards[0].suit} & ${dealerCards[1].rank} of ${dealerCards[1].suit}`
    // computerScore.innerHTML = `Dealer Score: ${computerCalculation}`
    playerCards.innerHTML = `Player Cards: ${playerDealtCards[0].rank} of ${playerDealtCards[0].suit} & ${playerDealtCards[1].rank} of ${playerDealtCards[1].suit}`
    // playerScore.innerHTML = `Player Score: ${playerCalculation}`
}

hitButton.addEventListener('click', () => {
    playerDealtCards.push(deck.shift())
    playerHitCard.innerHTML = `${playerDealtCards[playerDealtCards.length-1].rank} of ${playerDealtCards[playerDealtCards.length-1].suit}`
})

function gameWinner() {

}