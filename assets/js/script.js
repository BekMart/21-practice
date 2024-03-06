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

window.onload = function() {
    buildDeck();

}

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