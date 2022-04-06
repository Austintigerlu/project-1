# BlackJack
Game is to 21 without going over

#User Story
Home Page w/ a play button that brings you to the table

Bet button where you can select how much money to bet
Cards get delt

User can see both cards but dealer also gets cards but one is face down

Stand button where you stop dealing
Hit gives you an extra card

If stand dealer card flips over and dealer will get new cards until above 17 or 21
If hit can keep going until at 21 or above

whoever wins gets bet amount
Play again button brings you back to start with updated bank

Pseudocode
The deck of cards:
Suits: [Hearts, Clubs, Spades, Diamonds]
Cards: [Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King]
Values: [1 or 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

Cards are Dealt after Bet is clicked
Display User Cards but only display one Computer Card and other card is facedown
Subtract amount bet from wallet

Two new buttons appear Stand and Hit

If player clicks Hit player gets another card
If card total is not above 21 player is given the option to hit or stand again
If card is above 21 Alert player has busted and Player is given the option to play again

If player clicks Stand it's computers turn
Computer second Card is displayed
If computer cards total is 16 or below computer is dealt new card until 17 or higher

If computer cards are not greater than 21 cards are compared with user cards
Closest number to 21 Wins
If player wins Wallet + bet amount
Button appears to play again

If wallet = 0 player loses