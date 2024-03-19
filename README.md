# 21 Game

# Javascript Project

![Image of the website put through am i responsive website to show how it appears on different screen sizes or devices][responsive]

This website has been designed and built to give users a place to play Blackjack against the computer on all devices. 

This project is for educational purposes. The main aim is to build a responsive website using HTML, CSS and Javascript.

## [Visit the live website here.](https://bekmart.github.io/21-practice/)

<h1 id="contents">Table of Contents</h1>

- [UX](#UX)
    - [Website owner business goals](#website-owner-goals) 
    - [User goals](#user-goals)
    - [User stories](#user-stories)
    - [Structure](#structure)
    - [Surface](#surface)
- [Features](#features)
    - [Features left to Implement](#features-to-implement)
- [Technology used](#technology-used)
- [Testing](#testing)
    - [Functionality Testing](#functionality)
    - [Compatability Testing](#compatability)
    - [User stories testing](#story-testing)
    - Issues Found
    - Performance Testing
    - Code Validation
- Deployment
- Credits

<h1 id="UX">UX</h1>

<h2 id="website-owner-goals">Website owner business goals</h2>

The reason for creating this website is to provide the user with a fun and easy way to practice playing 21 against the computer on all devices. 

If the user enjoys their experience then they will come back to play more, encourage others to visit the website and investigate other projects that the author has created.  

<h2 id="user-goals">User goals</h2>

### New user goals

- Learn the rules of playing 21
- Practice playing the game against the computer
- Try to beat the computers score
- Enjoy the game anywhere on any device

### Returning user goals

- Recall the game rules
- Practice playing 21 against the computer
- Try to beat the computers score 
- Beat previous personal scores
- Enjoy the game anywhere on any device

<h2 id="user-stories">User stories</h2>

### As a website designer..

- I want to create an easy to use game which is fun and interactive so that users will return
- I want to ensure that the game works efficiently and correctly at all times
- I want the game to be responsive on all devices so that it can be enjoyed anywhere 

### As a new user..

- I want to be able to easily find and understand the rules of the game
- I want to easily navigate around the page and play the game
- I want to be able to compete against the computer and know what my score is

### As a returning user...

- I want to compete against the computer, to try and beat their score and any previously gained scores 
- I want to be able to access the game at anytime on any device

<h2 id="structure">Structure</h2>

This website has been designed with a consistent layout to create a professional feel, with an easy to use interface on all devices. The layout has been adjusted for users to enjoy on all devices from mobile phones to desktop screens, whilst keeping the general feel consistent and intuitive. 

![The game is made up of three main sections. The title at the top. The game area in the center which includes each players scores, the cards in their hands and the controls buttons seperating them in the center. The settings buttons are at the bottom.][structure]

- The background image is always in the centre of the screen. On mobile devices, less of it is visible, maintaining its integrity and on larger devices it ocuppies the whole screen. 
- The title of the page is always at the top, in the centre and has a strong contrast to the background, making it bold and striking.
- There is an area which displays the opponents score and winning tally at the top of the game area, which is mirrored at the bottom for the user.
- The cards are dealt to each player next to where their scores are displayed, symetrically and seperated by the game control buttons.
- The buttons change depending on the device width. All the buttons are aligned horizontally on larger devices. On smaller devices the deal button is elevated above the other two game control buttons. The settings buttons at the bottom of the page align vertically on smaller devices. 
- The game rules appear as a modal when the button is clicked. 

<h2 id="surface">Surface</h2>

### Colors

I have used consistent and contrasting colours throughout the website, to ensure that all content is readable:

- #163904 (Dark Green)
    - Font colour of button text
    - Font colour in the game rules (modal)
    - Background colour when buttons are hovered over (inverted)
    - Outline of the animated result text
- #CFB006 (Gold)
    - Font colour for the page title
    - Font colour for the game scores
    - Background color for buttons
    - Font colour of buttons when hovered over (inverted)
- #C20202 (Red)
    - Main title outline
    - Animated text displaying results
- #DDC750 (Lighter Gold)
    - Background of game rules (modal)

### Fonts

- The main font I have chosen is 'Rye', with a back up font 'sans-serif'.
- This was sourced from [Google Fonts](https://fonts.google.com/specimen/Rye)

### Images

- I sourced all images from searching on Google. 
- Find the indiviudal website sources in the [credits.](#media)

[Back to Contents](#contents)
<hr>

<h1 id="features">Features</h1>

This website consists of just one page which hosts the game itself. 

The website contains the following features:

### Start the game

- When the page loads, the cards are created into a deck and shuffled, before being dealt out to start the game. There is a sound associated with the cards being dealt out. 
- The opponent is dealt two cards but only one of them is visible to the user as the first card just shows the reverse side. 
- The opponents score remains unkown, displaying just a question mark until the user ends the round. 
![The opponent score area is at the top of this section set darker by adjusting the opaqueness, to enhance the gold font which displays the current score inside a set of brackets (which is always a question mark until the user clicks stay to reveal the opponents hand and score) and games won tally. Underneath this are the opponents cards. The first of which is hidden, just showing the back of the card and the second is revealed.][opponent-side]
- The player is dealt two cards which are both displayed on their side of the table.
- The total value of these cards are displayed in brackets where it says players score, to asisst them in making their decision on how to play the rest of the round.
![This is a mirror image of the opponent's side in terms of structure. However, both cards are visible and the current player score is displayed in the score section to assist the user with their decision to either hit or stick.][player-side]
- Once the cards are all dealt, the player is able to click either hit or stay which are located in the center of the game area. 
- When the user hovers over the buttons, the colours become inverted and once clicked the button depresses. 
![There are three game control buttons in the centre of the game section. These are hit, deal and stay. The deal button is in the center and is slightly larger than the other two.][game-controls]

### Hit

- The user can click the hit button whilst their total score is 21 or below. 
- This will extract another card from the deck and display it with the other cards in their hand, there is a sound effect for dealing a single card to the player. 
- The value of the additional card is added to their current score. 

### Special ace card

- There is a function that allows the ace to reduce from the value of 11 to 1 if the player has one in their hand and their score exceeds 21. 

### Stay

- The user is to click stay if they are happy with their score and want to end the round. 
- The opponent will pick up additional cards until their score is 17 or above. These additional cards will be sourced from the shuffled pack and placed alongside the other cards in their hand which will now all be revealed along with their score total.
- At this point the stay and hit buttons are deactivated and the deal button is reactivated. 
- The result will then be announced.

### Results 

- Depending on each players score, the results will appear in the middle of the screen as animated text with an associated sound effect to reveal who won.
- The tally of games won will then be incremented depending on who the winner of the round was. 
- If the user draws a card that makes their score exceed 21 then the game will automatically be over and the result will display bust. The opponent will win this round regardless of their total score. 
![The opponents cards are all now revealed as is their associated score. Their games won has been increased also as they have won this round. Bust is being displayed in red bold font in the middle of the screen to declare the result.][bust]

### Deal

- The user can then press the deal button which will shuffle a new deck and deal a new set of cards, whilst keeping a tally of who has won the previous rounds. 

### Reset game

- There is a button at the bottom of the page to reset the entire game if the user wants to clear the previous game scores and restart.
![At the bottom of the page, underneath the game area are two buttons which are labelled Game Rules and Restart game.][setting-buttons]

### Game rules

- The game rules are displayed in a modal which pops up over the top of the page when clicked showing the game rules. The user can either click the x in the corner or anywhere else on the page to return to the game itself. 
![The rules for the game appear in a modal which displays the rules in the dark green font in a yellow window which sits above the game screen, which is darkened.][game-rules]

<h1 id="features-to-implement">Features left to Implement</h1>

## Betting aspect

To improve this website in the future, I could add a betting element. Whereby players can choose to bet chips to gain extra points against the computer for an added competitive edge. 

[Back to Contents](#contents)
<hr>

<h1 id="technology-used">Technology used</h1>

## HTML 5

The structure language.

## CSS

The styling language.

## Javascript

The scripting language to enable interactivity.

## Git pod

This is the Development hosting platform which was used to create the website.

## GitHub

This is the software hosting platform which was used to keep the project in a remote location.

## Google Fonts

Where the font was sourced from.

## Flaticon

Playing cards favicon created by Vectorslab - Flaticon.

## Audacity

Used to record and save sound clips from YouTube.

## Chrome DevTools

Used to help build the website and assisted in finding and fixing any bugs. 

## Google Gemini

AI used to assist me in debugging elements in my code.

[Back to Contents](#contents)
<hr>

<h1 id="testing">Testing</h1>

<h2 id="functionality">Functionality testing</h2>
 
- I can confirm that all the functions work as expected: 

    - When the game starts or the deal button is selected, a new deck of 52 cards is created in order and then randomly shuffled before dealing the cards to each of the players. 
    - Two cards are dealt to the opponent, with one face down and two cards are dealt to the player. 
    - When the hit button is activated, the player is dealt an additional card.
    - Once the stay button is clicked, the round is over. The hit and stay buttons are disabled and the deal button is reactivated. The hidden card is then revealed along with any other cards that the opponent has in their hand. 
    - The opponent will pick up additional cards whilst their score is below 17.
    - There is a function that will automatically calculate the value of an ace as 1 instead of 11 if the score of either player exceeds 21 and they have an ace in their hand.
    - The players score is calculated and displayed throughout the duration of the game. There is a function which calculates this based on the card selected and the value that it holds. 
    - If the players score exceeds 21 then the game will automatically end and the "BUST!" message will be displayed, meaning that the opponent has won, regardless of their score. 
    - The opponents score is revealed after the stay button has been activated and their cards have been revealed.
    - There is a function to record who won the round and increment their games won tally to show how many rounds have been won by each contestant. 
    - Once the scores are calculated and revealed an animated message is displayed in the middle of the screen which grows from the center and disappears after 3 seconds. 
    - Audio effects are played at certain points throughout the game. When the cards are dealt and when the results are being displayed. 
    - When the user hovers over any of the buttons, the colours are inverted and the button depresses when they click on it.
    - When the Game Rules button is clicked, the rules of the game are displayed in a modal. The user can either click on the x in the corner or anywhere else on the screen to escape and return to the game. 
    - There is a button to restart the game. This will wipe clean any previous scores and tallies that have been acrued and set up a new game.

All of the above functions have been tested through running the game and using the console log on DevTools to ensure that everything is behaving the way that it ought to be.  

- I can confirm that all pages on this website are responsive and look good on all standard sized screens. 
    - This was achieved by using relative values for sizing with minimum and maximum restrictions as well as some media queries in the css stylesheet. 
    - They were tested using:
        - 'Devtools' toolbar in Chrome.
        - 'Am I Responsive' app. 

<h2 id="compatability">Compatability Testing</h2>

- I have manually tested that this website works in both Chrome and Safari web browsers.
    - Everything works fine on Chrome.
    - In Safari, the animated results appear but without the dark green outline and the audio files are tempremental. 

- I tested the website on several hardware devices and can confirm that the website looks professional and works as intended, I used the following devices for testing:
    - Galaxy S20
    - Iphone 13
    - MacBook Pro

<h2 id="story-testing">User stories testing</h2>

### As a website designer..

- I want to create an easy to use game which is fun and interactive so that users will return
    - A simple and consistent layout has been used, with clear seperation between the opponents and users side, using symmetry to make the game more aesthetically appealing. 
    - All buttons are labelled clearly and styled the same. 
    - Animated text is used along with audio to display results, adding more depth and excitment to the game. 
- I want to ensure that the game works efficiently and correctly at all times 
    - Many tests have been conducted to ensure that all functionaility works and bugs have been fixed to ensure user will have a positive experience throughout the game process. 
- I want the game to be responsive on all devices so that it can be enjoyed anywhere 
    - Relative measurements to the screen size have been used whilst having a maximum and minimum size for different elements and sections to ensure they hold their integrity.
    - A media query has also been used to style some of the buttons and features to ensure that they fit nicely on the page at all tiomes. 

### As a new user..

- I want to be able to easily find and understand the rules of the game
    - The game rules are clearly labelled as a button, at the bottom of the screen.
    - When clicked they appear on the screen as a modal.
    - Each of the bullet points are clear and concise so that the user can easy find and understand the rules to apply them to the game. 
- I want to easily navigate around the page and play the game
    - The webpage layout is simple and intuitive to use due to it only containing the absolutely necessary features and having a simple symmetrical layout.
    - The buttons are all laybelled clearly and the game rules explains how and when to use them in simple terms.  
- I want to be able to compete against the computer and know what my score is
    - The users current score is always displayed on the screen to help them decide whether or not they want to get another card or stay with their hand. 
    - The opponent score is revealed once the round is over, so the user can see what their opponent had when they discover the results. 
    - A games won tally is kept on both sides of the game so that the player can try to beat the computer over a certain number of rounds.

### As a returning user...

- I want to compete against the computer, to try and beat their score and any previously gained scores 
    - Users may want to return to the game to beat their previous scores achieved against the opponent. 
- I want to be able to access the game at anytime on any device
    - The game is responsive and works well on mobile so can be enjoyed anywhere with an internet connection. 
    - Users will play when they are waiting or to remedy boredom, it can be picked up and put down quickly as it is a short game.

[responsive]: assets/images/responsive.png
[structure]: assets/images/screenshots/21-screenshot.png
[opponent-side]: assets/images/screenshots/opponent-side.png
[player-side]: assets/images/screenshots/player-side.png
[game-controls]: assets/images/screenshots/game-control-buttons.png
[bust]: assets/images/screenshots/bust.png
[setting-buttons]: assets/images/screenshots/settings-buttons.png
[game-rules]: assets/images/screenshots/game-rules.png