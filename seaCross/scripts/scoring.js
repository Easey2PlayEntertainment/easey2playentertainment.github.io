function checkAnswersAndScore() {
    bonusShellCaught ? null : nextQuestionNumber++;
    powerupJustUsed = false; // just to remove any other issues already
    
    if(decisionMade) {
        decisionMade = false;
    }

    lastQuestionTypeUsed = questionType;

    var lastQuestionNumber = questionNumber;

    if(crabOutputIncrement) {
        crabOutput += 2;
        crabOutputIncrement = false;
    }
    if(missedOpportunity) {
        missedOpportunity = false;
        powerupBeingUsed = true;
    }
    if(questionType === 'multiple' || questionType === 'TF') {
        var firstChoice = A_choice;
        var secondChoice = B_choice;
        var thirdChoice = C_choice;
        var fourthChoice = D_choice;

        if(questionBrought) {
            if(a && firstChoice === answer ||
               b && secondChoice === answer ||
               c && thirdChoice === answer ||
               d && fourthChoice === answer) {
                    score += questionType === 'multiple' ? 3 : 1; // true-false questions are easy to get sometimes, so lesser points ;)
                    if(highScore < score) {
                        highScore = score;
                    }
                    questionBrought = false;
                    answerCorrect = true;
                    numberOfQuestionsBeforeRelease--;
                    if(bonusShellCaught) {
                        incorrectAnswers.pop();
                    }
                    correctAnswerCount++;
            } else {
                egyptiansMove = true;
                incorrectAnswers.push(questions[questionNumber]); // will have to be done later
                incorrectCount++;
                answerCorrect = false;
                numberOfQuestionsBeforeRelease = NUMBER_OF_QUESTIONS_BEFORE_RELEASE;
                bonusShellCountdown = 5;
                correctAnswerCount = 0;
            }
        }
    } else if(questionType === 'match') {
        var answerString = "";

        for(var i=0;i<selectedPositions.length;i++) {
            answerString += selectedPositions[i][2];

            if(i % 2 === 0) {
                answerString += "->";
            } else if(i % 2 === 1 && i < selectedPositions.length - 1) {
                answerString += ",";
            }
        }

        if(answerString === matchString) {
            score += 5;
            if(highScore < score) {
                highScore = score;
            }
            answerCorrect = true;
            numberOfQuestionsBeforeRelease--;
            if(bonusShellCaught) {
                incorrectAnswers.pop();
            }
            correctAnswerCount++;
        } else {
            egyptiansMove = true;
            incorrectAnswers.push(questions[questionNumber]);
            incorrectCount++;
            answerCorrect = false;
            numberOfQuestionsBeforeRelease = NUMBER_OF_QUESTIONS_BEFORE_RELEASE;
            bonusShellCountdown = 5;
            correctAnswerCount = 0;
        }
    } else if(questionType === 'number') {
        var finalString = '';
        for(var i=0;i<selectedPositions.length;i++) {
            finalString+=selectedPositions[i][3];

            if(i < selectedPositions.length - 1) {
                finalString += ',';
            }
        }

        if(finalString === answer) {
            score += 7; // the perfect number!
            answerCorrect = true;
            numberOfQuestionsBeforeRelease--;
            if(bonusShellCaught) {
                incorrectAnswers.pop();
            }
            correctAnswerCount++;
        } else {
            egyptiansMove = true;
            incorrectAnswers.push(questions[questionNumber]);
            incorrectCount++;
            answerCorrect = false;
            numberOfQuestionsBeforeRelease = NUMBER_OF_QUESTIONS_BEFORE_RELEASE;
            bonusShellCountdown = 5;
            correctAnswerCount = 0;
        }
    }

    volumeController.gain.value = 0;

    if(answerCorrect) {
        playSound(answerCorrectBuffer); // played only once
    } else {
        playSound(answerIncorrectBuffer);
    }

    if(ignoreAnswerBreak) {
        answer = answer.replace('[BREAK]', ' ').replaceAll('    ', ''); // make sure there is no extra unatural spaces
        ignoreAnswerBreak = false;
    }

    if(removeTripleSpace) {
        answer = answer.replace('   ', '');
        removeTripleSpace = false;
    }

    if(removeQuadrupleSpace) {
        answer = answer.replace('    ', '');
        removeQuadrupleSpace = false;
        console.warn('removeQuadrupleSpace is', removeQuadrupleSpace); // just to make sure everything came through properly
    }

    if(removeBreak && !matchOrNumber) { // then, remove that one break tag
        answer = answer.replace('[BREAK]', ' ').replaceAll('  ', ' '); // just in case there are spaces left over
        removeBreak = false;
    }

    decideIfCaught(israelites[israelites.length - 1].x, israelites[israelites.length - 1].y, egyptians[0].x + incorrectCount, egyptians[0].y, 'israelite');

    var matchOrNumber = questionType === "match" || questionType === "number"; // returns true or false
    correctAnswerValue = (matchOrNumber && !removeBreak ? '[BREAK][BREAK]' : '[BREAK]') + (matchOrNumber ? answerSansCoords : answer) +'[BREAK][BREAK]' + (answerExplanation !== undefined && questionType !== 'match' && questionType !== 'number' && questionType !== 'multiple' ? answerExplanation : ''); // to prevent any more bugs from occurring
    questionGraded = true;
    questionBrought = false;
    timer = 0;
    timerEnd = 10;
    questionNumber = bonusShellCaught ? nextQuestionNumber + 1 : questionNumber + 1;

    removeBreak = false;
    console.warn(removeBreak, 'it is now');

    if(questionType === "match" || questionType === "number") {
        selectedPositions = [];
        choicePositionNumber = 0;
        choicePositionCursorNumber = 4;
    }

    optionNumber = 1;

    if(bonusShellCaught) {
        bonusShellCaught = false;
    }
    if(incorrectAnswers.length > 0 && answerCorrect) {
        bonusShellCountdown--;
        if(bonusShellCountdown === 0) {
            bonusShellNeeded = true;
        }
    }
    if(multipleChoiceBuiltIn) {
        multipleChoiceBuiltIn = false;
    }

    if(questionNumber > nextQuestionNumber || questionNumber > questions.length) {
        questionNumber = nextQuestionNumber; // it has got to be equal at all times
    }

    clearChoicePositions();

    if(questionNumber < questions.length) {
        generateAnswers();
    } else if(questionNumber === questions.length) {
        questionNumber = -1;
        level++;newLevelStarted = true;
        newLevelMute = true;
        finishLevelQuestionType = questionType;
        nextQuestionNumber = 0;
        questions = [];
        a = b = c = d = false;
        controlPowerupDuration();
        bringLevelQuestions();
    }

    if(lastQuestionNumber === questionNumber) {
        questionNumber += 1;
        generateAnswers();
    }

    if(a || b || c || d) {
        a = b = c = d = false;
    }
}

function zeroedScore(n) {
    var stringedScore = n.toString();
    var negative = false;
    if(n < 0) {
        stringedScore = stringedScore.split('-')[1];
        negative = !negative;
    }
    if(n < 10) {
        stringedScore = "0000" + stringedScore;
    } else if(n < 100) {
        stringedScore = "000" + stringedScore;
    } else if(n < 1000) {
        stringedScore = "00" + stringedScore;
    } else if(n < 10000) {
        stringedScore = "0" + stringedScore;
    }

    if(negative) {
        stringedScore = "-" + stringedScore;
    }

    return stringedScore;
} 

function clearChoicePositions() {
    for(var i=0;i<choicePositions.length;i++) {
        if(questionType === "match") {
            choicePositions[i][2] = null;
            choicePositions[i][3] = false;
        } else { // must be a numbering exercise, which uses different syntax
            choicePositions[i][3] = null;
            choicePositions[i][2] = false;
        }
    }
}

function checkCorrectAnswerCount() {
    if(correctAnswerCount === 10) {
        correctAnswerCount = 0;
        newLifeGained = true;
        lives++; // you regain a life
    }
}