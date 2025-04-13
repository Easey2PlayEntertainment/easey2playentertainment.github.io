function $(id) {
    return document.getElementById(id);
}

function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.requestFullscreen || element.webkitRequestFullScreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || element.mozRequestFullscreen || element.msRequestFullScreen;
    
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { 
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    fullScreen = true;
    findDimensions();
}

function findDimensions() {
    if(fullScreen) {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        return;
    }
}

function checkDeviceType() {
    if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|Opera Mini|Opera Mobi|IEMobile|Maemo Browser|Doris|NetFront|SymbianOS|uZardWeb/i)) {
        mobileVersion = true;
    }
    if(navigator.userAgent.match(/iPhone/)) {
        document.querySelector('body').innerHTML = `<p>Hello, player!</p>
        <p>Unfortunately, Fullscreen API does not have support on iPhones. If you are an Apple user, it might be best to use an iPad or a Macbook to play the game.</p>
        <p>We are sorry for the inconvenience. We hope to have an iPhone friendly version of this video game sometime in the future.</p>
        <p>Sincerely,</p>
        <p>The Sea Cross Team</p>`;
    }
}

function playSound(buffer, source) {
    if(source === "backgroundScoreSource") {
        backgroundScoreSource = context.createBufferSource();
        backgroundScoreSource.buffer = buffer;
        backgroundScoreSource.loop = true; // loop forever
        backgroundScoreSource.connect(volumeController);
        volumeController.gain.value = 0.5; // what happens if it is softer???
        backgroundScoreSource.start();
        return;
    } else if(source === "catchShellSource") {
        catchShellSource = context.createBufferSource();
        catchShellSource.buffer = buffer;
        catchShellSource.connect(context.destination);
        catchShellSource.start();
        return;
    } else if(source === 'gameOverMusicSource') {
        gameOverMusicSource = context.createBufferSource();
        gameOverMusicSource.buffer = buffer;
        gameOverMusicSource.connect(volumeController);
        volumeController.gain.value = 0.5; // make sure that's soft too
        gameOverMusicSource.start();
        return;
    } else if(source === 'powerupArriveSource') {
        powerupArriveSource = context.createBufferSource();
        powerupArriveSource.buffer = buffer;
        powerupArriveSource.loop = true;
        powerupArriveSource.connect(context.destination);
        powerupArriveSource.start();
        return;
    } else if(source === 'cloudPillarSource') {
        cloudPillarSource = context.createBufferSource();
        cloudPillarSource.buffer = buffer;
        cloudPillarSource.loop = true;
        cloudPillarSource.connect(context.destination);
        cloudPillarSource.start();
        return;
    } else if(source === 'firePillarSource') {
        firePillarSource = context.createBufferSource();
        firePillarSource.buffer = buffer;
        firePillarSource.loop = true;
        firePillarSource.connect(context.destination);
        firePillarSource.start();
        return;
    } else if(source === 'frogsJumpingSource') {
        frogsJumpingSource = context.createBufferSource();
        frogsJumpingSource.buffer = buffer;
        frogsJumpingSource.loop = true;
        frogsJumpingSource.connect(context.destination);
        frogsJumpingSource.start();
        return;
    } else if(source === 'fliesBuzzingBuffer') {
        fliesBuzzingBuffer = context.createBufferSource();
        fliesBuzzingBuffer.buffer = buffer;
        fliesBuzzingBuffer.loop = true;
        fliesBuzzingBuffer.connect(context.destination);
        fliesBuzzingBuffer.start();
        return;
    } else if(source === 'bonusShellCaughtSource') {
        bonusShellCaughtSource = context.createBufferSource();
        bonusShellCaughtSource.buffer = buffer;
        bonusShellCaughtSource.connect(context.destination);
        bonusShellCaughtSource.start();
        bonusShellCaughtSoundPlayed = true;
        return;
    } else if(source === 'bonusLevelSource') {
        bonusLevelSource = context.createBufferSource();
        bonusLevelSource.buffer = buffer;
        bonusLevelSource.loop = true;
        bonusLevelSource.connect(volumeController);
        bonusLevelSource.start();
        return;
    }
    source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(); // runs through till the end
}

async function prepPowerupImages() {
    for(var i=0;i<powerupSprites.length;i++) {
        powerupSprites[i].thumbnail.onload = function(selection) {
            powerupSprites[selection].imageCount++;
            if(powerupSprites[selection].imageCount === 2 && powerupSprites[selection].actual_images === undefined ||
                powerupSprites[selection].imageCount === 3 && powerupSprites[selection].actual_images !== undefined
            ) {
                powerupSprites[selection].imagesLoaded = true;
                frequency++;
            }
        }
        if(powerupSprites[i].actual_images === undefined) {
            powerupSprites[i].actual_image.onload = function(selection) { // cannot finish running until done
                powerupSprites[selection].imageCount++;
                if(powerupSprites[selection].imageCount === 2 && powerupSprites[selection].actual_images === undefined) {
                    powerupSprites[selection].imagesLoaded = true;
                    frequency++;
                }
            }
        } else { // it is defined, so we have to run this script instead
            powerupSprites[i].actual_images[0].onload = function(selection) {
                powerupSprites[selection].imageCount++;
                if(powerupSprites[selection].imageCount === 3) {
                    powerupSprites[selection].imagesLoaded = true;
                    frequency++;
                }
            }

            powerupSprites[i].actual_images[1].onload = function(selection) {
                powerupSprites[selection].imageCount++;
                if(powerupSprites[selection].imageCount === 3) {
                    powerupSprites[selection].imagesLoaded = true;
                    frequency++;
                }
            }
        }

        powerupSprites[i].thumbnail.onload(i);
        if(powerupSprites[i].actual_images !== undefined) {
            powerupSprites[i].actual_images[0].onload(i);
            powerupSprites[i].actual_images[1].onload(i);
        } else {
            powerupSprites[i].actual_image.onload(i);
        }
    }
}

function checkPowerupImageStatus() {
    for(var i=0;i<powerupSprites.length;i++) {
        var name = powerupSprites[i].name;
        if(!powerupSprites[i].imagesLoaded) {
            return false; // should end the function right there
        }
        powerupSprites[i].thumbnail.src = "images/" + name + "_thumbnail.png"; // images will be drawn later
        if(powerupSprites[i].actual_images !== undefined) {
            powerupSprites[i].actual_images[0].src = "images/" + name + ".png";
            powerupSprites[i].actual_images[1].src = "images/" + name + "_variant.png";
        } else { // then, there is just one single image
            powerupSprites[i].actual_image.src = "images/" + name + ".png";
        }
    }
    return true;
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop =  false;
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }

    this.sound.onload = function() {
        backgroundScoreLoaded = true;
    }
}
  

function mouseDown(e) {
    clicked = true;
    offsetY = e.offsetY;

    if(!start /*&& showPreviousHighScores*/ && mobileVersion) {
        loading = true;
        questionNumber = 0;
        testCounter = 0; // reset to prevent bugs 
        timerSetToZeroOnce = false;
        clearCharacters = false;
        previousLevel = level;
        showPreviousHighScores = false;
        previousHighScores = undefined; // make sure there is nothing else to work on
        bringLevelQuestions();
    }
}

function setToScale(BUTTON_POSITION, scaledDimension, canvasDimension) {
    return (BUTTON_POSITION * scaledDimension) / canvasDimension;
}

function touchStart(e) {
    lastKey = undefined;
    if(e.touches.length === 1) {
        if(!mobileVersion) {
            mobileVersion = true;
        }
        var information = e;
        var scaledHeight, scaledWidth;
        var difference;
        var buttonWidth;
        var pauseButtonWidth;
        var arrowWidth;

        if(!fullScreen) {
            scaledHeight = canvas.height;
        } else {
            scaledHeight = window.innerHeight; // should prevent any extra bugs
        }

        scaledWidth = setToScale(canvas.width, scaledHeight, canvas.height);

        aButtonScaledPosition = setToScale(A_BUTTON_POSITION, scaledWidth, canvas.width);
        bButtonScaledPosition = setToScale(B_BUTTON_POSITION, scaledWidth, canvas.width);
        cButtonScaledPosition = setToScale(C_BUTTON_POSITION, scaledWidth, canvas.width);
        dButtonScaledPosition = setToScale(D_BUTTON_POSITION, scaledWidth, canvas.width);
        pauseButtonScaledPosition = setToScale(pauseResumeX, scaledWidth, canvas.width);
        upArrowScaledPosition = setToScale(upArrowX, scaledWidth, canvas.width);
        downArrowScaledPosition = setToScale(downArrowX, scaledWidth, canvas.width);

        buttonWidth = fullScreen ? setToScale(100, scaledWidth, canvas.width) : 100;
        pauseButtonWidth = fullScreen ? setToScale(50, scaledWidth, canvas.width) : 50;
        arrowWidth = fullScreen ? setToScale(70, scaledWidth, canvas.width) : 50;

        scaledYLowerPosition = setToScale(520, scaledHeight, canvas.height);
        scaledYHigherPosition = setToScale(570, scaledHeight, canvas.height); // must put things to scale
        
        upArrowYLowerPosition = setToScale(upArrowY - 10, scaledHeight, canvas.height);
        upArrowYHigherPosition = setToScale(290, scaledHeight, canvas.height);
        
        downArrowYLowerPosition = setToScale(310, scaledHeight, canvas.height);
        downArrowYHigherPosition = setToScale(downArrowY, scaledHeight, canvas.height);
        
        //pauseResumeYLowerPosition, pauseResumeYHigherPosition
        pauseResumeYLowerPosition = setToScale(pauseResumeY, scaledHeight, canvas.height);
        pauseResumeYHigherPosition = setToScale(pauseResumeY + 30, scaledHeight, canvas.height);
        

        space = fullScreen ? (window.innerWidth - scaledWidth) / 2 : 0; 

        offsetX = (e.touches[0].clientX - canvas.getBoundingClientRect().left) - space; // difference makes accuracy more accurate
        offsetY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
        fingerTouch = true;
        
        console.warn(offsetX, offsetY);

        if(!start /*&& showPreviousHighScores /*&& !initialCollect*/) {
            keyDown({key: ' ', code: 'Space', mobileClick: true});
        } else if(start) {
            if(questionBrought) {
                if(offsetY >= scaledYLowerPosition && offsetY <= scaledYHigherPosition) { // converted so that any question can work, no matter what kind of question we are dealing with; the same code is used
                    if(checkTouchPosition(aButtonScaledPosition, offsetX, buttonWidth)) {
                        keyDown({key: 'a', code: 'KeyA', mobileClick: true});
                    } else if(checkTouchPosition(bButtonScaledPosition, offsetX, buttonWidth)) {
                        keyDown({key: 'b', code: 'KeyB', mobileClick: true}); // both A and B buttons work in both question types
                    } else if(checkTouchPosition(cButtonScaledPosition, offsetX, buttonWidth)) {
                        questionType === "match" || questionType === "number" ? keyDown({key: 'ArrowUp', code: 'ArrowUp', mobileClick: true}) : keyDown({key: 'c', code: 'KeyC', mobileClick: true});
                    } else if(checkTouchPosition(dButtonScaledPosition, offsetX, buttonWidth)) {
                        questionType === "match" || questionType === "number" ? keyDown({key: 'ArrowDown', code: 'ArrowDown', mobileClick: true}) : keyDown({key: 'd', code: 'KeyD', mobileClick: true});
                    }
                }
            } else if(checkTouchPosition(pauseButtonScaledPosition, offsetX, pauseButtonWidth) && offsetY >= pauseResumeYLowerPosition && offsetY <= pauseResumeYHigherPosition && !questionBrought) {// WORK HERE NEXT...PAUSE BUTTON DOES NOT WORK QUITE YET
                keyDown({key: 'p', code: 'KeyP', mobileClick: true}); // should activate pause button??????
            } else if(checkTouchPosition(upArrowScaledPosition - 25, offsetX, arrowWidth) && offsetY >= upArrowYLowerPosition && offsetY <= upArrowYHigherPosition) {
                keyDown({key: 'ArrowUp', code: 'ArrowUp', mobileClick: true}); // triggering buttons
            } else if(checkTouchPosition(downArrowScaledPosition - 25, offsetX, arrowWidth) && offsetY >= downArrowYLowerPosition && offsetY <= downArrowYHigherPosition) {
                keyDown({key: 'ArrowDown', code: 'ArrowDown', mobileClick: true});
            }
        }
    }
    return false;
}

function checkTouchPosition(BUTTON_POSITION, x, buttonWidth) {
    if(x <= BUTTON_POSITION + buttonWidth && x >= BUTTON_POSITION) {
        return true;
    }
    return false;
}

function touchMove(e) {
   console.log(e.touches[0].clientX - canvas.getBoundingClientRect().left);
}

function touchCancel(e) {
   console.log(e.touches[0].clientX - canvas.getBoundingClientRect().left);
} 

function touchEnd(e) {
    fingerTouch = isTouching = false;
    up = down = false;
    buttonHoldCount = 0; 
}

function mouseUp(e) {
    console.warn('let go');
    console.warn(e.offsetY);
}

function mouseMove(e) {
    if(offsetY !== e.offsetY) {
        mouseMoved = true;
        showMouse();
    }
    offsetY = e.offsetY; // keeps it updated the whole way through
}

async function showMouse() {
    canvas.style.cursor = 'initial';
    await sleep(4000);
    canvas.style.cursor = "none";
}

async function resetLevel() {
    var livesLowered = false;
    var egyptiansOnOtherSide = false;
    if(lowerLives && !runOnce) {
        lowerLives = false;
        runOnce = true;
        var subtractor = 645; // just giving a standard number now

        if(powerupArriveCalled) {
            powerupArriveCalled = false;
            powerupArriveInterrupted = true; 
            powerupArriveSource.stop();
            !bonusLevel ? false : bonusLevelSource.stop();
            powerupBeingUsed = false;
            powerupJustUsed = true;
            powerupsNecessary = true;            
            volumeController.gain.value = 0.5; // get it back up to the other value so that the background music can continue
        }

        bonusLevelSource === undefined ? false : bonusLevelSource.stop();

        backgroundResetCauseOfDeath = true;

        backgroundScoreSource.stop();

        bonusLevelBackgroundEstablished = false; // we have to rewrite this

        backgroundScoreEstablished = false;

        if(lives === 1) {
            lives = 0;
            livesLowered = true;
        }

        playSound(justDiedBuffer);

        await sleep(1000);

        showPowerup = false;

        if(israelites.length === 0) {
            for(var i=0;i<egyptians.length;i++) {
                egyptians[i].x -= 100;
            }
        }

        powerupX = canvas.width; // reset powerup position

        if(!livesLowered) {
            lives -= 1;
        }        

        if(lives > 0) {
            gameOver = clearCharacters = false;
        } else {
            gameOver = clearCharacters = true;
        }

        if(gameOver) {
            return; // just break the algorithm
        }

        if(bonusShellX < canvas.width) {
            bonusShellX = 800; // player will not be penalized this time; it was an accident
        }

        powerupX = 800; // should hide the powerup

        mosesX -= subtractor;
        mosesY = 290; // gotta start in the middle again
        for(var i=0;i<israelites.length;i++) {
            israelites[i].x -= subtractor;
            israelites[i].y = israelites[i].startingY;
        }

        for(var i=0;i<egyptians.length;i++) {
            egyptians[i].x -= subtractor;
            egyptians[i].y = egyptians[i].startingY;

            if(israelites.length === 0) {
                egyptians[i].x -= 35; // gotta make sure it is all the way back
            }

            if(egyptians[i].x === egyptiansCurrentPosition) {
                egyptiansOnOtherSide = true;
            }
        }

        for(var i=0;i<shells.length;i++) {
            if(shells[i].xPosition === -30) {
                shells[i].xPosition = canvas.width;
            }
            if(shells[i].xPosition < canvas.width / 2) { // conditional statements should remove loop freeze
                shells[i].xPosition += canvas.width;
            }
            if(shells[i].xPosition > canvas.width / 2) {
                shells[i].xPosition += canvas.width / 2;
            }
        }

        shellOutputTimer = 0;

        for(var i=0;i<crabs.length;i++) {
            if(crabs[i].xPosition >= 0) {
                crabs[i].xPosition += canvas.width; // that is the next bit of information
                continue;
            }
            crabs[i].xPosition = 800; // only if they are less than 0 at this point
        }

        currentPosition = canvas.width / 2; // reset to the beginning

        fish1.resetPosition();
        fish2.resetPosition();
        fish3.resetPosition();
        fish4.resetPosition();
        fish5.resetPosition();
        fish6.resetPosition();
        fish7.resetPosition();
        fish8.resetPosition();

        timer = 0; // reset timer; no time to answer questions quite yet

        lowerLives = false;
        readyShow = true;
    }
}

function dealWithCrabs() {
    if(start && !loading) {
        if(questionNumber % 4 === 0 && crabs.length !== crabOutput && crabs.length < 4 && questionNumber > 0 && !crabOutputIncrement && !powerupRun && crabs.length !== 10) {
            if(crabs.length !== 4) {
                crabs.push(new Crab());    
            }    
            crabOutputIncrement = true;
        }
    }

    if(win || crossedOver || gameOver) {
        crabs = [];
    }
}

function frameChange() {
if(!questionBrought && !paused && !lowerLives && !questionGraded && previousLevel === level) {
    bonusShellFrameId = bonusShellFrameId === 0 ? 1 : 0;
    for(var i=0;i<crabs.length;i++) {
            crabs[i].frame = crabs[i].frame === crabWalkPositions[1] ? crabWalkPositions[2] : crabWalkPositions[1];
    }
} // else, the crabs freeze in motion
}

function characterPostureChange() {
    if(!questionBrought && !paused && !lowerLives && !loading && !runOnce && !questionGraded && previousLevel === level) {
        mosesImageId++;
        if(mosesImageId === mosesImages.length) {
            mosesImageId = 0; // back to the beginning
        }

        for(var i=0;i<israelites.length;i++) {
            israelites[i].imageId++;
            if(israelites[i].imageId === israelites[i].images.length) {
                israelites[i].imageId = 0;
            }
        }

        for(var i=0;i<egyptians.length;i++) {
            egyptians[i].imageId++;
            if(egyptians[i].imageId === egyptians[i].images.length) {
                egyptians[i].imageId = 0;
            }
        }

        for(var i=0;i<powerupSprites.length;i++) {
            if(powerupSprites[i].imageId !== undefined) {
                powerupSprites[i].imageId++;
                if(powerupSprites[i].imageId > 1) {
                    powerupSprites[i].imageId = 0;
                } // else, we are good
            }
        }
    }
}

function generateNewShells() {
    if(start && !loading && currentPosition < canvas.width / 2 && !gameOver && !crossedOver && !win) {
        shellOutputTimer+=0.5;
        if(shellOutputTimer === shellOutputTimeLimit && currentPosition < canvas.width / 2 && shells.length !== shellMax) {
            shellOutputTimer = 0;
            shells.push(new Shell());
        }
    } else if(win || crossedOver || gameOver) {
        shells = []; // empty the entire array, pal!
    }
}

function trackTime() {
    buttonFlashBlue = !buttonFlashBlue;
    
    if(buttonFlashBlue) {
        playButton.style.backgroundColor = 'blue';
        playButton.style.color = 'red';
    } else {
        playButton.style.backgroundColor = 'red';
        playButton.style.color = 'blue';
    }

    if(start && !questionBrought && !paused && move && !win && !lowerLives) {
        timer += 1;
        fishDirectionTimer++;
        if(timer > timerEnd) {
            questionBrought = true;
        }
        if(flipTimeChoices.indexOf(fishDirectionTimer) !== -1) {
            fish1.randomizeDirection();
            fish2.randomizeDirection();
            fish3.randomizeDirection();
            fish4.randomizeDirection();
            fish5.randomizeDirection();
            fish6.randomizeDirection();
            fish7.randomizeDirection();
            fish8.randomizeDirection();
        }
        if(fishDirectionTimer === 6) {
            fishDirectionTimer = 0;
        }
    }
}

function makeCopy(originalArray) {
    var newArray;
    try {
        newArray = structuredClone(originalArray);
    } catch (e) {
        newArray = originalArray.map(a => {return {...a}});
    }
    return newArray;
}

function manageFullscreenFX() {
    var paragraphs = document.getElementsByTagName('p');
    if(document.fullscreenElement !== null) {
        fullScreenButton.style.display = "none";
        body.style.backgroundColor = 'black';
        for(var i=0;i<perishableItems.length;i++) {
            perishableItems[i].style.visibility = 'hidden';
        }
        for(var i=0;i<paragraphs.length;i++){
            paragraphs[i].style.visibility = 'hidden';
        }
        document.querySelector('img').style.visibility = document.querySelector('.checkboxDiv').style.visibility = 'hidden';
        playButton.innerHTML = "rotate screen";
    } else { // set everything back to default
        fullScreenButton.style.display = "initial";
        body.style.backgroundColor = 'green';
        for(var i=0;i<perishableItems.length;i++) {
            perishableItems[i].style.visibility = 'visible';
        }
        for(var i=0;i<paragraphs.length;i++){
            paragraphs[i].style.visibility = 'visible';
        }
        document.querySelector('img').style.visibility = document.querySelector('.checkboxDiv').style.visibility = 'visible';
        if(!start) {
            playButton.innerHTML = "full screen";
        } else {
            playButton.innerHTML = "Play";
        }
    }
}

function checkQuestionNumber() {
    if(questionNumber > 13 || questions[questionNumber] === undefined) {
        for(var i=0;i<questions.length;i++) {
            if(questions[i] === referenceHolderQuestion) {
                questionNumber = i;
                break; // we'er done
            }
        }
    }
    referenceHolderQuestion = "";
}

function updateAll() {
    $('bonusShellThumbnail').src = bonusShellFrames[bonusShellFrameId].src;
    if(muteMusicCheckbox.checked) {
        muteDuringQuestions = true;
    } else {
        muteDuringQuestions = false;
    }
    if(score < 0) {
        score = 0;
    }
    if(referenceHolderQuestion.length > 0 && answerCorrect && !questionBrought && question[questionNumber] !== lastQuestion && timer !== timerEnd) {
        checkQuestionNumber();
    }
    if(!allIsraeliteImagesLoaded || !allEgyptianImagesLoaded) {
        checkIfCharactersLoaded();
    }
    if(!allFishLoaded) {
        if(redFishLoaded1 && redFishLoaded2 && redFish2Loaded1 && redFish2Loaded2 &&
            yellowFishLoaded1 && yellowFishLoaded2 && orangeFishLoaded1 && orangeFishLoaded2 &&
            purpleFishLoaded1 && purpleFishLoaded2 && purpleFish2Loaded1 && purpleFish2Loaded2 &&
            greenFishLoaded1 && greenFishLoaded2 && greenFish2Loaded1 && greenFish2Loaded2) {
                allFishLoaded = true;
            }
    }
    if(gameOver) {
        questionBrought = false; 
    }
    drawAll();
    if(runOnce && testCounter < 1) {
            canvasContext.drawImage(mosesDeadImages[mosesImageId], mosesX, mosesY, 35, 35);
    }

    if(!mosesImagesLoaded) {
        checkIfMosesLoaded();
    }

    manageFullscreenFX();

    if(lowerLives) {
        resetLevel();
        lowerLives = false;
    }
    frontEgyptianX = findFront(); 

    if(!backgroundScoreLoaded && backgroundScoreBuffer !== null && startupThemeBuffer !== null && justDiedBuffer !== null && gameOverMusicBuffer !== null && catchShellBuffer !== null && answerCorrectBuffer !== null && answerIncorrectBuffer !== null && powerupArriveBuffer !== null) {
        backgroundScoreLoaded = true;
    }

    if(numberOfQuestionsBeforeRelease === 0 && caughtIsraelites.length > 0) { // only works if there are caught israelites
        if(egyptians[0].x !== -20) {
            for(var i=0;i<egyptians.length;i++) {
                egyptians[i].x -= 45;
            }
        }

        israelites.push(caughtIsraelites.pop());
        score += 20;
        numberOfQuestionsBeforeRelease = NUMBER_OF_QUESTIONS_BEFORE_RELEASE;
    }

    if(checkQuestionLoading) {
        generateAnswers();
    }

    if(powerupName === undefined && previousPowerup !== undefined || previousPowerup !== undefined & powerupName === previousPowerup) {
        powerupNumber = 0;
        if(!start) {
            powerups = ['darkness', 'cloudPillar', 'firePillar', 'frogs', 'flies'];
        } else {
            powerups = shufflePowerups(powerups);
        }
        powerupName = powerups[powerupNumber]; 
    }

    if(questionBrought) {
        volumeController.gain.value = muteDuringQuestions ? 0 : 0.2; // makes the background music softer...
    }

    if(powerupRun && powerupName !== "darkness") {
        volumeController.gain.value = 0;
    }

    if(powerupJustUsed && powerupsNecessary && questionBrought) {
        powerupJustUsed = false; // just to keep the powerups under control
    } // !powerupJustUsed operator used for management
    powerupRun && autoPilot && !powerupJustUsed && !paused || powerupFired && autoPilot && !paused ? runPowerup() : false; 
    powerupsNecessary && !questionBrought && !missedOpportunity && !powerupJustUsed && !win ? handlePowerups() : false;
    if(countdownNumber >= 600 || readyCounter === 199 && livesManipulated) {
        manageBackgroundMusic();
    }
    if(start && !paused && move && !lowerLives && previousLevel === level) {
        checkIfEnd();
        if(countdownNumber >= 800) {
            livesDisplayManipulateNumber = 1;
        }
        if(countdownNumber >= 600 && !questionBrought && !questionGraded && !readyShow) {
            if(!timerSetToZeroOnce) {
                timer = 0;
                timerEnd = 10;
                timerSetToZeroOnce = !timerSetToZeroOnce;
            }
            moveAll();
        }

        manageScoreboard();

        if(a || b || c || d || questionType === 'match' && choicePositionNumber > 3 && choicePositionCursorNumber >= 8 || questionType === 'number' && choicePositionCursorNumber >= 8) {
            checkAnswersAndScore();
        }
    } // else, we will show the main menu

    requestAnimationFrame(updateAll);
}

function manageBackgroundMusic() {
    if(gameOver || win || powerupRun) { // should work...
        // stop code in here
        console.warn('abandoning process')
        return;
    }

    if(backgroundResetCauseOfDeath) {
        if(timer === 0) {
            backgroundResetCauseOfDeath = false;
        } else {
            return; // don't run this code until later
        }
    }

    if(!powerupArriveCalled && powerupBeingUsed && !powerupArriveInterrupted && !win && !newLevelReachedPlayed && (backgroundScoreEstablished || bonusLevelBackgroundEstablished)) {
        playSound(powerupArriveBuffer, 'powerupArriveSource');
        powerupArriveCalled = true;
        volumeController.gain.value = 0;
    }

    if(powerupRun && powerupName !== 'darkness' || newLevelReachedPlayed) {
        volumeController.gain.value = 0; // make sure everything is muted
    }

    if(!readyShow && !newLevelReachedPlayed && !powerupBeingUsed) {
        if(bonusLevelAnnounced && !bonusLevelBackgroundEstablished) {
            playSound(bonusLevelBuffer, 'bonusLevelSource');
            bonusLevelBackgroundEstablished = true;
        }

        if(!bonusLevelAnnounced && !backgroundScoreEstablished) {
            playSound(backgroundScoreBuffer, 'backgroundScoreSource');
            backgroundScoreEstablished = true;
        }
    } // else, the sounds don't play
}

function manageScoreboard() {
    if(highScore < score || highScore > score && highScore > lastHighScore) {
        highScore = score;
    } else if(score <= lastHighScore) {
        highScore = lastHighScore;
    }
}

function checkIfEnd() {
    if(win || gameOver) {
        return;
    }
    if(!noMoreQuestions) {
        if(currentPosition === -seaWidth + canvas.width) {
            currentPosition = 30000;
        }
    } else if(noMoreQuestions) {
        if(!gameOver || !win) {
            currentPosition = -seaWidth + canvas.width; // sets sea in another spot
            win = true;
            return;
        }
    }
}

function checkIfResortNeeded() {
    for(var i=0;i<egyptians.length - 1;i++) {
        if(egyptians[i].x < egyptians[i+1].x) {
            return true;
        }
    }
    return false;
}

function bubbleSortEgyptians() {
    for(var i=0;i<egyptians.length;i++) {
        for(var j=0;j<egyptians.length;j++) {
            if(egyptians[j] === egyptians[egyptians.length - 1]) {
                continue;
            }
            if(egyptians[j].x > egyptians[j+1].x) {
                var aux = egyptians[j];
                egyptians[j] = egyptians[j+1];
                egyptians[j+1] = aux;
            }
        }
    }
}


function findFront() {
    var xValues = [];
    var egyptiansAltered = []; // takes data from the egyptians
    var resort = checkIfResortNeeded();
    for(var i=0;i<egyptians.length;i++) {
        xValues.push({
            xValue: +egyptians[i].x,
            name: egyptians[i].name
        });
    }

    egyptiansFrontAndBackDistance = Math.abs(egyptians[egyptians.length - 1].x - egyptians[0].x) + 35; // distances from front and back may have changed

    xValues.sort(function(a, b) {
        return a.xValue - b.xValue;
    });

    if(xValues[xValues.length - 1].name !== 'egyptian1' && !powerupRun || resort && !powerupRun) { // can only run after the powerup has been made
        bubbleSortEgyptians();

        egyptiansAltered = egyptians.toReversed(); // puts them all in order

        resort = checkIfResortNeeded();
        
        if(resort) {
            bubbleSortEgyptians();
    
            egyptiansAltered = egyptians.toReversed(); // puts them all in order
        }

        for(var i=0;i<egyptiansAltered.length;i++) { // use new array to do changes; then append them to the parent array afterwards
            var value = i + 1;
            egyptiansAltered[i].name = "egyptian" + value; 

            egyptiansAltered[i].positionSettled = i === 0 ? true : false;
        }
        allPositionsSettled = false;
        egyptians = egyptiansAltered;

        return egyptians[0].x; // we now have the front; just return the real value
    }

    return xValues[xValues.length - 1].xValue;
}


function controlPowerupDuration() {
    if(level % 5 === 0 && level !== 5) {
        powerupDuration -= 2;
    }
}

function handlePowerups() {
    autoPilot = false; // moses must be controlled now
    powerupName = powerups[powerupNumber];
    powerupsNecessary = false; // function runs once; not run until next powerup is used
    powerupBeingUsed = true;
    powerupArriveInterrupted = false; // act as if it never had happened
}

function runPowerup() { // work on this function
    if(!timerReset) {
        timer = 0;
        timerEnd = powerupName !== 'flies' && powerupDuration !== 4 ? powerupDuration : 4; // play with these numbers a bit more
        timerReset = true;
    }
    if(powerupRun && !powerupsNecessary && !powerupBeingUsed && autoPilot && frontEgyptianX > -20 && !questionBrought || powerupFired && autoPilot && frontEgyptianX > -20) {
        powerupArriveSource.stop();
        powerupArriveCalled = false;
        showNextPowerup = false; // no need to show powerup--it is already being used
        if(powerupName === "darkness" || powerupName === "cloudPillar" || powerupName === "firePillar") {
            for(var i=0;i<egyptians.length;i++) {
                if(powerupName === "darkness") {
                    egyptians[i].x -= 3;
                    if(!loopedPowerupSoundPlayed) {
                        playSound(darknessBuffer);
                        loopedPowerupSoundPlayed = true;
                    }
                    volumeController.gain.value = 0.5;
                } else if(powerupName === "cloudPillar") {
                    egyptians[i].x -= 1;
                    if(!loopedPowerupSoundPlayed) {
                        playSound(cloudPillarBuffer, 'cloudPillarSource');
                        loopedPowerupSoundPlayed = true;
                    }
                    volumeController.gain.value = 0;
                } else { // if powerupName is firePillar or flies
                    egyptians[i].x -= 0.5; // whoa, something bright; what to do 
                    if(!loopedPowerupSoundPlayed) {
                        playSound(firePillarBuffer, 'firePillarSource');
                        loopedPowerupSoundPlayed = true;
                    }
                    volumeController.gain.value = 0;
                }
            }
        } else if(powerupName === 'frogs' || powerupName === 'flies') {
            annoyingPowerups(powerupName);
        }
    } else {
        previousPowerup = powerupName;
        lastPowerupSet = powerups;
        powerupRun = false;
        powerupFired = false;
        volumeController.gain.value = 0.5; // just make sure it is there already
        powerupIncremented ? console.log('not increasing since increased by swarming algorithm') : powerupNumber++;
        powerupX = 800;
        powerupY = randomPosition(canvas.width, false);
        annoyingPowerupPositionCleaned = false; // needs cleaning again
        timerReset = false; // just clear the stage, man...
        powerupJustUsed = true;
        powerupIncremented = false; // switch from on to off
        usedPowerups.push(powerupName);

        var counter = 0;
        for(var i=0;i<crabs.length;i++) {
            crabs[i].xPosition = canvas.width + counter;
            counter += 100;
        }

        if(loopedPowerupSoundPlayed) {
            try {
                cloudPillarSource.stop();
                firePillarSource.stop();
                frogsJumpingSource.stop();
                fliesBuzzingSource.stop();
            } catch(e) {
                console.warn('did not need to stop all sounds');
            }
            loopedPowerupSoundPlayed = false;
        }

        if(powerupNumber === powerups.length) {
            var allPowerupsUsed = false;
            for(var i=0;i<powerups.length;i++) {
                if(usedPowerups.indexOf(powerups[i]) === -1) {
                    powerupNumber = powerups.indexOf(powerups[i]);
                    allPowerupsUsed = false;
                    break;
                }
                allPowerupsUsed = true;
            }
            if(allPowerupsUsed) {
                alert('shuffle 1');
                powerups = shufflePowerups(powerups);
                powerupNumber = 0;
                usedPowerups = [];
            } // else, use the unused powerup
        }
        powerupName = powerups[powerupNumber];
        annoyingPowerupPosition = [];

        if(powerups.length === usedPowerups.length && powerups[powerupNumber] === undefined || previousPowerup === powerupName) {
            powerups = shufflePowerups(powerups);
            powerupNumber = 0;
            usedPowerups = [];
        }

        if(powerupIncremented) {
            powerupIncremented = false;
        }

        if(frontEgyptianX < -20) {
            for(var i=0;i<egyptians.length;i++) {
                egyptians[i].x = Math.floor(egyptians[i].x);
            }

            var difference = frontEgyptianX + 20;

            for(i=0;i<egyptians.length;i++) {
                egyptians[i].x -= difference;
            }
        }
    }
}

function shufflePowerups(powerupArray) {
    shuffleCount++;
    powerupArray = shuffle(powerupArray);
    return powerupArray;
}

function annoyingPowerups(powerupName) {
    if(annoyingPowerupPosition.length === 0 && !paused) {
        if(powerupName === 'frogs') {
            if(!loopedPowerupSoundPlayed) {
                playSound(frogsJumpingBuffer, 'frogsJumpingSource');
                loopedPowerupSoundPlayed = true;
            }
            for(var i=0;i<israelites.length;i++) {
                var xValue = israelites[i].x;
                var yValue = israelites[i].y;
                annoyingPowerupPosition.push([xValue, +yValue]);
            }
            for(var i=0;i<annoyingPowerupPosition.length;i++) {
                annoyingPowerupPosition[i][0] = +annoyingPowerupPosition[i][0];
                annoyingPowerupPosition[i][1] = +annoyingPowerupPosition[i][1];
            }
        } else if(powerupName === 'flies') {
            if(!loopedPowerupSoundPlayed) {
                playSound(fliesBuzzingBuffer, 'fliesBuzzingSource');
                loopedPowerupSoundPlayed = true;
            }
            for(var i=0;i<israelites.length;i++) {
                var xValueDefault = israelites[i].x;
                var yValueDefault = israelites[i].y;
                var xValue1 = xValueDefault;
                var yValue1 = yValueDefault;
                
                var xValue2 = xValueDefault + 30;
                var yValue2 = yValueDefault;

                var xValue3 = xValueDefault;
                var yValue3 = yValueDefault + 30;

                var xValue4 = xValueDefault + 30;
                var yValue4 = yValueDefault + 30;

                annoyingPowerupPosition.push(`{"x1" : ${xValue1}, "x2": ${xValue2}, "x3": ${xValue3}, "x4": ${xValue4}, "y1": ${yValue1}, "y2": ${yValue2}, "y3": ${yValue3}, "y4": ${yValue4}}`);
                annoyingPowerupPosition[i] = JSON.parse(annoyingPowerupPosition[i]); // should turn information inserted into a JavaScript object
            }
        }
    }
}

function moveFrogs() { 
    if(!questionBrought && !paused) {
        if(powerupName === 'frogs' && powerupRun) {
            for(var i=0;i<annoyingPowerupPosition.length;i++) {
                if(annoyingPowerupPosition[i][0] !== undefined && i % 2 === remainder) {
                    annoyingPowerupPosition[i][0] -= 10; // continue later
                }
            }
            for(var i=0;i<annoyingPowerupPosition.length;i++) {
                if(annoyingPowerupPosition[i][0] !== undefined) {
                    for(var j=0;j<egyptians.length;j++) {
                        var horizontalDistance = Math.floor(Math.abs(annoyingPowerupPosition[i][0] - egyptians[j].x)),
                            verticalDistance   = Math.floor(Math.abs(annoyingPowerupPosition[i][1] - egyptians[j].y));

                        if(horizontalDistance <= 15 && horizontalDistance >= 5 && verticalDistance <= 15 && verticalDistance >= 5) {
                            egyptians[j].x -= 20;
                            annoyingPowerupPosition[i][0] = undefined;
                            annoyingPowerupPosition[i][1] = undefined;
                            egyptians[j].x = Math.round(egyptians[j].x); // put it to a whole number
                            break; // should break out of first loop
                        }
                    }
                }
            }
        } else if(powerupName === 'flies' && powerupRun) {
            for(var i=0;i<annoyingPowerupPosition.length;i++) { // this helps the swarming seem a bit more realistic rather than unified; chaos please!
                var moveBackward1 = Math.round(Math.random()) === 1 ? true : false;
                var moveBackward2 = Math.round(Math.random()) === 1 ? true : false;
                var moveBackward3 = Math.round(Math.random()) === 1 ? true : false;
                var moveBackward4 = Math.round(Math.random()) === 1 ? true : false;

                annoyingPowerupPosition[i].x1 += moveBackward1 ? 1 : -1;
                annoyingPowerupPosition[i].x2 += moveBackward2 ? 1 : -1;
                annoyingPowerupPosition[i].x3 += moveBackward3 ? 1 : -1;
                annoyingPowerupPosition[i].x4 += moveBackward4 ? 1 : -1; 
            }
        }
        remainder = Math.round(Math.random()); // oscillates between 1 and 0
        if(timer >= timerEnd && !powerupJustUsed && powerupRun) {
            previousPowerup = powerupName;
            powerupRun = false;
            powerupFired = false;
            powerupIncremented ? console.log('already incremented, so skipping (you will see alert again; please ignore') : powerupNumber++;
            powerupIncremented = true;
            powerupJustUsed = true; // might be a potential fix
            powerupX = 800;
            powerupY = randomPosition(canvas.width, false);
            annoyingPowerupPositionCleaned = false;
            annoyingPowerupPosition = []; // empties array again
            usedPowerups.push(powerupName);
            powerupNumber++;
            timerReset = false; // ?????
            volumeController.gain.value = 0.5;

            var counter = 0;
            for(var i=0;i<crabs.length;i++) {
                crabs[i].xPosition = canvas.width + counter;
                counter += 100;
            }

            if(loopedPowerupSoundPlayed) { // for redundancy...
                try {
                    cloudPillarSource.stop();
                    firePillarSource.stop();
                    frogsJumpingSource.stop();
                    fliesBuzzingSource.stop();
                } catch(e) {
                    console.warn('did not need to stop all sounds');
                }
                loopedPowerupSoundPlayed = false;
            }


            if(powerupNumber === powerups.length) {
                var allPowerupsUsed = false;
                for(var i=0;i<powerups.length;i++) {
                    if(usedPowerups.indexOf(powerups[i]) === -1) {
                        powerupNumber = powerups.indexOf(powerups[i]);
                        allPowerupsUsed = false;
                        break;
                    }
                    allPowerupsUsed = true;
                }
                if(allPowerupsUsed) {
                    powerups = shufflePowerups(powerups);
                    powerupNumber = 0;
                    usedPowerups = [];
                } // else, use the previous powerup that was not used
            }
            powerupName = powerups[powerupNumber];

            if(powerupName === previousPowerup) {
                powerupNumber++;
                powerupName = powerups[powerupNumber];
            }
    
            if(frontEgyptianX < -20) {
                for(var i=0;i<egyptians.length;i++) {
                    egyptians[i].x = Math.floor(egyptians[i].x);
                }
    
                var difference = frontEgyptianX + 20;
    
                for(i=0;i<egyptians.length;i++) {
                    egyptians[i].x -= difference;
                    egyptians[i].x = Math.floor(egyptians[i].x);
                }
            }
        }
    }
}

function randomPosition(number, isFish) {
    var finalNumber = Math.floor(Math.random() * number);
    if(!isFish) {
        if(finalNumber < 220 || finalNumber > 360) {
            finalNumber = randomPosition(number, isFish); // gets called recursively until an answer is given
            return finalNumber;
        }
    }
    return finalNumber;
}

function randomPositionCrab(crab) {
    var randomNumberForArray  =Math.floor(Math.random() * 10);

    if(randomNumberForArray > CRAB_POSITIONS.length) {
        randomNumberForArray = CRAB_POSITIONS.length - 1;
    }

    var finalNumber = CRAB_POSITIONS[randomNumberForArray];

    if(finalNumber === undefined) {
        finalNumber = 300; // this is the default
    }
    
    crab.lastYPosition = finalNumber;
    return finalNumber;
}

function randomPositionBonusShell() {
    var randomNumberForArray = Math.floor(Math.random() * 10);

    if(randomNumberForArray > CRAB_POSITIONS.length) {
        randomNumberForArray = CRAB_POSITIONS.length - 1;
    }

    var finalNumber = CRAB_POSITIONS[randomNumberForArray];

    if(finalNumber === undefined) {
        finalNumber = 300;
    }

    return finalNumber; 
}

function keyDown(e) {
   console.log(e.key, e.code);

   if(!readyFinished && start) {
    if(e.code === "F11") {
        requestFullScreen(canvas); // only during this phase 
    }
    return;
   }

    if(!e.mobileClick && mobileVersion) {
        mobileVersion = false;
    }
    if(e.key === "Escape") {
        exitKey = true;
        fullScreen = false;
    } else if(questionType === 'match' && questionBrought || questionType === "number" && questionBrought) {
        if(e.code === "ArrowUp") {
            if(questionType === 'match') {
                while(true) {
                    choicePositionCursorNumber--;
                    if(choicePositionCursorNumber < 4) {
                        choicePositionCursorNumber = choicePositions.length - 1;
                    }
                    if(choicePositions[choicePositionCursorNumber][3] ) {
                        if(choicePositionCursorNumber <= 4) {
                            choicePositionCursorNumber = choicePositions.length - 1;
                            if(choicePositions[choicePositionCursorNumber][3] ) {
                                continue;
                            } else {
                                break;
                            }
                        }
                        continue;
                    }
                    if(choicePositionCursorNumber < 4) {
                        choicePositionCursorNumber = choicePositions.length - 1;
                        continue;
                    }
                    break;
                }
            } else if(questionType === 'number') {
                choicePositionCursorNumber--;
                if(choicePositionCursorNumber < 0) {
                    choicePositionCursorNumber = choicePositions.length - 1;
                }
                while(true) {
                    if(choicePositions[choicePositionCursorNumber][2] ) {
                        choicePositionCursorNumber--;
                        if(choicePositionCursorNumber < 0) {
                            choicePositionCursorNumber = choicePositions.length - 1;
                        }
                        continue;
                    }
                    break;
                }
            }
        } else if(e.code === "ArrowDown") { // update this next
            if(questionType === 'match') {
                while(true) {
                    choicePositionCursorNumber++;

                    if(choicePositionCursorNumber === 8) {
                        choicePositionCursorNumber = 4; // put back at top
                    }

                    while(true) {
                        if(choicePositions[choicePositionCursorNumber][3] ) {
                            choicePositionCursorNumber++;
                            if(choicePositionCursorNumber === 8) {
                                choicePositionCursorNumber = 4;
                            }
                            continue;
                        }
                        break;
                    }
                    break;
                }
            } else if(questionType === 'number') {
                choicePositionCursorNumber++;
                if(choicePositionCursorNumber === choicePositions.length) {
                    choicePositionCursorNumber = 0;
                }
                while(true) {
                    if(choicePositions[choicePositionCursorNumber][2] ) {
                        choicePositionCursorNumber++;
                        if(choicePositionCursorNumber === choicePositions.length) {
                            choicePositionCursorNumber = 0;
                        }
                        continue;
                    }
                    break;
                }
            }
        } else if(e.key === "s" || e.key === "b" || e.key === "x") {
            if(questionType === "match") {
                selectedPositions.push(choicePositions[choicePositionNumber]);
                selectedPositions.push(choicePositions[choicePositionCursorNumber]);

                choicePositions[choicePositionNumber][3] = choicePositions[choicePositionCursorNumber][3] = true;

                choicePositionNumber += 1;
                choicePositionCursorNumber = 4;

                var counter = 0;
                while(true) {
                    if(choicePositions[choicePositionCursorNumber][3] ) {
                        choicePositionCursorNumber++;
                        startingCursorNumber = choicePositionCursorNumber;
                        counter++;

                        if(counter === 4) {
                            checkAnswersAndScore();
                            break;
                        }
                        continue;
                    }
                    positionNumbers.push(startingCursorNumber);
                    break;
                }
                return;
            } else if(questionType === "number") {
                selectedPositions.push(choicePositions[choicePositionCursorNumber]);

                selectedPositions[optionNumber - 1][4] = optionNumber;
                optionNumber++;

                choicePositions[choicePositionCursorNumber][2] = true;

                choicePositionCursorNumber = 0;

                var counter = 0;
                while(true) {
                    if(choicePositions[choicePositionCursorNumber][2] ) {
                        choicePositionCursorNumber++;
                        counter++;

                        if(counter === choicePositions.length) {
                            checkAnswersAndScore();
                            break;
                        }
                        continue;
                    }
                    break;
                }
            } 
        } else if(e.key === "a" || e.key === "z") {
            undoMatchChoice();
            while(true) {
                if(questionType === 'match' && (choicePositionCursorNumber >= 8 || choicePositions[choicePositionCursorNumber][3])) {
                    choicePositionCursorNumber--;
                } else {
                    break;
                }
            }
        }
    } else if(e.code === "Space" && !start) {
        if(!fullScreen) {
            requestFullScreen(canvas);
        }
        timesPlayed++;
        loading = true;
        questionNumber = 0;
        testCounter = 0; // reset to prevent bugs 
        timerSetToZeroOnce = false;
        clearCharacters = false;
        previousLevel = level;
        previousHighScores = undefined; // make sure there is nothing else to work on
        gameOverScriptRun = false; // make sure that it is false; should prevent bugs from happening
        bringLevelQuestions();
     } else if(e.code === "Space" && start) {
         //testMove();
    } else if(questionBrought && questionType === "multiple" || questionBrought && questionType === "TF") {
        if (e.key === "a" || e.key === "z") {
            a = true;
        } else if (e.key === "b" || e.key === "x") {
            b = true;
        } else if (e.key === "c") {
            c = true;
        } else if (e.key === "d" || e.key === "v") {
            d = true;
        }
    } else if(e.key === "0" || e.key === "F11") { // if F11 is pressed, go fullscreen on the canvas 
        requestFullScreen(canvas);
    } else if(e.key === "p" || e.key === "Pause" || e.key === "MediaPlayPause") { // so that people can just use media buttons to pause
        paused = !paused;
    } else if(e.key === "ArrowUp") {
        up = true;
    } else if(e.key === "ArrowDown") {
        down = true;
    }
}

function submitNewHighScore() {
    console.log('stored in storage!');
}

function keyUp(e) {
    if(e.key === "Escape") {
        exitKey = false;
    } else if(e.key === "ArrowUp") {
        up = false;
    } else if(e.key === "ArrowDown") {
        down = false;
    } else if(e.key === "ArrowLeft") {
        left = false;
    } else if(e.key === "ArrowRight") {
        right = false;
    }
}

function textCursor() {
    if(questionBrought || questionGraded || paused) {
        cursor = true;
        return;
    }
    cursor = !cursor; // oscillates between 0 and 1
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function removeEndSpace(string) {
    var functionStarted = false;
    if(string[string.length - 1] === " ") {
        oldString = string.split(' ');
        string = "";
        for(var i=0;i<oldString.length - 1;i++) {
            if(functionStarted) {
                string += " ";
            } else {
                functionStarted = true;
            }

            string += oldString[i];
        }
    }
    return string;
}

function tryGeneratingAgain() {
    generateAnswers();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
