# BlackJack
Game is to 21 without going over

# Basic User Story
1. Home Page w/ a play button that brings you to the table
2. Bet button where you can select how much money to bet
3. Cards are dealt and player can see both of their cards but dealer has one card face down
4. Stand button and player score is compared to dealer score
5. Hit gives you an extra card
6. Once the player stands. Dealer card flips over and will draw new cards until score is above 16
7. Player and dealer can't get over 21 
8. If player wins they win bet amount
9. New game button brings you back to start with updated wallet

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
