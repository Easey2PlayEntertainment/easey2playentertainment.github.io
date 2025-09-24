function testMove() {
    for(var i=0;i<egyptians.length;i++) {
            egyptians[i].x += 10;
    }
}

async function moveAll() {
    var fish1Position = fish1.xPosition,
        fish2Position = fish2.xPosition,
        fish3Position = fish3.xPosition,
        fish4Position = fish4.xPosition,
        fish5Position = fish5.xPosition,
        fish6Position = fish6.xPosition,
        fish7Position = fish7.xPosition,
        fish8Position = fish8.xPosition;

    var fish1Displacement, fish2Displacement, fish3Displacement, fish4Displacement,
        fish5Displacement, fish6Displacement, fish7Displacement, fish8Displacement;

    if(!gameOver || !crossedOver) {
        var stepCounting = true;

        if(mosesCaught && lives > 0) {
            lowerLives = true;
            mosesCaught = false;
            return;
        }

        if(allFishLoaded && crabImage1Loaded && crabImage2Loaded && crabImage3Loaded && pinkShellLoaded && blueShellLoaded && bonusShellFrame1Loaded && bonusShellFrame2Loaded && allIsraeliteImagesLoaded && allEgyptianImagesLoaded && allPowerupsLoaded && !runOnce) {
            fish1.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish1.directionPointer; // work on this section later
            fish2.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish2.directionPointer;
            fish3.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish3.directionPointer;
            fish4.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish4.directionPointer;
            fish5.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish5.directionPointer;
            fish6.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish6.directionPointer;
            fish7.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish7.directionPointer;
            fish8.xPosition += (googlePixelDevice ? 0.7 : 1.5) * fish8.directionPointer;

            if(powerupName === 'flies') {
                for(var i=0;i<annoyingPowerupPosition.length;i++) {
                    annoyingPowerupPosition[i].x1 -= annoyingPowerupPosition[i].x1 !== undefined ? (googlePixelDevice ? 1.3 : 3) : 0; // changed from 1 : 0 to 3 : 0
                    annoyingPowerupPosition[i].x2 -= annoyingPowerupPosition[i].x2 !== undefined ? (googlePixelDevice ? 1.3 : 3) : 0;
                    annoyingPowerupPosition[i].x3 -= annoyingPowerupPosition[i].x3 !== undefined ? (googlePixelDevice ? 1.3 : 3) : 0;
                    annoyingPowerupPosition[i].x4 -= annoyingPowerupPosition[i].x4 !== undefined ? (googlePixelDevice ? 1.3 : 3) : 0;

                    if(annoyingPowerupPosition[i].x1 <= -5) {
                        annoyingPowerupPosition[i].x1 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x2 <= -5) {
                        annoyingPowerupPosition[i].x2 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x3 <= -5) {
                        annoyingPowerupPosition[i].x3 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x4 <= -5) {
                        annoyingPowerupPosition[i].x4 = undefined;
                    }

                    for(var j=0;j<egyptians.length;j++) {
                        var horizontalDistance1 = Math.floor(Math.abs(annoyingPowerupPosition[i].x1 - egyptians[j].x)),
                            verticalDistance1   = Math.floor(Math.abs(annoyingPowerupPosition[i].y1 - egyptians[j].y)),
                            horizontalDistance2 = Math.floor(Math.abs(annoyingPowerupPosition[i].x2 - egyptians[j].x)),
                            verticalDistance2   = Math.floor(Math.abs(annoyingPowerupPosition[i].y2 - egyptians[j].y)),
                            horizontalDistance3 = Math.floor(Math.abs(annoyingPowerupPosition[i].x3 - egyptians[j].x)),
                            verticalDistance3   = Math.floor(Math.abs(annoyingPowerupPosition[i].y3 - egyptians[j].y)),
                            horizontalDistance4 = Math.floor(Math.abs(annoyingPowerupPosition[i].x4 - egyptians[j].x)),
                            verticalDistance4   = Math.floor(Math.abs(annoyingPowerupPosition[i].y4 - egyptians[j].y));

                        if (horizontalDistance1 <= 35 && horizontalDistance1 >= 0 && verticalDistance1 <= 25 && verticalDistance1 >= 0 ||
                            horizontalDistance2 <= 35 && horizontalDistance2 >= 0 && verticalDistance2 <= 25 && verticalDistance2 >= 0 ||
                            horizontalDistance3 <= 35 && horizontalDistance3 >= 0 && verticalDistance3 <= 25 && verticalDistance3 >= 0 ||
                            horizontalDistance4 <= 35 && horizontalDistance4 >= 0 && verticalDistance4 <= 25 && verticalDistance4 >= 0) {
                            egyptians[j].x -= Math.random(); // moves back a bit
                            break;
                        }
                    }
                }
            }

            for(var i=0;i<crabs.length;i++) {
                if(crabs[i].walking && !runOnce && currentPosition < canvas.width / 2 && !powerupRun) {
                    if(i > 0) {
                        if(Math.abs(crabs[i].xPosition - crabs[i-1].xPosition) < 60 || crabs[i].xPosition === crabs[i-1].xPosition || Math.abs(crabs[i].xPPosition - crabs[i - 1].xPPosition) < 30) {
                            crabs[i - 1].xPosition -= 0.7; // pushes the one in front ahead
                            continue;
                        }
                    }
                    crabs[i].xPosition -= 0.5;
                } else if(powerupRun) {
                    if(crabs[i].xPosition >= 0) {
                        crabs[i].xPosition += canvas.width; // just hide the crab
                    } else {
                        crabs[i].xPosition = 800;
                    }
                }

                if(crabs[i].xPosition <= -50) {
                    crabs[i].xPosition = 799; // should reset; if not, we have problems
                    crabs[i].timesRun++;

                    crabs[i].yPosition = randomPositionCrab(crabs[i]); // should put crab in random position

                    crabsYPositions[i] = crabs[i].yPosition; // after it has been updated

                    if(crabs[i].yPosition === 360) { // mostly used for sensing whether or not a crab is on the bottom or not
                        crabs[i].onFloor = true;
                    } else {
                        crabs[i].onFloor = false;
                    }
                }
            }

            for(var i=0;i<shells.length;i++) {
                if(currentPosition === canvas.width || mosesX < 610) {
                    break; // just quit the loop
                }
                shells[i].xPosition -= !lowerLives && !runOnce ? (googlePixelDevice ? 1.3 : 3) : 0;

                if(shells[i].xPosition <= -30) {
                    if(!shells[i].caught) {
                        score -= shells[i].value;
                    }
                    shells[i].resetShell(); // supposed to create a new shell
                }

                var shellCaught = decideIfCaught(shells[i].xPosition, shells[i].yPosition, mosesX, mosesY, 'moses&shell');//'moses&shell');
                
                if(shellCaught) {
                    if(catchShellFXPausedStart) {
                        catchShellSource.stop();
                    }
                    playSound(catchShellBuffer, 'catchShellSource');
                    score += shells[i].value;
                    shells[i].caught = true;
                    shells[i].xPosition = -30;
                }
            }

            if(bonusShellNeeded && mosesX >= 610) {
                bonusShellX -= googlePixelDevice ? 1.3 : 3;
                bonusShellCaught = decideIfCaught(bonusShellX, bonusShellY, mosesX, mosesY, 'moses&shell');
                
                if(bonusShellCaught) {
                    console.warn('trying to play caught sound');
                    volumeController.gain.value = 0;
                    bonusShellNeeded ? playSound(bonusShellCaughtBuffer, 'bonusShellCaughtSource') : false;
                    bonusShellX = 800;
                    bonusShellY = randomPositionBonusShell();
                    bonusShellNeeded = false;
                    referenceHolderQuestion = questions[questionNumber]; // just grab it before anything bad happens
                    timer = timerEnd; // supposed to end the countdown soon
                    generateAnswers(); 
                } else if(bonusShellX <= -30) {
                    bonusShellX = 800;
                    bonusShellY = randomPositionBonusShell();
                    bonusShellNeeded = false;
                    bonusShellCountdown = 2;
                }
            }
        }
        if(mosesX < 610 || win && currentPosition <= -seaWidth + 400) { 
            powerupBeingUsed = false; // just in case anything crazy happens
            if(runOnce) {
                runOnce = false; 
            }
            mosesX += googlePixelDevice ? 1.3 : 3;
            for(var i=0;i<13;i++) {
                if(i < israelites.length) { // only runs if there are items in the array
                    israelites[i].x += googlePixelDevice ? 1.3 : 3;
                }
                egyptians[i].x += win ? 0 :(googlePixelDevice ? 1.3 : 3); // if the game has been won, they stay put
                if(win && egyptians[i].x > (canvas.width / 2) - 100) {
                    for(var j=0;j<egyptians.length;j++) {
                        egyptians[j].x -= 1;
                    }
                }
            }
        } else {
            if(!runOnce) {
                currentPosition -= !clearCharacters && !gameOver && !mosesCaught ? (googlePixelDevice ? 1.3 : 3) : 0;
                fish1.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish2.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish3.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish4.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish5.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish6.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish7.xPosition -= googlePixelDevice ? 1.3 : 3;
                fish8.xPosition -= googlePixelDevice ? 1.3 : 3;

                for(var i=0;i<crabs.length;i++) {
                    crabs[i].xPosition -= googlePixelDevice ? 1.3 : 3;
                }
            }
        }
        fish1Displacement = Math.abs(fish1Position - fish1.xPosition);
            fish2Displacement = Math.abs(fish2Position - fish2.xPosition);
            fish3Displacement = Math.abs(fish3Position - fish3.xPosition);
            fish4Displacement = Math.abs(fish4Position - fish4.xPosition);
            fish5Displacement = Math.abs(fish5Position - fish5.xPosition);
            fish6Displacement = Math.abs(fish6Position - fish6.xPosition);
            fish7Displacement = Math.abs(fish7Position - fish7.xPosition);
            fish8Displacement = Math.abs(fish8Position - fish8.xPosition);

        fish1.flipPhysicalDirection(fish1Displacement);
        fish2.flipPhysicalDirection(fish2Displacement);
        fish3.flipPhysicalDirection(fish3Displacement);
        fish4.flipPhysicalDirection(fish4Displacement);
        fish5.flipPhysicalDirection(fish5Displacement);
        fish6.flipPhysicalDirection(fish6Displacement);
        fish7.flipPhysicalDirection(fish7Displacement);
        fish8.flipPhysicalDirection(fish8Displacement);

        fish1.checkPosition();
        fish2.checkPosition();
        fish3.checkPosition();
        fish4.checkPosition();
        fish5.checkPosition();
        fish6.checkPosition();
        fish7.checkPosition();
        fish8.checkPosition();

        var mosesMoveResults;
        if(!lowerLives && !runOnce) {
            if(up && mosesY > 220) {
                mosesY -= googlePixelDevice ? 1.3 : 3;
            } else if(down && mosesY < 360) {
                mosesY += googlePixelDevice ? 1.3 : 3;
            }
        }

        if(win && mosesX > 850 && seaYPosition !== seaHeight) {
            seaHeight += googlePixelDevice ? 1.3 : 3;
            seaYPosition -= googlePixelDevice ? 1.3 : 3;
        }

        if(israelites.length > 0) {
            if(israelites[israelites.length - 1].x >= 800) {
                crossedOver = true;
            }
        }

        if(!runOnce) {
            for(var i=0;i<israelites.length;i++) {
                var israeliteMoveResults = !lowerLives && !runOnce ? moveCharacter(israelites[i].y, israelites[i].increment, 220, 360) : {y_position: israelites[i].y, increment_value: israelites[i].increment};
                israelites[i].y = israeliteMoveResults.y_position;
                israelites[i].increment = israeliteMoveResults.increment_value;
            }

            if(!powerupRun && !allPositionsSettled) {
                var distance;
                for(var i=0;i<egyptians.length;i++) {
                    if(i > 0) {
                        distance = egyptians[i].x - egyptians[i-1].x;

                        if(distance > -35) {
                            egyptians[i].x -= googlePixelDevice ? 1.3 : 3; // needs to be fast
                            break;
                        } else {
                            egyptians[i].positionSettled = true;
                        }
                    }

                    if(i === egyptians.length - 1) {
                        allPositionsSettled = true; // only at the way end of everything
                    }
                }
            }

            for(i=0;i<egyptians.length;i++) {
                var egyptianMoveResults = !lowerLives && !runOnce ? moveCharacter(egyptians[i].y, egyptians[i].increment, 220, 360) : {y_position: egyptians[i].y, increment_value: egyptians[i].increment};
                egyptians[i].y = egyptianMoveResults.y_position;
                egyptians[i].increment = egyptianMoveResults.increment_value;
            }
        }

        if(egyptiansMove) {
            egyptianStepCount += stepCounting ? (googlePixelDevice ? 1.3 : 3) : 0;
            egyptians[0].x += incorrectCount < 10 ? incorrectCount : 10;
            stepCounting = false;

            if(egyptianStepCount > level + 2) {
                egyptiansMove = false;
                egyptianStepCount = 0; // let's start over
            }

            var difference = Math.abs(egyptians[0].x - egyptians[1].x) - Math.abs(egyptians[1].x - egyptians[2].x);

            for(var i=1;i<egyptians.length;i++) {
                egyptians[i].x += difference;
            }

            egyptiansCurrentPosition = findFront(); // gets the current position of the egyptian at the way front
        }

        if(israelites.length !== 0) {
            for(var i=0;i<egyptians.length;i++) {
                var rearIsraeliteCaught = decideIfCaught(israelites[israelites.length - 1].x, israelites[israelites.length - 1].y, egyptians[i].x, egyptians[i].y, 'israelite');
                mosesCaught = decideIfCaught(mosesX, mosesY, egyptians[i].x, egyptians[i].y, 'moses');

                crabGroupReaction(egyptians[i]); // helps egyptians react to crabs coming through

                mosesCaught ? console.warn('moses has been caught') : false;

                if(mosesCaught && lives === 0) {
                    gameOver = true;
                    break;
                } else if(mosesCaught && lives > 0 && !lowerLives) {
                    mosesCaught = false;
                    lowerLives = true;
                    break;
                }
                if(rearIsraeliteCaught) {
                    caughtIsraelites.push(israelites.pop()); // removes it in an instant
                    score -= 20;
                    break; // the israelites got caught; why bother
                }
            }

            for(var i=0;i<israelites.length;i++) {
                crabGroupReaction(israelites[i]); // throws character in, and then should control the rest in this special function; if this works, this will be applied to the egyptians as well
            }

            if(!mosesCaught && !gameOver) {
                for(var i=0;i<crabs.length;i++) {
                    if(showPosition && i > 0 ) {
                        measureNow = false;
                    }
                    mosesCaught = decideIfCaught(mosesX, mosesY, crabs[i].xPosition, crabs[i].yPosition, 'mosesvscrab');
    
                    if(mosesCaught && lives === 0) {
                        gameOver = true;
                        break;
                    } else if(mosesCaught && lives > 0 && !lowerLives) {
                        mosesCaught = false;
                        lowerLives = true;
                        break;
                    }
                }

                if(showPosition && !measureNow) {
                    measureNow = true;
                } else {
                    showPosition = measureNow = false;
                }
            }
        }

        if(!mosesCaught && !lowerLives) {
            mosesCaught = decideIfCaught(mosesX, mosesY, egyptians[0].x, egyptians[0].y, 'moses');

            if(mosesCaught && lives === 0) {
                gameOver = true;
                return;
            } else if(mosesCaught && lives > 0 && !lowerLives) { // got a lot of redundancy going on here
                mosesCaught = false;
                lowerLives = true;
                return;
            } else {
                for(var i=0;i<crabs.length;i++) {
                    mosesCaught = decideIfCaught(mosesX, mosesY, crabs[i].xPosition, crabs[i].yPosition, 'mosesvscrab');

                    if(mosesCaught && lives === 0) {
                        gameOver = true;
                        break;
                    } else if(mosesCaught && lives > 0 && !lowerLives) {
                        mosesCaught = false;
                        lowerLives = true;
                        break;
                    }
                }
            }
        }

        if(powerupBeingUsed && !mosesCaught && !lowerLives) {
            var powerupMoveResults = moveCharacter(powerupY, powerupIncrement, 220, 360);
            powerupX -= googlePixelDevice ? 1.3 : 3;
            powerupY = powerupMoveResults.y_position;
            powerupIncrement = powerupMoveResults.increment_value;

            if(powerupX <= -20) {
                powerupArriveSource.stop();
                powerupArriveCalled = false;
                volumeController.gain.value = 0.5;
                powerupX = 800;
                powerupY = randomPosition();
                if(powerupY % 2 !== 0 && powerupY % 2 !== 1 || powerupY === NaN) {
                    powerupY = 300;
                }
                powerupBeingUsed = false;
                missedOpportunity = true;
            } // else, everything in this conditional should not be run

            if(!missedOpportunity) {            
                var powerupCaught = decideIfCaught(powerupX, powerupY, mosesX, mosesY, null);

                if(powerupCaught) {
                    powerupBeingUsed = false;
                    autoPilot = true; // set back to original; make it tricky
                    powerupRun = true;
                    powerupFired = true;
                }
            }
        }

        if(lowerLives && lives > 0) {
            return;
        }

        if(mosesCaught && lives === 0) {
            gameOver = true;
        } else if(!mosesCaught && lowerLives && lives > 0) {
            lowerLives = false; // gotta turn that off
        }
        
        if(up) {
            testY -= googlePixelDevice ? 1.3 : 3;
        } else if(down) {
            testY += googlePixelDevice ? 1.3 : 3;
        } else if(left) {
            testX -= googlePixelDevice ? 1.3 : 3;
        } else if(right) {
            testX += googlePixelDevice ? 1.3 : 3;
        }

        moveFlies();
    } else { // should only happen if gameOver === true
        clearCharacters = true;
    }

    if(gameOver) {
        powerupsNecessary = false; // only if it does not work
        powerupBeingUsed = false;
        clearCharacters = true;
    }
}

/*async function moveAll() {
	var slowDown = $('slowDown').checked ? true : false;
	var speedRateValue = +speedRate.value / 10; // as a floating point
	var speedIncrementFloat = 0.2;
    var fish1Position = fish1.xPosition,
        fish2Position = fish2.xPosition,
        fish3Position = fish3.xPosition,
        fish4Position = fish4.xPosition,
        fish5Position = fish5.xPosition,
        fish6Position = fish6.xPosition,
        fish7Position = fish7.xPosition,
        fish8Position = fish8.xPosition;

    var fish1Displacement, fish2Displacement, fish3Displacement, fish4Displacement,
        fish5Displacement, fish6Displacement, fish7Displacement, fish8Displacement;

    if(!gameOver || !crossedOver) {
        var stepCounting = true;

        if(mosesCaught && lives > 0) {
            lowerLives = true;
            mosesCaught = false;
            return;
        }

        if(allFishLoaded && crabImage1Loaded && crabImage2Loaded && crabImage3Loaded && pinkShellLoaded && blueShellLoaded && bonusShellFrame1Loaded && bonusShellFrame2Loaded && allIsraeliteImagesLoaded && allEgyptianImagesLoaded && allPowerupsLoaded && !runOnce) {
            fish1.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish1.directionPointer; // work on this section later
            fish2.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish2.directionPointer;
            fish3.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish3.directionPointer;
            fish4.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish4.directionPointer;
            fish5.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish5.directionPointer;
            fish6.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish6.directionPointer;
            fish7.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish7.directionPointer;
            fish8.xPosition += (googlePixelDevice && (up || down) ? 0.7 + speedIncrementFloat : (slowDown ? 0.7 + speedRateValue : 1.5)) * fish8.directionPointer;

            if(powerupName === 'flies') {
                for(var i=0;i<annoyingPowerupPosition.length;i++) {
                    annoyingPowerupPosition[i].x1 -= annoyingPowerupPosition[i].x1 !== undefined ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0; // changed from 1 : 0 to 3 : 0
                    annoyingPowerupPosition[i].x2 -= annoyingPowerupPosition[i].x2 !== undefined ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;
                    annoyingPowerupPosition[i].x3 -= annoyingPowerupPosition[i].x3 !== undefined ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;
                    annoyingPowerupPosition[i].x4 -= annoyingPowerupPosition[i].x4 !== undefined ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;

                    if(annoyingPowerupPosition[i].x1 <= -5) {
                        annoyingPowerupPosition[i].x1 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x2 <= -5) {
                        annoyingPowerupPosition[i].x2 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x3 <= -5) {
                        annoyingPowerupPosition[i].x3 = undefined;
                    }
                    if(annoyingPowerupPosition[i].x4 <= -5) {
                        annoyingPowerupPosition[i].x4 = undefined;
                    }

                    for(var j=0;j<egyptians.length;j++) {
                        var horizontalDistance1 = Math.floor(Math.abs(annoyingPowerupPosition[i].x1 - egyptians[j].x)),
                            verticalDistance1   = Math.floor(Math.abs(annoyingPowerupPosition[i].y1 - egyptians[j].y)),
                            horizontalDistance2 = Math.floor(Math.abs(annoyingPowerupPosition[i].x2 - egyptians[j].x)),
                            verticalDistance2   = Math.floor(Math.abs(annoyingPowerupPosition[i].y2 - egyptians[j].y)),
                            horizontalDistance3 = Math.floor(Math.abs(annoyingPowerupPosition[i].x3 - egyptians[j].x)),
                            verticalDistance3   = Math.floor(Math.abs(annoyingPowerupPosition[i].y3 - egyptians[j].y)),
                            horizontalDistance4 = Math.floor(Math.abs(annoyingPowerupPosition[i].x4 - egyptians[j].x)),
                            verticalDistance4   = Math.floor(Math.abs(annoyingPowerupPosition[i].y4 - egyptians[j].y));

                        if (horizontalDistance1 <= 35 && horizontalDistance1 >= 0 && verticalDistance1 <= 25 && verticalDistance1 >= 0 ||
                            horizontalDistance2 <= 35 && horizontalDistance2 >= 0 && verticalDistance2 <= 25 && verticalDistance2 >= 0 ||
                            horizontalDistance3 <= 35 && horizontalDistance3 >= 0 && verticalDistance3 <= 25 && verticalDistance3 >= 0 ||
                            horizontalDistance4 <= 35 && horizontalDistance4 >= 0 && verticalDistance4 <= 25 && verticalDistance4 >= 0) {
                            egyptians[j].x -= Math.random(); // moves back a bit
                            break;
                        }
                    }
                }
            }

            for(var i=0;i<crabs.length;i++) {
                if(crabs[i].walking && !runOnce && currentPosition < canvas.width / 2 && !powerupRun) {
                    if(i > 0) {
                        if(Math.abs(crabs[i].xPosition - crabs[i-1].xPosition) < 60 || crabs[i].xPosition === crabs[i-1].xPosition || Math.abs(crabs[i].xPPosition - crabs[i - 1].xPPosition) < 30) {
                            crabs[i - 1].xPosition -= 0.7; // pushes the one in front ahead
                            continue;
                        }
                    }
                    crabs[i].xPosition -= 0.5;
                } else if(powerupRun) {
                    if(crabs[i].xPosition >= 0) {
                        crabs[i].xPosition += canvas.width; // just hide the crab
                    } else {
                        crabs[i].xPosition = 800;
                    }
                }

                if(crabs[i].xPosition <= -50) {
                    crabs[i].xPosition = 799; // should reset; if not, we have problems
                    crabs[i].timesRun++;

                    crabs[i].yPosition = randomPositionCrab(crabs[i]); // should put crab in random position

                    crabsYPositions[i] = crabs[i].yPosition; // after it has been updated

                    if(crabs[i].yPosition === 360) { // mostly used for sensing whether or not a crab is on the bottom or not
                        crabs[i].onFloor = true;
                    } else {
                        crabs[i].onFloor = false;
                    }
                }
            }

            for(var i=0;i<shells.length;i++) {
                if(currentPosition === canvas.width || mosesX < 610) {
                    break; // just quit the loop
                }
                shells[i].xPosition -= !lowerLives && !runOnce ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;

                if(shells[i].xPosition <= -30) {
                    if(!shells[i].caught) {
                        score -= shells[i].value;
                    }
                    shells[i].resetShell(); // supposed to create a new shell
                }

                var shellCaught = decideIfCaught(shells[i].xPosition, shells[i].yPosition, mosesX, mosesY, 'moses&shell');//'moses&shell');
                
                if(shellCaught) {
                    if(catchShellFXPausedStart) {
                        catchShellSource.stop();
                    }
                    playSound(catchShellBuffer, 'catchShellSource');
                    score += shells[i].value;
                    shells[i].caught = true;
                    shells[i].xPosition = -30;
                }
            }

            if(bonusShellNeeded && mosesX >= 610) {
                bonusShellX -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                bonusShellCaught = decideIfCaught(bonusShellX, bonusShellY, mosesX, mosesY, 'moses&shell');
                
                if(bonusShellCaught) {
                    console.warn('trying to play caught sound');
                    volumeController.gain.value = 0;
                    bonusShellNeeded ? playSound(bonusShellCaughtBuffer, 'bonusShellCaughtSource') : false;
                    bonusShellX = 800;
                    bonusShellY = randomPositionBonusShell();
                    bonusShellNeeded = false;
                    referenceHolderQuestion = questions[questionNumber]; // just grab it before anything bad happens
                    timer = timerEnd; // supposed to end the countdown soon
                    generateAnswers(); 
                } else if(bonusShellX <= -30) {
                    bonusShellX = 800;
                    bonusShellY = randomPositionBonusShell();
                    bonusShellNeeded = false;
                    bonusShellCountdown = 2;
                }
            }
        }
        if(mosesX < 610 || win && currentPosition <= -seaWidth + 400) { 
            powerupBeingUsed = false; // just in case anything crazy happens
            if(runOnce) {
                runOnce = false; 
            }
            mosesX += googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
            for(var i=0;i<13;i++) {
                if(i < israelites.length) { // only runs if there are items in the array
                    israelites[i].x += googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                }
                egyptians[i].x += win ? 0 :(googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)); // if the game has been won, they stay put
                if(win && egyptians[i].x > (canvas.width / 2) - 100) {
                    for(var j=0;j<egyptians.length;j++) {
                        egyptians[j].x -= 1;
                    }
                }
            }
        } else {
            if(!runOnce) {
                currentPosition -= !clearCharacters && !gameOver && !mosesCaught ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;
                fish1.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish2.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish3.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish4.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish5.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish6.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish7.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                fish8.xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);

                for(var i=0;i<crabs.length;i++) {
                    crabs[i].xPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
                }
            }
        }
        fish1Displacement = Math.abs(fish1Position - fish1.xPosition);
            fish2Displacement = Math.abs(fish2Position - fish2.xPosition);
            fish3Displacement = Math.abs(fish3Position - fish3.xPosition);
            fish4Displacement = Math.abs(fish4Position - fish4.xPosition);
            fish5Displacement = Math.abs(fish5Position - fish5.xPosition);
            fish6Displacement = Math.abs(fish6Position - fish6.xPosition);
            fish7Displacement = Math.abs(fish7Position - fish7.xPosition);
            fish8Displacement = Math.abs(fish8Position - fish8.xPosition);

        fish1.flipPhysicalDirection(fish1Displacement);
        fish2.flipPhysicalDirection(fish2Displacement);
        fish3.flipPhysicalDirection(fish3Displacement);
        fish4.flipPhysicalDirection(fish4Displacement);
        fish5.flipPhysicalDirection(fish5Displacement);
        fish6.flipPhysicalDirection(fish6Displacement);
        fish7.flipPhysicalDirection(fish7Displacement);
        fish8.flipPhysicalDirection(fish8Displacement);

        fish1.checkPosition();
        fish2.checkPosition();
        fish3.checkPosition();
        fish4.checkPosition();
        fish5.checkPosition();
        fish6.checkPosition();
        fish7.checkPosition();
        fish8.checkPosition();

        var mosesMoveResults;
        if(!lowerLives && !runOnce) {
            if(up && mosesY > 220) {
                mosesY -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
            } else if(down && mosesY < 360) {
                mosesY += googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
            }
        }

        if(win && mosesX > 850 && seaYPosition !== seaHeight) {
            seaHeight += googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
            seaYPosition -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
        }

        if(israelites.length > 0) {
            if(israelites[israelites.length - 1].x >= 800) {
                crossedOver = true;
            }
        }

        if(!runOnce) {
            for(var i=0;i<israelites.length;i++) {
                var israeliteMoveResults = !lowerLives && !runOnce ? moveCharacter(israelites[i].y, israelites[i].increment, 220, 360) : {y_position: israelites[i].y, increment_value: israelites[i].increment};
                israelites[i].y = israeliteMoveResults.y_position;
                israelites[i].increment = israeliteMoveResults.increment_value;
            }

            if(!powerupRun && !allPositionsSettled) {
                var distance;
                for(var i=0;i<egyptians.length;i++) {
                    if(i > 0) {
                        distance = egyptians[i].x - egyptians[i-1].x;

                        if(distance > -35) {
                            egyptians[i].x -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3); // needs to be fast
                            break;
                        } else {
                            egyptians[i].positionSettled = true;
                        }
                    }

                    if(i === egyptians.length - 1) {
                        allPositionsSettled = true; // only at the way end of everything
                    }
                }
            }

            for(i=0;i<egyptians.length;i++) {
                var egyptianMoveResults = !lowerLives && !runOnce ? moveCharacter(egyptians[i].y, egyptians[i].increment, 220, 360) : {y_position: egyptians[i].y, increment_value: egyptians[i].increment};
                egyptians[i].y = egyptianMoveResults.y_position;
                egyptians[i].increment = egyptianMoveResults.increment_value;
            }
        }

        if(egyptiansMove) {
            egyptianStepCount += stepCounting ? (googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3)) : 0;
            egyptians[0].x += incorrectCount < 10 ? incorrectCount : 10;
            stepCounting = false;

            if(egyptianStepCount > level + 2) {
                egyptiansMove = false;
                egyptianStepCount = 0; // let's start over
            }

            var difference = Math.abs(egyptians[0].x - egyptians[1].x) - Math.abs(egyptians[1].x - egyptians[2].x);

            for(var i=1;i<egyptians.length;i++) {
                egyptians[i].x += difference;
            }

            egyptiansCurrentPosition = findFront(); // gets the current position of the egyptian at the way front
        }

        if(israelites.length !== 0) {
            for(var i=0;i<egyptians.length;i++) {
                var rearIsraeliteCaught = decideIfCaught(israelites[israelites.length - 1].x, israelites[israelites.length - 1].y, egyptians[i].x, egyptians[i].y, 'israelite');
                mosesCaught = decideIfCaught(mosesX, mosesY, egyptians[i].x, egyptians[i].y, 'moses');

                crabGroupReaction(egyptians[i]); // helps egyptians react to crabs coming through

                mosesCaught ? console.warn('moses has been caught') : false;

                if(mosesCaught && lives === 0) {
                    gameOver = true;
                    break;
                } else if(mosesCaught && lives > 0 && !lowerLives) {
                    mosesCaught = false;
                    lowerLives = true;
                    break;
                }
                if(rearIsraeliteCaught) {
                    caughtIsraelites.push(israelites.pop()); // removes it in an instant
                    score -= 20;
                    break; // the israelites got caught; why bother
                }
            }

            for(var i=0;i<israelites.length;i++) {
                crabGroupReaction(israelites[i]); // throws character in, and then should control the rest in this special function; if this works, this will be applied to the egyptians as well
            }

            if(!mosesCaught && !gameOver) {
                for(var i=0;i<crabs.length;i++) {
                    if(showPosition && i > 0 ) {
                        measureNow = false;
                    }
                    mosesCaught = decideIfCaught(mosesX, mosesY, crabs[i].xPosition, crabs[i].yPosition, 'mosesvscrab');
    
                    if(mosesCaught && lives === 0) {
                        gameOver = true;
                        break;
                    } else if(mosesCaught && lives > 0 && !lowerLives) {
                        mosesCaught = false;
                        lowerLives = true;
                        break;
                    }
                }

                if(showPosition && !measureNow) {
                    measureNow = true;
                } else {
                    showPosition = measureNow = false;
                }
            }
        }

        if(!mosesCaught && !lowerLives) {
            mosesCaught = decideIfCaught(mosesX, mosesY, egyptians[0].x, egyptians[0].y, 'moses');

            if(mosesCaught && lives === 0) {
                gameOver = true;
                return;
            } else if(mosesCaught && lives > 0 && !lowerLives) { // got a lot of redundancy going on here
                mosesCaught = false;
                lowerLives = true;
                return;
            } else {
                for(var i=0;i<crabs.length;i++) {
                    mosesCaught = decideIfCaught(mosesX, mosesY, crabs[i].xPosition, crabs[i].yPosition, 'mosesvscrab');

                    if(mosesCaught && lives === 0) {
                        gameOver = true;
                        break;
                    } else if(mosesCaught && lives > 0 && !lowerLives) {
                        mosesCaught = false;
                        lowerLives = true;
                        break;
                    }
                }
            }
        }

        if(powerupBeingUsed && !mosesCaught && !lowerLives) {
            var powerupMoveResults = moveCharacter(powerupY, powerupIncrement, 220, 360);
            powerupX -= googlePixelDevice && (up || down) ? 1.3 + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
            powerupY = powerupMoveResults.y_position;
            powerupIncrement = powerupMoveResults.increment_value;

            if(powerupX <= -20) {
                powerupArriveSource.stop();
                powerupArriveCalled = false;
                volumeController.gain.value = 0.5;
                powerupX = 800;
                powerupY = randomPosition();
                if(powerupY % 2 !== 0 && powerupY % 2 !== 1 || powerupY === NaN) {
                    powerupY = 300;
                }
                powerupBeingUsed = false;
                missedOpportunity = true;
            } // else, everything in this conditional should not be run

            if(!missedOpportunity) {            
                var powerupCaught = decideIfCaught(powerupX, powerupY, mosesX, mosesY, null);

                if(powerupCaught) {
                    powerupBeingUsed = false;
                    autoPilot = true; // set back to original; make it tricky
                    powerupRun = true;
                    powerupFired = true;
                }
            }
        }

        if(lowerLives && lives > 0) {
            return;
        }

        if(mosesCaught && lives === 0) {
            gameOver = true;
        } else if(!mosesCaught && lowerLives && lives > 0) {
            lowerLives = false; // gotta turn that off
        }
        
        if(up) {
            testY -= googlePixelDevice && (up || down) ? 1.3  + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3); // continue here by adding  + speedIncrementFloat 
        } else if(down) {
            testY += googlePixelDevice && (up || down) ? 1.3  + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
        } else if(left) {
            testX -= googlePixelDevice && (up || down) ? 1.3  + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
        } else if(right) {
            testX += googlePixelDevice && (up || down) ? 1.3  + speedIncrementFloat : (slowDown ? 1.3 + speedRateValue : 3);
        }

        moveFlies();
    } else { // should only happen if gameOver === true
        clearCharacters = true;
    }

    if(gameOver) {
        powerupsNecessary = false; // only if it does not work
        powerupBeingUsed = false;
        clearCharacters = true;
    }
}*/


function checkForNearbyNeighbors(yValue) {
    var finalNeighborsAround = [];
    var verticalDistance = 0;

    for(var i=0;i<crabsYPositions.length;i++) {
        verticalDistance = Math.abs(yValue - crabsYPositions[i]); // finds the distance

        if(verticalDistance <= 100 || verticalDistance <= 40) {
            finalNeighborsAround.push(crabsYPositions[i]);
        }
    }

    return finalNeighborsAround;
}

function crabGroupReaction(character) { // algorithmic version of the other procedure
    for(var i=0;i<crabs.length;i++) {
        var characterX = character.x,
            characterY = character.y,
            crabX = crabs[i].xPosition,
            crabY = crabs[i].yPosition;

        var horizontalDistance = Math.abs(characterX - crabX),
            verticalDistance = Math.abs(characterY - crabY);

        var finalDistance = Math.sqrt((horizontalDistance ^ 2) + (verticalDistance ^ 2));

        if(character.distanceFromCrab === undefined) {
            character.distanceFromCrab = finalDistance;
            continue;
        } else if(character.distanceFromCrab > finalDistance && horizontalDistance <= 150 && !lowerLives && !runOnce) { // then the crabs have gotten closer!

            if(crabs[i].onFloor && Math.floor(characterY) <= 360 && Math.floor(characterY) >= 330) {
                character.increment = true; // may change later
                if(character.y === 350) {
                    continue;
                }
                character.y -= 4;
                continue;
            }
            if(crabY <= 360 && crabY >= 340 && Math.floor(characterY) <= 360 && Math.floor(characterY) >= 330) {
                character.increment = false;
                character.y -= 4;
                continue;
            }
            if(characterY > crabY) {
                character.increment = false;
                if(finalDistance <= 70) {
                    character.y += 4; // give them a boost, brother!
                }

                if(character.y > 360) {
                    character.y = 360; // no more overshooting, please
                } 
            } else if(characterY < crabY) {
                if(crabY <= 360 && crabY >= 330 && characterY <= 360 && characterY >= 330 && finalDistance <= 70) {
                    character.increment = false;
                    character.y += 0.8; // may have to change
                    if(character.y > 360) {
                        character.y = 360;
                    }
                } else {
                    character.increment = true;
                    character.y -= 0.8; // may have to change
                    if(character.y < 220) {
                        character.y = 220;
                    }
                }
            } else { // then the computer will choose
                if(crabs[i].yPosition < 300) {
                    character.increment = false;
                } else {
                    character.increment = true;
                }
            }
        }
    } 
}

function moveFlies() {
    if(powerupName === 'flies' && powerupRun && powerupFired && !paused && previousLevel === level) { // it's gotta be all of them or nothing
        for(var i=0;i<annoyingPowerupPosition.length;i++) {
            var incrementValue = Math.random();
            flyPosition1Increment = checkIfIncrement(annoyingPowerupPosition[i].y1);
            flyPosition2Increment = checkIfIncrement(annoyingPowerupPosition[i].y2);
            flyPosition3Increment = checkIfIncrement(annoyingPowerupPosition[i].y3);
            flyPosition4Increment = checkIfIncrement(annoyingPowerupPosition[i].y4);

            annoyingPowerupPosition[i].y1 += flyPosition1Increment ? incrementValue : -incrementValue;
            annoyingPowerupPosition[i].y2 += flyPosition2Increment ? incrementValue : -incrementValue;
            annoyingPowerupPosition[i].y3 += flyPosition3Increment ? incrementValue : -incrementValue;
            annoyingPowerupPosition[i].y4 += flyPosition4Increment ? incrementValue : -incrementValue;

            annoyingPowerupPosition[i].y1 = checkPositions(annoyingPowerupPosition[i].y1);
            annoyingPowerupPosition[i].y2 = checkPositions(annoyingPowerupPosition[i].y2);
            annoyingPowerupPosition[i].y3 = checkPositions(annoyingPowerupPosition[i].y3);
            annoyingPowerupPosition[i].y4 = checkPositions(annoyingPowerupPosition[i].y4);
        }
    }
}

function checkIfIncrement(annoyingPowerupPositionY) {
    var increment = Math.round(Math.random()) === 1 ? true : false;

    if(annoyingPowerupPositionY > 360) {
        increment = false;
    } else if(annoyingPowerupPosition < 220) {
        increment = true;
    } // else, it is left as is

    return increment;
}

function checkPositions(position) { // just for emergencies
    if(position < 220) {
        position = 220;
    } else if(position > 360) {
        position = 360;
    }

    return position;
}

function randomFlyPosition(position) {
    var randomNumber = Math.floor(Math.random() * position);

    if(randomNumber.toString().length === 2) {
        randomNumber *= 10;
    } else if(randomNumber.toString().length === 1) {
        randomNumber *= 100;
    }

    if(randomNumber < 220 || randomNumber > 360) {
        return position; // just go back to where you were
    }
    return randomNumber;
}

function decideIfCaught(x1, y1, x2, y2, characterType) { 
    var horizontalDistance = Math.floor(Math.abs(x2 - x1));
    var verticalDistance = Math.floor(Math.abs(y2 - y1));

    if(characterType === 'moses') {
        if(horizontalDistance <= 20 && horizontalDistance >= 0 && verticalDistance <= 20 && verticalDistance >= 0) {
            return true;
        }
    }

    if(characterType === 'israelite' && horizontalDistance <= 80) {
        showNextPowerup = true;
    }

    if(powerupRun && !powerupBeingUsed && !powerupsNecessary && !powerupJustUsed && horizontalDistance <= 60 && !powerupFired && powerupName !== 'frogs' && powerupName !== 'flies' && characterType === 'israelite') { // only is true if the powerups are anything other than frogs and flies
        powerupRun = false;
        powerupsNecessary = true;
        showPowerup = true;
        timer -= 2; // gives more time just in case
    }

    if(horizontalDistance <= 60 && currentPosition !== lastPosition && characterType === 'israelite' && !powerupBeingUsed && missedOpportunity === false && !powerupRun) { // don't trigger unless scrolling occurs, then measure
        powerupsNecessary = true;
    }

    if(characterType === "israelite" || characterType === 'moses' || characterType === null ) { // this should work for the powerups as well
        if (horizontalDistance <= 20 && horizontalDistance >= 0 &&
            verticalDistance <= 20 && verticalDistance >= 0) {
                return true;
        }
    } else if(characterType === "mosesvscrab") {
        if(crabCount === crabs.length) {
            crabCount = 0;
            showPosition = false;
            measureNow = false; // must force it
        }
        if( horizontalDistance <= 10 && horizontalDistance >= 0 && // semi-normal conditions; trying to fine-tune algorithm
            verticalDistance <= 60 && horizontalDistance >= 0 &&
            horizontalDistance <= 10 && horizontalDistance >= 0 && // normal conditions 
            verticalDistance <= 10 && verticalDistance >= 0 ||
            horizontalDistance <= 25 && horizontalDistance >= 0 && // when moses is below crab
            x1 >= x2 && y1 >= y2 && verticalDistance <= 30 && verticalDistance >= 0 ||
            horizontalDistance <= 25 && horizontalDistance >= 0 && // when moses is above crab
            x1 >= x2 && y1 <= y2 && verticalDistance <= 5 && verticalDistance >= 0) {
                return true;
        }
    } else if(characterType === "moses&shell") {
        if(horizontalDistance <= 25 && horizontalDistance >= 0 &&
            verticalDistance <= 25 && verticalDistance >= 0) {
                return true;
        }
    }
    return false;
}

function findDistance(x1, y1, x2, y2) {
    var distance = Math.sqrt((x2-x1)^2 + (y2-y1)^2);
    return distance;
}

function moveCharacter(y, increment, min, max) { // algorithm that moves characters
    var randomNumber = Math.random();
    var incrementNumber = randomNumber * 2;
    var moving = Math.floor(Math.random() * 10) % 3 === 0 ? false : true;

    if(incrementNumber < 0.3) {
        incrementNumber = 0;
    }
    if(y > max && started || y < min && started) {
        increment = !increment;
    } else if(!started) {
        started = !started;
        if(y === 330) {
            y -= Math.random();
        } else if(y === 250) {
            y += Math.random();
        }
    }

    if(moving) {
        if(increment) {
            y -= y < min ? -1.5 : incrementNumber;
        } else {
            y += y > max ? -1.5 : incrementNumber;
        }
    }

    return {
        y_position: y,
        increment_value: increment
    };

}

