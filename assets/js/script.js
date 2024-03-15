//Create global variables
//The opponent and player scores
var opponentSum = 0;
var playerSum = 0;
//Create blank hands
var opponentHand = 0;
var playerHand = 0;
//Create an array for cards in hands
var opponentCards = [];
var playerCards = [];
//This will let us see if there are aces
var opponentHasAce = false;
var playerHasAce = false;
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
//Deal the opponent a hidden card
function startGame() {
    let hiddenImg = document.createElement("img"); //Create img element to host card
    hidden = deck.pop(); //Will take a card from the end of the shuffled deck and asign it to the opponents hidden card
    hiddenImg.src = "assets/images/back.png"; //This is where the card image files are located
    document.getElementById("opponent-hand").append(hiddenImg); //This is the location of where to place the selected card
    opponentCards.push(hidden); //Gets hidden card and puts its into an array
    opponentSum += getValue(hidden); //Will consider hidden card value to get the opponents sum and whether theres an ace
    console.log(hidden); //Displays what hidden card is in console log

    //Deal opponent another card
    for (i = 0; i < 1; i++) {
        let cardImg = document.createElement("img"); //Create img element to host card
        let card = deck.pop(); //Select card from shuffled deck
        cardImg.src = "assets/images/cards/" + card + ".png"; //This is where the card image files are located
        document.getElementById("opponent-hand").append(cardImg); //This is the location of where to place the selected card
        opponentCards.push(card); //Gets card and puts its into an array
        opponentSum += getValue(card); //Calculates the sum of the opponents cards and is it an ace
    }
    console.log(opponentSum); //Displays opponents score total in console log

    //Deal player 2 cards
    for (i = 0; i < 2; i++) {
        cardImg = document.createElement("img"); //Create img elements to host 2 cards
        card = deck.pop(); //Selects 2 cards from shuffled deck
        cardImg.src = "assets/images/cards/" + card + ".png"; //This is where the card image files are located
        document.getElementById("player-hand").append(cardImg); //This places the selected cards on the table in players section
        playerCards.push(card); //Puts cards into an array
        playerSum += getValue(card); //Calculates the sum of the players cards
        playShuffle(); // Plays audio of cards being shuffled/dealt

        //Displays players current score
        // Consider whether to change the ace to 1 opposed to 11(depending on score and whether player has an ace)
        playerCards, playerHasAce = adjustPlayerScore(playerCards, playerHasAce);
        document.getElementById("player-sum").innerText = playerSum; //Displays players current score in the game 
        console.log(playerSum); //Displays players current score in console log
    }

    //Add event listener for when control buttons are clicked
    document.getElementById("hit").addEventListener("click", hit); //Enables user to press hit
    document.getElementById("stay").addEventListener("click", stay); //Enables user to press stay

    //Once game is set up, the deal button is disabled, until the user clicks stay
    document.getElementById("deal").removeEventListener("click", deal);
}

//Add function for when hit button is clicked
function hit() {
    if (!canHit) { //You cannot use this function if playerSum is 21 >
        return;
    }

    //If you can hit and you click the button then a card will be drawn from the deck and displayed
    let cardImg = document.createElement("img"); //Create img elements to host another player card
    let card = deck.pop(); //Select card from shuffled deck
    cardImg.src = "assets/images/cards/" + card + ".png"; //This is where the card image files are located
    document.getElementById("player-hand").append(cardImg); //Places the selected card on the table in players section
    playDealCard(); //Plays audio sound for a single card being dealt
    playerCards.push(card); //Puts cards into an array

    //Calculates players score
    playerSum += getValue(card); //Calculates the sum of the players cards
    // Calculates player total score considering adjustPlayerScore function
    // Consider whether to change the ace to 1 opposed to 11(depending on score and whether opponent has an ace)
    playerCards, playerHasAce = adjustPlayerScore(playerCards, playerHasAce);
    document.getElementById("player-sum").innerText = playerSum; //Displays players current score in the game 

    //If player has a score less than 21 then they can click hit for another card
    if (playerSum < 21) {
        canHit = true;
        //If players score exceeds 21 then stay function will be triggered and BUST message displayed
    } else if (playerSum > 21) {
        stay();
    }
}

function stay() {
    //Opponent will pick up additional cards until their score is at least 17
    while (opponentSum < 17) {
        let cardImg = document.createElement("img"); //Creates image element to host additional cards if necessary
        let card = deck.pop(); // Selects cards from shuffled deck
        cardImg.src = "assets/images/cards/" + card + ".png"; //Where to obtain the associated card image
        document.getElementById("opponent-hand").append(cardImg); //Puts the image on the table in opponents hand
        playDealCard(); //Plays audio sound for a single card being dealt if a card is placed on table
        opponentCards.push(card); //Puts card in an array

        opponentSum += getValue(card); // Calculates opponents score and whether they have an ace
        // Calculates opponents total score considering adjustOpponentScore function
        // Consider whether to change the ace to 1 opposed to 11(depending on score and whether opponent has an ace)
        opponentCards, opponentHasAce = adjustOpponentScore(opponentCards, opponentHasAce);
    }

    //Reveals opponents hidden card
    let reveal = document.createElement("img"); //Creates variable for revealed card image
    reveal.src = "assets/images/cards/" + hidden + ".png"; //Gets revealed card image from hidden variable
    document.getElementById("opponent-hand").prepend(reveal); //Puts revealed card at the begining of opponents hand

    //Discards the back image of hidden card
    let discard = document.getElementById("opponent-hand").children[1]; //Creates variable for back image of card and locates it 
    discard.remove(); //Removes back image of card from table

    //Displays oponents score
    document.getElementById("opponent-sum").innerText = opponentSum;

    //Disables function to add additional cards
    canHit = false;

    //If statments used to determine who wins
    if (playerSum > 21) {
        document.getElementById("results").textContent = "Bust!";
        incrementOpponentScore();
        playBust(); //Plays audio for losing hand
    } else if (opponentSum > 21) {
        document.getElementById("results").textContent = "You win!";
        incrementPlayerScore();
        playWin(); //Plays audio for winning hand
    } else if (playerSum === opponentSum) {
        document.getElementById("results").textContent = "Its a tie!";
        playTie(); // Plays audio for a draw
    } else if (playerSum > opponentSum) {
        document.getElementById("results").textContent = "You win!";
        incrementPlayerScore();
        playWin(); //Plays audio for winning hand
    } else if (playerSum < opponentSum) {
        document.getElementById("results").textContent = "You lose!";
        incrementOpponentScore();
        playBust(); //Plays audio for losing hand
    }

    //This code enables the animation to stop and start each time a game is played
    const resultsElement = document.getElementById("results"); //Creates variable for results
    resultsElement.classList.add("animated"); //Adds a class to link to css animation styling
    setTimeout(() => {
        resultsElement.classList.remove("animated");
    }, 4000); //Sets a timer so that animation is only playing for 4000ms and then is removed to enable it to be triggered again next round

    // Enables user to click deal to deal a new hand
    document.getElementById("deal").addEventListener("click", deal);

    //Disables user from clicking stay more than once
    document.getElementById("stay").removeEventListener("click", stay);

}

function deal() {
    //Returns all played cards from the table to the deck
    playerHand = document.getElementById("player-hand").querySelectorAll('img'); //Selects all cards from player hand and puts into variable
    opponentHand = document.getElementById("opponent-hand").querySelectorAll('img'); //Selects all cards from opponent hand and puts into variable

    //Loops created to iterate through both player and opponent hands and remove each element
    for (let i = 0; i < playerHand.length; i++) {
        playerHand[i].remove();
    }
    for (let x = 0; x < opponentHand.length; x++) {
        opponentHand[x].remove();
    }

    //Clear the arrays holding opponent and player cards
    opponentCards = [];
    playerCards = [];

    //Resets ace count for both players 
    opponentHasAce = false;
    playerHasAce = false;

    //Clears the current player and opponent scores for next round
    opponentSum = parseInt("0");
    document.getElementById("opponent-sum").innerHTML = "?";
    playerSum = parseInt("0");

    //Returns all cards to the deck, shuffle, deal a new hand to both players
    buildDeck();
    shuffleDeck();
    startGame();

    //Allows player to click hit if card value is less than 21
    if (playerSum < 21) {
        canHit = true;
    } else if (playerSum > 21) {
        canHit = false;
    }
}

//Will get the value of the card that is dealt
function getValue(card) {
    let data = card.split("-"); //This will create an array with 2 values. First value is number/second value is suite
    let value = data[0]; //This will extract the number value from the card

    //If value is not a number then it'll be a = 11 OR j/q/k = 10
    if (isNaN(value)) {
        if (value === "a") {
            // Check for aces in both player and opponent cards (moved outside the inner if)
            for (let i = 0; i < playerCards.length; i++) {
                if (playerCards[i].startsWith("a-")) {
                    playerHasAce = true;
                    continue;
                }
            }
            for (let i = 0; i < opponentCards.length; i++) {
                if (opponentCards[i].startsWith("a-")) {
                    opponentHasAce = true;
                    continue;
                }
            }
            return 11;
        } else {
            return 10;
        }
    }
    //If it is a number value then we just want to get that integer to reflect the value of the card
    return parseInt(value);
}

//Function to reduce the playerSum by 10, change playerHasAce to false and remove the ace from array
function adjustPlayerScore(playerCards, playerHasAce) {
    if (playerSum > 21 && playerHasAce === true) { //If playerSum > 21 & playerHasAce = true then this function will be triggered
        playerHasAce = false; //Updates playerHasAce to false
        let aceIndex = playerCards.findIndex(item => item.startsWith("a-"))
        if (aceIndex !== -1) {
            playerCards.splice(aceIndex, 1); // Finds and removes ace from playerCards
            playerSum -= 10; // Reduce the player score by 10
        }
        console.log("player= ", {
            playerCards,
            playerSum,
            playerHasAce
        }); //Displays results in console log
    }
    return playerCards, playerHasAce; //Returns new values for array, score and has ace
}

//Function to reduce the opponentSum by 10, change opponentHasAce to false and remove the ace from array
function adjustOpponentScore(opponentCards, opponentHasAce) {
    if (opponentSum > 21 && opponentHasAce === true) { //If opponentSum > 21 & opponentHasAce = true then this function will be triggered
        opponentHasAce = false; //Updates opponentHasAce to false
        let aceIndex = opponentCards.findIndex(item => item.startsWith("a-"))
        if (aceIndex !== -1) {
            opponentCards.splice(aceIndex, 1); //Finds and removes ace from array
            opponentSum -= 10; //Reduce the opponent score by 10
        }
        console.log("opponents= ", {
            opponentCards,
            opponentSum,
            opponentHasAce
        }); //Displays results in console log
    }
    return opponentCards, opponentHasAce; //Returns new values for array, score and has ace
}

//Gets old scores from DOM and increments them by one depending on win/lose
function incrementOpponentScore() {
    let oldScore = parseInt(document.getElementById("opponent-score").innerText); //Gets oldscore from DOM
    document.getElementById("opponent-score").innerText = ++oldScore; //Increments score by one each time this function is called
}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText); //Gets oldscore from DOM
    document.getElementById("player-score").innerText = ++oldScore; //Increments score by one each time this function is called
}

// Below are all the audio functions for the game 
function playShuffle() {
    let shuffle = new Audio("assets/sounds/shuffle.wav");
    shuffle.play(); // Called when the game starts and hands are dealt
}

function playDealCard() {
    let dealCard = new Audio("assets/sounds/deal.wav");
    dealCard.play(); // Called whhen a single card is being dealt
}

function playBust() {
    let bust = new Audio("assets/sounds/bust-lose.wav");
    bust.play(); // Called when player goes bust/loses hand
}

function playWin() {
    let win = new Audio("assets/sounds/win.wav");
    win.play(); // Called when player wins the round
}

function playTie() {
    let tie = new Audio("assets/sounds/tie.wav");
    tie.play(); // Called when the score is tied
}

// Get the modal
var modal = document.getElementById("ruleModal"); // Create variable for modal
var btn = document.getElementById("game-rules"); // Select the button that opens the modal and put it into a variable
var span = document.getElementsByClassName("close")[0]; // Create variable for the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Created restart game function when user clicks restart game button
document.getElementById("restart-game").addEventListener("click", restart); //Create event listener for restart game button
function restart() {
    window.location.reload();
} //Reload window to reset game