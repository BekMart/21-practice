//Create global variables
var opponentSum = 0;
var playerSum = 0;
//This will let us check what aces have been used
var opponentAceCount = 0;
var playerAceCount = 0;
//Opponents hidden card and deck itself
var hidden;
var deck;
//Allows player to draw a card if playerSum <=21
var canHit = true;

//Functions that will execute once page initially loads
window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();

}

//Create the deck - runs through them in an ordered fashion and returns them this way ("a-c" --> "k-s")
function buildDeck() {
    let values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
    let types = ["c", "d", "h", "s"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(values[x] + "-" + types[i]);
        }
    }
}

//Function to shuffle deck each time that the page loads or that the deal button is clicked
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let x = Math.floor(Math.random() * deck.length); // Will pick an integer between 0-51 from deck
        let temp = deck[i];//Picks a card from the deck
        deck[i] = deck[x];//Makes it random
        deck[x] = temp;//Deck is shuffled through
    }
}

//Function to set up the game
function startGame() {
    hidden = deck.pop(); //Will take a card from the end of the shuffled deck and asign it to the opponents hidden card
    opponentSum += getValue(hidden); //Will add value of the opponents card + their hidden card to get their sum
    opponentAceCount += checkAce(hidden);//Will check to see if the opponent has an ace as this is a special card

}

//Will get the value of the card that is dealt
function getValue(card) {
    let data = card.split("-"); //This will create an array with 2 values. First value is number/second value is suite
    let value = data[0]; //This will extract the number value from the card

    //If value is not a number then it'll be a = 11 OR j/q/k = 10
    if (isNaN(value)) {
        if (value === "a") {
            return 11;
        } else {
            return 10;
        }
    }

    //If it is a number value then we just want to get that integer to reflect the value of the card
    return parseInt(value);
}

//This function checks to see if a card is an ace
function checkAce(card) {
    if (card[0] === "a") {
        return 1;
    } else {
        return 0;
    }
}