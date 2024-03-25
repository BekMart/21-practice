# 21 Game

# JavaScript Project

![Image of the website put through 'am I responsive' website to show how it appears on different screen sizes or devices][responsive]

This website has been designed and built to give users a place to play Blackjack against the computer on all devices. 

This project is for educational purposes. The main aim is to build a responsive website using HTML, CSS and JavaScript.

## [Visit the live website here.](https://bekmart.github.io/21-practice/)

<h1 id="contents">Table of Contents</h1>

- [UX](#UX)
    - [Website Owner Business Goals](#website-owner-goals) 
    - [User Goals](#user-goals)
    - [User Stories](#user-stories)
    - [Structure](#structure)
    - [Surface](#surface)
- [Features](#features)
    - [Features Left To Implement](#features-to-implement)
- [Technology Used](#technology-used)
- [Testing](#testing)
    - [Functionality Testing](#functionality)
    - [Compatibility Testing](#compatibility)
    - [User Stories Testing](#story-testing)
    - [Issues Found](#issues)
    - [Performance Testing](#performance)
    - [Code Validation](#validation)
- [Deployment](#deployment)
- [Credits](#credits)

<h1 id="UX">UX</h1>

<h2 id="website-owner-goals">Website Owner Business Goals</h2>

The reason for creating this website is to provide the user with a fun and easy way to practice playing 21 against the computer on all devices. 

If the user enjoys their experience, then they will come back to play more, encourage others to visit the website and investigate other projects that the author has created.  

<h2 id="user-goals">User Goals</h2>

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

<h2 id="user-stories">User Stories</h2>

### As a website designer..

- I want to create an easy-to-use game which is fun and interactive so that users will return
- I want to ensure that the game works efficiently and correctly at all times
- I want the game to be responsive on all devices so that it can be enjoyed anywhere 

### As a new user..

- I want to be able to easily find and understand the rules of the game
- I want to easily navigate around the page and play the game
- I want to be able to compete against the computer and know what my score is

### As a returning user...

- I want to compete against the computer, to try and beat their score and any previously gained scores 
- I want to be able to access the game at any time on any device

<h2 id="structure">Structure</h2>

This website has been designed with a consistent layout to create a professional feel, with an easy-to-use interface on all devices. The layout has been adjusted for users to enjoy on all devices from mobile phones to desktop screens, whilst keeping the general feel consistent and intuitive. 

![The game is made up of three main sections. The title at the top. The game area in the center which includes each player's scores, the cards in their hands, with the control buttons separating them in the center. The settings buttons are at the bottom.][structure]

- The background image is always in the center of the screen. 
    - On mobile devices, less of it is visible, maintaining its integrity.
    - On larger devices it occupies the whole screen. 
- The title of the page is always at the top, in the center and has a strong contrast to the background, making it bold and striking.
- There is an area which displays the opponent's current score and winning tally at the top of the game area, which is mirrored at the bottom for the user.
- The cards are dealt to each player adjacent to where their scores are displayed, symmetrically and separated by the game control buttons.
- The game control buttons change throughout the game depending on which ones are currently active, but are always in the center of the game area.
- The settings buttons at the bottom of the page align vertically on smaller devices and horizontally on larger screens.
- The game rules appear as a modal when the button is clicked. 

<h2 id="surface">Surface</h2>

### Colours

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

- The main font I have chosen is 'Rye', with a backup font 'sans-serif'.
- This was sourced from [Google Fonts](https://fonts.google.com/specimen/Rye)

### Images

- I sourced all images from searching on Google. 
- Find the individual website sources in the [credits.](#media)

[Back to Contents](#contents)
<hr>

<h1 id="features">Features</h1>

This website consists of one page which hosts the game itself and a 404-error page which is displayed if the URL is entered incorrectly.  

The website contains the following features:

### Start the game

- When the page loads, the cards are created into a deck and shuffled, before being dealt out to start the game. There is a sound associated with the cards being dealt out. 
- The opponent is dealt two cards but only one of them is visible to the user as the first card just shows the reverse side. 
- The opponent's score remains unknown, displaying just a question mark until the user ends the round. 
![The opponent score area is at the top of this section set darker, to enhance the gold font which displays a question mark for opponent score and games won tally. Underneath this are the opponent's cards. The first of which is hidden, just showing the back of the card, whilst the second is revealed.][opponents-side]
- The player is dealt two cards which are both displayed on their side of the table.
- The total value of these cards is displayed in brackets where it says player score, to asisst them in making their decision on how to play the rest of the round.
![This is a mirror image of the opponent's side in terms of structure. However, both cards are visible, and the current player score is displayed in the score section to assist the user with their decision to either hit or stay.][player-side]
- Once the cards are all dealt, the player is able to click either hit or stay which are located in the center of the game area. 
![The gold with green font hit and stay buttons are horizontally aligned with a gap between them.][hit-stay]
- When the user hovers over the buttons, the colours become inverted and once clicked the button depresses. 

### Hit

- The user can click the hit button whilst their total score is 21 or below. 
- This will extract another card from the deck and display it with the other cards in their hand.
- There is a sound effect for dealing a single card to the player. 
- The value of the additional card is added to their current score and displayed on screen. 

### Special ace card

- There is a function that allows the ace to reduce from the value of 11 to 1 if the player has one in their hand and their score exceeds 21. 

### Stay

- The user clicks stay if they are happy with their score and want to end the round. 
- The opponent will pick up additional cards until their score is 17 or above. These additional cards will be sourced from the shuffled pack and placed alongside the other cards in their hand which will now all be revealed along with their score total.
- At this point the stay and hit buttons are deactivated and will disappear from the screen, whilst the deal button is reactivated and appears in the center of the screen. 
![The game controls section now only hosts a deal button as this is the only available button to press at this point in the game.][deal]
- The result will then be announced.

### Results 

- Depending on each player's score, the results will appear in the middle of the screen as animated text with an associated sound effect to reveal who has won.
- The tally of games won will then be increased depending on who the winner of the round is. 
- If the user draws a card that makes their score exceed 21 then the round will automatically end, and the result will display bust. The opponent will win this round regardless of their total score. 
![The opponent's cards are all now revealed as is their associated score. Their games won has been increased also as they have won this round. Bust is being displayed in red bold font in the middle of the screen to declare the result.][bust]

### Deal

- The user can then press the deal button which will shuffle a new deck and deal a new set of cards, whilst keeping a tally of who has won the previous rounds. 
- Once the deal button has been clicked, it will become hidden and the hit and stay buttons will reappear as they are now available to use again. 

### Reset game

- There is a button at the bottom of the page to reset the entire game if the user wants to clear the previous game scores and restart.
![At the bottom of the page, underneath the game area are two buttons which are labelled Game Rules and Restart game.][setting-buttons]

### Game rules

- The game rules are displayed in a modal which pops up over the top of the page when clicked showing the game rules. 
- The user can either click the x in the corner or anywhere else on the page to return to the game itself. 
![The rules for the game appear in a modal which displays text in dark green font in a yellow window which sits above the darkened game screen.][game-rules]

### 404 error page

- A 404 error page appears in response to the wrong URL being input. 
    - It has the same design and style as the rest of the website.
    - It contains a hyperlink which when clicked, takes the user back to the main landing page. 
![Screenshot of the 404-error page which appears when the wrong URL has been input. There is a message explaining this with a link to the main page.][404]

<h1 id="features-to-implement">Features Left To Implement</h1>

## Betting aspect

To improve this website in the future, I could add a betting element. Whereby players can choose to bet chips to gain extra points against the computer for an added competitive edge. 

[Back to Contents](#contents)
<hr>

<h1 id="technology-used">Technology Used</h1>

## HTML 5

The structure language.

## CSS

The styling language.

## JavaScript

The scripting language to enable interactivity.

## Git pod

This is the Development hosting platform which was used to create the website.

## GitHub

This is the software hosting platform which was used to keep the project in a remote location.

## Audacity

Used to record and save sound clips from YouTube.

## Chrome DevTools

Used to help build the website and assisted in finding and fixing any bugs. 

## Google Gemini

AI used to assist me in debugging elements in my code.

[Back to Contents](#contents)
<hr>

<h1 id="testing">Testing</h1>

<h2 id="functionality">Functionality Testing</h2>
 
- I can confirm that all the functions work as expected: 

    - When the game starts or the deal button is selected, a new deck of 52 cards is created in order and then randomly shuffled before dealing the cards to each of the players. At this point, the deal button is hidden from the screen as it is deactivated.  
    - Two cards are dealt to the opponent, with one face down and two cards are dealt to the player. 
    - When the hit button is activated, the player is dealt an additional card, which appears in their hand.
    - The player score is calculated and displayed throughout the duration of the game. There is a function which calculates this based on the card selected and the value that it holds. 
    - There is a function that will automatically calculate the value of an ace as 1 instead of 11 if the score of either player exceeds 21 and they have an ace in their hand.
    - If the player score exceeds 21 then the game will automatically end and the "BUST!" message will be displayed, meaning that the opponent has won, regardless of their score. 
    - Once the stay button is clicked, the round is over. The hit and stay buttons are disabled and disappear whilst the deal button is reactivated and appears in their place. 
    - The opponent's hidden card is then revealed along with any other cards that the opponent has in their hand. 
    - The opponent will pick up additional cards whilst their score is below 17.
    - The opponent score is revealed after the stay button has been activated and all their cards have been revealed.
    - There is a function to record who won the round and increment their games won tally to show how many rounds have been won by each contestant. 
    - Once the scores are calculated and revealed an animated message is displayed in the middle of the screen which grows from the center and disappears after 3 seconds. 
    - Audio effects are played at certain points throughout the game:
        - When the cards are dealt.
        - When the results are being displayed. 
    - When the user hovers over any of the buttons, the colours are inverted and the button depresses when they click on it.
    - When the Game Rules button is clicked, the rules of the game are displayed in a modal. The user can either click on the x in the corner or anywhere else on the screen to escape and return to the game. 
    - There is a button to restart the game. This will wipe clean any previous scores and tallies that have been accrued and set up a new game.

All of the above functions have been tested through running the game and using the console log on DevTools to ensure that everything is behaving the way that it ought to be.  

- I can confirm that all pages on this website are responsive and look good on all standard sized screens. 
    - This was achieved by using relative values for sizing with minimum and maximum restrictions as well as some media queries in the CSS stylesheet. 
    - They were tested using:
        - 'Devtools' toolbar in Chrome
        - 'Am I Responsive' app

<h2 id="compatibility">Compatibility Testing</h2>

- I have manually tested that this website works in both Chrome and Safari web browsers.
    - Everything works fine on Chrome.
    - In Safari, the animated results appear but without the dark green outline and the audio files are temperamental. 

- I tested the website on several hardware devices and can confirm that the website looks professional and works as intended, I used the following devices for testing:
    - Galaxy S20
    - iPhone 13
    - MacBook Pro

<h2 id="story-testing">User Stories Testing</h2>

### As a website designer..

- I want to create an easy-to-use game which is fun and interactive so that users will return
    - A simple and consistent layout has been used, with clear separation between the opponent's and user's side, using symmetry to make the game more aesthetically appealing. 
    - All buttons are labelled clearly and styled the same. If buttons are disabled, they are hidden from the screen to avoid confusion. 
    - Animated text is used along with audio to display results, adding more depth and excitement to the game. 
- I want to ensure that the game works efficiently and correctly at all times 
    - Many tests have been conducted to ensure that all functionality works and bugs have been fixed to ensure the user will have a positive experience throughout the game process. 
- I want the game to be responsive on all devices so that it can be enjoyed anywhere 
    - Relative measurements to the screen size have been used whilst having a maximum and minimum size for different elements and sections to ensure they hold their integrity.
    - A media query has also been used for styling.

### As a new user..

- I want to be able to easily find and understand the rules of the game
    - The game rules are clearly labelled as a button, at the bottom of the screen.
    - When clicked they appear on the screen as a modal.
    - Each of the points is clear and concise so that the user can easily find and understand the rules to apply them to the game. 
- I want to easily navigate around the page and play the game
    - The webpage layout is simple and intuitive to use due to it only containing the absolutely necessary features and having a simple symmetrical layout.
    - The buttons are all labeled clearly, and the game rules explain how and when to use them in simple terms. When buttons are deactivated they are temporarily removed from the screen.  
- I want to be able to compete against the computer and know what my score is
    - The user's current score is always displayed on the screen to help them decide whether or not they want to get another card or stay with their hand. 
    - The opponent score is revealed once the round is over, so the user can see what their opponent had when they discover the results. 
    - A games won tally is kept on both sides of the game so that the player can try to beat the computer over a certain number of rounds.

### As a returning user...

- I want to compete against the computer, to try and beat their score and any previously gained scores 
    - Users may want to return to the game to beat their previous scores achieved against the opponent. 
- I want to be able to access the game at any time on any device
    - The game is responsive and works well on mobile so can be enjoyed anywhere with an internet connection. 
    - Users will play when they are waiting or to remedy boredom, it can be picked up and put down quickly as it is a short game.

<h2 id="issues">Issues Found</h2>

### Solved Bugs

#### Adjusting ace value function

- Originally, I duplicated the JavaScript code from 'Kenny Yip's Coding' with regards to checking to see if there was an ace present in the hand and then reducing the score by 10 if the score was above 21. 
    - He created a simple if statement function that would return a number to represent if the ace was present in the hand. 
    - Another function which consisted of a while statement that would be triggered if the score was greater than 21 and an ace was present in the hand, then it would reduce the score by 10 and the ace count by 1.  
    - This was only reducing their sum but not acknowledging that the ace had been used up so each time the sum exceeded 21, it would repeatedly reduce by 10. 
- I contacted Code Institute Tutor Support for assistance with this issue and they advised me to create an array with the cards in the hand so that I could remove the ace physically from the hand to stop the function from repeating. [Here is an example they shared with me.](https://jsbin.com/livizaledu/edit?js,console)
- I also sourced help from Google Gemini AI for additional support with this issue. [Here is the conversation feed.](https://gemini.google.com/app/3aefc29595f663f6)
    - I created empty arrays which hold the individual cards that both players have in their hands. 
    - I checked whether there was an ace in the hands within the getValue function, where the value of the cards is checked, before their integer value is returned. This function iterated through the hand each time a card was revealed to check to see if it was an ace and if so, it would change the boolean value to true. 
    - I changed the structure of the adjustScore function, putting the relevant arguments in the parenthesis which would be required to conduct the function. (playerSum, playerCards, playerHasAce).
        - Within this function there was a nested if statement which would find any cards within the array that were an ace and remove them.
        - The boolean value would return back to false. 
        - The score would be reduced by 10. 
    - Using the console.log I could ascertain that the sum was being reduced, the boolean was changing to false and the ace card was removed from the array.  
    - However, immediately after the function had been executed, the sum would return to its prior value. 
- I contacted Code Institute Tutor Support again about this issue and they advised me to remove the sum argument from the parenthesis in the adjustScore function as it was returning to the global variable value immediately after the function had been completed, rather than updating it. 
    - After actioning this advice, the issue with the sum reducing globally was solved and the function returned all the desired values. 

- I returned to adjust these functions later on, because I realised if the contestants were dealt two aces at the start of the game, these weren't accounted for, as they were recorded as boolean values instead of numerical.  
    - I changed the variables for both opponent and player from HasAce to AceCount to record a number of aces that were present instead of true or false values.
    - This now works perfectly and all functions work together as intended.  

#### Ensuring that the animated text for results would execute more than just once

- I wanted to add animated text to my website to display the game results on the screen using keyframes. I researched this on [W3 Schools.](https://www.w3schools.com/css/css3_animations.asp)
- I created the animation that I was happy with within CSS, however, it would only trigger a single time after the first round.
- I used Google Gemini AI to help me solve this issue. [Here is the conversation feed.](https://gemini.google.com/share/4e8385ecd3c0)
    - I needed to create a class to target in the CSS stylesheet.
    - In the JavaScript code, after the results have been called, I had to set a time restriction on the animation to enable it to start and stop each time a round is over and the results are called. 

### Unfixed Bugs

- I have added alt attributes to each of the card objects, when they were created into the deck.
- However, when I have completed the lighthouse audit, it states that the image elements do not have alt attributes.

![Screenshot of accessibility score with note stating that image elements do not have alt attributes but in the consol section below, a list of the cards which have an attached alt attribute.][unfixed-bug]

<h2 id="performance">Performance Testing</h2>

### Lighthouse

- I completed an audit through Chrome Devtools using the Lighthouse program. 
- The performance value sometimes varies.
- The results were as follows when last checked:

![The performance is amber at 87. Accessibility is green at 91. Best practice is green scoring 100. SE0 is green at 90.][lighthouse]

<h2 id="validation">Code Validation</h2>

### HTML

To validate the html pages on this website, I used the official [W3C validator](https://validator.w3.org/#validate_by_input).
- When I first put the html pages through the validator, the following errors presented themselves: 
    - There was a syntax error flagged with regards to the meta tags.
    - I included an ariadescribedby tag to the body to describe what was in it for accessibility purposes but this was returned as an error. Therefore, I deleted it. 
- All errors have been rectified and the html pages now pass through the validator. 

### CSS

The CSS code was passed through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/#validate_by_input).
- When this was first tested, the following errors were returned:
    - There was an incorrect flex command where the contestant's hands are.
    - There were syntax errors on the modal background colours.
    - There were diamond bullet points within the modal, that showed a parseError. I removed these as the text in the modal was already centralised and separated by a gap, making the bullet points unnecessary and grammatically incorrect. 
- All errors have been rectified and the CSS page now passes through the validator. 

### JavaScript

I used the [JavaScript validator](https://jshint.com/) to validate my JavaScript code. I needed to configure the JSHint application so that it acknowledged new JavaScript features (ES6).
- It returned the following errors:
    - There were a few missing semi-colons.
    - There were some functions where the variables were unidentified.
    - There were some syntax errors with regards to functions being called. 
- All errors have been rectified and the JavaScript page now passes through the validator.

- The metrics are as follows: 
    - There are 25 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 39 statements in it, while the median is 2.
    - The most complex function has a cyclomatic complexity value of 7 while the median is 1.

[Back to Contents](#contents)
<hr>

<h1 id="deployment">Deployment</h1>

- The website was created in Gitpod and deployed to GitHub pages via the terminal. Once in GitHub, the steps to deploy were as follows:
    - In the GitHub repository '21_practice', navigate to the Settings tab
    - On the left-hand side, click on 'Pages' in the 'Code and automation' section
    - Ensure that 'Source' is set to 'Deploy from a branch'
    - Select 'main' in the branch section and '/(root)' in the folder section, using the drop-down menus
    - Click the save button
    - Return to the Code tab and wait for a few minutes for the build to finish before refreshing the repository page
    - Click the 'Deployments' button found on the right-hand site of the page
    - At the top of this page will be a link to the deployed website

Visit the live website [here.](https://bekmart.github.io/21-practice/)

[Back to Contents](#contents)
<hr>

<h1 id="credits">Credits</h1>

## Code

- I watched a walkthrough video created by [Kenny Yip Coding](https://www.youtube.com/watch?v=bMYCWccL-3U) which I found on YouTube. I used this as a basis of my 
JavaScript code for the majority of the structure and functionality and added other code to enhance and personalise the project. 
- I used the code relating to incrementing scores from the [Love Maths](https://github.com/BekMart/love-maths/blob/main/assets/js/script.js) walkthrough project which I completed via the Code Institute platform. 
- I used [W3 schools](https://www.w3schools.com/howto/howto_css_modals.asp) to assist me in creating a modal to host the game rules. 
- I used [Google Gemini AI](https://gemini.google.com/share/4e8385ecd3c0) to assist me in creating animation that worked to display the results in the center of the screen for a certain amount of time and how to add audio files to be triggered when results are revealed.
- [Code Institute Tutor support](https://jsbin.com/livizaledu/edit?js,console) and [Google Gemini AI](https://gemini.google.com/app/3aefc29595f663f6) were both used to help me create a function to reduce the value of the ace card by 10 if the player has a score exceeding 21 and held an ace in their hand. (See [solved bugs](#solved-bugs) for more details.)
- I sourced code from [Educative](https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object) and [Google Gemini AI](https://gemini.google.com/app/525ff70d5cb6700d) to turn the arrays into objects so that I could assign id and alt attributes to them for accessibility. 

<h2 id="media">Media</h2>

- I used Rye as the font throughout my websitem which I sourced from [Google Fonts.]('https://fonts.googleapis.com/css2?family=Rye&display=swap')
- The favicon used was sourced from [Flaticon](https://www.flaticon.com/free-icons/playing-cards) and created by Vectorslab.
- The background image that was used for this project was found on [Adobe Stock](https://stock.adobe.com/uk/search/images?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=blackjack+table&is_recent_search=1&search_type=recentsearch&search_page=1&get_facets=0&asset_id=420867335).
- The card images were sourced from [Adobe Stock](https://stock.adobe.com/uk/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&k=pack+of+playing+cards&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=pack+of+playing+cards&get_facets=0&asset_id=220211310).
- All of the audio files that are attached to this page were sourced from YouTube and recorded and edited on Audacity. The links to where the sounds were found are listed below:
    - The file for [dealing cards](https://www.youtube.com/watch?v=yapNluM17bE).
    - When the player [wins](https://www.youtube.com/watch?v=jRCJe4cXSd4).
    - When the player [loses or goes bust](https://www.youtube.com/watch?v=1ar7fqJXD50).
    - If the game ends as a [draw](https://www.youtube.com/watch?v=qYXKzyrtZK8).
- [Font Awesome](https://fontawesome.com/icons/ban?f=classic&s=solid) was here I sources the ban icon from for the 404 error page. 

[Back to Contents](#contents)
<hr>

[responsive]: assets/images/screenshots/responsive.png
[structure]: assets/images/screenshots/21-screenshot.png
[opponents-side]: assets/images/screenshots/opponent-side.png
[player-side]: assets/images/screenshots/player-side.png
[hit-stay]: assets/images/screenshots/hit-stay.png
[deal]: assets/images/screenshots/deal.png
[bust]: assets/images/screenshots/bust.png
[setting-buttons]: assets/images/screenshots/settings-buttons.png
[game-rules]: assets/images/screenshots/game-rules.png
[404]: assets/images/screenshots/404.png
[unfixed-bug]: assets/images/screenshots/unfixed-bug-screenshot.png
[lighthouse]: assets/images/screenshots/lighthouse.png