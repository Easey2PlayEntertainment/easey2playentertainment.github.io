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

// Promotional Images for visiting website and donations page
var qrCodeImage = document.createElement('img');
var financeQrCodeImage = document.createElement('img');

// retro logo
var retroLogoImage = document.createElement('img');

// promotional images and retro logo image load flags
var qrCodeImageLoaded = false,
	financeQrCodeImageLoaded = false;
	
var retroLogoImageLoaded = false;

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
var preventBonusShellCrabPush = false;

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

var allQuestions = allQuestions = [ // main array
    [ // array for Mark
        [ // Mark - level 1
            // Mark 1:6
            {
                question_type: "multiple",
                question: "What did John the Baptist eat?",
                potential_answers: "a. locusts,b. wild honey,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 1:10
            {
                question_type: "multiple",
                question: "What descended on Jesus like a dove[BREAK]when He was baptized?",
                potential_answers: "the spirit,an angel,a cloud,a flame of fire",
                actual_answer: "the spirit"
            },
            // Mark 1:13
            {
                question_type: "multiple",
                question: "How long was Jesus tempted by Satan[BREAK]in the wilderness?",
                potential_answers: "seven days,three days,forty days,forty years",
                actual_answer: "forty days"
            },
            // Mark 1:17
            {
                question_type: "multiple",
                question: "What did Jesus tell Simon and[BREAK]Andrew they would become?",
                potential_answers: "fishers of men,keepers of sheep,teachers of the law,servants of the temple",
                actual_answer: "fishers of men"
            },
            // Mark 1:24
            {
                question_type: "multiple",
                question: "What title did the unclean spirit[BREAK]in the synagogue give Jesus?",
                potential_answers: "the king of the jews,the holy one of god,the son of david,the prince of peace",
                actual_answer: "the holy one of god"
            },
            // Mark 1:30
            {
                question_type: "multiple",
                question: "Whose mother-in-law did Jesus heal[BREAK]of a fever?",
                potential_answers: "andrew's,levi's,zebedee's,simon's",
                actual_answer: "simon's"
            },
            // Mark 1:41
            {
                question_type: "multiple",
                question: "What did Jesus do to the leper when[BREAK]moved with compassion?",
                potential_answers: "anointed him with oil,washed him in the jordan,bound his wounds,touched him",
                actual_answer: "touched him"
            },
            // Mark 2:3
            {
                question_type: "multiple",
                question: "How many men carried the paralytic[BREAK]to Jesus?",
                potential_answers: "two,six,ten,four",
                actual_answer: "four"
            },
            // Mark 2:4
            {
                question_type: "multiple",
                question: "What did the men do to reach Jesus[BREAK]through the crowd?",
                potential_answers: "a. uncovered the roof,b. let down the bed,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 2:27
            {
                question_type: "multiple",
                question: "What did Jesus say was made for[BREAK]man?",
                potential_answers: "the temple,the sabbath,the law of moses,the passover",
                actual_answer: "the sabbath"
            }
        ], // end of Mark - level 1
        [ // Mark - level 2
            // Mark 3:14
            {
                question_type: "multiple",
                question: "How many apostles did Jesus[BREAK]appoint?",
                potential_answers: "twelve,seven,ten,seventy",
                actual_answer: "twelve"
            },
            // Mark 3:17
            {
                question_type: "multiple",
                question: "What name did Jesus give to James[BREAK]and John?",
                potential_answers: "boanerges,barnabas,bartimaeus,beelzebub",
                actual_answer: "boanerges"
            },
            // Mark 3:22
            {
                question_type: "multiple",
                question: "By whom did the scribes from[BREAK]Jerusalem say Jesus cast out[BREAK]demons?",
                potential_answers: "beelzebub the ruler of demons,king herod,the high priest,pontius pilate",
                actual_answer: "beelzebub the ruler of demons"
            },
            // Mark 3:24-25
            {
                question_type: "multiple",
                question: "What cannot stand if it is divided[BREAK]against itself?",
                potential_answers: "a. a kingdom,b. a house,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 3:29
            {
                question_type: "multiple",
                question: "What sin did Jesus say will never[BREAK]be forgiven?",
                potential_answers: "breaking the sabbath,murder,blasphemy against the holy[BREAK]spirit,unbelief in the law",
                actual_answer: "blasphemy against the holy[BREAK]spirit"
            },
            // Mark 4:14
            {
                question_type: "multiple",
                question: "In Jesus' parable of the sower,[BREAK]what does the sower sow?",
                potential_answers: "the word,wheat,mustard seed,barley",
                actual_answer: "the word"
            },
            // Mark 4:8
            {
                question_type: "multiple",
                question: "What yields did the seed on good[BREAK]ground produce?",
                potential_answers: "a. thirtyfold,b. sixtyfold,c. a hundredfold,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // Mark 4:30-31
            {
                question_type: "multiple",
                question: "What did Jesus compare to a mustard[BREAK]seed?",
                potential_answers: "the law of moses,the temple,the sabbath,the kingdom of god",
                actual_answer: "the kingdom of god"
            },
            // Mark 4:38
            {
                question_type: "multiple",
                question: "Where was Jesus during the[BREAK]windstorm on the sea?",
                potential_answers: "asleep in the stern on a pillow,praying on a mountain,standing at the bow,on the shore watching",
                actual_answer: "asleep in the stern on a pillow"
            },
            // Mark 4:39
            {
                question_type: "multiple",
                question: "What did Jesus say to the sea to[BREAK]calm it?",
                potential_answers: "stop and be calm,depart in peace,come out of him,peace be still",
                actual_answer: "peace be still"
            }
        ], // end of Mark - level 2
        [ // Mark - level 3
            // Mark 5:9
            {
                question_type: "multiple",
                question: "What name did the demon-possessed[BREAK]man give for himself?",
                potential_answers: "abaddon,beelzebub,legion,mammon",
                actual_answer: "legion"
            },
            // Mark 5:13
            {
                question_type: "multiple",
                question: "Into what animals did the unclean[BREAK]spirits enter?",
                potential_answers: "goats,swine,sheep,camels",
                actual_answer: "swine"
            },
            // Mark 5:5
            {
                question_type: "multiple",
                question: "What did the man among the tombs do[BREAK]night and day?",
                potential_answers: "a. cried out,b. cut himself with stones,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 5:22
            {
                question_type: "multiple",
                question: "Jairus, whose daughter was dying,[BREAK]served as what?",
                potential_answers: "a roman centurion,a tax collector,a temple priest,a ruler of the synagogue",
                actual_answer: "a ruler of the synagogue"
            },
            // Mark 5:25
            {
                question_type: "multiple",
                question: "How many years had the woman[BREAK]suffered from bleeding?",
                potential_answers: "seven,eighteen,twelve,thirty-eight",
                actual_answer: "twelve"
            },
            // Mark 5:27
            {
                question_type: "multiple",
                question: "What did the woman with the flow of[BREAK]blood touch?",
                potential_answers: "his hand,his sandal,his garment,his staff",
                actual_answer: "his garment"
            },
            // Mark 5:41
            {
                question_type: "multiple",
                question: "What did Jesus say when He raised[BREAK]Jairus' daughter?",
                potential_answers: "ephphatha,eloi eloi,talitha cumi,abba father",
                actual_answer: "talitha cumi"
            },
            // Mark 6:7
            {
                question_type: "multiple",
                question: "How did Jesus send out the twelve?",
                potential_answers: "one by one,in groups of six,in groups of three,two by two",
                actual_answer: "two by two"
            },
            // Mark 6:24
            {
                question_type: "multiple",
                question: "What did Herodias' daughter ask for[BREAK]after she danced?",
                potential_answers: "the head of john the baptist,half of herod's kingdom,john's release from prison,a seat of honor",
                actual_answer: "the head of john the baptist"
            },
            // Mark 6:38-44
            {
                question_type: "multiple",
                question: "What did Jesus use to feed the five[BREAK]thousand?",
                potential_answers: "seven loaves and a few fish,two loaves and five fish,five loaves and two fish,ten loaves and ten fish",
                actual_answer: "five loaves and two fish"
            }
        ], // end of Mark - level 3
        [ // Mark - level 4
            // Mark 7:2-5
            {
                question_type: "multiple",
                question: "What did the Pharisees criticize[BREAK]the disciples for doing?",
                potential_answers: "eating with unwashed hands,plucking grain on the sabbath,healing on the sabbath,touching a leper",
                actual_answer: "eating with unwashed hands"
            },
            // Mark 7:11
            {
                question_type: "multiple",
                question: "Jesus said the word Corban means[BREAK]what?",
                potential_answers: "a holy day,a feast day,a gift to god,a tithe to the priests",
                actual_answer: "a gift to god"
            },
            // Mark 7:15
            {
                question_type: "multiple",
                question: "What defiles a man, according to[BREAK]Jesus?",
                potential_answers: "what enters his mouth,eating unclean meats,what comes out of a man,touching the dead",
                actual_answer: "what comes out of a man"
            },
            // Mark 7:24-30
            {
                question_type: "multiple",
                question: "Jesus healed a woman's daughter in[BREAK]the region of which cities?",
                potential_answers: "jericho and bethany,sodom and gomorrah,nazareth and cana,tyre and sidon",
                actual_answer: "tyre and sidon"
            },
            // Mark 7:34
            {
                question_type: "multiple",
                question: "What did Jesus say to the deaf man[BREAK]with a speech impediment?",
                potential_answers: "talitha cumi,ephphatha,abba,rabboni",
                actual_answer: "ephphatha"
            },
            // Mark 8:5
            {
                question_type: "multiple",
                question: "How many loaves did Jesus use to[BREAK]feed the four thousand?",
                potential_answers: "five,twelve,seven,three",
                actual_answer: "seven"
            },
            // Mark 8:24
            {
                question_type: "multiple",
                question: "What did the blind man of Bethsaida[BREAK]first see?",
                potential_answers: "men like trees walking,nothing but darkness,a bright light,angels descending",
                actual_answer: "men like trees walking"
            },
            // Mark 8:29
            {
                question_type: "multiple",
                question: "Who did Peter say that Jesus was?",
                potential_answers: "elijah,john the baptist,the christ,one of the prophets",
                actual_answer: "the christ"
            },
            // Mark 8:33
            {
                question_type: "multiple",
                question: "What did Jesus say when He rebuked[BREAK]Peter?",
                potential_answers: "depart from me,you of little faith,get behind me satan,peace be still",
                actual_answer: "get behind me satan"
            },
            // Mark 8:34
            {
                question_type: "multiple",
                question: "What must one do who desires to[BREAK]come after Jesus?",
                potential_answers: "a. deny himself,b. take up his cross,c. follow jesus,d. all of the above",
                actual_answer: "d. all of the above"
            }
        ], // end of Mark - level 4
        [ // Mark - level 5
            // Mark 9:2
            {
                question_type: "multiple",
                question: "Which three disciples went up the[BREAK]mountain with Jesus?",
                potential_answers: "peter andrew and james,james john and philip,peter thomas and john,peter james and john",
                actual_answer: "peter james and john"
            },
            // Mark 9:4
            {
                question_type: "multiple",
                question: "Who appeared with Jesus on the[BREAK]mountain?",
                potential_answers: "abraham and isaac,moses and aaron,david and elijah,elijah and moses",
                actual_answer: "elijah and moses"
            },
            // Mark 9:5
            {
                question_type: "multiple",
                question: "What did Peter offer to make on the[BREAK]mountain?",
                potential_answers: "three tabernacles,two altars,three crowns,a stone memorial",
                actual_answer: "three tabernacles"
            },
            // Mark 9:24
            {
                question_type: "multiple",
                question: "What did the boy's father cry out[BREAK]to Jesus?",
                potential_answers: "i have no faith left,do not touch my son,send him to the desert,lord i believe help my unbelief",
                actual_answer: "lord i believe help my unbelief"
            },
            // Mark 9:29
            {
                question_type: "multiple",
                question: "By what does this kind of demon[BREAK]come out?",
                potential_answers: "a. prayer,b. fasting,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 9:34
            {
                question_type: "multiple",
                question: "What were the disciples arguing[BREAK]about on the road?",
                potential_answers: "who would carry the money,who was most faithful,where they would eat,who would be the greatest",
                actual_answer: "who would be the greatest"
            },
            // Mark 10:8
            {
                question_type: "multiple",
                question: "What did Jesus say the two shall[BREAK]become in marriage?",
                potential_answers: "one flesh,one family,one house,one spirit",
                actual_answer: "one flesh"
            },
            // Mark 10:14
            {
                question_type: "multiple",
                question: "To whom did Jesus say the kingdom[BREAK]of God belongs?",
                potential_answers: "the rich and wise,the scribes,the strong,such as little children",
                actual_answer: "such as little children"
            },
            // Mark 10:25
            {
                question_type: "multiple",
                question: "What did Jesus say is easier than a[BREAK]rich man entering God's kingdom?",
                potential_answers: "a lion entering a den,a mountain moving,a ship through a gate,a camel through a needle's eye",
                actual_answer: "a camel through a needle's eye"
            },
            // Mark 10:45
            {
                question_type: "multiple",
                question: "For what did the Son of Man come to[BREAK]give His life?",
                potential_answers: "a crown for the faithful,a sign for unbelievers,a covering for the temple,a ransom for many",
                actual_answer: "a ransom for many"
            }
        ], // end of Mark - level 5
        [ // Mark - level 6
            // Mark 11:2
            {
                question_type: "multiple",
                question: "What animal did Jesus ride into[BREAK]Jerusalem?",
                potential_answers: "a war horse,a camel,a colt,a mule",
                actual_answer: "a colt"
            },
            // Mark 11:9
            {
                question_type: "multiple",
                question: "What did the crowd cry out as Jesus[BREAK]entered?",
                potential_answers: "hallelujah,amen,maranatha,hosanna",
                actual_answer: "hosanna"
            },
            // Mark 11:13
            {
                question_type: "multiple",
                question: "What did Jesus find on the fig[BREAK]tree?",
                potential_answers: "ripe figs,withered branches,a bird's nest,nothing but leaves",
                actual_answer: "nothing but leaves"
            },
            // Mark 11:15
            {
                question_type: "multiple",
                question: "What did Jesus overturn in the[BREAK]temple?",
                potential_answers: "a. the tables of the moneychangers,b. the seats of the dove sellers,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 12:6
            {
                question_type: "multiple",
                question: "Whom did the owner send last to the[BREAK]vinedressers?",
                potential_answers: "his beloved son,a hired servant,his steward,an army",
                actual_answer: "his beloved son"
            },
            // Mark 12:16
            {
                question_type: "multiple",
                question: "Whose image was on the denarius?",
                potential_answers: "herod's,caesar's,pilate's,david's",
                actual_answer: "caesar's"
            },
            // Mark 12:31
            {
                question_type: "multiple",
                question: "What is the second greatest[BREAK]commandment, according to Jesus?",
                potential_answers: "honor your father and mother,love your neighbor as yourself,do not bear false witness,keep the sabbath holy",
                actual_answer: "love your neighbor as yourself"
            },
            // Mark 12:42
            {
                question_type: "multiple",
                question: "How many mites did the poor widow[BREAK]give?",
                potential_answers: "two,one,five,ten",
                actual_answer: "two"
            },
            // Mark 13:3
            {
                question_type: "multiple",
                question: "On what mount did Jesus teach about[BREAK]the end of the age?",
                potential_answers: "the mount of olives,mount sinai,mount zion,mount carmel",
                actual_answer: "the mount of olives"
            },
            // Mark 13:32
            {
                question_type: "multiple",
                question: "Who alone knows the day and hour of[BREAK]Jesus' return?",
                potential_answers: "the angels,the archangel michael,the apostles,only the father",
                actual_answer: "only the father"
            }
        ], // end of Mark - level 6
        [ // Mark - level 7
            // Mark 14:5
            {
                question_type: "multiple",
                question: "How much could the woman's fragrant[BREAK]oil have been sold for?",
                potential_answers: "thirty pieces of silver,five hundred denarii,about ten denarii,over three hundred denarii",
                actual_answer: "over three hundred denarii"
            },
            // Mark 14:22
            {
                question_type: "multiple",
                question: "At the Last Supper, what did Jesus[BREAK]call the broken bread?",
                potential_answers: "manna from heaven,his body,the passover lamb,a memorial of moses",
                actual_answer: "his body"
            },
            // Mark 14:30
            {
                question_type: "multiple",
                question: "How many times did Jesus say Peter[BREAK]would deny Him?",
                potential_answers: "two,seven,five,three",
                actual_answer: "three"
            },
            // Mark 14:45
            {
                question_type: "multiple",
                question: "What sign did Judas use to betray[BREAK]Jesus?",
                potential_answers: "a handshake,a kiss,a nod,a loud shout",
                actual_answer: "a kiss"
            },
            // Mark 14:65
            {
                question_type: "multiple",
                question: "What did some do to Jesus after the[BREAK]council condemned Him?",
                potential_answers: "a. spat on him,b. struck him,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // Mark 15:7
            {
                question_type: "multiple",
                question: "Who was released instead of Jesus?",
                potential_answers: "barabbas,judas,bartimaeus,simon of cyrene",
                actual_answer: "barabbas"
            },
            // Mark 15:38
            {
                question_type: "multiple",
                question: "What was torn in two when Jesus[BREAK]died?",
                potential_answers: "the roof of the temple,the altar,the wall of the city,the veil of the temple",
                actual_answer: "the veil of the temple"
            },
            // Mark 15:39
            {
                question_type: "multiple",
                question: "Who declared Jesus to be the Son of[BREAK]God at the cross?",
                potential_answers: "pilate,herod,barabbas,the centurion",
                actual_answer: "the centurion"
            },
            // Mark 16:9
            {
                question_type: "multiple",
                question: "To whom did Jesus appear first[BREAK]after He rose?",
                potential_answers: "peter,salome,mary magdalene,the eleven",
                actual_answer: "mary magdalene"
            },
            // Mark 16:19
            {
                question_type: "multiple",
                question: "After Jesus ascended, where did He[BREAK]sit?",
                potential_answers: "on the mount of olives,at the left hand of god,on david's throne,at the right hand of god",
                actual_answer: "at the right hand of god"
            }
        ] // end of Mark - level 7
    ], // end of array for Mark
    [ // array for 1 Peter
        [ // 1 Peter - level 1
            // 1 Peter 1:1
            {
                question_type: "multiple",
                question: "To which pilgrims did Peter write[BREAK]his first letter?",
                potential_answers: "the captivity,the gentiles,the dispersion,the remnant",
                actual_answer: "the dispersion"
            },
            // 1 Peter 1:1
            {
                question_type: "multiple",
                question: "Which region was one of the places[BREAK]Peter wrote to?",
                potential_answers: "macedonia,achaia,phoenicia,cappadocia",
                actual_answer: "cappadocia"
            },
            // 1 Peter 1:3
            {
                question_type: "multiple",
                question: "To what has God begotten us again[BREAK]through Christ's resurrection?",
                potential_answers: "an earthly kingdom,a perfect law,a temple made by hands,a living hope",
                actual_answer: "a living hope"
            },
            // 1 Peter 1:4
            {
                question_type: "multiple",
                question: "How is our inheritance described?",
                potential_answers: "a. incorruptible,b. undefiled,c. does not fade away,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 1 Peter 1:4
            {
                question_type: "multiple",
                question: "Where is our inheritance reserved[BREAK]for us?",
                potential_answers: "in jerusalem,in the temple,in the earth,in heaven",
                actual_answer: "in heaven"
            },
            // 1 Peter 1:7
            {
                question_type: "multiple",
                question: "Peter says tested faith is more[BREAK]precious than what?",
                potential_answers: "the finest linen,gold that perishes,rubies and pearls,the temple treasury",
                actual_answer: "gold that perishes"
            },
            // 1 Peter 1:13
            {
                question_type: "multiple",
                question: "Peter told them to gird up the[BREAK]loins of what?",
                potential_answers: "your heart,your strength,your mind,your faith",
                actual_answer: "your mind"
            },
            // 1 Peter 1:19
            {
                question_type: "multiple",
                question: "What were we redeemed with,[BREAK]according to Peter?",
                potential_answers: "silver and gold,the blood of bulls,the precious blood of christ,good works",
                actual_answer: "the precious blood of christ"
            },
            // 1 Peter 1:19
            {
                question_type: "multiple",
                question: "Christ is likened to a lamb without[BREAK]what?",
                potential_answers: "blemish and spot,sickness and age,horn and hoof,wool and blood",
                actual_answer: "blemish and spot"
            },
            // 1 Peter 1:25
            {
                question_type: "multiple",
                question: "What endures forever, according to[BREAK]Peter?",
                potential_answers: "the word of the lord,the glory of man,the flower of the grass,the strength of kings",
                actual_answer: "the word of the lord"
            }
        ], // end of 1 Peter - level 1
        [ // 1 Peter - level 2
            // 1 Peter 2:2
            {
                question_type: "multiple",
                question: "What are believers to desire like[BREAK]newborn babes?",
                potential_answers: "the strong meat of the law,the pure milk of the word,the sweet wine of the vine,the honey of the rock",
                actual_answer: "the pure milk of the word"
            },
            // 1 Peter 2:5
            {
                question_type: "multiple",
                question: "As what are believers being built[BREAK]up into a spiritual house?",
                potential_answers: "golden pillars,bricks of clay,hewn timbers,living stones",
                actual_answer: "living stones"
            },
            // 1 Peter 2:6
            {
                question_type: "multiple",
                question: "What did Peter say is laid in Zion,[BREAK]elect and precious?",
                potential_answers: "a golden altar,a silver lampstand,a holy tabernacle,a chief cornerstone",
                actual_answer: "a chief cornerstone"
            },
            // 1 Peter 2:9
            {
                question_type: "multiple",
                question: "How does Peter describe believers?",
                potential_answers: "a. a chosen generation,b. a royal priesthood,c. a holy nation,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 1 Peter 2:9
            {
                question_type: "multiple",
                question: "God called us out of darkness into[BREAK]what?",
                potential_answers: "a perfect law,an earthly kingdom,his marvelous light,a place of rest",
                actual_answer: "his marvelous light"
            },
            // 1 Peter 2:11
            {
                question_type: "multiple",
                question: "As what did Peter urge believers to[BREAK]abstain from fleshly lusts?",
                potential_answers: "kings and priests,sojourners and pilgrims,servants and masters,stewards and elders",
                actual_answer: "sojourners and pilgrims"
            },
            // 1 Peter 2:13
            {
                question_type: "multiple",
                question: "For the Lord's sake, to what are[BREAK]you to submit?",
                potential_answers: "only the temple priests,the customs of gentiles,every ordinance of man,the traditions of elders",
                actual_answer: "every ordinance of man"
            },
            // 1 Peter 2:22
            {
                question_type: "multiple",
                question: "What was never found in Christ's[BREAK]mouth?",
                potential_answers: "boasting,flattery,anger,deceit",
                actual_answer: "deceit"
            },
            // 1 Peter 2:24
            {
                question_type: "multiple",
                question: "By what were we healed, according[BREAK]to Peter?",
                potential_answers: "his tears,his teachings,his miracles,his stripes",
                actual_answer: "his stripes"
            },
            // 1 Peter 2:25
            {
                question_type: "multiple",
                question: "Straying sheep have returned to[BREAK]whom?",
                potential_answers: "the good samaritan,the chief of the priests,the keeper of the vineyard,the shepherd and overseer of[BREAK]your souls",
                actual_answer: "the shepherd and overseer of[BREAK]your souls"
            }
        ], // end of 1 Peter - level 2
        [ // 1 Peter - level 3
            // 1 Peter 3:1
            {
                question_type: "multiple",
                question: "How may a husband who disobeys the[BREAK]word be won?",
                potential_answers: "by public debate,by costly gifts,by threats,by his wife's conduct",
                actual_answer: "by his wife's conduct"
            },
            // 1 Peter 3:4
            {
                question_type: "multiple",
                question: "What kind of adornment does Peter[BREAK]say is most important?",
                potential_answers: "the hidden person of the heart,gold and fine apparel,braided hair and jewels,the work of the hands",
                actual_answer: "the hidden person of the heart"
            },
            // 1 Peter 3:4
            {
                question_type: "multiple",
                question: "What kind of spirit is very[BREAK]precious in God's sight?",
                potential_answers: "bold and proud,wise and learned,gentle and quiet,strong and fearless",
                actual_answer: "gentle and quiet"
            },
            // 1 Peter 3:6
            {
                question_type: "multiple",
                question: "Whom did Sarah obey, calling him[BREAK]lord?",
                potential_answers: "isaac,jacob,abraham,lot",
                actual_answer: "abraham"
            },
            // 1 Peter 3:7
            {
                question_type: "multiple",
                question: "Husbands honor their wives as what[BREAK]kind of vessel?",
                potential_answers: "the golden vessel,the empty vessel,the broken vessel,the weaker vessel",
                actual_answer: "the weaker vessel"
            },
            // 1 Peter 3:9
            {
                question_type: "multiple",
                question: "Instead of returning evil for evil,[BREAK]what should you return?",
                potential_answers: "blessing,revenge,silence,judgment",
                actual_answer: "blessing"
            },
            // 1 Peter 3:15
            {
                question_type: "multiple",
                question: "Believers should be ready to give[BREAK]what to anyone who asks about their[BREAK]hope?",
                potential_answers: "a gift,a prophecy,a tithe,a defense",
                actual_answer: "a defense"
            },
            // 1 Peter 3:18
            {
                question_type: "multiple",
                question: "How many times did Christ suffer[BREAK]for sins?",
                potential_answers: "twice,seven times,once,daily",
                actual_answer: "once"
            },
            // 1 Peter 3:20
            {
                question_type: "multiple",
                question: "How many people were saved by water[BREAK]in Noah's ark?",
                potential_answers: "seven,ten,twelve,eight",
                actual_answer: "eight"
            },
            // 1 Peter 3:22
            {
                question_type: "multiple",
                question: "Who has been made subject to Jesus[BREAK]Christ?",
                potential_answers: "a. angels,b. authorities,c. powers,d. all of the above",
                actual_answer: "d. all of the above"
            }
        ], // end of 1 Peter - level 3
        [ // 1 Peter - level 4
            // 1 Peter 4:1
            {
                question_type: "multiple",
                question: "Since Christ suffered in the flesh,[BREAK]arm yourselves with what?",
                potential_answers: "the same armor,the same mind,the same crown,the same robe",
                actual_answer: "the same mind"
            },
            // 1 Peter 4:8
            {
                question_type: "multiple",
                question: "Above all, Peter says to have what[BREAK]for one another?",
                potential_answers: "careful judgment,strict obedience,great wealth,fervent love",
                actual_answer: "fervent love"
            },
            // 1 Peter 4:10
            {
                question_type: "multiple",
                question: "As good stewards of what do we[BREAK]minister our gifts?",
                potential_answers: "the treasures of the temple,the secrets of the kingdom,the riches of this world,the manifold grace of god",
                actual_answer: "the manifold grace of god"
            },
            // 1 Peter 4:12
            {
                question_type: "multiple",
                question: "What are we told not to think[BREAK]strange?",
                potential_answers: "the fiery trial,the great harvest,the empty tomb,the new moon",
                actual_answer: "the fiery trial"
            },
            // 1 Peter 4:16
            {
                question_type: "multiple",
                question: "If one suffers as a Christian, he[BREAK]should not be what?",
                potential_answers: "joyful,proud,ashamed,wealthy",
                actual_answer: "ashamed"
            },
            // 1 Peter 4:17
            {
                question_type: "multiple",
                question: "Where does judgment begin?",
                potential_answers: "at the gates of the city,in the kings' palace,in the wilderness,at the house of god",
                actual_answer: "at the house of god"
            },
            // 1 Peter 5:2-3
            {
                question_type: "multiple",
                question: "How should elders shepherd the[BREAK]flock?",
                potential_answers: "a. willingly,b. eagerly,c. as examples,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 1 Peter 5:4
            {
                question_type: "multiple",
                question: "When the Chief Shepherd appears,[BREAK]what crown will elders receive?",
                potential_answers: "the crown of thorns,a crown of gold,the crown of glory,a crown of olive leaves",
                actual_answer: "the crown of glory"
            },
            // 1 Peter 5:8
            {
                question_type: "multiple",
                question: "The devil walks about like what?",
                potential_answers: "a roaring lion,a coiled serpent,a hungry wolf,a prowling bear",
                actual_answer: "a roaring lion"
            },
            // 1 Peter 5:13
            {
                question_type: "multiple",
                question: "Whom does Peter call his son at the[BREAK]close of the letter?",
                potential_answers: "silvanus,mark,timothy,luke",
                actual_answer: "mark"
            }
        ] // end of 1 Peter - level 4
    ], // end of array for 1 Peter
    [ // array for 2 Peter
        [ // 2 Peter - level 1
            // 2 Peter 1:1
            {
                question_type: "multiple",
                question: "How does Simon Peter introduce[BREAK]himself in his second letter?",
                potential_answers: "a prophet and teacher,an elder and shepherd,a prisoner and apostle,a bondservant and apostle",
                actual_answer: "a bondservant and apostle"
            },
            // 2 Peter 1:2
            {
                question_type: "multiple",
                question: "What does Peter wish to be[BREAK]multiplied to his readers?",
                potential_answers: "a. grace,b. peace,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 2 Peter 1:3
            {
                question_type: "multiple",
                question: "God's divine power gives us all[BREAK]things that pertain to what?",
                potential_answers: "wealth and honor,life and godliness,peace and safety,wisdom and strength",
                actual_answer: "life and godliness"
            },
            // 2 Peter 1:4
            {
                question_type: "multiple",
                question: "Through great and precious[BREAK]promises, we become partakers of[BREAK]what?",
                potential_answers: "the heavenly kingdom,the king's throne,the angelic host,the divine nature",
                actual_answer: "the divine nature"
            },
            // 2 Peter 1:5-7
            {
                question_type: "multiple",
                question: "What is the first quality Peter[BREAK]says to add to your faith?",
                potential_answers: "virtue,knowledge,love,perseverance",
                actual_answer: "virtue"
            },
            // 2 Peter 1:5-7
            {
                question_type: "multiple",
                question: "What is the last quality Peter says[BREAK]to add, after brotherly kindness?",
                potential_answers: "love,godliness,virtue,knowledge",
                actual_answer: "love"
            },
            // 2 Peter 1:9
            {
                question_type: "multiple",
                question: "How does Peter describe one who[BREAK]lacks these qualities?",
                potential_answers: "shortsighted even to blindness,hardened even to death,lukewarm even to sleep,wise even to old age",
                actual_answer: "shortsighted even to blindness"
            },
            // 2 Peter 1:10
            {
                question_type: "multiple",
                question: "What did Peter urge them to make[BREAK]sure?",
                potential_answers: "your wealth and house,your faith and works,your temple and altar,your call and election",
                actual_answer: "your call and election"
            },
            // 2 Peter 1:11
            {
                question_type: "multiple",
                question: "What will be supplied to you[BREAK]abundantly into the everlasting[BREAK]kingdom?",
                potential_answers: "an entrance,a crown,a robe,a key",
                actual_answer: "an entrance"
            }
        ], // end of 2 Peter - level 1
        [ // 2 Peter - level 2
            // 2 Peter 1:13
            {
                question_type: "multiple",
                question: "Peter compared his body to what?",
                potential_answers: "a temple,a tent,a house of stone,a ship",
                actual_answer: "a tent"
            },
            // 2 Peter 1:14
            {
                question_type: "multiple",
                question: "Who showed Peter he must soon put[BREAK]off his tent?",
                potential_answers: "an angel of the lord,our lord jesus christ,the apostle paul,the prophet daniel",
                actual_answer: "our lord jesus christ"
            },
            // 2 Peter 1:16
            {
                question_type: "multiple",
                question: "What did Peter say they did not[BREAK]follow?",
                potential_answers: "cunningly devised fables,ancient traditions,the words of philosophers,the laws of moses",
                actual_answer: "cunningly devised fables"
            },
            // 2 Peter 1:16
            {
                question_type: "multiple",
                question: "Peter says they were what of Jesus'[BREAK]majesty?",
                potential_answers: "eyewitnesses,servants,judges,critics",
                actual_answer: "eyewitnesses"
            },
            // 2 Peter 1:17
            {
                question_type: "multiple",
                question: "What did Jesus receive from God the[BREAK]Father?",
                potential_answers: "a. honor,b. glory,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 2 Peter 1:17
            {
                question_type: "multiple",
                question: "From what source did the voice come[BREAK]on the holy mountain?",
                potential_answers: "the burning bush,the whirlwind,the excellent glory,the temple veil",
                actual_answer: "the excellent glory"
            },
            // 2 Peter 1:19
            {
                question_type: "multiple",
                question: "To what does Peter compare the[BREAK]prophetic word?",
                potential_answers: "a river in a desert,a shield in battle,a light in a dark place,a seed in the ground",
                actual_answer: "a light in a dark place"
            },
            // 2 Peter 1:21
            {
                question_type: "multiple",
                question: "Prophecy never came by what?",
                potential_answers: "the wisdom of kings,the will of man,the writing of scribes,the choice of priests",
                actual_answer: "the will of man"
            },
            // 2 Peter 1:21
            {
                question_type: "multiple",
                question: "Holy men of God spoke as they were[BREAK]what?",
                potential_answers: "moved by the holy spirit,sent by the high priest,taught by the elders,called by the king",
                actual_answer: "moved by the holy spirit"
            }
        ], // end of 2 Peter - level 2
        [ // 2 Peter - level 3
            // 2 Peter 2:1
            {
                question_type: "multiple",
                question: "What will false teachers secretly[BREAK]bring in?",
                potential_answers: "deadly serpents,golden idols,destructive heresies,unclean spirits",
                actual_answer: "destructive heresies"
            },
            // 2 Peter 2:4
            {
                question_type: "multiple",
                question: "God did not spare which beings who[BREAK]sinned?",
                potential_answers: "the priests of baal,the kings of egypt,the sons of eli,the angels who sinned",
                actual_answer: "the angels who sinned"
            },
            // 2 Peter 2:5
            {
                question_type: "multiple",
                question: "What was Noah called?",
                potential_answers: "a prophet of the flood,a preacher of righteousness,a shepherd of men,a builder of cities",
                actual_answer: "a preacher of righteousness"
            },
            // 2 Peter 2:6
            {
                question_type: "multiple",
                question: "Which two cities were turned to[BREAK]ashes?",
                potential_answers: "tyre and sidon,sodom and gomorrah,jericho and ai,nineveh and babylon",
                actual_answer: "sodom and gomorrah"
            },
            // 2 Peter 2:7
            {
                question_type: "multiple",
                question: "Which righteous man was oppressed[BREAK]by the filthy conduct of the[BREAK]wicked?",
                potential_answers: "abraham,job,enoch,lot",
                actual_answer: "lot"
            },
            // 2 Peter 2:12
            {
                question_type: "multiple",
                question: "The false teachers are like what[BREAK]kind of creatures?",
                potential_answers: "soaring eagles,natural brute beasts,gentle lambs,faithful oxen",
                actual_answer: "natural brute beasts"
            },
            // 2 Peter 2:15
            {
                question_type: "multiple",
                question: "Which prophet loved the wages of[BREAK]unrighteousness?",
                potential_answers: "samuel,elijah,balaam,jonah",
                actual_answer: "balaam"
            },
            // 2 Peter 2:16
            {
                question_type: "multiple",
                question: "With what did a dumb donkey rebuke[BREAK]the prophet's madness?",
                potential_answers: "a man's voice,a lion's roar,an angel's voice,a loud trumpet",
                actual_answer: "a man's voice"
            },
            // 2 Peter 2:17
            {
                question_type: "multiple",
                question: "What are the false teachers[BREAK]compared to?",
                potential_answers: "a. wells without water,b. clouds carried by a tempest,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 2 Peter 2:22
            {
                question_type: "multiple",
                question: "According to the proverb, a dog[BREAK]returns to what?",
                potential_answers: "his master's house,a pile of bones,the open field,his own vomit",
                actual_answer: "his own vomit"
            }
        ], // end of 2 Peter - level 3
        [ // 2 Peter - level 4
            // 2 Peter 3:3
            {
                question_type: "multiple",
                question: "Who will come in the last days,[BREAK]walking after their own lusts?",
                potential_answers: "priests,scoffers,angels,shepherds",
                actual_answer: "scoffers"
            },
            // 2 Peter 3:4
            {
                question_type: "multiple",
                question: "What question will the scoffers[BREAK]ask?",
                potential_answers: "where is the ark of god?,where is the promise of his[BREAK]coming?,when will the temple rise?,who is the lord of hosts?",
                actual_answer: "where is the promise of his[BREAK]coming?"
            },
            // 2 Peter 3:5
            {
                question_type: "multiple",
                question: "By what were the heavens and earth[BREAK]formed of old?",
                potential_answers: "the wisdom of angels,the power of the sun,the word of god,the will of man",
                actual_answer: "the word of god"
            },
            // 2 Peter 3:8
            {
                question_type: "multiple",
                question: "With the Lord, one day is as what?",
                potential_answers: "a hundred years,seven years,a single hour,a thousand years",
                actual_answer: "a thousand years"
            },
            // 2 Peter 3:9
            {
                question_type: "multiple",
                question: "Instead of being slack, the Lord is[BREAK]what toward us?",
                potential_answers: "impatient,angry,indifferent,longsuffering",
                actual_answer: "longsuffering"
            },
            // 2 Peter 3:10
            {
                question_type: "multiple",
                question: "How will the day of the Lord come?",
                potential_answers: "as a flood of water,as a thief in the night,as a rushing wind,as a still small voice",
                actual_answer: "as a thief in the night"
            },
            // 2 Peter 3:13
            {
                question_type: "multiple",
                question: "What do we look for, according to[BREAK]His promise?",
                potential_answers: "a. new heavens,b. a new earth,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 2 Peter 3:13
            {
                question_type: "multiple",
                question: "What dwells in the new heavens and[BREAK]new earth?",
                potential_answers: "peace,righteousness,joy,mercy",
                actual_answer: "righteousness"
            },
            // 2 Peter 3:15
            {
                question_type: "multiple",
                question: "Which beloved brother wrote[BREAK]according to wisdom given him?",
                potential_answers: "john,james,jude,paul",
                actual_answer: "paul"
            },
            // 2 Peter 3:18
            {
                question_type: "multiple",
                question: "In what two things does Peter tell[BREAK]believers to grow?",
                potential_answers: "grace and knowledge,power and glory,wealth and honor,strength and might",
                actual_answer: "grace and knowledge"
            }
        ] // end of 2 Peter - level 4
    ], // end of array for 2 Peter
    [ // array for 1 John
        [ // 1 John - level 1
            // 1 John 1:5
            {
                question_type: "multiple",
                question: "What message did John say he heard[BREAK]from Jesus?",
                potential_answers: "that god is light,that god is love,that god is spirit,that god is one",
                actual_answer: "that god is light"
            },
            // 1 John 1:7
            {
                question_type: "multiple",
                question: "If we walk in the light, what[BREAK]cleanses us from all sin?",
                potential_answers: "the washing of water,the ashes of a heifer,the fire of the altar,the blood of jesus christ",
                actual_answer: "the blood of jesus christ"
            },
            // 1 John 1:9
            {
                question_type: "multiple",
                question: "If we confess our sins, God is[BREAK]what?",
                potential_answers: "faithful and just,angry and distant,slow and silent,wise and powerful",
                actual_answer: "faithful and just"
            },
            // 1 John 2:1
            {
                question_type: "multiple",
                question: "Whom do we have with the Father if[BREAK]anyone sins?",
                potential_answers: "an advocate,an accuser,a messenger,a servant",
                actual_answer: "an advocate"
            },
            // 1 John 2:2
            {
                question_type: "multiple",
                question: "Jesus is the propitiation for whose[BREAK]sins?",
                potential_answers: "only the jews' sins,only the apostles' sins,ours and the whole world's,only the repentant's sins",
                actual_answer: "ours and the whole world's"
            },
            // 1 John 2:3
            {
                question_type: "multiple",
                question: "How do we know that we know Him?",
                potential_answers: "if we attend the temple,if we give to the poor,if we keep his commandments,if we study the law",
                actual_answer: "if we keep his commandments"
            },
            // 1 John 2:11
            {
                question_type: "multiple",
                question: "He who hates his brother walks in[BREAK]what?",
                potential_answers: "darkness,light,peace,truth",
                actual_answer: "darkness"
            },
            // 1 John 2:16
            {
                question_type: "multiple",
                question: "What is in the world, according to[BREAK]John?",
                potential_answers: "a. the lust of the flesh,b. the lust of the eyes,c. the pride of life,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 1 John 2:17
            {
                question_type: "multiple",
                question: "Who abides forever, according to[BREAK]John?",
                potential_answers: "he who does the will of god,he who loves the world,he who studies the law,he who builds temples",
                actual_answer: "he who does the will of god"
            },
            // 1 John 2:22
            {
                question_type: "multiple",
                question: "John says one is a liar who denies[BREAK]what?",
                potential_answers: "that god made heaven,that moses wrote the law,that the world is passing,that jesus is the christ",
                actual_answer: "that jesus is the christ"
            }
        ], // end of 1 John - level 1
        [ // 1 John - level 2
            // 1 John 3:3
            {
                question_type: "multiple",
                question: "What does everyone who has this[BREAK]hope in Him do?",
                potential_answers: "fasts daily,sells his goods,purifies himself,builds a temple",
                actual_answer: "purifies himself"
            },
            // 1 John 3:4
            {
                question_type: "multiple",
                question: "According to John, sin is what?",
                potential_answers: "weakness,ignorance,lawlessness,forgetfulness",
                actual_answer: "lawlessness"
            },
            // 1 John 3:8
            {
                question_type: "multiple",
                question: "For what purpose was the Son of God[BREAK]manifested?",
                potential_answers: "to build an earthly kingdom,to restore the temple,to rule over israel,to destroy the works of the[BREAK]devil",
                actual_answer: "to destroy the works of the[BREAK]devil"
            },
            // 1 John 3:12
            {
                question_type: "multiple",
                question: "Who was of the wicked one and[BREAK]murdered his brother?",
                potential_answers: "esau,absalom,cain,lamech",
                actual_answer: "cain"
            },
            // 1 John 3:15
            {
                question_type: "multiple",
                question: "Whoever hates his brother is what?",
                potential_answers: "a murderer,a thief,a stranger,a fool",
                actual_answer: "a murderer"
            },
            // 1 John 3:16
            {
                question_type: "multiple",
                question: "John says we know love because[BREAK]Jesus did what?",
                potential_answers: "gave us the law,fed the multitudes,rebuilt the temple,laid down his life for us",
                actual_answer: "laid down his life for us"
            },
            // 1 John 3:18
            {
                question_type: "multiple",
                question: "John says not to love in word or[BREAK]tongue but in what?",
                potential_answers: "silence and awe,prayer and fasting,faith and hope,deed and truth",
                actual_answer: "deed and truth"
            },
            // 1 John 3:22
            {
                question_type: "multiple",
                question: "What do we receive because we keep[BREAK]His commandments?",
                potential_answers: "great wealth,whatever we ask,long life,a heavenly crown",
                actual_answer: "whatever we ask"
            },
            // 1 John 3:23
            {
                question_type: "multiple",
                question: "What is God's commandment,[BREAK]according to John?",
                potential_answers: "a. believe in the name of his son,b. love one another,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 1 John 3:24
            {
                question_type: "multiple",
                question: "By what do we know that God abides[BREAK]in us?",
                potential_answers: "the law he has written,the spirit he has given us,the angels he has sent,the church he has built",
                actual_answer: "the spirit he has given us"
            }
        ], // end of 1 John - level 2
        [ // 1 John - level 3
            // 1 John 4:1
            {
                question_type: "multiple",
                question: "John says not to believe every[BREAK]spirit but to do what?",
                potential_answers: "obey the spirits,test the spirits,ignore the spirits,fear the spirits",
                actual_answer: "test the spirits"
            },
            // 1 John 4:2
            {
                question_type: "multiple",
                question: "Every spirit that confesses what is[BREAK]of God?",
                potential_answers: "that moses wrote the law,that the temple is holy,that angels rule the earth,that jesus christ has come in[BREAK]the flesh",
                actual_answer: "that jesus christ has come in[BREAK]the flesh"
            },
            // 1 John 4:4
            {
                question_type: "multiple",
                question: "He who is in you is greater than he[BREAK]who is in what?",
                potential_answers: "the sea,the city,the world,the grave",
                actual_answer: "the world"
            },
            // 1 John 4:8
            {
                question_type: "multiple",
                question: "He who does not love does not know[BREAK]God, for God is what?",
                potential_answers: "wrath,silence,power,love",
                actual_answer: "love"
            },
            // 1 John 4:9
            {
                question_type: "multiple",
                question: "How did God manifest His love[BREAK]toward us?",
                potential_answers: "by parting the red sea,by sending his only begotten son,by giving the law at sinai,by sending fire from heaven",
                actual_answer: "by sending his only begotten son"
            },
            // 1 John 4:10
            {
                question_type: "multiple",
                question: "Jesus was sent to be what for our[BREAK]sins?",
                potential_answers: "the propitiation,the scapegoat,the firstfruits,the judge",
                actual_answer: "the propitiation"
            },
            // 1 John 4:12
            {
                question_type: "multiple",
                question: "What is true if we love one[BREAK]another?",
                potential_answers: "a. god abides in us,b. his love is perfected in us,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 1 John 4:18
            {
                question_type: "multiple",
                question: "What casts out fear?",
                potential_answers: "perfect faith,perfect knowledge,perfect peace,perfect love",
                actual_answer: "perfect love"
            },
            // 1 John 4:19
            {
                question_type: "multiple",
                question: "Why do we love Him?",
                potential_answers: "because he first loved us,because he gave us the law,because he is powerful,because he made the world",
                actual_answer: "because he first loved us"
            },
            // 1 John 4:20
            {
                question_type: "multiple",
                question: "He who says I love God, yet hates[BREAK]his what, is a liar?",
                potential_answers: "king,brother,master,teacher",
                actual_answer: "brother"
            }
        ], // end of 1 John - level 3
        [ // 1 John - level 4
            // 1 John 5:1
            {
                question_type: "multiple",
                question: "Who is born of God?",
                potential_answers: "whoever keeps the sabbath,whoever believes that jesus is[BREAK]the christ,whoever is born in israel,whoever gives to the poor",
                actual_answer: "whoever believes that jesus is[BREAK]the christ"
            },
            // 1 John 5:3
            {
                question_type: "multiple",
                question: "According to John, what is the love[BREAK]of God?",
                potential_answers: "that we keep his commandments,that we give to the poor,that we fast every week,that we build the temple",
                actual_answer: "that we keep his commandments"
            },
            // 1 John 5:3
            {
                question_type: "multiple",
                question: "God's commandments are not what?",
                potential_answers: "burdensome,holy,written,ancient",
                actual_answer: "burdensome"
            },
            // 1 John 5:4
            {
                question_type: "multiple",
                question: "What is the victory that has[BREAK]overcome the world?",
                potential_answers: "our wealth,our strength,our knowledge,our faith",
                actual_answer: "our faith"
            },
            // 1 John 5:6
            {
                question_type: "multiple",
                question: "Jesus Christ came by what two[BREAK]things?",
                potential_answers: "fire and wind,water and blood,bread and wine,oil and incense",
                actual_answer: "water and blood"
            },
            // 1 John 5:8
            {
                question_type: "multiple",
                question: "Who bears witness on earth?",
                potential_answers: "a. the spirit,b. the water,c. the blood,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 1 John 5:11
            {
                question_type: "multiple",
                question: "Where is the eternal life that God[BREAK]has given us?",
                potential_answers: "in the law,in the temple,in the old covenant,in his son",
                actual_answer: "in his son"
            },
            // 1 John 5:13
            {
                question_type: "multiple",
                question: "John wrote so believers might know[BREAK]they have what?",
                potential_answers: "eternal life,great wealth,perfect health,earthly power",
                actual_answer: "eternal life"
            },
            // 1 John 5:14
            {
                question_type: "multiple",
                question: "If we ask anything according to His[BREAK]will, what does He do?",
                potential_answers: "he tests us,he hears us,he ignores us,he judges us",
                actual_answer: "he hears us"
            },
            // 1 John 5:21
            {
                question_type: "multiple",
                question: "How does John close his first[BREAK]letter?",
                potential_answers: "pray without ceasing,keep yourselves from idols,love one another,greet one another",
                actual_answer: "keep yourselves from idols"
            }
        ] // end of 1 John - level 4
    ], // end of array for 1 John
    [ // array for 2 John
        [ // 2 John - level 1
            // 2 John 1:1
            {
                question_type: "multiple",
                question: "How does the author of 2 John[BREAK]identify himself?",
                potential_answers: "the apostle,the elder,the prophet,the deacon",
                actual_answer: "the elder"
            },
            // 2 John 1:1
            {
                question_type: "multiple",
                question: "To whom is 2 John addressed?",
                potential_answers: "the church at ephesus,the elect lady and her children,the beloved gaius,the seven churches",
                actual_answer: "the elect lady and her children"
            },
            // 2 John 1:3
            {
                question_type: "multiple",
                question: "What will be with us from God the[BREAK]Father and the Lord Jesus?",
                potential_answers: "a. grace,b. mercy,c. peace,d. all of the above",
                actual_answer: "d. all of the above"
            },
            // 2 John 1:4
            {
                question_type: "multiple",
                question: "What did the elder find some of the[BREAK]lady's children doing?",
                potential_answers: "walking in darkness,walking in truth,following false teachers,hiding in fear",
                actual_answer: "walking in truth"
            },
            // 2 John 1:5
            {
                question_type: "multiple",
                question: "What commandment have we had from[BREAK]the beginning?",
                potential_answers: "that we keep the sabbath,that we offer sacrifices,that we fast often,that we love one another",
                actual_answer: "that we love one another"
            },
            // 2 John 1:6
            {
                question_type: "multiple",
                question: "In 2 John, love is that we walk[BREAK]according to what?",
                potential_answers: "the traditions,the feasts,his commandments,the prophets",
                actual_answer: "his commandments"
            }
        ], // end of 2 John - level 1
        [ // 2 John - level 2
            // 2 John 1:7
            {
                question_type: "multiple",
                question: "Deceivers do not confess what about[BREAK]Jesus Christ?",
                potential_answers: "that moses led israel,that the temple is holy,that angels are servants,that he came in the flesh",
                actual_answer: "that he came in the flesh"
            },
            // 2 John 1:7
            {
                question_type: "multiple",
                question: "What does John call one who denies[BREAK]Christ's coming in the flesh?",
                potential_answers: "a prophet,a pharisee,a scribe,an antichrist",
                actual_answer: "an antichrist"
            },
            // 2 John 1:8
            {
                question_type: "multiple",
                question: "By looking to ourselves we may[BREAK]receive what?",
                potential_answers: "a full reward,a golden crown,a great inheritance,a heavenly robe",
                actual_answer: "a full reward"
            },
            // 2 John 1:9
            {
                question_type: "multiple",
                question: "Whoever abides in the doctrine of[BREAK]Christ has whom?",
                potential_answers: "only the son,only the father,neither,both the father and the son",
                actual_answer: "both the father and the son"
            },
            // 2 John 1:10
            {
                question_type: "multiple",
                question: "What are you not to do for one who[BREAK]does not bring the doctrine?",
                potential_answers: "a. receive him into your house,b. greet him,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 2 John 1:11
            {
                question_type: "multiple",
                question: "Why should you not greet one who[BREAK]denies the doctrine?",
                potential_answers: "he will rob your house,he has no honor in the city,you share in his evil deeds,he is too poor to help",
                actual_answer: "you share in his evil deeds"
            },
            // 2 John 1:12
            {
                question_type: "multiple",
                question: "With what did the elder not wish to[BREAK]write?",
                potential_answers: "stone and chisel,paper and ink,wax and stylus,pen and scroll",
                actual_answer: "paper and ink"
            },
            // 2 John 1:12
            {
                question_type: "multiple",
                question: "How did the elder hope to speak[BREAK]with them?",
                potential_answers: "by messenger,through letters,face to face,in a dream",
                actual_answer: "face to face"
            }
        ] // end of 2 John - level 2
    ], // end of array for 2 John
    [ // array for 3 John
        [ // 3 John - level 1
            // 3 John 1:1
            {
                question_type: "multiple",
                question: "To whom does the elder write in 3[BREAK]John?",
                potential_answers: "the elect lady,the beloved gaius,diotrephes,demetrius",
                actual_answer: "the beloved gaius"
            },
            // 3 John 1:2
            {
                question_type: "multiple",
                question: "What did the elder pray for Gaius?",
                potential_answers: "a. that he prosper in all things,b. that he be in health,c. a and b,d. none of the above",
                actual_answer: "c. a and b"
            },
            // 3 John 1:4
            {
                question_type: "multiple",
                question: "What was the elder's greatest joy?",
                potential_answers: "that my church grows larger,that my letters are read,that my children walk in truth,that my enemies are silent",
                actual_answer: "that my children walk in truth"
            },
            // 3 John 1:5
            {
                question_type: "multiple",
                question: "How does Gaius treat the brethren[BREAK]and strangers?",
                potential_answers: "carelessly,reluctantly,unwillingly,faithfully",
                actual_answer: "faithfully"
            },
            // 3 John 1:7
            {
                question_type: "multiple",
                question: "For the sake of what did the[BREAK]brethren go forth?",
                potential_answers: "the empire,the temple,the law,his name",
                actual_answer: "his name"
            },
            // 3 John 1:7
            {
                question_type: "multiple",
                question: "From whom did the brethren accept[BREAK]nothing?",
                potential_answers: "the jews,the romans,the levites,the gentiles",
                actual_answer: "the gentiles"
            },
            // 3 John 1:8
            {
                question_type: "multiple",
                question: "What may we become by receiving[BREAK]such brethren?",
                potential_answers: "rulers of the church,priests of the temple,fellow workers for the truth,servants of caesar",
                actual_answer: "fellow workers for the truth"
            }
        ], // end of 3 John - level 1
        [ // 3 John - level 2
            // 3 John 1:9
            {
                question_type: "multiple",
                question: "Who loved to have the preeminence?",
                potential_answers: "demetrius,gaius,alexander,diotrephes",
                actual_answer: "diotrephes"
            },
            // 3 John 1:10
            {
                question_type: "multiple",
                question: "How did Diotrephes speak against[BREAK]the elder?",
                potential_answers: "with kind words,with malicious words,with silent looks,with quiet prayers",
                actual_answer: "with malicious words"
            },
            // 3 John 1:11
            {
                question_type: "multiple",
                question: "John says he who does good is of[BREAK]whom?",
                potential_answers: "caesar,the world,god,the devil",
                actual_answer: "god"
            },
            // 3 John 1:12
            {
                question_type: "multiple",
                question: "Who has a good testimony from all?",
                potential_answers: "diotrephes,gaius,timothy,demetrius",
                actual_answer: "demetrius"
            },
            // 3 John 1:13
            {
                question_type: "multiple",
                question: "With what did the elder not wish to[BREAK]write to Gaius?",
                potential_answers: "paper and ink,stone and chisel,clay and reed,pen and ink",
                actual_answer: "pen and ink"
            },
            // 3 John 1:14
            {
                question_type: "multiple",
                question: "What did the elder hope to do[BREAK]shortly?",
                potential_answers: "see gaius,visit rome,send timothy,build a church",
                actual_answer: "see gaius"
            },
            // 3 John 1:14
            {
                question_type: "multiple",
                question: "What greeting does the elder offer[BREAK]to Gaius at the end?",
                potential_answers: "joy to you,mercy to you,peace to you,wisdom to you",
                actual_answer: "peace to you"
            },
            // 3 John 1:14
            {
                question_type: "multiple",
                question: "Whom is Gaius told to greet by[BREAK]name?",
                potential_answers: "the friends,the elders,the gentiles,the apostles",
                actual_answer: "the friends"
            }
        ] // end of 3 John - level 2
    ] // end of array for 3 John
];

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

var israeliteReleased = false;

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
    newLifeGainedBuffer = null,
	israeliteCaughtBuffer = null,
	israeliteRestoredBuffer = null,
	allIsraelitesRestoredBuffer = null;


var backgroundScoreSource, startupThemeSource, justDiedSource, gameOverMusicSource, catchShellSource, powerupArriveSource, darknessSource, cloudPillarSource, firePillarSource, frogsJumpingSource, fliesBuzzingSource,bonusShellCaughtSource,bonusLevelSource;
var israeliteCaughtSource, israeliteRestoredSource, allIsraelitesRestoredSource;

var allIsraelitesRestored = false;

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

var deviceTypeChecked = false;

var speedRate;


// ANIMATION REGULATION CODE HERE; SHOULD REGULATE UPDATE SPEED
var frames_per_second = 62;

var interval = Math.floor(1000 / frames_per_second);
var startTime = performance.now();
var previousTime = startTime;

var currentTime = 0;
var deltaTime = 0;