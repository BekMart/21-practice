//Create global variables
//The opponent and player scores
var opponentSum = 0;
var playerSum = 0;
//Create an array for cards in hands
var opponentCards = [];
var playerCards = [];
//This will let us see if there are aces in their hands
var opponentAceCount = 0;
var playerAceCount = 0;
//Opponents hidden card 
var hidden;
//The deck
var deck;
//Allows player to draw a card if playerSum < 21
var canHit = true;

//Functions that will automatically execute once page initially loads
window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
};

//Create the deck - iterates through values and types in an ordered fashion and puts in deck array 
function buildDeck() {
    let values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
    let types = ["c", "d", "h", "s"];
    deck = [];

    //Iterates through deck and creates individual cards as objects with id, value, type and alt values
    for (let i = 0; i < types.length; i++) {
        for (let x = 0; x < values.length; x++) {
            const cardID = values[x] + "-" + types[i]; //Each card will have a unique ID which is the value and type, separated with a hyphen
            const card = {
                id: cardID,
                value: values[x],
                type: types[i],
                alt: (values[x] + "-" + types[i]), //This will generate alt text for each individual card
            };
            deck.push(card); //All card objects are pushed into the deck array
        }
    }
    return deck;
}

//Function to shuffle deck each time the page loads or the deal button is clicked
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let x = Math.floor(Math.random() * deck.length); //Will pick an integer between 0-51 from deck
        let temp = deck[i]; //Picks a card from the deck
        deck[i] = deck[x]; //Makes it random
        deck[x] = temp; //Deck is shuffled through
    }
}

//Function to set up a new round
function startGame() {
    //Deal the opponent a hidden card
    let hiddenImg = document.createElement("img"); //Create img element to host hidden card image
    hiddenImg.src = "assets/images/back.png"; //This is where the card back image is located for hidden card
    document.getElementById("opponent-hand").append(hiddenImg); //Selected image will be put in opponent-hand div
    hidden = deck.pop(); //Will take a card from shuffled deck and asign it to 'hidden'
    opponentCards.push(hidden); //Puts hidden card into opponentCards array
    opponentSum += getOpponentValue(hidden); //Get value of hidden card/check if its an ace

    //Deal opponent another card
    let cardImg = document.createElement("img"); //Create img elements to host another card image
    let card = deck.pop(); //Select card from shuffled deck
    cardImg.src = "assets/images/cards/" + card.id + ".png"; //This is where the card image files are located
    document.getElementById("opponent-hand").append(cardImg); //Place selected card in opponent-hand div
    opponentCards.push(card); //Adds card to opponentCards array

    //Calculate opponents score
    opponentSum += getOpponentValue(card); //Calculates sum of opponents cards and checks for aces
    adjustOpponentScore(opponentCards); //Calculates opponents total score considering adjustOpponentScore function

    //Deal player 2 cards
    for (let i = 0; i < 2; i++) { //Will iterate this function twice to generate 2 cards
        let cardImg = document.createElement("img"); //Create img elements to host player cards
        let card = deck.pop(); //Selects card from shuffled deck
        cardImg.src = "assets/images/cards/" + card.id + ".png"; //This is where the card image files are located
        document.getElementById("player-hand").append(cardImg); //Displays card images in player-hand div
        playerCards.push(card); //Puts cards into playerCards array

        //Calculate and display player score
        playerSum += getPlayerValue(card); //Calculates sum of players cards and checks for aces
        adjustPlayerScore(playerCards); //Calculates players total score considering adjustPlayerScore function
        document.getElementById("player-sum").innerText = playerSum; //Displays players current score
    }

    //Add event listener for when control buttons are clicked
    document.getElementById("hit").addEventListener("click", hit); //Enables user to press hit
    document.getElementById("stay").addEventListener("click", stay); //Enables user to press stay

    //Once game is set up, the deal button is disabled, until the user clicks stay
    document.getElementById("deal").removeEventListener("click", deal);
}

//Function for when hit button is clicked
function hit() {
    if (!canHit) { //You cannot use this function if playerSum is 21 >
        return;
    }

    //If you click hit then a card will be drawn from the deck and displayed in player-hand div
    let cardImg = document.createElement("img"); //Create img element to host another player card
    let card = deck.pop(); //Select card from shuffled deck
    cardImg.src = "assets/images/cards/" + card.id + ".png"; //This is where the card image files are located
    document.getElementById("player-hand").append(cardImg); //Displays selected card in player-hand div
    playDealCard(); //Plays audio sound for a single card being dealt
    playerCards.push(card); //Puts cards into playerCards array

    //Calculates and updates players score display
    playerSum += getPlayerValue(card); //Calculates players score/are there aces
    adjustPlayerScore(playerCards); //Calculates player score considering adjustPlayerScore function 
    document.getElementById("player-sum").innerText = playerSum; //Displays players current score

    //If player has a score less than 21 then they can click hit for another card
    if (playerSum < 21) {
        canHit = true;
        //If players score exceeds 21 then stay function will be triggered and BUST message displayed
    } else if (playerSum > 21) {
        stay();
    }
}

//Function for when stay button is clicked
function stay() {
    while (opponentSum < 17) { //Opponent will pick up additional cards until their score is at least 17
        let cardImg = document.createElement("img"); //Creates img elementds to host additional cards
        let card = deck.pop(); //Selects cards from shuffled deck
        cardImg.src = "assets/images/cards/" + card.id + ".png"; //Where to obtain the associated card images
        document.getElementById("opponent-hand").append(cardImg); //Displays card images in opponent-hand div
        playDealCard(); //Plays audio sound for a single card being dealt
        opponentCards.push(card); //Puts card into opponentCards array

        //Calculates opponents score
        opponentSum += getOpponentValue(card); //Calculates opponents score/checks for aces
        adjustOpponentScore(opponentCards); //Calculates opponents total score considering adjustOpponentScore function
    }

    //Discards the back image of hidden card
    let discard = document.getElementById("opponent-hand").children[0]; //Creates variable for back image of card and locates it 
    discard.remove(); //Removes back image of card from table

    //Reveals opponents hidden card
    let reveal = document.createElement("img"); //Creates variable for revealed card image
    reveal.src = "assets/images/cards/" + hidden.id + ".png"; //Gets revealed card image from hidden variable
    document.getElementById("opponent-hand").prepend(reveal); //Puts revealed card at the begining of opponents hand

    //Displays oponents score
    document.getElementById("opponent-sum").innerText = opponentSum;

    //Disables function to add additional cards
    canHit = false;

    //If statments used to determine who wins and display results
    if (playerSum > 21) { //If player score is greater than 21..
        document.getElementById("results").textContent = "Bust!"; //"BUST!" animated message is displayed
        playBust(); //Plays audio for losing hand
        incrementOpponentScore(); //Opponent wins round and their games won tally is increased by 1
    } else if (opponentSum > 21) { //If opponents score is greater than 21..
        document.getElementById("results").textContent = "You win!"; //"YOU WIN!" animated message is displayed
        playWin(); //Plays audio for winning hand
        incrementPlayerScore(); //Player wins round and their games won tally increasses by 1 
    } else if (playerSum > opponentSum) { //If player score is greater than opponents score..
        document.getElementById("results").textContent = "You win!"; //"YOU WIN!" animated message is displayed
        playWin(); //Plays audio for winning hand
        incrementPlayerScore(); //Player wins round and their games won tally increasses by 1 
    } else if (playerSum < opponentSum) { //If opponents score is greater than player score..
        document.getElementById("results").textContent = "You lose!"; //"YOU LOSE!" animated message displayed
        playBust(); //Plays audio for losing hand
        incrementOpponentScore(); //Opponent wins round and their games won tally is increased by 1
    } else if (playerSum === opponentSum) { //If both contestants scores are the same..
        document.getElementById("results").textContent = "Its a tie!"; //"IT'S A TIE!" animated message is displayed
        playTie(); // Plays audio for a draw
    }

    //This code enables the animation to stop and start each time a game is played
    const resultsElement = document.getElementById("results"); //Creates variable for results
    resultsElement.classList.add("animated"); //Adds a class to link to css animation styling
    setTimeout(() => {
        resultsElement.classList.remove("animated");
    }, 4000); //Sets a timer so that animation plays for 4000ms, then its removed to enable it to be triggered again next round

    //Enables user to click deal to deal a new hand
    document.getElementById("deal").addEventListener("click", deal);

    //Disables user from clicking stay more than once as this will increment scores incorrectly
    document.getElementById("stay").removeEventListener("click", stay);
}

//Function for when deal button is clicked
function deal() {
    //Returns all played cards from the table to the deck
    let playerHand = document.getElementById("player-hand").querySelectorAll('img'); //Selects all img elements in player-hand and puts into variable
    let opponentHand = document.getElementById("opponent-hand").querySelectorAll('img'); //Selects all img elements from opponent-hand and puts into variable

    //Iterate through both player and opponent hands and remove each image element to reset game
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
    opponentAceCount = 0;
    playerAceCount = 0;

    //Clears the current player and opponent scores for next round
    opponentSum = parseInt("0");
    //Resets display of (?) for opponent score
    document.getElementById("opponent-sum").innerHTML = "?";
    playerSum = parseInt("0");

    //Sets up a new game
    buildDeck(); //Returns all cards to the deck
    shuffleDeck(); //Re-shuffles
    startGame(); //Deal a new hand to both players
    playShuffle(); //Plays audio of cards being shuffled/dealt

    //Allows player to click hit if card value is less than 21
    if (playerSum < 21) {
        canHit = true;
    } else if (playerSum > 21) {
        canHit = false;
    }
}

//Will get the value of player cards that are dealt
function getPlayerValue(card) { //Requires card to execute function
    Object.keys(card); //Separates the cards keys to create an array (id/value/type/alt) 

    //If cards value (represents the number/picture on card) is not a number..
    if (isNaN(card.value)) {
        if (card.value == 'a') { //If it is an ace..
            playerAceCount += 1; //Add 1 to playerAceCount to enable adjustPlayerScore if score exceeds 21
            return 11; //Value is 11
        } else { //Otherwise it'll be a K/Q/J..
            return 10; //Value is 10
        }
    }
    //If it has a number value, just use the integer to reflect the value of the card
    return parseInt(card.value);
}

//Will get the value of opponent cards that are dealt
function getOpponentValue(card) { //Requires card to execute function
    Object.keys(card); //Separates the cards keys to create an array (id/value/type/alt) 

    //If cards value (represents the number/picture on card) is not a number..
    if (isNaN(card.value)) {
        if (card.value == 'a') { //If it is an ace..
            opponentAceCount += 1; //Add 1 to opponentAceCount to enable adjustOpponentScore if score exceeds 21
            return 11; //Value is 11
        } else { //Otherwise it'll be a K/Q/J..
            return 10; //Value is 10
        }
    }
    //If it has a number value, just use the integer to reflect the value of the card
    return parseInt(card.value);
}

//Function to reduce players score by 10, reduce playerAceCount by 1 & remove ace from playerCards array
function adjustPlayerScore(playerCards) {
    if (playerSum > 21 && playerAceCount > 0) { //Triggered if player score is above 21 and they have an ace 
        const aceIndex = playerCards.findIndex(card => card.value === "a"); //Find index of ace card by searching card.value
        playerAceCount -= 1; //Reduce playerAceCount by 1 so that it doesn't repeat whenever 21 is exceeded
        if (aceIndex !== -1) { //If ace is found..
            playerCards.splice(aceIndex, 1); //Remove ace card from playerCards array
            playerSum -= 10; //Reduce score by 10
        }
    }
}

//Function to reduce opponent score by 10, reduce opponentAceCount by 1 & remove ace from opponentCards array
function adjustOpponentScore(opponentCards) {
    if (opponentSum > 21 && opponentAceCount > 0) { //Triggered if opponent score is above 21 & they have an ace 
        const aceIndex = opponentCards.findIndex(card => card.value === "a"); //Find index of ace card by searching card.value
        opponentAceCount -= 1; //Reduce opponentAceCunt by 1 so that it doesn't repeat whenever 21 is exceeded
        if (aceIndex !== -1) { //If ace is found..
            opponentCards.splice(aceIndex, 1); //Remove ace card from opponentCards array
            opponentSum -= 10; //Reduce score by 10
        }
    }
}

//Gets old scores from DOM and increments them by one depending on who wins
function incrementOpponentScore() { //This function is called when opponent wins
    let oldScore = parseInt(document.getElementById("opponent-score").innerText); //Gets oldscore from DOM
    document.getElementById("opponent-score").innerText = ++oldScore; //Increments score by one each time function is called
}

function incrementPlayerScore() { //This function is called when player wins
    let oldScore = parseInt(document.getElementById("player-score").innerText); //Gets oldscore from DOM
    document.getElementById("player-score").innerText = ++oldScore; //Increments score by one each time function is called
}

//Below are all the audio functions for the game 
function playShuffle() {
    let shuffle = new Audio("assets/sounds/shuffle.wav"); //Variable created with file path to associated audio
    shuffle.play(); // Called when the game starts and hands are dealt
}

function playDealCard() {
    let dealCard = new Audio("assets/sounds/deal.wav"); //Variable created with file path to associated audio
    dealCard.play(); // Called whhen a single card is being dealt
}

function playBust() {
    let bust = new Audio("assets/sounds/bust-lose.wav"); //Variable created with file path to associated audio
    bust.play(); // Called when player goes bust/loses hand
}

function playWin() {
    let win = new Audio("assets/sounds/win.wav"); //Variable created with file path to associated audio
    win.play(); // Called when player wins the round
}

function playTie() {
    let tie = new Audio("assets/sounds/tie.wav"); //Variable created with file path to associated audio
    tie.play(); // Called when the score is tied
}

// Get the modal
var modal = document.getElementById("ruleModal"); // Create variable for modal
var btn = document.getElementById("game-rules"); // Select the button that opens the modal and put it into a variable
var span = document.getElementsByClassName("close")[0]; // Create variable for the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Created restart game function when user clicks restart game button
document.getElementById("restart-game").addEventListener("click", restart); //Create event listener for restart game button
function restart() {
    window.location.reload();
} //Reload window to reset game