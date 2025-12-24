function colorRect(a,b,c,d,e) {
    canvasContext.fillStyle = e;
    canvasContext.fillRect(a,b,c,d);
}

function printText(x, y, size, color, text, lineCounter) {
    size = size / 1.35;
    canvasContext.font = size.toString() + "px JoystixMonospace"; // the new font, but a bit blurry
    canvasContext.fillStyle = color;
    text = text.split('[BREAK]');
    if(text.length === 1) {
        canvasContext.fillText(text, x, y);
    } else if(text.length > 1) {
        if(Math.round(size) === 16) {
		if(lineCounter !== undefined) {
			lineCounter += 2;
		}
            var extraY = 0;
            for(var i=0;i<text.length;i++) {
                text[i] = text[i].indexOf('[INCREASE_SQUARE_HEIGHT]') !== -1 ? text[i].replaceAll('[INCREASE_SQUARE_HEIGHT]', '') : text[i];
                canvasContext.fillText(text[i], x, y + extraY);
                extraY += 20;
            }
        }
    }
	if(lineCounter !== undefined) {
		return lineCounter;
	}
}

function drawIsraelites() {
    if(israelites.length !== 0) {
        for(var i=0;i<israelites.length;i++) {
            if(israelites[i].images[0].src !== '') {
                var image = israelites[i].images[israelites[i].imageId];
                var width = image.width;
                var height = image.height;

                // now, moving on to unit conversion

                var finalWidth = (width * FINAL_HEIGHT) / height;

                canvasContext.drawImage(image, israelites[i].x, israelites[i].y, finalWidth, FINAL_HEIGHT); // should show israelites
		try {
	                if(israeliteBlinks[i].blinkNow && (israeliteBlinks[i].image.src !== undefined || israeliteBlinks[i].image.src !== null || israeliteBlinks[i].image.src !== '')) {
	                    canvasContext.drawImage(israeliteBlinks[i].image, israelites[i].x, israelites[i].y, finalWidth, FINAL_HEIGHT); // draw the blink
	                }
		} catch(e) {
			console.log('skipped the blink to prevent bugs from continuing'); // will come up with something more advanced later
		}
                continue;
            }
                colorRect(israelites[i].x, israelites[i].y, 20, 20, 'brown');
        }
    }
}

function drawEgyptians() {
    for(var i=0;i<egyptians.length;i++) {
        if(egyptians[i].images[0].src !== '') {
            var image = egyptians[i].images[egyptians[i].imageId];
            var width = image.width;
            var height = image.height;

            var finalWidth = (width * FINAL_HEIGHT) / height;

            canvasContext.drawImage(image, egyptians[i].x, egyptians[i].y, finalWidth, FINAL_HEIGHT);
            if(egyptianBlinks[i].blinkNow) {
                canvasContext.drawImage(egyptianBlinkImage, egyptians[i].x, egyptians[i].y, finalWidth, FINAL_HEIGHT);
            }
            continue;
        }
        colorRect(egyptians[i].x, egyptians[i].y, 20, 20, 'grey'); // must be done since one powerup is total darkness
    }
}

function displayLives() {
    var yPosition = 560;
    for(var i=0;i<lives - livesDisplayManipulateNumber;i++) {
        var xPosition = i * 30 + 15;
        canvasContext.drawImage(mosesImages[0], xPosition, yPosition, 25, 25);
    }
}

function displayControls() {
    //Up Arrow
colorRect(upArrowX - 5, upArrowY + 40, 20, 100, "green");
colorRect(upArrowX, upArrowY - 10, 10, 10, "green");
colorRect(upArrowX - 5, upArrowY, 20, 10, "green");
colorRect(upArrowX - 10, upArrowY + 10, 30, 10, "green");
colorRect(upArrowX - 15, upArrowY + 20, 40, 10, "green");
colorRect(upArrowX - 20, upArrowY + 30, 50, 10, "green");

//Down Arrow
colorRect(downArrowX - 5, downArrowY - 140, 20, 100, 'green');
colorRect(downArrowX - 20, downArrowY - 40, 50, 10, 'green');
colorRect(downArrowX - 15, downArrowY - 30, 40, 10, 'green');
colorRect(downArrowX - 10, downArrowY - 20, 30, 10, 'green');
colorRect(downArrowX - 5, downArrowY - 10, 20, 10, 'green');
colorRect(downArrowX, downArrowY, 10, 10, 'green');

//Pause/Resume Button
colorRect(pauseResumeX, pauseResumeY, 50, 30, 'green');
if(paused) {
colorRect(pauseResumeX + 15, pauseResumeY + 5, 5, 20, 'white');
    colorRect(pauseResumeX + 20, pauseResumeY + 7.5, 5, 15, 'white');
    colorRect(pauseResumeX + 25, pauseResumeY + 10, 5, 10, 'white');
    colorRect(pauseResumeX + 30, pauseResumeY + 12.5, 5, 5, 'white');
} else {
  colorRect(pauseResumeX + 15, pauseResumeY + 5, 5, 20, 'white');
  colorRect(pauseResumeX + 30, pauseResumeY + 5, 5, 20, 'white');
}
}

async function drawAll() {
    var spaces = 0;
    var timesPlayedSpaces = 0;
    var highScoreAsArray = highScore.toString().split('');
    var powerup;
    var powerupThumbnail;
    var powerupImage;
    var powerupDimensions;
    var announcementMessage;
    var waitTime = 2000; // default

	var lineCounter = 0;

    for(var i=0;i<5;i++) {
        highScoreAsArray.pop();
    }
    spaces = 17.3 * highScoreAsArray.length;

    if(timesPlayed >= 1000) {
        timesPlayedSpaces = 10 * 3;
    } else if(timesPlayed >= 100) {
        timesPlayedSpaces = 10 * 2;
    } else if(timesPlayed >= 10) {
        timesPlayedSpaces = 10;
    }

    if(allFishLoaded && 
        crabImage1Loaded && crabImage2Loaded && crabImage3Loaded && pinkShellLoaded && blueShellLoaded && bonusShellFrame1Loaded && bonusShellFrame2Loaded && allIsraeliteImagesLoaded && allEgyptianImagesLoaded && allPowerupsLoaded && mosesImagesLoaded && allQuestionsLoaded && rebootsLoaded && demoEgyptianImage1Loaded && demoEgyptianImage2Loaded && demoEgyptianImage3Loaded && demoEgyptianImage4Loaded && backgroundScoreLoaded && demoIsraelite3Image1Loaded && demoIsraelite3Image2Loaded && demoIsraelite3Image3Loaded && demoIsraelite3Image4Loaded && allBlinksLoaded && wigImageLoaded && qrCodeImageLoaded && financeQrCodeImageLoaded && frequency >= numberOfCases && !confirmed || frequency >= 150) {
        loading = false;
        confirmed = true;
    } else if(!allFishLoaded || !crabImage1Loaded || !crabImage2Loaded || !crabImage3Loaded || !blueShellLoaded || !pinkShellLoaded || !bonusShellFrame1Loaded || !bonusShellFrame2Loaded || !allIsraeliteImagesLoaded || !allEgyptianImagesLoaded || !allPowerupsLoaded || !mosesImagesLoaded || !allQuestionsLoaded || !backgroundScoreLoaded || !rebootsLoaded || !demoEgyptianImage1Loaded || !demoEgyptianImage2Loaded || !demoEgyptianImage3Loaded || !demoEgyptianImage4Loaded || !demoIsraelite3Image1Loaded || !demoIsraelite3Image2Loaded ||!demoIsraelite3Image3Loaded ||!demoIsraelite3Image4Loaded || !allBlinksLoaded || !wigImageLoaded || !qrCodeImageLoaded || !financeQrCodeImageLoaded || (frequency < numberOfCases && numberOfCases > 100)) {
        colorRect(0, 0, canvas.width, canvas.height, 'black');
        printText(canvas.width / 2.35, canvas.height / 2.5, 28, 'white', "loading"); // it will be hardwired in there
        colorRect(canvas.width / 4, 400, progressFinalWidth, 30, '#141414');
        colorRect(canvas.width / 4, 400, (frequency / numberOfCases) * progressFinalWidth, 30, 'white');
        printText(20, 30, 28, 'white', 'score');
        printText(20, 60, 28, 'white', zeroedScore(score));
        printText(canvas.width - 193, 30, 28, 'white', 'high score');
        printText(canvas.width - 106 - spaces, 60, 28, 'white', zeroedScore(highScore));
        return; // in other words, return after everything is loaded and we have confirmed it, and return if we have not loaded yet
    }
    if(gameOver && testCounter < 1) {
        await sleep(1000);
    }
    if(powerupSprites[powerupSpriteId].name !== powerupName) {
        for(var i=0;i<powerupSprites.length;i++) {
            if(powerupSprites[i].name === powerupName) {
                powerupSpriteId = i;
                break;
            }
        }
    }
    powerup = powerupSprites[powerupSpriteId];
    powerupThumbnail = powerup.thumbnail;
    if(powerup.name === "darkness" || powerup.name === "firePillar" || powerup.name === "cloudPillar") { // originally, cloudPillar had dimensions of 20x20; We're changing that
        powerupDimensions = 25;
    } else if(powerup.name === "frogs" || powerup.name === "flies") {
        powerupDimensions = 30;
    }
    powerupImage = powerup.actual_images !== undefined ? powerup.actual_images[powerup.imageId] : powerup.actual_image;
    colorRect(0, 0, canvas.width, canvas.height, '#fcbe03');
    if(!crossedOver) {
        if(!clearCharacters && !gameOver) {
            for(var i=0;i<crabs.length;i++) {
                !powerupRun ? crabs[i].drawCrab() : false;
            }
    
            for(var i=0;i<shells.length;i++) {
                shells[i].drawShell();
            }

            if(bonusShellNeeded && !bonusLevel && !bonusLevelAnnounced) { // only runs if and only if the bonus level has not been reached yet
                canvasContext.drawImage(bonusShellFrames[bonusShellFrameId], bonusShellX, bonusShellY, 30, 30);
            } 

            drawEgyptians();
        }
        colorRect(currentPosition, 0, seaWidth, seaHeight, '#0000ff');
        colorRect(currentPosition, seaYPosition, seaWidth, seaHeight, '#0000ff');
    }
    if(!loading && !clearCharacters && !crossedOver && !gameOver || gameOverScriptRun && !loading && !crossedOver && !gameOver) {
        fish1.drawFish();
        fish2.drawFish();
        fish3.drawFish();
        fish4.drawFish();
        fish5.drawFish();
        fish6.drawFish();
        fish7.drawFish();
        fish8.drawFish();
    }
    printText(20, 30, 28, 'black', 'score');
    printText(20, 60, 28, 'black', zeroedScore(score));
    printText(canvas.width - 193, 30, 28, 'black', 'high score');
    printText(canvas.width - 106 - spaces, 60, 28, 'black', zeroedScore(highScore));
    displayLives();
    if(showNextPowerup && !powerupRun && (!powerupBeingUsed || powerupBeingUsed && cursor)) {
        if(powerup.name === "darkness") {
            colorRect(canvas.width - 45 - (powerupDimensions / 2) - 10, 540, powerupDimensions + 20, powerupDimensions + 20, 'black');
        } else if(powerup.name === "cloudPillar") {
            colorRect(canvas.width - 45 - (powerupDimensions / 2) - 10, 540, powerupDimensions + 20, powerupDimensions + 20, '#585858'); 
        } else if(powerup.name === "firePillar") {
            colorRect(canvas.width - 45 - (powerupDimensions / 2) - 10, 540, powerupDimensions + 20, powerupDimensions + 20, '#FF7F27');
        } else if(powerup.name === "frogs" || powerup.name === "flies") {
            colorRect(canvas.width - 45 - (powerupDimensions / 2) - 10, 540, powerupDimensions + 20, powerupDimensions + 20, '#B97A56');
        }
        canvasContext.drawImage(powerupThumbnail, canvas.width - 45 - (powerupDimensions / 2), 550, powerupDimensions, powerupDimensions); // should draw it perfectly
    }
    if(powerupBeingUsed && !powerupRun && !powerupJustUsed && showPowerup) {
        var powerup = powerupSprites[powerupSpriteId];
        var powerupThumbnail = powerup.thumbnail;
        if(powerupName === "darkness") {
            try {
                canvasContext.drawImage(powerupThumbnail, powerupX, powerupY, 25, 25); // better way to represent this, but we will start with this
            } catch (error) {
                colorRect(powerupX, powerupY, 20, 20, 'black');
            }
        } else if(powerupName === "cloudPillar") {
            try {
                canvasContext.drawImage(powerupThumbnail, powerupX, powerupY, 20, 20);
            } catch (error) {
                colorRect(powerupX, powerupY, 20, 20, 'lightgrey');
            }
        } else if(powerupName === "firePillar") {
            try {
                canvasContext.drawImage(powerupThumbnail, powerupX, powerupY, 25, 25);
            } catch (error) {
                colorRect(powerupX, powerupY, 20, 20, 'orangered');
            }
        } else if(powerupName === "frogs") {
            try {
                canvasContext.drawImage(powerupThumbnail, powerupX, powerupY, 30, 30);
            } catch (error) {
                colorRect(powerupX, powerupY, 20, 22, 'white');
            }
        } else if(powerupName === 'flies') {
            try {
                canvasContext.drawImage(powerupThumbnail, powerupX, powerupY, 30, 30);
            } catch (error) {
                colorRect(powerupX, powerupY, 20, 20, 'purple');
            }
        }
    }
    if(powerupRun) {
        var width = powerupImage.width,
            height = powerupImage.height;

        var multiplier = powerupName === "firePillar" || powerupName === "cloudPillar" ? 50 : 35; // prevents other sprites from looking warped

        var finalWidth = (width * multiplier) / height;

        if(powerupBeingUsed) {
            powerupBeingUsed = false;
        }
        if(powerupName === 'firePillar' || powerupName === "cloudPillar") {
            if(egyptians[0].name === "egyptian1") {
                canvasContext.drawImage(powerupImage, egyptians[0].x + 50, (canvas.height / 2) - 20, finalWidth, 50);
            } else {
                canvasContext.drawImage(powerupImage, egyptians[egyptians.length - 1].x, (canvas.height / 2) - 20, finalWidth, 50);
            }
        }
        if(annoyingPowerupPosition.length > 0 && powerupName === 'frogs' && !annoyingPowerupPositionCleaned || 
           annoyingPowerupPosition.length > 0 && powerupName === 'flies' && !annoyingPowerupPositionCleaned) {
            for(var i=0;i<annoyingPowerupPosition.length;i++) {
                if(powerupName === 'frogs') {
                    if(annoyingPowerupPosition[i][0] !== undefined) {
                        annoyingPowerupPosition[i] = annoyingPowerupPosition[i].indexOf(',')!==-1 ? annoyingPowerupPosition[i].split(',') : annoyingPowerupPosition[i];
                        annoyingPowerupPosition[i][0] = +annoyingPowerupPosition[i][0];
                        annoyingPowerupPosition[i][1] = +annoyingPowerupPosition[i][1];
                    }
                }
            }
            annoyingPowerupPositionCleaned = true;
        }

        for(var i=0;i<annoyingPowerupPosition.length;i++) {
            if(powerupName === 'frogs') {
                canvasContext.drawImage(powerupImage, annoyingPowerupPosition[i][0], annoyingPowerupPosition[i][1], finalWidth, FINAL_HEIGHT);
            } else if(powerupName === "flies") {
                canvasContext.drawImage(powerupImage, annoyingPowerupPosition[i].x1, annoyingPowerupPosition[i].y1, 10, 10);
                canvasContext.drawImage(powerupImage, annoyingPowerupPosition[i].x2, annoyingPowerupPosition[i].y2, 10, 10);
                canvasContext.drawImage(powerupImage, annoyingPowerupPosition[i].x3, annoyingPowerupPosition[i].y3, 10, 10);
                canvasContext.drawImage(powerupImage, annoyingPowerupPosition[i].x4, annoyingPowerupPosition[i].y4, 10, 10);
            }
        }
    }

    if(!clearCharacters && !crossedOver && !gameOver) {
        if(!runOnce) {
            canvasContext.drawImage(mosesImages[mosesImageId], mosesX, mosesY, 35, 35);
            if(mosesBlinkNow) {
                canvasContext.drawImage(mosesEyeBlinkImage, mosesX, mosesY, 35, 35);
            }
        } else if(runOnce && testCounter < 1 && !gameOver) { // if testCounter < 1, then we are in the gameOver script
            canvasContext.drawImage(mosesDeadImages[mosesImageId], mosesX, mosesY, 35, 35);
        }
        drawIsraelites();
        if(powerupRun && powerupName === 'darkness') {
            canvasContext.drawImage(powerupImage, egyptians[egyptians.length - 1].x, 200, egyptiansFrontAndBackDistance, powerupImage.height);
        }
        if(mobileVersion) {
            displayControls();
        }
    } else if(!gameOverScriptRun && gameOver || !gameOverScriptRun && crossedOver) {
        testCounter++; // just making sure this is happening once
        backgroundScoreSource.stop();
        bonusLevelSource === undefined ? false : bonusLevelSource.stop();
        if(crossedOver) {
            printText(110, canvas.height / 2, 28, 'black', 'you made it across! congratulations!');
        } else if(gameOver) {
            printText(canvas.width / 2.54, canvas.height / 2, 28, 'black', 'game over!');
        }
        if(testCounter > 1) {
            return;
        }
        crossedOver ? playSound(justWonBuffer) : playSound(gameOverMusicBuffer, 'gameOverMusicSource'); // depends on whether or not you won or not
        await sleep(5000);
        gameOver = crossedOver = false;
        start = started = lowerLives = runOnce = false;
        bonusLevel = bonusLevelAnnounced = false;
        startupThemePlayed = false;
        loopedPowerupSoundPlayed = false;
        bonusLevelReachedPlayed = false;
        bonusShellCaughtSoundPlayed = false;
        bonusLevelBackgroundEstablished = false;
        powerupArriveCalled = powerupArriveInterrupted = false;
        showNextPowerup = false;
        readyFinished = false;
        backgroundScoreEstablished = false;
        backgroundResetCauseOfDeath = false;
        readyShow = false;
        newLevelReachedPlayed = false;
        ignoreAnswerBreak = false;
        removeTripleSpace = false;
        removeQuadrupleSpace = false;
        questionFiltered = undefined;
        lives = 3;
        win = false;
        timer = countdownNumber = correctAnswerCount = 0;
        timerEnd = 16;
        currentPosition = canvas.width / 2;
        mosesX = -35;
        mosesY = 290;
        mosesCaught = false;
        crabOutput = 1;
        crabOutputIncrement = false;
        crabs = []; // empties out the list of crabs
        shells = [];
        shellMax = 3;
        shellOutput = 1;
        shellOutputIncrement = false;
        shellOutputTimer = 0;
        shellOutputTimeLimit = 2;
        bonusShellX = 800;
        bonusShellY = randomPositionBonusShell(); // bonusShellFrameId does not need to be reset; it's just a flashing shell
        bonusShellNeeded = false;
        bonusShellCountdown = 5;
        bonusShellCaught = false;
        fish1.resetDirection();
        fish2.resetDirection();
        fish3.resetDirection();
        fish4.resetDirection();
        fish5.resetDirection();
        fish6.resetDirection();
        fish7.resetDirection();
        fish8.resetDirection();

        israelites = makeCopy(israelitesReboot); // just to see if it makes hard copies or not
        egyptians = makeCopy(egyptiansReboot);

        arcadeMode ? localStorage.setItem('incorrectAnswersDataStatistics', JSON.stringify(incorrectAnswersDataCollector)) : false; // just to update things as they go...
        
        egyptiansMove = false;
        egyptianStepCount = 0;
        egyptiansCurrentPosition = 0;
        multipleChoiceBuiltIn = false;
        livesManipulated = false;
        clearCharacters = false;
        questions = [];
        questionBrought = false;
        answer = A_choice = B_choice = C_choice = D_choice = undefined;
        level = 1;
        newLevelStarted = false;
        score = 0;
        timerSetToZeroOnce = false;
        questionsStarted = false;
        noMoreQuestions = false;
        answerCorrect = false;
        questionGraded = false;
        incorrectAnswers = []; // must be cleared out as well
        incorrectCount = 0;

        referenceHolderQuestion = "";

        annoyingPowerupPosition = [];
        annoyingPowerupPositionNumber = 0;
        annoyingPowerupPositionCleaned = false;

        usedPowerups = [];
        
        lastValue = lastValue === -1 ? 0 : -1;
        questionNumber = lastValue;
        questionNumber = -1;
        nextQuestionNumber = 0;
        a = b = c = d = false;
        questionType = undefined;
        choicePositionNumber = choicePositionCursorNumber = 0;
        missedOpportunity = false;
        powerupsNecessary = false;
        powerupBeingUsed = false;
        powerupIncrement = false;
        powerupName = undefined;
        powerupRun = false;
        powerupX = 800;
        powerupY = 300;
        seaWidth = canvas.width / 2 * 90;
		seaHeight = canvas.height / 3;
		seaYPosition = canvas.height - 200;

        finishLevelQuestionType = null;
        previousLevel = level;

        livesDisplayManipulateNumber = 0; // set back to 0

        loadedPreviousScores =  false;

        shuffle(fishPositions);

        fish1.resetPosition();
        fish2.resetPosition();
        fish3.resetPosition();
        fish4.resetPosition();
        fish5.resetPosition();
        fish6.resetPosition();
        fish7.resetPosition();
        fish8.resetPosition();

        if(lastHighScore < highScore) {
            localStorage.setItem('highScore', highScore);
            submitNewHighScore();
        } else {
            previousHighScores = undefined;
        }

        gameOverScriptRun = true; // should stop the script from running

        updateQuestionsInBackground(); // should update the questions
        return;
    }
    if(countdownNumber < 600 && start && !(readyFinished && livesManipulated) && screenBlacked) {  // should run twice
        paused = false;
        if(!startupThemePlayed) {
            playSound(startupThemeBuffer, "startupThemeSource");
            startupThemePlayed = true;
        }
        printText((!birthdayMode ? canvas.width / 2.285 : 200), canvas.height / 2, 28, 'black', (!birthdayMode ? 'ready!' : 'let\'s go, birthday mom!'));
        questionNumber = 0;
        readyCounter++;
        await sleep(200);
        if(readyCounter < 200) {
            return;
        }
        if(readyCounter >= 200) {
            if(!readyFinished && !livesManipulated) {
                livesDisplayManipulateNumber = 1;
                livesManipulated = true;
            } else {
                readyFinished = true;
                countdownNumber = 600;
                if(googlePixelDevice) {
                    startupThemeSource.stop();
                }
            }
            
            readyCounter = 0; // ready to start over
        }
    } else if(readyShow) {
		printText((!birthdayMode ? canvas.width / 2.285 : 240), canvas.height / 2, 28, 'black', (!birthdayMode ? 'ready!' : 'you can do it, mama!'));
        await sleep(2000);
        readyShow = false; // should play the music then...
    }
    if(loading || start && !screenBlacked) {
        var waitTime;
        colorRect(0, 0, canvas.width, canvas.height, 'black');
        loading ? printText(canvas.width / 2.35, canvas.height / 2.5, 28, 'white', "loading") : false; // making more changes here
        printText(20, 30, 28, 'white', 'score');
        printText(20, 60, 28, 'white', zeroedScore(score));
        printText(canvas.width - 193, 30, 28, 'white', 'high score');
        printText(canvas.width - 106 - spaces, 60, 28, 'white', zeroedScore(highScore));
        if(!loading) {
            waitTime = 30;
        } else {
            waitTime = 5000;
        }
        await sleep(waitTime);
        if(!loading) {
            readyCounter++;            
            if(readyCounter === 30) {
                screenBlacked = true;
                readyCounter = 0; 
            }
        }
    } 
    if(previousLevel < level && start && countdownNumber === 600 && level !== 1 && questions.length !== 0 && !bonusLevelAnnounced && finishLevelQuestionType === null && !questionGraded) {
        var xPosition, yPosition;
        if(bonusLevel) {
            announcementMessage = "Bonus Level Reached!";
            waitTime = 5000;
            xPosition = canvas.width / 3.4;
            backgroundScoreSource.stop();
            if(!bonusLevelReachedPlayed) {
                playSound(startupThemeBuffer); // play it one more time!!!!!
                bonusLevelReachedPlayed = true;
            }
        } else {
            announcementMessage = 'level ' + level;
            xPosition = canvas.width / 2.3;
            if(!newLevelReachedPlayed) {
                playSound(newLevelReachedBuffer); // just play the sound
                newLevelReachedPlayed = true;
                backgroundScoreSource.stop(); // see if this causes any issues
                backgroundScoreEstablished = false;
            }
        }
        yPosition = canvas.height / 2;
        volumeController.gain.value = 0;
        printText(xPosition, yPosition, 28, 'black', announcementMessage); 
        move = false;
        console.warn('before');
        await sleep(waitTime);
        console.warn('after');
        newLevelReachedPlayed = newLevelMute = false;
        volumeController.gain.value = 0.5; // turn it back on!
        console.warn('back to thet song');
        previousLevel = level;
        if(bonusLevel) {
            bonusLevelAnnounced = true; // lets the computer know that the bonus level has been reached
        }
        move = true;
    }

    if(questionBrought && !gameOver) {
        var question;

        // Now, determine whether this is a recall or a current question 

        if(ignoreAnswerBreak || removeTripleSpace || removeQuadrupleSpace) {
            question = questionFiltered;
        } else if(bonusShellCaught) {
            question = incorrectAnswers[questionNumber].question;
        } else {
            question = questions[questionNumber].question;
        }

        if(bonusShellCaughtSoundPlayed) {
            bonusShellCaughtSoundPlayed = false;
            volumeController.gain.value = 0.5;
            console.log('still back to the theme');
        }

        if(question === '') {
            if(questionType === "match") {
                question = "Match each item correctly.";
            } else {
                question = "Number the events in the correct order.";
            }
        }
        if(questionType === "multiple") {
            colorRect(150, questionYPosition, 500, 315, 'green');
            printText(160, 100 + difference, 22, 'white', question);
        } else if (questionType === "match") {
            colorRect(125, 100, 550, 400, '#006eff');
            printText(130, 60 + difference, 22, 'white', question);
        } else if (questionType === "number") {
            if(question.indexOf('[BREAK]') !== -1) {
                yShift = 7;
            }
            colorRect(75, 75, 650, 450, 'brown'); // let's try it
            printText(90, 40 + difference, 22, 'white', question);
        } else if (questionType === "TF") {
            colorRect(150, questionYPosition, 500, 315, 'darkgreen');
            printText(160, 100 + difference, 22, 'white', question);
        }
        if(A_choice !== undefined || B_choice !== undefined || C_choice !== undefined || D_choice !== undefined) {
            if(multipleChoiceBuiltIn && A_choice.indexOf('a.') === -1) {
                multipleChoiceBuiltIn = false; // just to remove any unecessary bugs; ran into a few recently
            }
            if(multipleChoiceBuiltIn) {
                A_choice !== undefined ? printText(160, 180 + difference, 22, 'white', A_choice) : false;
                B_choice !== undefined ? printText(160, 240 + difference, 22, 'white', B_choice) : false;
                C_choice !== undefined ? printText(160, 300 + difference, 22, 'white', C_choice) : false;
                D_choice !== undefined ? printText(160, 360 + difference, 22, 'white', D_choice) : false;
            } else {
                A_choice !== undefined ? printText(160, 180 + difference, 22, 'white', "A. " + A_choice) : false;
                B_choice !== undefined ? printText(160, 240 + difference, 22, 'white', "B. " + B_choice) : false;
                C_choice !== undefined ? printText(160, 300 + difference, 22, 'white', "C. " + C_choice) : false;
                D_choice !== undefined ? printText(160, 360 + difference, 22, 'white', "D. " + D_choice) : false;
            }

            if(mobileVersion) { // only runs if mobile version being used
                if(A_choice !== undefined) {
                    colorRect(A_BUTTON_POSITION, 520, 100, 50, 'green');
                }
                if(B_choice !== undefined && questionType === "multiple") {
                    colorRect(B_BUTTON_POSITION, 520, 100, 50, 'green');
                } else if(B_choice !== undefined && questionType === "TF") {
                    colorRect(B_BUTTON_POSITION, 520, 100, 50, 'green');
                }
                if(C_choice !== undefined) {
                    colorRect(C_BUTTON_POSITION, 520, 100, 50, 'green')
                }
                if(D_choice !== undefined) { // would be undefined if questionType 
                    colorRect(D_BUTTON_POSITION, 520, 100, 50, 'green')
                }

                if(questionType === "multiple") {
                    printText(210, 554, 28, 'white', 'a');
                    printText(330, 554, 28, 'white', 'b');
                    printText(450, 554, 28, 'white', 'c');
                    printText(570, 554, 28, 'white', 'd');
                } else {
                    printText(185, 554, 28, 'white', 'true');
                    printText(538, 554, 28, 'white', 'false');
                }
            }
        } else if(answer.indexOf('->') !== -1 && questionType === "match") { // then, this is match mode, so let's set up the matching parts
            colorRect(160, 100 + difference, 40, 50, '#00d9ff');
            colorRect(160, 180 + difference, 40, 50, '#00d9ff');
            colorRect(160, 260 + difference, 40, 50, '#00d9ff');
            colorRect(160, 340 + difference, 40, 50, '#00d9ff');

            colorRect(600, 100 + difference, 40, 50, '#00d9ff');
            colorRect(600, 180 + difference, 40, 50, '#00d9ff');
            colorRect(600, 260 + difference, 40, 50, '#00d9ff');
            colorRect(600, 340 + difference, 40, 50, '#00d9ff');

            for(var i=0;i<matchPositions.length;i++) {
                var x1 = matchPositions[i].x1;
                var y1 = matchPositions[i].y1;

                var x2 = matchPositions[i].x2;
                var y2 = matchPositions[i].y2;

                var firstItem = matchPositions[i].firstItem;
                var secondItem = matchPositions[i].secondItem;

                printText(x1, y1 + difference, 22, 'white', firstItem);
                printText(x2, y2 + difference, 22, 'white', secondItem);
            }

            colorRect(choicePositions[choicePositionNumber][0], choicePositions[choicePositionNumber][1], 40, 50, 'yellow');
            colorRect(choicePositions[choicePositionCursorNumber][0], choicePositions[choicePositionCursorNumber][1], 40, 50, 'red');

            for(var i=0;i<selectedPositions.length;i++) {
                colorRect(selectedPositions[i][0], selectedPositions[i][1], 40, 50, 'green');
            }
        } else if(questionType === "number") {
            for(var i=0;i<choicePositions.length;i++) {
                var color = choicePositions[i][2] ? 'green' : '#00d9ff';
                var showNumber = choicePositions[i][2] ? true : false;
                var raisingValue = 0;

                if(choicePositions[i][3].indexOf('[BREAK]') !== -1) {
                    raisingValue = 10;
                }
                colorRect(choicePositions[i][0], choicePositions[i][1], 20, 30, color);
                printText(choicePositions[i][0] + 30, choicePositions[i][1] + 22 - raisingValue, 22, 'white', choicePositions[i][3]);
            }

            for(var i=0;i<selectedPositions.length;i++) { // highlight selected options
                printText(selectedPositions[i][0] + 1.55, selectedPositions[i][1] + 24, 28, 'black', selectedPositions[i][4].toString());
            }

            // Display cursor
            colorRect(choicePositions[choicePositionCursorNumber][0], choicePositions[choicePositionCursorNumber][1], 20, 30, 'yellow');
            printText(choicePositions[choicePositionCursorNumber][0] + 1.55, choicePositions[choicePositionCursorNumber][1] + 24, 30, 'brown', optionNumber.toString());
        }
        lastQuestion = question;

        if(mobileVersion) {
            if(questionType === "match" || questionType === "number") {
                colorRect(A_BUTTON_POSITION, 520, 100, 50, 'green');
                colorRect(B_BUTTON_POSITION, 520, 100, 50, 'green'); // touch buttons
                colorRect(C_BUTTON_POSITION, 520, 100, 50, 'green');
                colorRect(D_BUTTON_POSITION, 520, 100, 50, 'green');
    
                printText(173, 554, 26, 'white', 'select');
                printText(293, 554, 26, 'white', 'delete');
                printText(443, 554, 26, 'white', 'up');
                printText(546, 554, 26, 'white', 'down');
            }
        }
    }

    if(questionGraded) {
        showPowerup = false;
		var israeliteReleased = numberOfQuestionsBeforeRelease === 0 && caughtIsraelites.length > 0;
        var statement = answerCorrect ? "correct!" : "incorrect! the correct answer is [BREAK]" + correctAnswerValue; // assuming the answer is still intact
        var timeToPause = answerCorrect ? (israeliteReleased ? 2000 : 1000) : (lastQuestionTypeUsed === "match" || lastQuestionTypeUsed === "number" ? 10000 : 5000); // the difference in time is to help the player learn from his/her mistakes
        var squareHeightIncrement = 0;
		
		if(israeliteReleased) {
			statement += " israelite released!";
		}

        if(lastQuestionTypeUsed === "multiple") {
            colorRect(150, questionYPosition, 500, 315, 'green');
            printText(160, 100 + difference, 22, 'white', statement);
        } else if (lastQuestionTypeUsed === "match") {
            colorRect(125, 100, 550, 400, '#006eff');
            printText(130, 60 + difference, 22, 'white', statement);
        } else if (lastQuestionTypeUsed === "number") {
            if(statement.indexOf('[INCREASE_SQUARE_HEIGHT]') !== -1) {
		    lineCounter = printText(90, 40 + difference, 22, 'white', statement, lineCounter);
                squareHeightIncrement = (10 * lineCounter) / 2;
            }
            colorRect(75, 75, 650, 450 + squareHeightIncrement, 'brown'); // let's try it
            printText(90, 40 + difference, 22, 'white', statement);
        } else if (lastQuestionTypeUsed === "TF" || finishLevelQuestionType === "TF" && questions !== incorrectAnswers || questionType === "TF") {
            colorRect(150, questionYPosition, 500, 315, 'darkgreen');
            printText(160, 100 + difference, 22, 'white', statement);
        }
        if(powerupArriveInterrupted) {
            powerupArriveInterrupted = false;
        }
		timer = 0; // resets timer each time sleep is run
        await sleep(timeToPause);
        if(!decisionMade) {
            decisionMade = true;
            showPowerup = true;
            checkCorrectAnswerCount();
            if(newLifeGained) {
                playSound(newLifeGainedBuffer); // should just play the sound without any issues...
                newLifeGained = false;
            }
            if(powerupX > 800) {
                powerupX = 799;
            }
            volumeController.gain.value = !powerupBeingUsed && !newLevelMute || win ? 0.5 : 0;
            console.warn('volumeController.gain.value =', volumeController.gain.value,';\npowerupBeingUsed =', powerupBeingUsed);
            questionGraded = false;
            finishLevelQuestionType = null;
        }
    }

    if(paused) {
        printText(canvas.width / 2.2, canvas.height / 2, 28, 'black', 'paused');
    }

    if(!start && confirmed && mosesImagesLoaded && allIsraeliteImagesLoaded && allEgyptianImagesLoaded && !loading) {
        screenBlacked = false; 
        if(true) {
            colorRect(0, 0, canvas.width, canvas.height, 'black');
            !birthdayMode ? printText(210, canvas.height / 2, 60, chameleon[chameleonID], 'come play!') : printText(15, canvas.height / 2, 60, chameleon[chameleonID], 'HAPPY BIRTHDAY, MAMI!'); 
			printText(225, 400, 20, 'white', 'easey2playentertainment.com');
			canvasContext.drawImage(qrCodeImage, 610, 260, 140, 140); // website
			canvasContext.drawImage(financeQrCodeImage, 45, 260, 140, 140); // paypal
	canvasContext.drawImage(mosesImages[mosesImageId], demoMosesPosition, canvas.height / 2 + 150 , 35, 35);
    canvasContext.drawImage(israelites[2].images[israelites[2].imageId], demoIsraelite1Position, canvas.height / 2 + 150 , 35, 35); // CONTINUE HERE
    canvasContext.drawImage(demoIsraelite2Images[demoIsraelite2FrameId], demoIsraelite2Position, canvas.height / 2 + 150 , 35, 35);
    canvasContext.drawImage(demoIsraelite3Images[demoIsraelite3FrameId], demoIsraelite3Position, canvas.height / 2 + 150 , 35, 35);
    //canvasContext.drawImage(currentCrabImage, demoCrab1Position, 450, 50, 50);
    //canvasContext.drawImage(currentCrabImage, demoCrab2Position, 450, 50, 50);
    //canvasContext.drawImage(currentCrabImage, demoCrab3Position, 450, 50, 50); // keep working on it
    //canvasContext.drawImage(currentCrabImage, demoCrab4Position, 450, 50, 50);
    canvasContext.drawImage(demoEgyptianImages[demoEgyptianFrameId], demoEgyptian1Position, 100, 35, 35);
    canvasContext.drawImage(demoEgyptianImages[demoEgyptianFrameId], demoEgyptian2Position, 100, 35, 35);
    canvasContext.drawImage(demoEgyptianImages[demoEgyptianFrameId], demoEgyptian3Position, 100, 35, 35);
    canvasContext.drawImage(demoEgyptianImages[demoEgyptianFrameId], demoEgyptian4Position, 100, 35, 35);
    canvasContext.drawImage(orangeFishImages[1], demoFish1Position, 160, 50, 50);
    canvasContext.drawImage(purpleFishImages[1], demoFish2Position, 160, 50, 50);
    canvasContext.drawImage(greenFishImages[1], demoFish3Position, 160, 50, 50);
    canvasContext.drawImage(redFishImages[1], demoFish4Position, 160, 50, 50);

    if(mosesBlinkNow) {
        canvasContext.drawImage(mosesEyeBlinkImage, demoMosesPosition, canvas.height / 2 + 150 , 35, 35);
    }

    if(israeliteBlinks[2].blinkNow) {
        canvasContext.drawImage(israeliteBlinks[2].image, demoIsraelite1Position, canvas.height / 2 + 150 , 35, 35);
    }

    if(israeliteBlinks[3].blinkNow) {
        canvasContext.drawImage(israeliteBlinks[3].image, demoIsraelite2Position, canvas.height / 2 + 150 , 35, 35);
    }

    if(israeliteBlinks[0].blinkNow) {
        canvasContext.drawImage(israeliteBlinks[0].image, demoIsraelite3Position, canvas.height / 2 + 150 , 35, 35);
    }

    if(egyptianBlinks[0].blinkNow) {
        canvasContext.drawImage(egyptianBlinkImageLeft, demoEgyptian1Position, 100, 35, 35);
    }

    if(egyptianBlinks[1].blinkNow) {
        canvasContext.drawImage(egyptianBlinkImageLeft, demoEgyptian2Position, 100, 35, 35);
    }

    if(egyptianBlinks[2].blinkNow) {
        canvasContext.drawImage(egyptianBlinkImageLeft, demoEgyptian3Position, 100, 35, 35);
    }

    if(egyptianBlinks[3].blinkNow) {
        canvasContext.drawImage(egyptianBlinkImageLeft, demoEgyptian4Position, 100, 35, 35);
    }

    printText(265 - timesPlayedSpaces, 530, 28, 'white', 'times played: ' + timesPlayed);
        printText(20, 30, 28, 'white', 'score');
        printText(20, 60, 28, 'white', zeroedScore(score));
        printText(canvas.width - 193, 30, 28, 'white', 'high score');
        printText(canvas.width - 106 - spaces, 60, 28, 'white', zeroedScore(highScore));
        } else {
        colorRect(0, 0, canvas.width, canvas.height, '#141414');
        printText((canvas.width / 3.51) - (arcadeMode ? 7 : 0), canvas.height / 2 , 28, 'white', (mobileVersion ? 'tap here to continue' : (!arcadeMode ? 'press space to start' : 'press button to start'))); // on arcade machines, it will read 'insert coin to start'
        canvasContext.drawImage(mosesImages[mosesImageId], canvas.width / 2 + 50, canvas.height / 2 + 50 , 35, 35);
        canvasContext.drawImage(israelites[2].images[israelites[2].imageId], canvas.width / 2, canvas.height / 2 + 50 , 35, 35);
        canvasContext.drawImage(egyptians[0].images[egyptians[0].imageId], canvas.width / 2 - 50, canvas.height / 2 + 50 , 35, 35);
        canvasContext.drawImage(israelites[0].images[israelites[0].imageId], canvas.width / 2 - 100, canvas.height / 2 + 50 , 35, 35);

        // Now for eye-blink logic
        if(mosesBlinkNow) {
            canvasContext.drawImage(mosesEyeBlinkImage, canvas.width / 2 + 50, canvas.height / 2 + 50 , 35, 35);
        }

        if(israeliteBlinks[2].blinkNow) {
            canvasContext.drawImage(israeliteBlinks[2].image, canvas.width / 2, canvas.height / 2 + 50 , 35, 35);
        }

        if(israeliteBlinks[0].blinkNow) {
            canvasContext.drawImage(israeliteBlinks[0].image, canvas.width / 2 - 100, canvas.height / 2 + 50 , 35, 35);
        }
        // End of eye-blink logic

        if(egyptianBlinks[0].blinkNow) {
            canvasContext.drawImage(egyptianBlinkImage, canvas.width / 2 - 50, canvas.height / 2 + 50 , 35, 35);
        }

        arcadeMode ? printText(265 - timesPlayedSpaces, 500, 28, 'white', 'times played: ' + timesPlayed) : false;
        printText(20, 30, 28, 'white', 'score');
        printText(20, 60, 28, 'white', zeroedScore(score));
        printText(canvas.width - 193, 30, 28, 'white', 'high score');
        printText(canvas.width - 106 - spaces, 60, 28, 'white', zeroedScore(highScore));
        }
    }
}
