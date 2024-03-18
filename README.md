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
- Technology used
- Testing
    - Functionality Testing
    - Compatability Testing
    - User stories testing
    - Issues Found
    - Performance Testing
    - Code Validation
- Deployment
- Credits

<h1 id="UX">UX</h1>

<h2 id="website-owner-goals">Website owner business goals</h2>

The reason for creating this website is to provide the user with a fun and easy way to practice playing 21 aginst the computer on all devices. 

If the user enjoys their experience then they will come back to play more, encourage others to visit the website and investigate other projects that the author has created.  

<h2 id="user-goals">User goals</h2>

### New user goals

- Learn the rules of playing 21
- Practice playing the game against the computer
- Try to beat the computers score
- Enjoy the game anywhere on any devices

### Returning user goals

- Recall the game rules
- Practice playing 21 against the computer
- Try to beat the computers score 
- Beat previous personal best
- Enjoy the game anywhere on all devices

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

- The background image is always in the centre of the screen. On mobile devices, less of it is visible but it holds its integrity and on larger screens it ocuppies the whole screen. 
- The title of the page is always at the top centre and has a strong contrast to the background, making it bold and striking.
- There is an area which displays the opponents score and winning tally at the top of the page, which is mirrored at the bottom for the user.
- The cards are dealt to each player next to where their scores are stated, symetrically and seperated by the game control buttons.
- The buttons change depending on the device width. All the buttons are aligned horizontally on a larger device but on smaller devices the deal button is elevated above the other two game control buttons. The settings buttons at the bottom of the page align vertically on smaller devices. 
- All the buttons have a bold contrast to the background and are all styled the same. When the user hovers over the buttons, the colours are inverted and once clicked, the button depreciate to acknowledge this action. 
- The game rules appear as a modal when clicked. The user can click either on the x in the corner or anywhere else on the screen to contnue to the game. 

<h2 id="surface">Surface</h2>

### Colors

I have used consistent and contrasting colours throughout the website, to ensure that all content is readable:

- #163904 (Dark Green)
    - The font colour of text inside the buttons and within the game rules (modal)
    - The background colour when buttons are hovered over as colours become inverted
    - The border of the score areas
    - Outline of the animated results font
- #CFB006 (Gold)
    - The main font colour for the page title
    - The font colour for the game scores
    - Background color for the buttons
    - When buttons are hovered over, the font changes to this colour
- #C20202 (Red)
    - The main title outline
    - The animated font to display the results
- #DDC750 (Lighter Gold)
    - A lighter shade of the other gold used, as the background of the game rules (modal)

### Fonts

- The main font I have chosen is 'Rye', with a back up font 'sans-serif'.
- Theis was sourced from [Google Fonts](https://fonts.google.com/specimen/Rye)

### Images

- I sourced all images from searching on Google. 
- Find the indiviudal website sources in the [credits.](#media)

[Back to Contents](#contents)
<hr>

<h1 id="features">Features</h1>

This website consists of just one page which hosts the game itself. 

The website contains the following features:
- There is a bold heading with the title of the game at the top of the page.
![The title of the page is in a bold gold font with a red outline over a green textured background of a poker table][title]
- The game area is in the center of the screen where the game takes place, differenciated by being a lighter shade to the rest of the background. This is where both the player and opponent cards are dealt. Bordered by their results sections. 
![The game area has a background of a poker table with light images of the different suits. At the top of the game area is the opponents score sectionm underneath this is where the opponents cards are dealt. One of them is hidden. In the center of this section are the game controls and underneath that are the players hands which are both visible. At the bottom of the game area is the players' score area.][game-area]
- When the page loads, the cards and created into a deck and shuffled, before being dealt out the start the game. 
- The opponent is dealt two cards but only one of them is visible to the user and their score remains unkown. 
![The opponent score area is at the top of this section set darker by adjusting the opaquness, to enhance the gold font which displays the current score inside a set of brackets (which is always a question mark until the user clicks stay to reveal the opponents hand and score) and games won tally. Underneath this are the opponents cards. The first of which is hidden, just showing the back of the card and the second is revealed.][opponent-side]
- The player is dealt two cards and the total of these are displayed in brackets where it says players score.
![This is a mirror image of the opponent's side in terms of structure. However, both cards are visible and the current player score is displayed in the score section to assist the user with their decision to either hit or stick.][player-side]
- The game controls are in the center of the game area. They consist of hit, deal and stay. 
- When the user hovers over the buttons, the colours become inverted and once clicked the button deprreciates. 
![There are three game control buttons in the centre of the game section. These are hit, deal and stay. The deal button is in the center and is slightly larger than the other two.][game-controls]
- The user can click the hit button when the hands have been dealt and whilst their total score is 21 or below. This will extract another card from the deck and display it with their other cards, additng the value of the card to their current score. 
- The user is to click stay if they are happy with their score and want to end the round. This will reveal the opponents cards and an nounce the results of the game. At this point the stay and hit buttons are deactivated and the deal button is reactivated. 
- If the player draws a card that makes their score exceed 21 then the game will automatically be over and the result will be bust. The opponent will win this round regardless of their total score. 
- The opponent will pick up additional cards until their score is 17 or above. These additional cards will be sourced from the shuffled pack and placed alongside their other cards which will now all be revealed alongwith their total being displayed in their score area.
- Depending on each players score, the results will appear  in the middle of the screen as animated text with an associated sound effects to reveal who won.
- The tally of games won will then be incremented depending on who the winner of the round was. 
- The user can then press the deal button which will shuffle a new deck and deal a new set of cards, whilst keeping a score of who has won the rounds. 
- There is a function that allows the ace to reduce from the value of 11 to 1 if the player has one in their hand and their score exceeds 21. 
- There is a button to reset the entire game if the user wants to clear the previous game scores and restart.
![At the bottom of the pagem underneath the game area are two buttons which are labelled Game Rules and Restart game.][setting-buttons]
- The game rules are displayed in a modal which is pops up over the top of the page when clicked showing the game rules. The user can either click the x in the corner or anywhere else on the page to return to the game itself. 
![The rules for the game appear in a modal which displays the rules in the dark green font on a yellow window which sits above the game screen, which is darkened.][game-rules]


[responsive]: assets/images/responsive.png
[title]: assets/images/screenshots/title.png
[game-area]: assets/images/screenshots/game-area.png
[opponent-side]: assets/images/screenshots/opponent-side.png
[player-side]: assets/images/screenshots/player-side.png
[game-controls]: assets/images/screenshots/game-control-buttons.png
[setting-buttons]: assets/images/screenshots/settings-buttons.png
[game-rules]: assets/images/screenshots/game-rules.png

