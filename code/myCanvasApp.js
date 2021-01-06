/**
 * This is a template for developing your own web app using the HTML5 canvas.
 * 
 * Don't forget to change this comment header, along with the comment headers for any
 * functions you decide to use. And add your name below.
 * 
 * @author your name here
 * @author Sam Scott, Sheridan College, 2013
 */

// *** YOUR GLOBAL VARIABLES AND FUNCTIONS HERE
// audio
var cannonFire = new Audio();					// Ship blaster firing noise.
cannonFire.src = "sounds/ship/laser.wav";
var cannonCharge = new Audio();					// Ship blaster charging noise.
cannonCharge.src = "sounds/ship/cannon2.mp3";
var shotSound = new Audio();					// Ship blaster explosion noise.
shotSound.src = "sounds/explosion_01.wav";
var dmgSound = new Audio();						// Sound to indicate player taking damage.
dmgSound.src = "sounds/bump.wav";
var moveSound = new Audio();					// Sound for when the ship moves.
moveSound.src = "sounds/ship/Movement-01.wav";
var hoverSound = new Audio();					// Passive rumbling sound for ship's engine.
hoverSound.src = "sounds/ship/spaceship_rumble.wav";
hoverSound.loop = true;
var atmosphere = new Audio();					// Passive atmospheric 'music'/ambience.
atmosphere.src = "sounds/Atmosphere-01.wav";
atmosphere.loop = true;
var alertSound = new Audio();					// Used to represent two different warning sirens: one for losing one health bar, another for losing two.
alertSound.src = "sounds/ship/alertLoop1.mp3";
var speedSound = new Audio();					// Noise when speed power-up is activated.
speedSound.src = "sounds/powerups/speed.wav";
var shieldSound = new Audio();					// Noise when shield power-up is activated.
shieldSound.src = "sounds/powerups/shield.wav";
var starSound = new Audio();					// Noise when score multiplier power-up is activated.
starSound.src = "sounds/powerups/scoremult.wav";

// images
var backgroundImage = new Image();		// Static image in background.
backgroundImage.src = "images/background/space_back1.png";
var backgroundEffect = new Image();		// Moving image copied and shifted repeatedly to emulate intergalactic travel.
backgroundEffect.src = "images/background/space_back2.png";

var menuImg = new Image();	// Background for start-screen menu and others.
menuImg.src = "images/HUD/glassPanel.png";

var muteButton = new Image();
var infoIcon = new Image();
infoIcon.src = "images/HUD/information.png";
var menuGridImg = new Image();
menuGridImg.src = "images/HUD/menuGrid.png";
var mouseImg = new Image();
mouseImg.src = "images/HUD/mouse.png";
var objectiveImg = new Image();
objectiveImg.src = "images/HUD/checkmark.png";
var startButton = new Image();
startButton.src = "images/HUD/buttonStart.png";
var muteMusicButton = new Image();

var crosshair = new Image();			// Crosshair image.
crosshair.src = "images/HUD/crosshair.png";
var cursor = new Image();				// Cursor image.
cursor.src = "images/HUD/cursor.png";
var livesSprite = new Image();			// Image to represent number of lives remaining (top-left).
livesSprite.src = "images/HUD/playerLife.png";	
var healthBar = new Image();			// Image for health bars (top-right). Shares source with menuImg, but separated for organisation's sake.
healthBar.src = "images/HUD/glassPanel.png";
var livesBackground = new Image();		// Panel background for livesSprite object (top-left).
livesBackground.src = "images/HUD/glassPanel_cornerTL.png";
var healthBarFill = new Image();		// texture used to fill healthBar object (top-right).
healthBarFill.src = "images/HUD/bar_blue_mid.png";
var scoreBackground = new Image();		// Panel background for score display (bottom-left).
scoreBackground.src = "images/HUD/glassPanel_cornerBL.png";
var powerUpBackground = new Image();	// Panel background for power-up display HUD (bottom-right).
powerUpBackground.src = "images/HUD/glassPanel_cornerBR.png"
var livesText = new Image();			// Text reading 'Lives" for livesBackground. An image for ease of scaling.
livesText.src = "images/text images/livesText.png";
var healthText = new Image();			// Text reading "Health" for healthBar. An image because it's rotated.
healthText.src = "images/text images/healthText2.png";
var damageText = new Image();			// Text reading various warning messages whenever player's curent healthbar depletes.

var playerSprite = new Image();		// Central player ship sprite.
playerSprite.src = "images/ship parts/ufoBlue.png";
var cannonNE = new Image();			// Blaster cannon facing +x/-y.
cannonNE.src = "images/ship parts/gun_ne.png";
var cannonSE = new Image();			// Blaster cannon facing -x/-y.
cannonSE.src = "images/ship parts/gun_se.png";
var cannonSW = new Image();			// Blaster cannon facing -x/+y.
cannonSW.src = "images/ship parts/gun_sw.png";
var cannonNW = new Image();			// Blaster cannon facing +x/+y.
cannonNW.src = "images/ship parts/gun_nw.png";

var explodeImg = new Image();	// Image object with many different sources; used to animate meteor and blaster shot explosions.
explodeImg.src = "images/explosion/explosion01.png";

var smokeImg = new Image();		// Image object with many different sources; used to animate smoke particles when ship is damaged.

var meteor01 = new Image();											// For the following images, the RNG-focused variable
coinFlip = Math.random();											// 'coinFlip' is set to a random value between 0 and 1.
if (coinFlip > 0.5)													// Through this, each object either selects a grey
	meteor01.src = "images/meteors/meteorGrey_big1.png";			// meteor texture, or a brown one, with an even chance
else 																// at both. Used for the sake of unpredictability.
	meteor01.src = "images/meteors/meteorBrown_big1.png";
var meteor02 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor02.src = "images/meteors/meteorGrey_big2.png";
else
	meteor02.src = "images/meteors/meteorBrown_big2.png";
var meteor03 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor03.src = "images/meteors/meteorGrey_big3.png";
else 
	meteor03.src = "images/meteors/meteorBrown_big3.png";
var meteor04 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor04.src = "images/meteors/meteorGrey_big4.png";
else 
	meteor04.src = "images/meteors/meteorBrown_big4.png";
var meteor05 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor05.src = "images/meteors/meteorGrey_med1.png";
else 
	meteor05.src = "images/meteors/meteorBrown_med1.png";
var meteor06 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor06.src = "images/meteors/meteorGrey_med2.png";
else 
	meteor06.src = "images/meteors/meteorBrown_med2.png";
var meteor07 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor07.src = "images/meteors/meteorGrey_small1.png";
else 
	meteor07.src = "images/meteors/meteorBrown_small1.png";
var meteor08 = new Image();
coinFlip = Math.random();
if (coinFlip > 0.5)
	meteor08.src = "images/meteors/meteorGrey_small2.png";
else 
	meteor08.src = "images/meteors/meteorBrown_small2.png";			// Refer above.

var powerUpImg = new Image();		// Image object with many different sources, used to select which power-up spawns.
powerUpImg.src = "images/powerups/star_silver.png";
var powerUpIcon1 = new Image();		// Icon on top of powerUpBackground used to indicate whether a speed power-up is in use.
powerUpIcon1.src = "images/powerups/powerupBlue.png"
var powerUpIcon2 = new Image();		// Icon on top of powerUpBackground used to indicate whether a shield power-up is in use.
powerUpIcon2.src = "images/powerups/powerupBlue.png"
var powerUpIcon3 = new Image();		// Icon on top of powerUpBackground used to indicate whether a score multiplier power-up is in use.
powerUpIcon3.src = "images/powerups/powerupBlue.png"

// GENERAL SETTINGS VARIABLES
var gamePlay = false;	// Determines whether game is being played.
var gameStart = true;	// Determines whether game is is not yet started.
var gameEnd = false;	// Determines whether game has ended.
var tickCount = 0;				// Counts each 10 millisecond tick. Used extensively for timing.
var score = 0;					// Player score.
var scoreCount = 0;				// Determines how many points to reward for an accurate shot, depending on meteor size.
var scoreCounter = 0;			// Used to increase health visibly, instead of just changing the number.
var addScoreFlag = false;		// Determines whether to add points or not.
var mouseClick = false;			// Determines whether the mouse is being clicked or not.
var startCount = 0;				// Used to sequence game initialization.
var coinFlip;					// Used for various RNG-involved functions.

// VISUAL/AURAL-AFFILIATED
var canvasX = 2048;			// Controls canvas' horizontal resolution.
var canvasY = 1440;			// Controls canvas' vertical resolution.
var backgroundScroll = 0;	// Controls movement of background stars.
var lineScroll = -50;		// Controls white-line boundaries' animation.
var scoreShift = 0;			// Adjusts x-position of printed score, for aesthetic appeal.
var audioMute = false;		// Determines whether all audio is muted.
var musicMute = false;		// Determines whether ambient music is muted.

// PLAYER MOVEMENT-AFFILIATED
var x = canvasX/2;								// x represents player position along the x-axis. Initial value is middle of screen.
var y = canvasY/2;								// y represents player position along the y-axis. Intiial value is middle of screen.
var mouseX;										// Used to track mouse x-movements for crosshair/cursor.
var mouseY;										// Used to track mouse y-movements for crosshair/cursor.
var xInc = 0;									// Used to determine player momentum along x-axis.
var yInc = 0;									// Used to determine player momentum along y-axis.
var moveUp = false, moveDown = false;			// Determine player vertical direction.
var moveLeft = false, moveRight = false;		// Determine player horizontal direction.
var cannonX = x, cannonY = y-60;				// Determine position of blaster cannon.
var cannonXInc = 0, cannonYInc = -25;			// Used to move blaster cannon to aim towards direction of movement.
var cannonCount = 0;							// Used to track blaster cannon charging; must be fully charged before firing.
var flySpeed = 0.4;								// Base fly-speed; rate at which xInc and yInc increase. Is increased with speed power-ups.

// HEALTH-AFFILIATED
var lives = 3;					// Determines how many health bars (of 100 hit points) remain.
var health = [100, 100, 100];	// Health bars, full at 100, one per each of the lives.
var takeDmg = 0;				// Index of health array; if takeDmg = 0, health[takeDmg] is used to select the first healt bar.
var alertFlip = 0;				// When one health bar is gone, an alarm turns on. When two are gone, a more urgent one plays in its place.
var regenRate = 100;			// How many ticks before the player regenerates health. 100 is 1 second; changed by shield power-up.
var dmgProp = 1;				// Damage to player proportionate to meteor size.
var dmgFlag = false;			// Determines whether the player is taking damage or not.
var dmgCheckFlag = false;		// Determines whether the player is already taking damage.
var dmgCounter = 0;				// Times player taking damage.
				
// ANIMATION/HUD-AFFILIATED
var smokeFlag1 = false, smokeFlag2 = false;		// Flags to determine whether smoke should trail from the ship when it loses one or two health bars, respectively.
var trailX = 0, trailY = 0;						// Used to control position of smoke trail.
var smokeCounter = 0;							// Used to time smoke trail animation.
var explodeX = x, explodeY = y;					// Co-ordinates of a explosion, for meteors destroyed or inaccurate blaster shots.
var explodeFlag = false;						// Determines whether an explosion should occur at point (explodeX, explodeY).
var explodeCount = 0;							// Used to time explosion animation.
var explodeSize = 200;							// Determines size of explosion.
var damageTextFlag = false;						// Determines whether warning messages should appear to indicate severe ship damage.
var damageTextCounter = 0;						// Times ship warning messages.
				
// powerup variables
var powerUpX = -700;			// Controls position of power-up on the screen along the x-axis.
var powerUpY = -700;			// Controls position of power-up on the screen along the y-axis.
var powerUpSpeedX = 1;			// Controls power-up speed along x-axis.
var powerUpSpeedY = 1;			// Controls power-up speed along y-axis.
var powerUpReset = 0;			// Resets position of power-up to any base meteor position.
var powerUpFlag = false;		// Determines whether a power-up is going to spawn.
var powerUpEnabled = false;		// Determines whether a power-up is in use. Effects are overwritten, and thus do no t stack.
var dmgResist = 0;				// Determines resistance to meteor damage; changed by shield power-up.
var scoreMult = 1;				// Determines score multiplier; changed by star/scoremult power-up.

// METEOR-AFFILIATED
var meteorX = [-700, -700, -700, -700, canvasX/8, canvasX/8*2, canvasX/8*3, canvasX/8*4];			// Base x-positions for meteors.
var meteorY = [canvasY/14, canvasY/14*2, canvasY/14*3, canvasY/14*4, -700, -700, -700, -700];		// Base y-positions for meteors.
var meteorBaseX = [-700, -700, -700, -700, canvasX/8, canvasX/8*2, canvasX/8*3, canvasX/8*4];		// Present x-positions for meteors.
var meteorBaseY = [canvasY/14, canvasY/14*2, canvasY/14*3, canvasY/14*4, -700, -700, -700, -700];	// Present y-positions for meteors.
var meteorFlag = false;																				// Determines whether asteroids/meteors are falling.
var meteorSpeedX = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];													// Meteors' base speeds along x-axis.
var meteorSpeedY = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];													// Meteors' base speeds along y-axis.
var meteorWidth = [250, 250, 250, 250, 250, 250, 250, 250, 250, 250];								// Meteors' base width.
var meteorHeight = [250, 250, 250, 250, 250, 250, 250, 250, 250, 250];								// Meteors' base height.
var meteorReset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];													// Used to reset meteors to randomised base position.


// game functions
var cannonSet = function () { 	// Determines postion of blaster cannon.
	if (moveRight) {			
		if (cannonX < x+40)
			cannonX+=20;
		cannonXInc = 10;
	} else if (moveLeft) {
		if (cannonX > x-40)
			cannonX-=20;
		cannonXInc = -10;
	}
	if (moveDown) {
		if (cannonY < y+40)
			cannonY+=20;
		cannonYInc = 10;
	} else if (moveUp) {
		if (cannonY > y-40)
			cannonY-=20;
	cannonYInc = -10;
	}
	
	if ((cannonX < x-75) || (cannonX > x+75))	// If cannon x-position gets too far, reset it.
		cannonX = x;
	if ((cannonY < y-75) || (cannonY > y+75))	// If cannon y-position gets too far, reset it.
		cannonY = y;
	
	canvas.strokeStyle = grd;		// Use custom gradient style.
	canvas.lineWidth = 10;			// Chang line width.
	if (((cannonX === x-60) || (cannonX === x+60)) && ((cannonY === y-60) || (cannonY === y+60))) // If blaster cannon is at max/minimum values.
		canvas.strokeLine(x, y, cannonX, cannonY);			// Flickering cannon charge (inside cannon).
}

var moveShip = function () {							// Function to move ship about.
	if (moveUp || moveDown || moveRight || moveLeft) {	// If the ship is moving...
		if (y-50 <= 215 || y+50 >= canvasY) {			// Check if it's outside the game's y-boundaries.
			yInc *= -1;									// If so, reverse its vertical momentum.
		} else {										// If the ship is not outside the game's y-boundaries...
			if (moveUp) {								// If moving in whatever direction, accelerate in that direction.
				moveSound.play();						
				yInc -= flySpeed;						
			}
			if (moveDown) {								// Refer above.
				moveSound.play();
				yInc += flySpeed;
			}
		}
		
		if (x-50 <= 430 || x+50 >= canvasX) {			// Check if it's outside the game's x-boundaries.
			xInc *= -1;									// If so, reverse its vertical momentum.
		} else {										// If the ship is not outside the game's x-boundaries...
			if (moveRight) {							// If moving in whatever direction, accelerate in that direction.
				moveSound.play();
				xInc += flySpeed;
			}
			if (moveLeft) {								// Refer above.
				moveSound.play();
				xInc -= flySpeed;
			}
		}
	} else if (!moveSound.readyState < 4) {				// If the sound is not already ready, load it.
		moveSound.load();
	}
}

function checkBoundaries() {		// Function to ensure ship stays within game's boundaries.
	if (x-50 <= 430) {				// If ship-x (x) is lower than x-value of left boundary...
		x = 480;					// Reset ship-x (x) to position in front of boundary.
	} else if (x+50 >= canvasX) {	// If ship-x (x) is greater than x-value of right boundary (canvasX)...
		x = canvasX-55;				// Reset ship-x (x) to position behind boundary.
	}
	if (y-50 <= 215) {				// If ship-y (y) is lower than y-value of upper boundary...
		y = 265;					// Reset ship-y (y) to position below of boundary.
	} else if (y+50 >= canvasY) {	// If ship-y (y) is greater than y-value of lower boundary (canvasY)...
		y = canvasY-55;				// Reset ship-y (y) to position above boundary.
	}
}

var shot = {						// Object used to represent blaster cannon shots.
	start: false,					// Determines whether the blaster cannon is firing or not.
	origX: cannonX + cannonXInc,	// Sets original shot x-position to wherever the shot is being charged.
	origY: cannonY + cannonYInc,	// Sets original shot y-position to wherever the shot is being charged.
	targetX: mouseX,				// Sets target x-position to mouse location.
	targetY: mouseY,				// Sets target y-position to mouse location.
	travX: 0,						// Sets interval for shot movement along x-axis.
	travY: 0,						// Sets interval for shot movement along y-axis.
	xDist: 0,						// Determines x-distance between original and target x-position.
	yDist: 0,						// Determines x-distance between original and target y-position.
	currX: canvasX*50,				// Sets current shot x-position far away.
	currY: canvasY*50,				// Sets current shot y-position far away.
	time: 30,						// Constant number of ticks each shot takes. 30 is 0.3 seconds; changed by speed power-up.
	shotCount: 0,					// Used to time/animate shots.
	targeting: function() {									// Method used to update object properties.
		this.origX = Math.round(cannonX + cannonXInc);		// Sets original shot x-position to wherever the shot is being charged.
		this.origY = Math.round(cannonY + cannonYInc);		// Sets original shot y-position to wherever the shot is being charged.
		this.targetX = Math.round(mouseX);					// Sets target x-position to mouse location.
		this.targetY = Math.round(mouseY);					// Sets target y-position to mouse location.
		this.xDist = this.targetX - this.origX;				// Finds distance between original and target x-position.
		this.yDist = this.targetY - this.origY;				// Finds distance between original and target y-position.
		this.travX = this.xDist / this.time;				// Calculates increment needed to cover x-distance in 30 (shot.time) ticks.
		this.travY = this.yDist / this.time;				// Calculates increment needed to cover y-distance in 30 (shot.time) ticks.
		this.currX = Math.round(this.origX + this.travX);	// Determines current x-position of shot based on original + increment.
		this.currY = Math.round(this.origY + this.travY);	// Determines current y-position of shot based on original + increment.
		this.shotCount = 0;									// Resets shot timer.
	},
	fireCannon: function() {										// Method used to release charged blaster cannon shot.
		if (this.start) {											// If the cannon is firing...
			if (this.shotCount < this.time) {						// And if the shot counter is less than the constant time for shots (this.time)...
				this.shotCount++;									
				this.currX += this.travX;							
				this.currY += this.travY;							
				canvas.fillArc(this.currX, this.currY, 20, 0, 360);	// Draw the shot's path as it travels.
			} else {												// If shotCount exceeds the time interval...
				this.start = false;									// Set the cannon to stop firing.
				if (!explodeFlag) {									// If there is no explosion caused by destroying a meteor already...
					explodeSize = 200;								// Set the explosion size to 200.
					explodeX = this.currX;							// Set the final x-position of the shot to explode.
					explodeY = this.currY;							// Set the final y-position of the shot to explode.
					explodeFlag = true;								// Set the flag to allow an explosion.
				}
				this.currX = canvasX*50;							// Move the shot's current x-position far away to not interfere.
				this.currY = canvasY*50;							// Move the shot's current y-position far away to not interfere.
				this.shotCount = 0;									// Reset the shot counter.
			}
		}
	}
}

function shotExplode() {				// Function to make things explode.
	if (explodeFlag) {					// If things are set to explode...
		if (explodeCount < 8) {			// And if the explosion counter is less than 8...
			if (tickCount % 5 == 0)		// And if 5 ticks have passed...
				explodeCount++;			// Change explosion texture through switch-case statement.
			shotSound.play();			// Play the explosion sound.
			switch (explodeCount) {		// Depending on value of explodeCount, give the explosion a slightly different source for animation.
				case 1:
					explodeImg.src = "images/explosion/explosion01.png";
					break;
				case 2:
					explodeImg.src = "images/explosion/explosion02.png";
					break;
				case 3:
					explodeImg.src = "images/explosion/explosion03.png";
					break;
				case 4:
					explodeImg.src = "images/explosion/explosion04.png";
					break;
				case 5:
					explodeImg.src = "images/explosion/explosion05.png";
					break;
				case 6:
					explodeImg.src = "images/explosion/explosion06.png";
					break;
				case 7:
					explodeImg.src = "images/explosion/explosion07.png";
					break;
				case 8:
					explodeImg.src = "images/explosion/explosion08.png";
					break;
			}
			canvas.drawImage(explodeImg, explodeX-(explodeSize/2), explodeY-(explodeSize/2), explodeSize, explodeSize); // Draw the explosion.
		} else {
			explodeCount = 0;				// Reset the explosion counter.
			if (shotSound.readyState >= 4)	// If the explosion sound isn't ready to go...
				shotSound.load();			// Load the sound.
			explodeFlag = false;			// Disable explosions.
		}
	}
}

function smokeTrail() {						// Function to create smoke effects, trailing the player when they lose health bars/lives.
	if (smokeCounter < 9) {					// If the smoke counter is less than 9 (number of sources)...
		if (tickCount % 2  == 0)			// And if two ticks have passed...
			smokeCounter++;					// Change the smoke texture according to the switch-case statement below.
		switch (smokeCounter) {
			case 0:
				if (smokeFlag1)			// If two lives remain, use brighter smoke.
					smokeImg.src = "images/smoke1/fart00.png";
				else if (smokeFlag2)	// If only one life remains, use red smoke.
					smokeImg.src = "images/smoke2/blackSmoke00.png";
				break;
			case 1:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart01.png";
			else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke01.png";
				break;
			case 2:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart02.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke02.png";
				break;
			case 3:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart03.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke03.png";
				break;
			case 4:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart04.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke04.png";
				break;
			case 5:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart05.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke05.png";
				break;
			case 6:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart06.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke06.png";
				break;
			case 7:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart07.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke07.png";
				break;
			case 8:
				if (smokeFlag1)
					smokeImg.src = "images/smoke1/fart08.png";
				else if (smokeFlag2)
					smokeImg.src = "images/smoke2/blackSmoke08.png";
				break;
		}
		
		if (xInc > 0) {				// If the player is moving rightwards...
			if (trailX < -70)		// Make the smoke follow them.
				trailX += 5;
			else if (trailX > -70)
				trailX -= 5;
		} else if (xInc < 0) {		// If the player is moving leftwards...
			if (trailX < 70)		// Make the smoke follow them.
				trailX += 5;
			if (trailX > 70)
				trailX -= 5;
		} else if (xInc === 0) {	// If the player is moving neither right nor left...
			if (trailX < 0)			// Idle the smoke's position in the middle.
				trailX += 5;
			if (trailX > 0)
				trailX -= 5;
		}
		
		if (yInc > 0) {				// If the player is moving downwards...
			if (trailY < -70)		// Make the smoke follow them.
				trailY += 5;
			else if (trailY > -70)
				trailY -= 5;
		} else if (yInc < 0) {		// If the player is moving upwards...
			if (trailY < 70)		// Make the smoke follow them.
				trailY += 5;
			if (trailY > 70)
				trailY -= 5;
		} else if (yInc === 0) {	// If the player is moving neither down nor up...
			if (trailY < 0)			// Idle the smoke's position in the middle.
				trailY += 5;
			if (trailY > 0)
				trailY -= 5;
		}
		canvas.drawImage(smokeImg, x-37.5+trailX, y-37.5+trailY, 105, 105);		// Draw the smoke effect.
	} else {
		smokeCounter = 0;														// Reset the smoke counter.
	}
}

function cannonLoad() {																// Function to load the cannon.
	if (mouseClick && cannonCount <= 20) {											// If the mouse is clicked and the cannon counter hasn't reached 20...
		cannonCount+=0.75;															// Increase cannon counter and radius of fillArc below.
		cannonCharge.play();														// Play cannon charging noise.
	} else if (cannonCharge.readyState >= 4) 										// If cannon charging audio isn't ready...
		cannonCharge.load();														// Load cannon charging audio.
	canvas.fillStyle = grd;															// Set fillstyle to custom gradient.
	canvas.fillArc(cannonX + cannonXInc, cannonY + cannonYInc, cannonCount, 0, 360);// Draw the shot as it loads.
	shot.fireCannon();																// Fire the cannon.
}

function drawDamageText() {																	// Function to warn user when a life/health bar is lost.
	if (damageTextCounter < 75) {															// If the counter is less than 75 (i.e. 75 ticks have not passed)...
		damageTextCounter++;																
		if (takeDmg === 0)																	// If the player has just lost their first health bar...
			damageText.src = "images/text images/damageText1.png";							// Print the first warning.
		if (takeDmg === 1)																	// If the player has just lost their second health bar...
			damageText.src = "images/text images/damageText2.png";							// Print the second warnig.
		if (takeDmg === 2)																	// If the player has just lost their third health bar...
			damageText.src = "images/text images/damageText3.png";							// Print the final warning.
			canvas.drawImage(menuImg, (canvasX/2) - 800, (canvasY/2) - 405, 1600, 510);		// Draw the background for the warning.
			canvas.drawImage(damageText, (canvasX/2) - 700, (canvasY/2) - 400, 1400, 500);	// Draw the warning itself.
	} else {																				// If the warning counter surpasses 75 ticks...
		damageTextCounter = 0;																// Reset the counter.
		damageTextFlag = false;																// Disable damage warnings.
	}
}

function alertCheck() {										// Function to control which siren blares.
	if (takeDmg > 0) {										// If the player's current life/health bar is not the first one...
		if (health[2] < 100 && alertFlip === 0)				// And if the third health bar is brought below full health and alertFlip equals 0...
			alertFlip++;									// Increase alertFlip, so it can't run again.
		if (alertFlip === 1) {								// Now that alertFlip is equal to 1...
			alertSound.src = "sounds/ship/alertLoop2.mp3";	// Change the siren sound's source to the more urgent variant.
			alertSound.load();								// Reload the audio.
			alertFlip++;									// Increase alertFlip by 1 so that t can't run again.
		}
		else if (alertSound.readyState === 4)				// If the sound is ready to go...
			alertSound.play();								// Play the siren.
	}
}

function nextMeteor() {														// Function to move meteors.
	for (var j = 0; j < meteorX.length; j++) {								// Loop through all of the meteors' properties...
		if ((meteorX[j] >= canvasX) || (meteorY[j] >= canvasY)) {			// If the current meteor is outside of the canvas...
			if (meteorReset[j] < 0 || meteorReset[j] >= meteorX.length)		
				meteorReset[j] = (Math.random() * meteorX.length) + 1;		// Select a random base position out of the ones defined above.
			meteorX[j] = meteorBaseX[meteorReset[j]];						// Reset the meteor's x-position according to the selected base position.
			meteorY[j] = meteorBaseY[meteorReset[j]];						// Reset the meteor's y-position according to the selected base position.
			meteorSpeedX[j] = 1;											// Reset the horizontal speed to 1 so that it's randomised again in the meteor's enxt run.
			meteorSpeedY[j] = 1;											// Reset the vertical speed to 1 so that it's randomised again in the meteor's enxt run.
			meteorWidth[j] = 250;											// Reset the meteor's width so it can be randomised again.
			meteorHeight[j] = 250;											// Reset the meteor's height so it can be randomised again.
		} else {											// If the meteor is still on the canvas...		
			if (meteorWidth[j] == 250) {					// And if the meteor's width is reset to 250... 
				meteorWidth[j] = (Math.random() * 150) + 75;// Set the meteor's width to a random number between 75 and 150.
				meteorHeight[j] = meteorWidth[j];			// Set the meteor's height equal to its width.
			}
			if (meteorSpeedX[j] == 1)						// And if the horizontal speed is reset to 1 (after each one is reset)...
				meteorSpeedX[j] = Math.random()*9+3;		// Select a random horizontal speed between 9 and 3.
			if (meteorSpeedY[j] == 1)						// And if the vertical speed is reset to 1 (after each one is reset)...
				meteorSpeedY[j] = Math.random()*9+3;		// Select a random vertical speed between 9 and 3.
			meteorX[j]+=meteorSpeedX[j];					// Change the meteor's position on the x-axis accoridng to its horizontal speed.
			meteorY[j]+=meteorSpeedY[j];					// Change the meteor's position on the y-axis according to tis vertical speed.
		}
		switch (j) { 		// Depending on which meteor is being run through the for-loop, draw the appropriate meteor.
			case 0:
				canvas.drawImage(meteor01, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 2:
				canvas.drawImage(meteor02, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 3:
				canvas.drawImage(meteor03, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 4:
				canvas.drawImage(meteor04, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 5:
				canvas.drawImage(meteor05, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 6:
				canvas.drawImage(meteor06, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 7:
				canvas.drawImage(meteor07, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
			case 8:
				canvas.drawImage(meteor08, meteorX[j], meteorY[j], meteorWidth[j], meteorHeight[j]);
				break;
		}
		if (!dmgCheckFlag) {	// If the player is not being damaged...
			if ( ( (x-37.5 <= (meteorX[j] + meteorWidth[j])) && (x+37.5 >= meteorX[j]) ) &&( (y-37.5 <= (meteorY[j] + meteorHeight[j])) && (y+37.5 >= meteorY[j]) ) ) {
												// And is colliding with the current meteor...
				dmgCheckFlag = true;			// Declare that the user is taking damage.
				dmgFlag = true;					// Enable damage-taking.
				dmgProp = meteorWidth[j]/25;	// Set damage taken proportionate to meteor size.
				xInc -= xInc*2;					// Reverse and double horizontal momentum. Keep moving, or you get stuck and take more damage.
				yInc -= yInc*2;					// Reverse and double vertical momentum. Keep moving, or you get stuck and take more damage.
			}
			if ( ( (shot.currX <= (meteorX[j] + meteorWidth[j])) && (shot.currX >= meteorX[j]) ) &&( (shot.currY <= (meteorY[j] + meteorHeight[j])) && (shot.currY >= meteorY[j]) ) ) {
				// Alternatively, if the user's shot collides with the current meteor...
				shot.shotCount = shot.time;		// Declare that the shot is complete for the shot.fireCannon method.
				explodeX = shot.currX;			// Set the explosion x-position equal to the shot's when it collides with the meteor.
				explodeY = shot.currY;			// Set the explosion y-position equal to the shot's when it collides with the meteor.
				shot.currX = canvasX*50;		// Move the shot's current x-position far enough away to not interfere.
				shot.currY = canvasY*50;		// Move the shot's current y-position far enough away to not interfere.
				explodeSize = meteorWidth[j]*2;	// Set explosion size proportonal to meteor size.
				explodeFlag = true;				// Enable explosions.
				meteorX[j] = canvasX+500;		// Push the destroyed meteor outside of the canvas' range, sorting it back into a random base position.
				scoreCount = meteorWidth[j]/10;	// Set the number of points earned proportional to the meteor's size.
				if (!addScoreFlag)				// If score for a destroyed meteor isn't already being added...
					addScoreFlag = true;		// Add score earned to player score.
			}
		}
	}
}

function powerUp() {													// Function to spawn power-ups.
	if (powerUpX >= canvasX || powerUpY >= canvasY) {					// If the power-up is outsid of the canvas...
		powerUpReset = Math.round(Math.random() * meteorBaseX.length);	// Assign a random index number of meteorBaseX to powerUpReset.
		powerUpX = meteorBaseX[powerUpReset];							// Change power-up's x-position to random base meteor position.
		powerUpY = meteorBaseY[powerUpReset];							// Change power-up's y-position to random base meteor position.
		powerUpSpeedX = 1;												// Reset power-up horizontal speed to 1.
		powerUpSpeedY = 1;												// Reset power-up vertical speed to 1.
		coinFlip = Math.round((Math.random() * 9));						// Assign coinflip random value from 1-9 (number of power-ups available).
		powerUpFlag = false;											// Declare power-up does not nee dot be spawned.
	} else {												// If the power-up is still on the canvas...
			if (powerUpSpeedX == 1)							// And if the power-up's horizontal speed has been reset to 1...
				powerUpSpeedX = (Math.random() * 9) + 4;	// Set the power-up's horizontal speed to a random number between 4 and 9.
			if (powerUpSpeedY == 1)							// And if the power-up's vertical speed has been reset to 1...
				powerUpSpeedY = (Math.random() * 9) + 4;	// Set the power-up's vertical speed to a random number between 4 and 9. 
			powerUpX+=powerUpSpeedX;						// Move power-up's x-position according to its horizontal speed.
			powerUpY+=powerUpSpeedY;						// Move power-up's y-position according to its vertical speed.
	}
	switch (coinFlip) {			// According to value of coinFlip, set the source of the spawned power-up's sprite.
		case 1:
			powerUpImg.src = "images/powerups/bolt_bronze.png";
			break;
		case 2:
			powerUpImg.src = "images/powerups/bolt_silver.png";
			break;
		case 3:
			powerUpImg.src = "images/powerups/bolt_gold.png";
			break;
		case 4:
			powerUpImg.src = "images/powerups/shield_bronze.png";
			break;
		case 5:
			powerUpImg.src = "images/powerups/shield_silver.png";
			break;
		case 6:
			powerUpImg.src = "images/powerups/shield_gold.png";
			break;
		case 7:
			powerUpImg.src = "images/powerups/star_bronze.png";
			break;
		case 8:
			powerUpImg.src = "images/powerups/star_silver.png";
			break;
		case 9:
			powerUpImg.src = "images/powerups/star_gold.png";
			break;
	}
	
	canvas.drawImage(powerUpImg, powerUpX, powerUpY, 100, 100);	// Draw the power-up's sprite.
	if (( ( (x-37.5 <= (powerUpX + 100)) && (x+37.5 >= powerUpX) ) &&( (y-37.5 <= (powerUpY + 100)) && (y+37.5 >= powerUpY) ) ) || ( ( (shot.currX <= (powerUpX + 100)) && (shot.currX >= powerUpX) ) &&( (shot.currY <= (powerUpY + 100)) && (shot.currY >= powerUpY) ) )) {
																// If the player or their shot collides with the power-up...
		powerUpTime = 0;										// Reset the power-up timer.
		powerUpSelect = Math.round(coinFlip);					// Use powerUpSelect to determine which power-up effect should be used.
		powerUpEnabled = true;									// Enable power-up activation.
	}
}

function usePowerUp() {
	if (powerUpTime < 750) {						// For 750 ticks (7.5 seconds), the selected effect is active.
		powerUpTime++;								
		switch (powerUpSelect) {					// According to the power-up collected, create a brief effect on the player.
			case 1:		// Cases 1-3 effect flight acceleration and blaster cannon power.
				flySpeed = 0.5;
				shot.time = 25;
				if (powerUpTime == 1) {
					speedSound.currentTime = 0;
					speedSound.play();
				}	 	// Cases 1-3 change the first power-up icon to a bolt.
				powerUpIcon1.src = "images/powerups/powerupBlue_bolt.png";
				break;
			case 2:
				flySpeed = 0.6;
				shot.time = 20;
				if (powerUpTime == 1) {
					speedSound.currentTime = 0;
					speedSound.play();
				}
				powerUpIcon1.src = "images/powerups/powerupBlue_bolt.png";
				break;
			case 3:
				flySpeed = 0.7;
				shot.time = 15;
				if (powerUpTime == 1) {
					speedSound.currentTime = 0;
					speedSound.play();
				}
				powerUpIcon1.src = "images/powerups/powerupBlue_bolt.png";
				break;
			case 4:		// Cases 4-6 effect damage resistance and the health regeneration rate.
				dmgResist *= 0.25;
				regenRate = 80;
				if (powerUpTime == 1) {
					shieldSound.currentTime = 0;
					shieldSound.play();
				}	 	// Cases 4-6 change the second power-up icon to a shield.
				powerUpIcon2.src = "images/powerups/powerupBlue_shield.png";
				break;
			case 5:
				dmgResist *= 0.50;
				regenRate = 70;
				if (powerUpTime == 1) {
					shieldSound.currentTime = 0;
					shieldSound.play();
				}
				powerUpIcon2.src = "images/powerups/powerupBlue_shield.png";
				break;
			case 6:
				dmgResist *= 0.75;
				regenRate = 60;
				if (powerUpTime == 1) {
					shieldSound.currentTime = 0;
					shieldSound.play();
				}
				powerUpIcon2.src = "images/powerups/powerupBlue_shield.png";
				break;
			case 7:		// Cases 7-9 effect score multiplication.
				scoreMult = 1.25;
				if (powerUpTime == 1) {
					starSound.currentTime = 0;
					starSound.play();
				} 		// Cases 7-9 change the third power-up icon to a star.
				powerUpIcon3.src = "images/powerups/powerupBlue_star.png";
				break;
			case 8:
				scoreMult = 1.50;
				if (powerUpTime == 1) {
					starSound.currentTime = 0;
					starSound.play();
				}
				powerUpIcon3.src = "images/powerups/powerupBlue_star.png";
				break;
			case 9:
				scoreMult = 2.00;
				if (powerUpTime == 1) {
					starSound.currentTime = 0;
					starSound.play();
				}
				powerUpIcon3.src = "images/powerups/powerupBlue_star.png";
				break;
		}
	} else {					// If the power-up has worn off...
		powerUpTime = 0;		// All effects are set to default values.
		powerUpEnabled = false;	// Power-ups are deactivated.
		flySpeed = 0.4;
		shot.time = 30;
		dmgResist = 0;
		regenRate = 100;
		scoreMult = 1;
		powerUpIcon1.src = "images/powerups/powerupBlue.png";	// The first icon is reset.
		powerUpIcon2.src = "images/powerups/powerupBlue.png";	// The second icon is reset.
		powerUpIcon3.src = "images/powerups/powerupBlue.png";	// The third icon is reset.
	}
}

function drawBackground() {										// Function for drwaing the background.
	canvas.drawImage(backgroundImage, 0, 0, canvasX, canvasY);	// Draws the static background.
	if (backgroundScroll < canvasY) 							// If backgroundScroll is less than the canvas' height...
		backgroundScroll+=40;									
	else if (backgroundScroll >= canvasY)						// Otherwise, if backgroundScroll exceeds the canvas' height...
		backgroundScroll = 0;									// Reset backgroundScroll to 0.
			// The lines below draw a picture like the background, except transparent where the static iamge is black. 
			// Four of them join to give the illusion of a continuous stream of stars in the distance.
	canvas.drawImage(backgroundEffect, backgroundScroll, backgroundScroll - canvasY, canvasX, canvasY);
	canvas.drawImage(backgroundEffect, backgroundScroll - canvasX, backgroundScroll, canvasX, canvasY);
	canvas.drawImage(backgroundEffect, backgroundScroll - canvasX, backgroundScroll - canvasY, canvasX, canvasY);
	canvas.drawImage(backgroundEffect, backgroundScroll, backgroundScroll, canvasX, canvasY);
}

function drawPlayer() {										// Function to draw the player's components.
	canvas.drawImage(cannonNE, x+8, y-47);					// Draws the upper-right blaster cannon.
	canvas.drawImage(cannonNW, x-47, y-47);					// Draws the upper-left blaster cannon.
	canvas.drawImage(cannonSE, x+8, y+8);					// Draws the lower-right blaster cannon.
	canvas.drawImage(cannonSW, x-47, y+8);					// Draws the lower-left blaster cannon.
	canvas.drawImage(playerSprite, x-37.5, y-37.5, 75, 75);	// Draws the player's ship.
}

function drawBoundaries() {							// Function to draw scrolling line boundaries.
	canvas.fillStyle = "white";						// Sets fill style to white.
	canvas.lineWidth = 10;							// Sets line widht to 10 pixels.
	for (var i = 1; i < (canvasX/50) + 1; i++) {	// Loops to draw white, 50px-long lines repeatedly.
		canvas.strokeLine(lineScroll+370+100*i, 215, lineScroll+420+100*i, 215);	// Horizontal, Upper Boundary
		canvas.strokeLine(430, lineScroll+150+100*i, 430, lineScroll+200+100*i);	// Vertical, Left Boundary
	}
	if (lineScroll < canvasX)// If lineScroll hasn't passed the canvas' width...
		lineScroll+=10;								
	if (lineScroll+2000 >= canvasX)					
		lineScroll = -50;							// Resets lineScroll's value to -50.
}

function drawHUD() {													
	canvas.drawImage(crosshair, mouseX-15, mouseY-15, 30, 30);				// Draws crosshair.
	
	canvas.drawImage(livesBackground, 15, 15, 240, 170);					// Draws glass panel background to lives (top-left).
	canvas.drawImage(livesText, 35, 45, 200, 40);							// Draws text reading "Lives" (top-left).
	
	if (lives > 0)															// If the user has at least one life...
		canvas.drawImage(livesSprite, 60*1 - 20, 110, 50, 50);				// Draw the first life sprite.
		if (lives > 1)														// If the user has more than one life...
			canvas.drawImage(livesSprite, 60*2 - 10, 110, 50, 50);			// Draw the second life sprite.
			if (lives > 2)													// If the user has more than 2 lives...
				canvas.drawImage(livesSprite, 60*3, 110, 50, 50);			// Draw the third life sprite.
	
	canvas.drawImage(healthText, canvasX-500, 15, 40, 180);					// Draws text reading "health" sideways (top-right).
	canvas.drawImage(healthBar, canvasX-450, 15, 435, 48);					// Draws first health bar (top-right).
	canvas.drawImage(healthBar, canvasX-450, 78, 435, 48);					// Draws second health bar (top-right).
	canvas.drawImage(healthBar, canvasX-450, 141, 435, 48);					// Draws third health bar (top-right).
	canvas.drawImage(healthBarFill, canvasX-435, 17, health[0]*4.03, 44);	// Draws first health bar's fill, full at 100 health for that element of the health[] array.
	canvas.drawImage(healthBarFill, canvasX-435, 80, health[1]*4.03, 44);	// Draws second health bar's fill, full at 100 health for that element of the health[] array.
	canvas.drawImage(healthBarFill, canvasX-435, 143, health[2]*4.03, 44);	// Draws third health bar's fill, full at 100 health for that element of the health[] array.
	canvas.drawImage(scoreBackground, 10, canvasY-280, 400, 270);			// Draws glass panel background for score-counting (bottom-left).
	
	canvas.font = "97px Conv_earthorbitergrad";	
	canvas.fillText("Score:", 35, canvasY-190);									
	canvas.font = "125px Conv_earthorbitergrad";
	if (score < 1000) {										// This nested if-statement adds 0's behind
			scoreShift = 90;								// the score so that it always displays 4
			canvas.fillText("0", 32, canvasY-70);			// digits, for aesthetic purposes.
		if (score < 100) {
			scoreShift = 180;
			canvas.fillText("0", 32 + (scoreShift / 2), canvasY-70);
			if (score < 10) {
				scoreShift = 270;
				canvas.fillText("0", 32 + (2 * (scoreShift / 3)), canvasY-70);
			}
		}
	} else {
		scoreShift = 0;
	}
	if (score >= 9999)			// As it is highly unlikely the palyer will exceed 9999 points, 
		score = 9999;			// the game caps there to prevent clipping on the scoreboard.
	score = Math.round(score);	// Score multipliers can provide strange numbers, which can ruin the look. This prevents that.
	canvas.fillText(score, 32	+scoreShift, canvasY-70);	// Draws score.
		// 
	canvas.font = "50px Conv_earthorbitergrad";
	canvas.fillText("Power-Ups", canvasX-355, canvasY-220);						
	canvas.drawImage(powerUpBackground, canvasX-375, canvasY-280, 360, 265);	// Draws glass panel background for power-ups (bottom-right).
	canvas.drawImage(powerUpIcon1, canvasX-350, canvasY-150, 100, 100);			// Draws first power-up icon (bottom-right).
	canvas.drawImage(powerUpIcon2, canvasX-245, canvasY-150, 100, 100);			// Draws second power-up icon (bottom-right).
	canvas.drawImage(powerUpIcon3, canvasX-140, canvasY-150, 100, 100);			// Draws third power-up icon (bottom-right).
}

function gameStartScreen() {												// Function for running starting menu.
	canvas.drawImage(cursor, mouseX-15, mouseY-15, 30, 30);					// Draw cursor.
	canvas.drawImage(menuImg, canvasX/2-900, canvasY/2-650, 1800, 1300);	// Draw menu panel.
	
	canvas.font = "255px Conv_earthorbitergrad";
	canvas.fillText("Meteor", canvasX/2-540, canvasY/2-410);				// Game -
	canvas.fillText("Masher", canvasX/2-540, canvasY/2-210);				// - Title
	
	canvas.font = "65px Conv_earthorbitergrad";
	canvas.drawImage(mouseImg, canvasX/2-525, canvasY/2-145, 200, 200);		// Image of mouse.
	canvas.fillText("Left- or right-click to", canvasX/2-350, canvasY/2-70);// Instruction 
	canvas.fillText("charge and fire blasts.", canvasX/2-350, canvasY/2+5);	// - set 1.
	canvas.drawImage(menuGridImg, canvasX/2-525, canvasY/2+55, 200, 200);	// Image of grid - WASD keys.
	canvas.fillText("Use the W-A-S-D keys to", canvasX/2-350, canvasY/2+130);	// Instruction
	canvas.fillText("move the ship around.", canvasX/2-350, canvasY/2+205);	// - set 2.
	canvas.drawImage(objectiveImg, canvasX/2-525, canvasY/2+255, 200, 200);	// Image of checkmark, or objective.
	canvas.fillText("Destroy the meteors", canvasX/2-350, canvasY/2+330);	// Instruction
	canvas.fillText("to gain points!", canvasX/2-350, canvasY/2+405);		// - set 3.
	
	canvas.drawImage(startButton, canvasX/2-150, canvasY/2+425, 300, 200);	// Start button to begin game.
	if (mouseClick && ((mouseX <= canvasX/2+50) && (mouseX >= canvasX/2-250) && (mouseX <= canvasY/2+625) && (mouseX >= canvasY/2-425))) {
							// If the user clicks the button...
		startCount = 1;		// startCount is set to 1, meaning pressing space will allow the meteors to start falling.
		gamePlay = true;	// The game will begin.
		gameStart = false;	// The game's starting menu will end.
	}
}

function muting() {															// Audio Muting Function
	if (audioMute)											// If audio overall is muted...
		muteButton.src = "images/HUD/audioOn.png";			// Have the audio muting toggle show the option to unmute,
	else 													// If audio overall is not muted...
		muteButton.src = "images/HUD/audioOff.png";			// Have the audip muting toggle show the option to mute.
	if (musicMute)											// If music is muted...
		muteMusicButton.src = "images/HUD/musicOn.png";		// Show the option to unmute it.
	else 													// If music is not muted...
		muteMusicButton.src = "images/HUD/musicOff.png";	// Show the option to mute it.
	
	canvas.drawImage(muteButton, canvasX-380, canvasY-340, 200, 200);		// Draw the audio mute/unmute button.
	canvas.drawImage(muteMusicButton, canvasX-530, canvasY-340, 200, 200);	// Draw the music mute/unmute button.
	
	if (mouseClick && (mouseX <= canvasX-330) && (mouseX >= canvasX-530) && (mouseY <= canvasY-140) && (mouseY >= canvasY-340)) {
								// If the user clicks the music muting/unmuting button...
								// Toggle musicMute.
		if (musicMute)
			musicMute = false;
		else 
			musicMute = true;
	} else if (mouseClick && (mouseX <= canvasX-180) && (mouseX >= canvasX-380) && (mouseY <= canvasY-140) && (mouseY >= canvasY-340)) {
								// If the user clicks the audio muting/unmuting button...
								// Toggle audioMute.
		if (audioMute)
			audioMute = false;
		else 
			audioMute = true;
	}
	
	if (musicMute) {					// If music is muted, set the atmosphere's volume to 0.
		atmosphere.volume = 0.0;
	} else {							// If music is not muted, set the music's volume to a normal level.
		atmosphere.volume = 0.4;
	}
	if (audioMute) {					// If audio is muted, set all volumes to 0.
		cannonFire.volume = 0.0;
		cannonCharge.volume = 0.0;
		shotSound.volume = 0.0;
		dmgSound.volume = 0.0;
		moveSound.volume = 0.0;
		hoverSound.volume = 0.0;
		alertSound.volume = 0.0;
	} else {							// If audio is not muted, set all volumes to regular levels.
		cannonFire.volume = 0.5;
		cannonCharge.volume = 0.5;
		shotSound.volume = 1.0;
		dmgSound.volume = 1.0;
		moveSound.volume = 1.0;
		hoverSound.volume = 0.5;
		alertSound.volume = 0.2;
	}
}

function gameOverScreen() {													// Function for viewing the game over screen.
	canvas.drawImage(cursor, mouseX-15, mouseY-15, 30, 30);					// Draws the cursor.
	canvas.drawImage(menuImg, canvasX/2-900, canvasY/2-650, 1800, 1300);	// Draws the menu background.
	canvas.font = "270px Conv_earthorbitergrad";
	canvas.fillText("GAME OVER", canvasX-1840, canvasY-1100);
	canvas.font = "175px Conv_earthorbitergrad";
	canvas.fillText("Your Score:", canvasX-1650, canvasY-800);
	
	if (score < 1000) {											// Like before, this nested if-statement just
		scoreShift = 120;										// adjusts the score to always display in four
		canvas.fillText("0", canvasX-1300, canvasY-500);		// digits, with 0's leading if it is less than that.
		if (score < 100) {
			scoreShift = 240;
			canvas.fillText("0", canvasX-1300 + (scoreShift / 2), canvasY-500);
			if (score < 10) {
				scoreShift = 360;
				canvas.fillText("0", canvasX-1300 + (2 * (scoreShift / 3)), canvasY-500);
			}
		}
	} else
		scoreShift = 0;
	canvas.fillText(score, canvasX-1300 + scoreShift, canvasY-500);			// Draws the player's final score.
}

function dmgTake() {										// Function to calculate damage taken.
	if (dmgCounter < dmgProp) {								// If the damage counter hasn't surpassed the damage proportion...
		dmgSound.play();									// Play the 'damage taken' sound.
		health[takeDmg] = health[takeDmg] - 1 + dmgResist;	// Subtract proportionate damage and add damage resistance,
		dmgCounter++;										// which is usually 0 without a shield power-up.
	} else {						// If the damage counter passes the proportionate damage...
		dmgCounter = 0;				// Reset the damage counter.
		dmgCheckFlag = false;		// Indicate the user is no longer taking damage.
		dmgFlag = false;			// Disable damage-taking.
		if (dmgSound.currentTime > 0.4)
		dmgSound.currentTime = 0;	// Reset the 'damage taken' sound.
	}
}

function calcHealth() {				// Function to calculate health.
	if (health[takeDmg] < 0) {					// If the current health bar runs out...
		health[takeDmg+1] += health[takeDmg];	// transfer negative health to next health bar.
		health[takeDmg] = 0;					// set negative health bar to 0.
	}
	
	if (health[takeDmg] < 100 && tickCount % regenRate == 0)	// If the current health bar has less than perfect health...
		health[takeDmg]++;										// Regenerate health every (regenRate) ticks - 100 by default.
	
	if (health[takeDmg] <= 0)					// If current health bar drops to or below 0...
		damageTextFlag = true;					// Enable damage warnings...
	if (damageTextFlag)							// If damage warnings are enabled...
		drawDamageText();						// Produce a damage warning.
	if (health[0] <= 0 && !damageTextFlag) {// If the first health bar drops to or below 0 and the player is not being damaged...
		takeDmg = 1;						// Switch to the second health bar.
		lives = 2;							// Lower the lives count to 2.
		smokeFlag1 = true;					// Enable the first smoke trail effect.
		if (health[1] <= 0 && !damageTextFlag) {	// If the second health bar drops to or below 0 and the player is not being damaged...
			takeDmg = 2;							// Switch to the third health bar.
			lives = 1;								// Lower the lives count to 1.
			smokeFlag1 = false;						// Disable the first smoke trail effect.
			smokeFlag2 = true;						// Enable the second smoke trail effect.
			if (health[2] <= 0 && !damageTextFlag) {	// If the third health bar drops to or below 0 and the palyer is not being harmed...
				lives = 0;								// Set the number of lives remaining to 0.
				gamePlay = false;						// End the game.
				gameEnd = true;							// Initialize the game over screen.
			}
		}
	}
}

function addScore() {					// Function to add score earned to total score.
	if (scoreCounter < scoreCount) {	// If score counter doesn't surpass score to be earned...
		score+=scoreMult;				// Increase score by scoreMult, usually 1 if the scoreMult power-up isn't activated.
		scoreCounter++;					
	} else {							// If the score counter surpasses the score earned... 
		scoreCounter = 0;				// Reset the score counter.
		addScoreFlag = false;			// Disable score adding.
	}
}

// *******************************************

/*
 * This method executes once at the beginning of your web app, after the
 * page has loaded.
 */
function init() {
	// CUSTOMIZE YOUR APP
	setTitle("Meteor Masher"); // set title
	setByLine("by M.T., Stephen Lewis Secondary, 2016"); // set name
	
	setCanvasSize(canvasX,canvasY); // canvas height and width in pixels
	
	setButton1(""); // ("" if not using)
	setButton2(""); // ("" if not using)
	
	setTimer(10); 			// set interval (in ms) for clock ticks. 0 = no clock.
	// END OF CUSTOMIZATIONS
	//*** Your Code Here
}

//*****************************
//KEYBOARD INPUT SECTION
//*****************************

/*
 * Called when a key is pressed. Works for all keys including shift, arrows, etc.
 * Note that the code is a KEY code, not necessarily an ASCII or UNICODE code. 
 * Therefore the char parameter might not be completely accurate.
 * 
 * @param (number) code The key code of the key pressed 
 * @param (string) char A single character string for the key pressed
 */
function keyDown(code, char) {
	//debugOut("key press, code="+code+" char="+char);
	if (code == 32) {			// If the user presses spacebar...
		if (startCount == 1) {		// And startCount is set to 1 (as in the game has started but meteors aren't hurdling)...
			gameStart = false;			// End the game's starting menu.
			gamePlay = true;			// Initialize the game itself.
			startCount = 2;				// Set the startCount to 2, starting the game properly.
		}
	}
	if (code == 87) {			// If the user presses the 'W' key...
		moveUp = true;
		moveDown = false;
	} else if (code == 83) {	// If the user presses the 'S' key...
		moveUp = false;
		moveDown = true;
	}
	if (code == 68) {			// If the user presses the 'D' key...
		moveRight = true;
		moveLeft = false;
	} else if (code == 65) {	// If the user presses the 'A' key...
		moveRight = false;
		moveLeft = true;
	}
}

function keyPress(code, char) {}

/*
 * Called when a key is released. Works for all keys including shift, arrows, etc.
 * See the notes on keyUp() for more info
 * 
 * @param (number) code The key code of the key released 
 * @param (string) char A single character string for the key released
 */
function keyUp(code, char) {
	//debugOut("key up, code="+code+" char="+char);
	if (code == 87) {		// If the user releases the 'W' key...
		moveUp = false;
		yInc = 0;
	}
	if (code == 83) {		// If the user releases the 'S' key...
		moveDown = false;
		yInc = 0;
	}
	if (code == 68) {		// If the user releases the 'D' key...
		moveRight = false;
		xInc = 0;
	}
	if (code == 65) {		// If the user releases the 'A' key...
		moveLeft = false;
		xInc = 0;
	}
}


//*****************************
//MOUSE INPUT SECTION
//*****************************

/*
 * Called when the mouse is clicked on the canvas.
 * 
 * @param (number) x The x location on the canvas
 * @param (number) y The y location on the canvas
 * @param (number) button The mouse button clicked (usually 0)
 */
function mouseDown(x, y, button) {
	if (button == 0 || button == 2) {	// If the user clicks the right or left mouse button...
		mouseClick = true;
	}
	//*** Your Code Here
}

/*
 * Called when the mouse button is released on the canvas.
 * 
 * @param (number) x The x location on the canvas
 * @param (number) y The y location on the canvas
 * @param (number) button The mouse button clicked (usually 0)
 */
function mouseUp(x, y, button) {
	//debugOut("mouse up, x="+x+" y="+y+" button="+button);
	if (button == 0 || button == 2) {	// If the user releases the left or right mouse button...
		mouseClick = false;
		if (cannonCount > 18) {		// And if cannonCount is greater than 18...
			shot.targeting();	// The cannon is ready, and takes a target.
			shot.start = true;	// Cannon firing is enabled.
			cannonFire.load();	// The cannon loading sound is loaded.
			cannonFire.play();	// The cannon loading sound is played.
		}
		cannonCount = 3;
	}
	//*** Your Code Here
}

/*
 * Called when the mouse is moved on the canvas.
 * 
 * @param (number) x The x location on the canvas
 * @param (number) y The y location on the canvas
 */
function mouseMove(x, y) {
	//debugOut("mouse move, x="+x+" y="+y);
	mouseX = x;
	mouseY = y;
	//*** Your Code Here
}
/*
 * Called when the mouse moves into the canvas area.
 * 
 * @param (number) x The x location on the canvas
 * @param (number) y The y location on the canvas
 */
function mouseOver(x, y) {
	//debugOut("mouse over, x="+x+" y="+y);
	
	//*** Your Code Here
}
/*
 * Called when the mouse moves off the canvas.
 * 
 * @param (number) x The x location on the canvas
 * @param (number) y The y location on the canvas
 */
function mouseOut(x, y) {
	//debugOut("mouse out, x="+x+" y="+y);
	mouseX = x;
	mouseY = y;
	//*** Your Code Here
}

//*****************************
//BUTTON INPUT SECTION
//*****************************

/*
 * Called when button 1 is clicked.
 * 
 * @param (number) button The mouse button clicked (usually 0)
 */
function button1Click(button) {
	//debugOut("button 1 click, button="+button);
}
/*
 * Called when button 2 is clicked.
 * 
 * @param (number) button The mouse button clicked (usually 0)
 */
function button2Click(button) {
	//debugOut("button 2 click, button="+button);
}

//****************************
//TIMER SECTION
//****************************


/*
 * This function is called every time there is a clock tick. Set it up using
 * a call to setTimer(). If you set the timer to 0 it will stop.
 */
function clockTickEvent() {
	//debugOut("tick");
	//trackMouse(mouseX, mouseY);
	tickCount++;
	atmosphere.play();
	canvas.clearRect(0, 0, canvasX, canvasY); // Clears the canvas.
	
	drawBackground();
	// THe lines below create a gradient for the blaster cannon's projectile.
	grd=canvas.createRadialGradient(cannonX + cannonXInc, cannonY + cannonYInc, 10, cannonX + cannonXInc, cannonY + cannonYInc, 20)
	grd.addColorStop(0,"#F0FFFF");
	grd.addColorStop(1,"#00BFFF");
	
	if (gameStart) { 		// If the game is in its startinh phase...
		
		canvas.fillStyle = grd;
		
		gameStartScreen();
		
		muting();
		
	} else if (gamePlay) {	// If the game is in its playing phase...
		hoverSound.play();
		
		if (tickCount % 1000 == 0 && meteorFlag)	// Every 1000 ticks (10 seconds), a power-up spawns 
			powerUpFlag = true;						// in a random base location alongside the meteors.
		if (powerUpFlag)
			powerUp();
		if (powerUpEnabled)
			usePowerUp();
		if (startCount == 2) {
			meteorFlag = true;
			startCount = 4;
		}
		if (meteorFlag)
			nextMeteor();
		
		moveShip();
		
		x+=xInc;
		y+=yInc;
		
		cannonSet();
		
		cannonLoad();
		
		shotExplode();
		
		if (dmgFlag && dmgCheckFlag)
			dmgTake();
		
		alertCheck();
		
		smokeTrail();
		
		drawPlayer();
		
		drawHUD();
		
		checkBoundaries();
		
		if (startCount == 1) {	// If startCount equals 1 (spacebar has not yet been pressed)...
			canvas.drawImage(menuImg, (canvasX/2) - 495, (canvasY/2) - 315, 980, 230);	// Draws glass panel for notification.
			canvas.font = "125px Conv_earthorbitergrad";
			canvas.fillText("Press Space", canvasX/2-440, canvasY/2-210);
			canvas.fillText("to Begin", canvasX/2-300, canvasY/2-110);
		}
		
		if (addScoreFlag)
			addScore();
		
		calcHealth();
		
		drawBoundaries();
		
	} else if (gameEnd) {	// If the game is in its ending phase...
		gameOverScreen();
	}
}