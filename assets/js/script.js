//Create global variables
//The opponent and player scores
var opponentSum = 0;
var playerSum = 0;
//Create blank hands
var opponentHand = 0;
var playerHand = 0;
//This will let us check what aces have been used
var opponentAceCount = 0;
var playerAceCount = 0;
//Opponents hidden card and deck itself
var hidden;
var deck;
//Allows player to draw a card if playerSum < 21
var canHit = true;

//Functions that will automatically execute once page initially loads
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
    console.log(deck);
}

//Function to shuffle deck each time that the page loads or that the deal button is clicked
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let x = Math.floor(Math.random() * deck.length); // Will pick an integer between 0-51 from deck
        let temp = deck[i]; //Picks a card from the deck
        deck[i] = deck[x]; //Makes it random
        deck[x] = temp; //Deck is shuffled through
    }
    console.log(deck);
}

//Function to set up the game
function startGame() {
    hidden = deck.pop(); //Will take a card from the end of the shuffled deck and asign it to the opponents hidden card
    opponentSum += getValue(hidden); //Will add value of the opponents card + their hidden card to get their sum
    opponentAceCount += checkAce(hidden); //Will check to see if the opponent has an ace as this is a special card
    console.log(hidden);

    //Deal opponent another card
    for (i = 0; i < 1; i++) {
        let cardImg = document.createElement("img"); //Create img element to host card
        let card = deck.pop(); //Select random card from shuffled deck
        cardImg.src = "../assets/images/cards/" + card + ".png"; //This is where the card files are located
        opponentSum += getValue(card); //Calculates the sum of the opponents cards
        opponentAceCount += checkAce(card); //Checks to see if the card is an ace
        document.getElementById("opponent-hand").append(cardImg); //This is the location of where to place the selected card
    }
    console.log(opponentSum);

    //Deal player 2 cards
    for (i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "../assets/images/cards/" + card + ".png";
        playerSum += getValue(card);
        playerAceCount += checkAce(card);
        document.getElementById("player-hand").append(cardImg);
        //Displays players current score
        document.getElementById("player-sum").innerText = playerSum;
    }
    console.log(playerSum);

    //Add event listener for when control buttons are clicked
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("deal").addEventListener("click", deal);

}

//Add function for when hit button is clicked
function hit() {
    if (!canHit) { //You cannot use this function if playerSum is 21 >
        return;
    }

    //If you can hit and you click the button then a card will be drawn from the deck and displayed
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "../assets/images/cards/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-hand").append(cardImg);
    //Updates players current score
    document.getElementById("player-sum").innerText = playerSum;

    //If you have an ace in your hand and it amounts to more than 21 then you can reduce the value of ace by 10.
    if (reduceAce(playerSum, playerAceCount) > 21) {
        canHit = false;
    }
}

function stay() {
    //Reveals opponents hidden card
    document.getElementById("hidden").src = "../assets/images/cards/" + hidden + ".png";
    document.getElementById("opponent-sum").innerText = opponentSum;

    //Calculates boths players totals, considering reduceAce function
    opponentSum = reduceAce(opponentSum, opponentAceCount);
    playerSum = reduceAce(playerSum, playerAceCount);

    //Disables function to add additional cards
    canHit = false;

    //Results declared as an alert
    let result = "";
    if (playerSum > 21) {
        alert("BUST! You lose");
        incrementOpponentScore();
    } else if (opponentSum > 21) {
        alert("YOU WIN!");
        incrementPlayerScore();
    } else if (playerSum === opponentSum) {
        alert("IT'S A TIE");
    } else if (playerSum > opponentSum) {
        alert("YOU WIN!");
        incrementPlayerScore();
    } else if (playerSum < opponentSum) {
        alert("YOU LOSE!");
        incrementOpponentScore();
    }

}

function deal() {
    //Returns all played cards from the table to the deck
    playerHand = document.getElementById("player-hand").querySelectorAll('img');
    opponentHand = document.getElementById("opponent-hand").querySelectorAll('img');

for (let i = 0; i < playerHand.length; i++) {
    playerHand[i].remove();
}
for (let x = 0; x < opponentHand.length; x++) {
    opponentHand[x].remove();
}

//Displays hidden card back on table on opponents side
let hiddenImg = document.createElement("img"); //Create img element to host card
hiddenImg.src = "../assets/images/back.png"; //This is where the card files are located
document.getElementById("opponent-hand").append(hiddenImg); //This is the location of where to place the selected card

//Returns all cards to the deck, shuffles, deals a new hand to both players
buildDeck();
shuffleDeck();
startGame();

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

//If you have an ace in your hand and it amounts to more than 21 then you can reduce the value of ace by 10.
function reduceAce(eitherPlayerSum, eitherPlayerAceCount) {
    while (eitherPlayerSum > 21 && eitherPlayerAceCount > 0) {
        eitherPlayerSum -= 10;
        eitherPlayerAceCount -= 1;
    }
    return eitherPlayerSum;
}

//Gets old scores from DOM and increments them by one depending on win/lose
function incrementOpponentScore() {
    let oldScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++oldScore;
}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}