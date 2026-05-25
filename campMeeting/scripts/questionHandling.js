async function loadQuestions() { // loads all questions; prevents delay
	allQuestions = languagePicked === "English" ? [...englishQuestions] : [...spanishQuestions];
    shuffleQuestions();
    allQuestionsLoaded = true;
}

function updateQuestionsInBackground() {
    shuffleQuestions(); // continue shuffling questions each time round ends
}

function shuffleQuestions() {
    for(var i=1;i<allQuestions.length;i++) {
        allQuestions[i] = shuffle(allQuestions[i]); // all questions are shuffled randomly in each level
    }
}

async function bringLevelQuestions() {
	// If language picked, load questions in that language
	if(languagePicked != undefined)
		loadQuestions();
	
    if(!start && !loading) {
        loading = true;
        questionNumber = -1; // just to make sure that is is -1 all the time when the game starts
    }
    if(questions.length > 0) {
        return;
    }

    questions = allQuestions[level]; // just grab the questions for that level

    if(questions === undefined && incorrectAnswers.length === 0) {
        noMoreQuestions = true;
        previousLevel = level;
        questions = []; // made empty as so to prevent bugs
        return;
    } else if(questions === undefined && incorrectAnswers.length > 0) {
        questions = incorrectAnswers.toReversed();
        incorrectAnswers = [];
        if(bonusLevel && bonusLevelAnnounced) {
            previousLevel = level;
        } else {
            bonusLevel = true;
        }
    } // else, just move on

    questionNumber += !checkQuestionLoading ? 1 : 0;

    if(newLevelStarted && questionNumber === 1 && !noMoreQuestions) {
        questionNumber = 0;
        shellOutputTimeLimit -= 0.1; // just to lower it little by little
        if(shells.length === shellMax && shellMax !== 15) {
            shellMax += 4; // let's add more
        }
    } // otherwise, there are no more questions, so we just move on

    if(noMoreQuestions) {
        checkIfEnd(); // makes sure that the game is truly over
        return;
    }

    if(countdownNumber < 600 && level === 1 && questionNumber === 1 && questionNumber !== 0) {
        questionNumber -= 1; // decreases the question number
    }

    if(questionNumber < 0 && !questionsStarted || questionNumber > 0 && !questionsStarted) {
        questionNumber = 0;
    }

    numberOfQuestions = questions.length;

    checkQuestionLoading = true;

    readyToGenerate = true;
}

function generateAnswers() {
    if(readyToGenerate) {
        start = true; // supposed to fix glitch of not starting up
        answer = "";
        checkQuestionLoading = false; // end the silly loop
        if(noMoreQuestions) {
            return;
        }
        if(questions.length === 0 && loading) {
            questionNumber = -1; // let's reset
            bringLevelQuestions();
            generateAnswers();
            return;
        }
        if(A_choice !== undefined || B_choice !== undefined || C_choice !== undefined || D_choice !== undefined) {
            A_choice = B_choice = C_choice = D_choice = undefined;
        }
            var potentialAnswers;
            var answers = [];
            var randomNumber = Math.floor(Math.random() * 10 / 2);

            if(questionNumber > nextQuestionNumber) {
                questionNumber = nextQuestionNumber;
            }

            if(lastQuestion.indexOf('hid him in a basket') !== -1 && questionNumber === 0) {
                questionNumber = 1; // forces question number to the second item
            } 

            if(questionNumber < 0 && !questionsStarted || questionNumber > 0 && !questionsStarted) {
                questionNumber = 0; // forces the computer to start at 0
                questionsStarted = true;
            }

            if(bonusShellCaught) {
                questionNumber = incorrectAnswers.length - 1;
            }

            questionType = bonusShellCaught ? incorrectAnswers[questionNumber].question_type : questions[questionNumber].question_type;

            if(bonusShellCaught) {
                questionFiltered = filterQuestion(incorrectAnswers);
            } else {
                questionFiltered = filterQuestion(questions);
            }

            if(questionType === "match" || questionType === "number") {
                A_BUTTON_POSITION = 290;
                B_BUTTON_POSITION = 170;
            } else if(questionType === "TF") {
                if(A_BUTTON_POSITION !== 170) { // only if this is not the case
                    A_BUTTON_POSITION = 170;
                }
                B_BUTTON_POSITION = D_BUTTON_POSITION;
            } else if(B_BUTTON_POSITION !== 290){
                if(A_BUTTON_POSITION !== 170) {
                    A_BUTTON_POSITION = 170;
                }
                B_BUTTON_POSITION = 290;
            }

            if(questionType === "multiple" || questionType === "TF") {
                if(questionType === "multiple") {
                    if(level === 1 && round === 1 || level !== 1) {
                        potentialAnswers = bonusShellCaught ? incorrectAnswers[questionNumber].potential_answers : questions[questionNumber].potential_answers;
                        answer = bonusShellCaught ? incorrectAnswers[questionNumber].actual_answer : questions[questionNumber].actual_answer;
                        if(bonusShellCaught) {
                            removeBreak = incorrectAnswers[questionNumber].actual_answer_sans_coord !== undefined ? true : false; 
                        } else {
                            removeBreak = questions[questionNumber].actual_answer_sans_coord !== undefined ? true : false;
                        }
                    }
                } else if(questionType === "TF") {
                    if(bonusShellCaught) {
                        answer = incorrectAnswers[questionNumber].actual_answer === "1" ? "true" : "false"; // there are no potential answer
                        answerExplanation = incorrectAnswers[questionNumber].actual_answer_explanation !== null ? incorrectAnswers[questionNumber].actual_answer_explanation : undefined;
                    } else {
                        answer = questions[questionNumber].actual_answer === "1" ? "true" : "false"; // there are no potential answers
                        answerExplanation = questions[questionNumber].actual_answer_explanation !== null ? questions[questionNumber].actual_answer_explanation : undefined;
                    }       
                }

                if(potentialAnswers !== undefined) {
                    if(potentialAnswers.indexOf('a.') !== -1 || potentialAnswers.indexOf('b.') !== -1 ||
                    potentialAnswers.indexOf('c.') !== -1 || potentialAnswers.indexOf('d.') !== -1) {
                        randomNumber = 1;
                        multipleChoiceBuiltIn = true;
                    }
                }

                answers = questionType === "multiple" ? potentialAnswers.split(',') : ['true', 'false']; // only two choices for true / false!!!!!

                for(var i=0;i<answers.length;i++) {
                    if(answers[i].indexOf('[COMMA]') !== -1) {
                        answers[i] = answers[i].replaceAll('[COMMA]', ',');
                    }
                }

                if(questionType === "multiple") {
                    if(randomNumber === 1) {
                        A_choice = answers[0];
                        B_choice = answers[1];
                        C_choice = answers[2];
                        D_choice = answers[3];
                    } else if(randomNumber === 2) {
                        A_choice = answers[1];
                        B_choice = answers[3];
                        C_choice = answers[0];
                        D_choice = answers[2];
                    } else if(randomNumber === 3) {
                        A_choice = answers[1];
                        B_choice = answers[2];
                        C_choice = answers[3];
                        D_choice = answers[0];
                    } else if(randomNumber === 4) {
                        A_choice = answers[2];
                        B_choice = answers[3];
                        C_choice = answers[1];
                        D_choice = answers[0];
                    } else {
                        A_choice = answers[3];
                        B_choice = answers[1];
                        C_choice = answers[2];
                        D_choice = answers[0];
                    }
                } else {
                    A_choice = answers[0];
                    B_choice = answers[1]; // no randomness here!
                }
            } else if(questionType === "match") {
                if(choicePositions.length !== 0 && choicePositions[0][0] !== 160) {
                    choicePositions = [
                        [160, 100 + difference, null, false],
                        [160, 180 + difference, null, false],
                        [160, 260 + difference, null, false],
                        [160, 340 + difference, null, false],
                        [600, 100 + difference, null, false],
                        [600, 180 + difference, null, false],
                        [600, 260 + difference, null, false],
                        [600, 340 + difference, null, false]
                    ];
                }
                answer = bonusShellCaught ? incorrectAnswers[questionNumber].actual_answer : questions[questionNumber].actual_answer;			
                answerSansCoords = bonusShellCaught ? incorrectAnswers[questionNumber].actual_answer_sans_coord : questions[questionNumber].actual_answer_sans_coord; // used for displaying the correct answer if and only if the player gets it wrong
                matchAnswerArray = answer.split(','); // should produce an accurate array of the answers
                matchString = ""; // just to make a clear slate
                matchPositions= []; // must be emptied to prevent overlap
                for(var i=0;i<matchAnswerArray.length;i++) {
                    var item = matchAnswerArray[i]; // need to see what is going on
                    item = matchAnswerArray[i].split('->');
                    var firstItem = item[0].split('(')[0];
                    var secondItem = item[1].split('(')[0];

                    firstItem = removeEndSpace(firstItem);
                    secondItem = removeEndSpace(secondItem);

                    var rightSide = item[1];
                    rightSide = rightSide.split(' ');
                    rightSide = rightSide[rightSide.length - 1];
                    rightSide = rightSide.split(';');

                    var leftSide = item[0];
                    leftSide = leftSide.split(' ');
                    leftSide = leftSide[leftSide.length - 1];
                    leftSide = leftSide.split(';');

                    var firstPosition = leftSide[1];
                    var secondPosition = rightSide[1];

                    firstPosition = firstPosition.split(')(')[1];
                    secondPosition = secondPosition.split(')(')[1];

                    firstPosition = +firstPosition.replace(')', '');
                    secondPosition = +secondPosition.replace(')', '');

                    choicePositions[firstPosition][2] = firstItem;
                    choicePositions[secondPosition][2] = secondItem;

                    var xValue1 = +leftSide[0].replace('(', '');
                    var yValue1 = +leftSide[1].split(')(')[0];
                    
                    var xValue2 = +rightSide[0].replace('(', '');
                    var yValue2 = +rightSide[1].split(')(')[0];

                    matchPositions.push(
                        {
                            x1: xValue1,
                            y1: yValue1,
                            x2: xValue2,
                            y2: yValue2,
                            firstItem: firstItem,
                            secondItem: secondItem
                        }
                    );
                    matchString += firstItem + "->" + secondItem;
                    if(i < matchAnswerArray.length - 1) {
                        matchString += ",";
                    }
                }

                choicePositionNumber = 0;
                choicePositionCursorNumber = 4;
            } else if (questionType === "number") {
                answer = bonusShellCaught ? incorrectAnswers[questionNumber].actual_answer : questions[questionNumber].actual_answer;
                answerSansCoords = bonusShellCaught ? incorrectAnswers[questionNumber].actual_answer_sans_coord : questions[questionNumber].actual_answer_sans_coord;
                numberString = "";
                selectedPositions = [];

                if(answerSansCoords.indexOf('REMOVE_BREAK') !== -1) {
                    removeBreak = true;
                    answerSansCoords = answerSansCoords.replaceAll('[REMOVE_BREAK]', '');
                } else {
                    removeBreak = false; // just to see what happens
                }

                var positions = [1,2,3,4,5,6,7,8];
                
                positions = shuffleArray(positions, 'ordering');

                if(choicePositions.length !== 0) { // then, we have a problem that needs to be fixed
                    choicePositions = [];
                    var count = 60;
                    var splitAnswers = answer.split(',');
                    for(var i=0;i<8;i++) {
                        choicePositions.push([110, count + difference, false, null, i + 1]);
                        count += 50;
                        for(var j=0;j<positions.length;j++) {
                            var number = positions[j]; // if randomizing technique works, we will keep this
                            if(number === choicePositions[i][4]) {
                                choicePositions[i][3] = splitAnswers[j];
                            }
                        }
                    }
                }

                choicePositionNumber = choicePositionCursorNumber = 0; // reset it!
            }


            if(!start) {
                start = true; // should force computer to start game
            }

            if(loading) {
                loading = false;
            }

            if(questions.length === 0 && start) {
                noMoreQuestions = true;
            }

            if(newLevelStarted) {
                newLevelStarted = false;
            }
    }
}

async function pauseAndGetAnswers() {
    await sleep(450);
    generateAnswers();
}

function undoMatchChoice() {
    if(selectedPositions.length === 0) {
        return; // there is nothing to remove
    }
    if(questionType === 'match') {
        var firstValueRemoved = selectedPositions.pop()[2];
        var secondValueRemoved = selectedPositions.pop()[2];

        positionNumbers.pop();

        if(positionNumbers.length === 0) {
            startingCursorNumber.push(4);
        }

        choicePositionNumber--;
        startingCursorNumber = positionNumbers[positionNumbers.length - 1];

        if(choicePositionNumber < 0) {
            choicePositionNumber = 0;
        }

        for(var i=0;i<choicePositions.length;i++) {
            if(choicePositions[i][2] === firstValueRemoved || choicePositions[i][2] === secondValueRemoved) {
                choicePositions[i][3] = false;
            }
        }
        choicePositionCursorNumber = startingCursorNumber;
    } else if(questionType === 'number') {
        var valueRemoved = selectedPositions.pop()[3];

        for(var i=0;i<choicePositions.length;i++) {
            if(choicePositions[i][3] === valueRemoved) {
                choicePositions[i][2] = false; // this should work???
            }
        }

        optionNumber--;
    }
}

function choiceSetup(choiceInput) {
    var choiceOutput = choiceInput.split('[BREAK]');

    if(choiceOutput.length === 1) {
        choiceOutput = choiceOutput[0];
    } else if(choiceOutput.length === 2) {
        choiceOutput = choiceOutput[0] + " " + choiceOutput[1];
    } else if(choiceOutput.length === 3) {
        choiceOutput = choiceOutput[0] + " " + choiceOutput[1] + " " + choiceOutput[2];
    }

    return choiceOutput;
} 

function shuffleArray(array, type = null) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    if(type !== null && type === "ordering") {
        if(array.toString() === "1,2,3,4,5,6,7,8") {
            return shuffleArray(array, 'ordering'); // run it again; this should be rare, though
        }
    }

    return array;
}

function filterQuestion(questionList) {
    if(questionList[questionNumber].question.indexOf('[IGNORE_ANSWER_BREAK]') !== -1) {
        ignoreAnswerBreak = true;
        console.warn('ignoring answer break');
        return questionList[questionNumber].question.replace('[IGNORE_ANSWER_BREAK]', '');
    } else if(questionList[questionNumber].question.indexOf('[REMOVE_TRIPLE_SPACE]') !== -1) {
        removeTripleSpace = true;
        console.warn('removing three spaces');
        return questionList[questionNumber].question.replace('[REMOVE_TRIPLE_SPACE]', '');
    } else if(questionList[questionNumber].question.indexOf('[REMOVE_QUADRUPLE_SPACE]') !== -1) {
        removeQuadrupleSpace = true;
        console.warn('removing four spaces');
        return questionList[questionNumber].question.replace('[REMOVE_QUADRUPLE_SPACE]', ''); 
    } else { 
        console.warn('turning all special conditions off; won\'t turn them on for a while');
        ignoreAnswerBreak = removeTripleSpace = removeQuadrupleSpace = false; // make sure all of these are false
        return questionList[questionNumber].question;
    }
}
