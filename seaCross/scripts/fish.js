function Fish(fishImages, initialYPosition, flipTime) {
    this.fishImages = fishImages;
    this.fishImageId = 1;
    this.fish = this.fishImages[this.fishImageId];
    this.xPosition = fishPositions[fishPositionId];
    this.defaultXPosition = this.xPosition; // to be recalled later
    this.yPosition = initialYPosition;
    this.directionPointer = 1; // start off pointing forward
    this.flipTime = flipTime; // the amount of time that must elapse before fish flip directions
    this.fish_color = this.fishImages[this.fishImageId].src.split("_")[0];

    fishPositionId++;

    this.drawFish = function() {
        try {
            if(allFishLoaded && this.fish.src !== undefined) {
                canvasContext.drawImage(this.fish, this.xPosition, this.yPosition, 50, 50);
            }
        } catch (error) { // looks like image has to be reloaded
            this.fishImages[0].src = this.fish_color + "_fish_left.png";
            this.fishImages[1].src = this.fish_color + "_fish.png"; 
        }
    }

    this.randomizeDirection = function() {
        var randomNumber = Math.round(Math.random());
        this.fishImageId = randomNumber;
        this.directionPointer = randomNumber === 0 ? -1 : 1;
    }

    this.checkPosition = function() {
        if(this.xPosition <= currentPosition) {
            this.directionPointer = 1;
        } else if(this.xPosition >= currentPosition + seaWidth - 50) {
            this.directionPointer = -1;
        } else if(this.xPosition < -50) {
            if(currentPosition + seaWidth - 50 > canvas.width) {
                this.xPosition = 799;
            } else {
                this.directionPointer = 1;
            }
        } else if(this.xPosition > canvas.width) {
            if(currentPosition + seaWidth - 50 > canvas.width && currentPosition < 0) {
                this.xPosition = -49;
            } else {
                this.directionPointer = -1; // bounce back
            }
        }
    }

    this.resetPosition = function() {
        this.xPosition = this.defaultXPosition;
    }

    this.resetDirection = function() {
        this.directionPointer = 1;
        this.flipPhysicalDirection();
    }

    this.flipPhysicalDirection = function(displacement) {       
        if(currentPosition < 0 && currentPosition + seaWidth - 50 > canvas.width && currentPosition < 0) {
            this.fish = this.fishImages[this.fishImageId];
            return;
        }
        
        if(this.directionPointer === -1 || displacement === 1.5) { // may have to find a cleaner way to express this, but this is what I have for now
            this.fish = this.fishImages[0];
        } else if(this.directionPointer === 1 || displacement === 0.5) {
            this.fish = this.fishImages[1];
        }

        if(this.directionPointer === -1 && this.fish.src.indexOf('fish.png') !== -1) {
            this.fish = this.fishImages[0];
        } else if(this.directionPointer === 1 && this.fish.src.indexOf('_left.png') !== -1) {
            this.fish = this.fishImages[1];
        }
    }
}

function Crab() {
    this.walking = Math.round(Math.random()) === 1 ? true : false;
    this.xPosition = canvas.width; // starts off screen
    this.yPosition = canvas.height / 2; // will randomize later
    this.frame = crabWalkPositions[0];
    this.lastYPosition = this.yPosition;
    this.timesRun = 0; // this is a test variable that will be rendered useless in the future
    this.onFloor = false; // starts false, but then becomes true as necessary
    

    this.drawCrab = function() {
        canvasContext.drawImage(this.frame, this.xPosition, this.yPosition, 50, 50);
    }
}

function Shell() {
    this.generatedShellId = Math.round(Math.random());

    this.xPosition = canvas.width; // starts off screen
    this.yPosition = 0;
    this.lastYPosition = this.yPosition; // may or may not use
    this.shell = shellColors[this.generatedShellId];
    this.value = this.generatedShellId === 1 ? 4 : 2; // blue is better than pink; let's add a bit of bias
    this.caught = false;
    
    this.drawShell = function() {
        canvasContext.drawImage(this.shell, this.xPosition, this.yPosition, 30, 30);
    }

    this.randomizeYPosition = function() {
        var randomNumberForArray = Math.floor(Math.random() * 10);

        if(randomNumberForArray > CRAB_POSITIONS.length) {
            randomNumberForArray = CRAB_POSITIONS.length - 1;
        }

        var finalNumber = CRAB_POSITIONS[randomNumberForArray];

        if(finalNumber === undefined) {
            finalNumber = 300; // this is the default
        }
        
        this.yPosition = finalNumber;
    }

    this.resetShell = function() { // supposed to generate a new shell
        this.xPosition = canvas.width;
        this.randomizeYPosition();
        this.generatedShellId = Math.round(Math.random());
        this.shell = shellColors[this.generatedShellId];
        this.value = this.generatedShellId === 1 ? 4 : 2;
        this.caught = false;
    }

    this.randomizeYPosition(); // let's make the positions random, please
}