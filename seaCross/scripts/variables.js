var canvas, canvasContext, centeredCanvas = document.getElementsByClassName('center_item')[0];

var fullScreenButton = $('fullScreenButton'); // not really a button; more like an anchor tag
var fullScreen = false;

var body = document.body;

var finalBottomNumber = 200;

var windowHeight = window.innerHeight;

var seaWidth, seaHeight, seaYPosition;

var exitKey = false;
var a = false;
var b = false;
var c = false;
var d = false;

var up = false;
var down = false;
var left = false;
var right = false;

var fingerTouch = false;

var start = false;
var paused = false;

var lives = 3; // starts off as three lives
var lowerLives = false;

var runOnce = false;

var upArrowX = 50;var upArrowY = 150;
var downArrowX = 50, downArrowY = 450; // work here later

var pauseResumeX = 680, pauseResumeY = 500;

var screenWidth, screenHeight;

var wigImage = document.createElement('img');
var wigImageLoaded = false;

var orangeFishImages  = [document.createElement('img'),document.createElement('img')],
    purpleFishImages  = [document.createElement('img'),document.createElement('img')],
    greenFishImages   = [document.createElement('img'),document.createElement('img')],
    redFishImages     = [document.createElement('img'),document.createElement('img')],
    yellowFishImages  = [document.createElement('img'),document.createElement('img')],
    purpleFish2Images = [document.createElement('img'),document.createElement('img')],
    greenFish2Images  = [document.createElement('img'),document.createElement('img')],
    redFish2Images    = [document.createElement('img'),document.createElement('img')];

var orangeFishLoaded1 = false,
    orangeFishLoaded2 = false,
    purpleFishLoaded1 = false,
    purpleFishLoaded2 = false,
    greenFishLoaded1  = false,
    greenFishLoaded2  = false,
    redFishLoaded1    = false,
    redFishLoaded2    = false,
    yellowFishLoaded1 = false,
    yellowFishLoaded2 = false,
    purpleFish2Loaded1= false,
    purpleFish2Loaded2= false,
    greenFish2Loaded1 = false,
    greenFish2Loaded2 = false,
    redFish2Loaded1   = false,
    redFish2Loaded2   = false;

var allFishLoaded = false;

var demoFish1Position = 600,
    demoFish2Position = 540,
    demoFish3Position = 480,
    demoFish4Position = 420;

var demoMosesPosition,
    demoIsraelite1Position,
    demoIsraelite2Position,
    demoIsraelite3Position;

    var demoIsraelite2Images = [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var demoIsraelite2FrameId = 0;
    var demoIsraelite2Image1Loaded = demoIsraelite2Image2Loaded = demoIsraelite2Image3Loaded = demoIsraelite2Image4Loaded = false;

    var demoIsraelite3Images = [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var demoIsraelite3FrameId = 0;
    var demoIsraelite3Image1Loaded = demoIsraelite3Image2Loaded = demoIsraelite3Image3Loaded = demoIsraelite3Image4Loaded = false;

var demoCrab1Position = 20,
    demoCrab2Position = 80,
    demoCrab3Position = 140,
    demoCrab4Position = 200;

var crabWalkPositions = [document.createElement('img'), document.createElement('img'), document.createElement('img')];
var crabImage1Loaded = false,
    crabImage2Loaded = false,
    crabImage3Loaded = false;

var currentCrabImage;

var chameleon = ['red', 'lightblue', 'green', 'yellow'];
var chameleonID = 0;

var crabs = [];
var crabOutput = 1;
var crabOutputIncrement = false;

const CRAB_POSITIONS = [220,240, 260,  280,  300, 320,  340,  360];

var shells = [];
var shellMax = 3;
var shellOutput = 1; // may or may not be used
var shellOutputIncrement = false; // may or may not be used
var shellOutputTimer = 0; // first starts off as 0; counts by 0.5
var shellOutputTimeLimit = 2;

var shellColors = [document.createElement('img'), document.createElement('img')];

var pinkShellLoaded = false,
    blueShellLoaded = false;

var bonusShellFrames = [document.createElement('img'), document.createElement('img')];
var bonusShellFrameId = 0;
var bonusShellX = 800; // always hidden until needed
var bonusShellY = randomPositionBonusShell(); // randomize it from the start!
var bonusShellNeeded = false;
var bonusShellCountdown = 5;
var bonusShellCaught = false;

var bonusShellFrame1Loaded = false,
    bonusShellFrame2Loaded = false;

var fishPositionId = 0;
var fishPositions = [400, 500, 600, 400, 500, 600, 500, 400];
var fishDirectionTimer = 0;
var flipTimeChoices;

var fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8;

var noMoreQuestions = false; 

var win = false;

var currentPosition;
var lastPosition;

var A_choice, B_choice, C_choice, D_choice; // will be used to distribute the multiple choice answers

var mosesX = -35;
var mosesY = 290;
var mosesIncrement = Math.floor(Math.random()) >= 1 ? true : false; // lets the computer choose which direction moses should go
var mosesCaught = false;
var mosesImages = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
var mosesDeadImages = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
var mosesImage1Loaded = false,
    mosesImage2Loaded = false,
    mosesImage3Loaded = false,
    mosesImage4Loaded = false;

var mosesImagesLoaded = false;

var mosesImageDead1Loaded = false,
    mosesImageDead2Loaded = false,
    mosesImageDead3Loaded = false,
    mosesImageDead4Loaded = false;
var mosesImageId = 0; // start on the first stance, bro!

var mosesEyeBlinkImage = document.createElement('img');
var mosesEyeBlinkImageLoaded = false;

var mosesBlinkNow = false;
var mosesBlinkCounter = 0;

var gameOver = false;
var crossedOver = false;

var started = false;

var score = 0;
var highScore = 0;
var lastHighScore;

var countdownNumber = 0;

var testX = 0;
var testY = 0;

var confirmed = false;

var timer = 0;
var timerEnd = 16;
var timerSetToZeroOnce = false;
var timerReset = false;

var level = 1; // set back to 1 when done testing
var newLevelStarted = false;

var allQuestions = [];
var allQuestionsLoaded = false;

var questions = [];
var questionNumber = -1;
var questionBrought = false;

var nextQuestionNumber = 0;

var questionType;

var lastQuestion = "";

var referenceHolderQuestion = "";

var incorrectAnswers = []; // used for collecting questions answered incorrectly

var incorrectCount = 0;

var questionGraded = false;

var questionYPosition = 140;
var difference = questionYPosition - 75;

var answer, answerSansCoords, answerExplanation, correctAnswerValue, answerCorrect = false;

var egyptiansMove = false;
var egyptianStepCount = 0;
var egyptiansCurrentPosition = 0;

var multipleChoiceBuiltIn = false;

var clearCharacters = false;

var numberOfQuestions = 0;

var previousLevel = 1;

var move = true;

var checkQuestionLoading = false;
var readyToGenerate = false;

var egyptianBlinkImage = document.createElement('img');
var egyptianBlinkImageLoaded = false;

var egyptianBlinkImageLeft = document.createElement('img');
var egyptianBlinkImageLeftLoaded = false;

var egyptianBlinks = [
    {
        blinkNow: false,
        counter: 0,
        trigger: 7
    },
    {
        blinkNow: false,
        counter: 4,
        trigger: 7
    },
    {
        blinkNow: false,
        counter: 5,
        trigger: 10
    },
    {
        blinkNow: false,
        counter: 0,
        trigger: 10
    },
    {
        blinkNow: false,
        counter: 4,
        trigger: 8
    },
    {
        blinkNow: false,
        counter: 0,
        trigger: 8
    },
    {
        blinkNow: false,
        counter: 7,
        trigger: 14
    },
    {
        blinkNow: false,
        counter: 0,
        trigger: 14
    },
    {
        blinkNow: false,
        counter: 0,
        trigger: 5
    },
    {
        blinkNow: false,
        counter: 3,
        trigger: 5
    },
    {
        blinkNow: false,
        counter: 1,
        trigger: 7
    },
    {
        blinkNow: false,
        counter: 2,
        trigger: 8
    },
    {
        blinkNow: false,
        counter: 3,
        trigger: 9
    }
];

var israeliteBlinks = [
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 6,
        trigger: 7
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 9 
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 5
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 12
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 10
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 5
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 0,
        trigger: 8
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 7,
        trigger: 12
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 5,
        trigger: 10
    },
    {
        image: document.createElement('img'),
        loaded: false,
        blinkNow: false,
        counter: 3,
        trigger: 9
    }
];

var israelites = [
    {
        x: 320 - 610 + 260 - 20 - 30,
        y: 220,
        startingY: 220,
        increment: true, 
        name: 'israelite1',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 285 - 610 + 260 - 20 - 30,
        y: 360,
        startingY: 360,
        increment: false, 
        name: 'israelite2',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 250 - 610 + 260 - 20 - 30,
        y: 290,
        startingY: 290,
        increment: Math.floor(Math.random()) >= 1 ? true : false, 
        name: 'israelite3',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 215 - 610 + 260 - 20 - 30,
        y: 220,
        startingY: 220,
        increment: true, 
        name: 'israelite4',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 180 - 610 + 260 - 20 - 30,
        y: 360,
        startingY: 360,
        increment: false, 
        name: 'israelite5',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 145 - 610 + 260 - 20 - 30,
        y: 290,
        startingY: 290,
        increment: Math.floor(Math.random()) >= 1 ? true : false, 
        name: 'israelite6',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 110 - 610 + 260 - 20 - 40,
        y: 220,
        startingY: 220,
        increment: true, 
        name: 'israelite7',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 75 - 610 + 260 - 20 - 50,
        y: 360,
        startingY: 360,
        increment: false, 
        name: 'israelite8',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 40 - 610 + 260 - 20 - 80,
        y: 290,
        startingY: 290,
        increment: Math.floor(Math.random()) >= 1 ? true : false, 
        name: 'israelite9',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    },{
        x: 5 - 610 + 260 - 20 - 110,
        y: 220,
        startingY: 220,
        increment: true, 
        name: 'israelite10',
        distanceFromCrab: undefined,
        images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
        imageId: Math.round(Math.random())
    }
];

var egyptians = [{
x:-650 - 15,
y:220,
startingY: 220,
increment:true,
name: 'egyptian1',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-685 - 15,
y:360,
startingY: 360,
increment:false,
name: 'egyptian2',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-720 - 15,
y:290,
startingY: 290,
increment:false,
name: 'egyptian3',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-755 - 15,
y:220,
startingY: 220,
increment:true,
name: 'egyptian4',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-790 - 15,
y:360,
startingY: 360,
increment:false,
name: 'egyptian5',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-825 - 15,
y:290,
startingY: 290,
increment:false,
name: 'egyptian6',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-860 - 15,
y:220,
startingY: 220,
increment:true,
name: 'egyptian7',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-895 - 15,
y:360,
startingY: 360,
increment:false,
name: 'egyptian8',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-930 - 15,
y:290,
startingY: 290,
increment:false,
name: 'egyptian9',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-965 - 15,
y:220,
startingY: 220,
increment:true,
name: 'egyptian10',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-1000 - 15,
y:360,
startingY: 360,
increment:false,
name: 'egyptian11',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-1035 - 15,
y:290,
startingY: 290,
increment:false,
name: 'egyptian12',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}
,
{
x:-1070 - 15,
y:220,
startingY: 220,
increment:true,
name: 'egyptian13',
distanceFromCrab: undefined,
positionSettled: true,
images: [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')],
imageId: Math.round(Math.random())
}];

var demoEgyptian1Position = 20 + 270,
    demoEgyptian2Position = 70 + 270,
    demoEgyptian3Position = 120 + 270,
    demoEgyptian4Position = 170 + 270;

    // var demoCrab1Position = 20,
    // demoCrab2Position = 80,
    // demoCrab3Position = 140,
    // demoCrab4Position = 200;

var demoEgyptianImages = [document.createElement('img'), document.createElement('img'),document.createElement('img'),document.createElement('img')];
var demoEgyptianFrameId = 0;
var demoEgyptianImage1Loaded = demoEgyptianImage2Loaded = demoEgyptianImage3Loaded = demoEgyptianImage4Loaded = false;

var israelitesReboot = [];
var egyptiansReboot = [];

var rebootsLoaded = false;

var caughtIsraelites = []; // this is their prison cell

var numberOfQuestionsBeforeRelease = 5;

const NUMBER_OF_QUESTIONS_BEFORE_RELEASE = 5;

var egyptiansFrontAndBackDistance = Math.abs(egyptians[egyptians.length - 1].x - egyptians[0].x) + 35; // used for calculating running values

var annoyingPowerupPosition = [], // WORK WITH THESE VARIABLES
    annoyingPowerupPositionNumber = 0,
    annoyingPowerupPositionCleaned = false;

var flyPosition1Increment = false,
    flyPosition2Increment = true,
    flyPosition3Increment = false,
    flyPosition4Increment = true;

var allIsraeliteImagesLoaded = false;
var allEgyptianImagesLoaded = false;

const FINAL_HEIGHT = 35;

var errorMessage = "";

var questionsStarted = false;

var originalIsraelitePositions = israelites;
var originalEgyptianPositions = egyptians;

var timeout;

var loading = true;

var round = 1;

var lastValue = -1; // used for bug fix

var gameOverScriptRun = false;

var matchString = "",
    matchAnswerArray = [];

var matchPositions = []; // should be a max of 6 positions

var numberString = "";
var numberPositions = []; // most likely will be needed

var choicePositions = [
    [160, 100 + difference, null, false],
    [160, 180 + difference, null, false],
    [160, 260 + difference, null, false],
    [160, 340 + difference, null, false],
    [600, 100 + difference, null, false],
    [600, 180 + difference, null, false],
    [600, 260 + difference, null, false],
    [600, 340 + difference, null, false]
];
var choicePositionNumber = 0;
var choicePositionCursorNumber = 4;
var startingCursorNumber = 4;

var selectedPositions = [];

var positionNumbers = [4];

var optionNumber = 1;

var testRun = true;

var autoPilot = true;

var powerupsNecessary = false;
var powerups = ['darkness', 'cloudPillar', 'firePillar', 'frogs', 'flies'];
var powerupSpriteId = 0; // starts at the beginning
var powerupSprites = [
    {
        name: "darkness",
        thumbnail: document.createElement('img'),
        actual_image: document.createElement('img'),
        imageCount: 0,
        imagesLoaded: false
    },
    {
        name: "cloudPillar",
        thumbnail: document.createElement('img'),
        actual_images: [document.createElement('img'), document.createElement('img')],
        imageCount: 0,
        imageId: 0,
        imagesLoaded: false
    }, 
    {
        name: 'firePillar',
        thumbnail: document.createElement('img'),
        actual_images: [document.createElement('img'), document.createElement('img')], // plural form, just sayin'
        imageCount: 0,
        imageId: 0, // starts on 0; this is a variant
        imagesLoaded: false
    }, 
    {
        name: 'frogs',
        thumbnail: document.createElement('img'),
        actual_image: document.createElement('img'),
        imageCount: 0,
        imagesLoaded: false
    }, 
    {
        name: 'flies',
        thumbnail: document.createElement('img'),
        actual_images: [document.createElement('img'), document.createElement('img')],
        imageCount: 0,
        imageId: 0,
        imagesLoaded: false
    }
];
var powerupNumber = 0;
var powerupName;
var powerupBeingUsed = false;
var powerupJustUsed = false;
var powerupIncremented = false;
var previousPowerup;
var lastPowerupSet;
var shuffleCount = 0;
var powerupImagesLoaded = false;

var showPowerup = true;

var frontEgyptianX; // used for a special reason

var powerupX = 800;
var powerupY = 300;
var powerupIncrement = false;

var powerupFired = false;

var powerupRun = false;

var powerupDuration = timerEnd; // will be updated as levels move on

var showNextPowerup = false;

var missedOpportunity = false;

var remainder = 0;

var usedPowerups = [];

var testCounter = 0;

var showPosition = false;
var measureNow = false;

var crabCount = 0;

var allPositionsSettled = true;

var finishLevelQuestionType = null;
var lastQuestionTypeUsed;

var livesDisplayManipulateNumber = 0;

var correctAnswerCount = 0; // starts as 0, but goes up as the game goes on

var bonusLevel = false,
    bonusLevelAnnounced = false;

var cursor = true;

var index = 0;
var validButtons = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,32];

var middle = 0;

var arcadeMode = false;

var alphabet = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'];
var alphabetId = -1; // always starts there

var screenBlacked = false;

var mobileVersion = false;
var screenTapped = false;

var offsetX, offsetY; // nothing for now

var mouseMoved = false;

var   A_BUTTON_POSITION = 170; // A if multiple choice; TRUE if true/false
var   B_BUTTON_POSITION = 290; // will be changing here and there
var   C_BUTTON_POSITION = 410;
var   D_BUTTON_POSITION = 530; // D if multiple choice; TRUE if true/false

const DELETE_BUTTON_POSITION = A_BUTTON_POSITION;
const SELECT_BUTTON_POSITION = D_BUTTON_POSITION;

var aButtonScaledPosition, bButtonScaledPosition, cButtonScaledPosition, dButtonScaledPosition, pauseButtonScaledPosition, upArrowScaledPosition, downArrowScaledPosition;
var scaledYLowerPosition, scaledYHigherPosition, pauseResumeYLowerPosition, pauseResumeYHigherPosition, upArrowYLowerPosition, upArrowYHigherPosition, downArrowYLowerPosition, downArrowYHigherPosition; // will be the ranges for the button positions; value depends on size of screen and whether or not the user is on full-screen or not

var mobileKeyboardButtons = [{button: 'q', xPosition: 78, yPosition: 383, width: 50, height: 50},{button: 'w', xPosition: 148, yPosition: 383, width: 50, height: 50},{button: 'e', xPosition: 218, yPosition: 383, width: 50, height: 50},{button: 'r', xPosition: 288, yPosition: 383, width: 50, height: 50},{button: 't', xPosition: 358, yPosition: 383, width: 50, height: 50},{button: 'y', xPosition: 428, yPosition: 383, width: 50, height: 50},{button: 'u', xPosition: 498, yPosition: 383, width: 50, height: 50},{button: 'i', xPosition: 568, yPosition: 383, width: 50, height: 50},{button: 'o', xPosition: 638, yPosition: 383, width: 50, height: 50},{button: 'p', xPosition: 708, yPosition: 383, width: 50, height: 50},{button: 'a', xPosition: 108, yPosition: 443, width: 50, height: 50},{button: 's', xPosition: 178, yPosition: 443, width: 50, height: 50},{button: 'd', xPosition: 248, yPosition: 443, width: 50, height: 50},{button: 'f', xPosition: 318, yPosition: 443, width: 50, height: 50},{button: 'g', xPosition: 388, yPosition: 443, width: 50, height: 50},{button: 'h', xPosition: 458, yPosition: 443, width: 50, height: 50},{button: 'j', xPosition: 528, yPosition: 443, width: 50, height: 50},{button: 'k', xPosition: 598, yPosition: 443, width: 50, height: 50},{button: 'l', xPosition: 668, yPosition: 443, width: 50, height: 50},{button: 'ENTER', xPosition: 738, yPosition: 443, width: 50, height: 50},{button: 'z', xPosition: 138, yPosition: 503, width: 50, height: 50},{button: 'x', xPosition: 208, yPosition: 503, width: 50, height: 50},{button: 'c', xPosition: 278, yPosition: 503, width: 50, height: 50},{button: 'v', xPosition: 348, yPosition: 503, width: 50, height: 50},{button: 'b', xPosition: 418, yPosition: 503, width: 50, height: 50},{button: 'n', xPosition: 488, yPosition: 503, width: 50, height: 50},{button: 'm', xPosition: 558, yPosition: 503, width: 50, height: 50},{button: '-', xPosition: 628, yPosition: 503, width: 50, height: 50},{button: 'SPACE', xPosition: 278, yPosition: 563, width: 250, height: 50},{button: 'BACKSPACE', xPosition: 688, yPosition: 563, width: 100, height: 50}];
var lastKey;
var buttonHoldCount = 0;
// NOTE: Variable for y position (currently set at 520) will be replaced by a constant if and only if the other question panels don't engulf the buttons

var runTime = 0;

var isTouching = false;
var eventInfo; // used to hold event information

var scaledHeight, scaledWidth;

var readyFinished = false;
var livesManipulated = false;
var readyCounter = 0;

var sendingResults = false;

var progressFinalWidth = 400,
    frequency = 0,
    numberOfCases = 150;

var removeBreak = false;

var justDied;

var backgroundScoreLoaded = false;
var startupThemePlayed = false;

var run = 0;
var momentOfSilence = false;

var gameOverMusic;

var backgroundScoreBuffer = null,
    backgroundScoreHalf1Buffer = null,
    backgroundScoreHalf2Buffer = null,
    startupThemeBuffer = null,
    justDiedBuffer = null,
    gameOverMusicBuffer = null,
    catchShellBuffer = null,
    answerCorrectBuffer = null,
    answerIncorrectBuffer = null,
    powerupArriveBuffer = null,
    darknessBuffer = null,
    cloudPillarBuffer = null,
    firePillarBuffer = null,
    frogsJumpingBuffer = null,
    fliesBuzzingBuffer = null,
    bonusShellCaughtBuffer = null,
    bonusLevelBuffer = null,
    justWonBuffer = null,
    newLevelReachedBuffer = null,
    newLifeGainedBuffer = null;


var backgroundScoreSource, startupThemeSource, justDiedSource, gameOverMusicSource, catchShellSource, powerupArriveSource, darknessSource, cloudPillarSource, firePillarSource, frogsJumpingSource, fliesBuzzingSource,bonusShellCaughtSource,bonusLevelSource;

var catchShellFXPausedStart = false;

var newLevelReachedPlayed = false;

var newLifeGained = false;

var context;

var backgroundResetCauseOfDeath = false;
var powerupArriveCalled = false;
var powerupArriveInterrupted = false; 

var volumeController;

var loopedPowerupSoundPlayed = false;

var bonusShellCaughtSoundPlayed = false;

var bonusLevelReachedPlayed = false;

var bonusLevelBackgroundEstablished = false;

var backgroundScoreEstablished = false;

var readyShow = false;

var ignoreAnswerBreak = false;
var removeTripleSpace = false;
var questionFiltered;

var newLevelMute = false;

var perishableItems;

var removeQuadrupleSpace = false;

var decisionMade = false;

var muteDuringQuestions = false;
var muteMusicCheckbox;

var url;

var timesPlayed = 0;

var buttonFlashBlue = false;
var playButton;

var allBlinksLoaded = false;

var googlePixelDevice = false;

var incorrectAnswersDataCollector = [];
