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

var englishQuestions = [null,[{question_type: "multiple",question: "What did Moses' mother do to save[BREAK]him from the Pharaoh's decree?",potential_answers: "hid him in a basket in the reeds[BREAK]of the nile river,sent him to live with relatives[BREAK]in midian,moved her family away from egypt,left him in the care of a wealthy[BREAK]Egyptian family",actual_answer: "hid him in a basket in the reeds[BREAK]of the nile river"},{question_type: "multiple",question: "Who found Moses in the Nile River?",potential_answers: "a fisherman,the pharaoh's daughter,a group of shepherds,an egyptian solder",actual_answer: "the pharaoh's daughter"},{question_type: "multiple",question: "What sign did God show Moses at the[BREAK]burning bush?",potential_answers: "a. turned moses' rod into a snake,b. turned moses' hand into leprosy,c. a and b,d. none of the above",actual_answer: "c. a and b"},{question_type: "multiple",question: "What was the name of Moses' brother,[BREAK]who also played a significant role[BREAK]in the Exodus?",potential_answers: "aaron,joshua,caleb,jethro",actual_answer: "aaron"},{question_type: "multiple",question: "How many plagues did God send upon[BREAK]Egypt?",potential_answers: "7,10,12,15",actual_answer: "10"},{question_type: "multiple",question: "What was the first plague in Egypt?",potential_answers: "snakes in pharaoh's court,frogs all over egypt,waters becoming blood,darkness over the earth",actual_answer: "waters becoming blood"},{question_type: "multiple",question: "What was the third plague in Egypt?",potential_answers: "flies,frogs,lice,hail",actual_answer: "lice"},{question_type: "multiple",question: "What was the final plague that[BREAK]convinced Pharaoh to let the[BREAK]Israelites go?",potential_answers: "locusts,darkness,death of the firstborn,hail",actual_answer: "death of the firstborn"},{question_type: "multiple",question: "What did the Israelites put on[BREAK]their doorposts to protect[BREAK]themselves from the final plague?",potential_answers: "a cross,a star,lamb's blood,garlic",actual_answer: "lamb's blood"},{question_type: "multiple",question: "What sea did God part to help the[BREAK]Israelites escape from the[BREAK]Egyptians?",potential_answers: "the dead sea,the red sea,the mediterranean sea,the sea of galilee",actual_answer: "the red sea"},{question_type: "multiple",question: "On which mountain did Moses receive[BREAK]the Ten Commandments?",potential_answers: "mount ararat,mount sinai,mount zion,mount moriah",actual_answer: "mount sinai"},{question_type: "multiple",question: "What was the name of Moses' mother?",potential_answers: "miriam,zipporah,jochebed,deborah",actual_answer: "jochebed"},{question_type: "multiple",question: "What was the name of Moses' father-[BREAK]in-law?",potential_answers: "a. midian,b. jethro,c. reuel,d. b and c",actual_answer: "d. b and c"},{question_type: "multiple",question: "Who was the wife of Moses?",potential_answers: "deborah,zipporah,jochebed,hadassah",actual_answer: "zipporah"}],[{question_type: "match",question: "",potential_answers: "",actual_answer: "moses's sister (220;135)(0)->miriam (500;135)(4),God's name (220;215)(1)->I AM (530;215)(5),first plague (220;295)(2)->waters[BREAK]become[BREAK]blood (496.5;275)(6),fourth plague (220;375)(3)->flies (510;375)(7)", actual_answer_sans_coord: "moses's sister->miriam[BREAK][BREAK]God's name->I AM[BREAK][BREAK]first plague->waters become blood[BREAK][BREAK]fourth plague->flies"},{question_type: "match",question: "",potential_answers: "",actual_answer: "second plague (220;135)(0)->frogs (505;215)(5),fifth plague (220;215)(1)->livestock[BREAK]diseased (452;365)(7),eighth plague (220;295)(2)->locusts (480;300)(6),seventh plague (220;375)(3)->hail (520;135)(4)", actual_answer_sans_coord: "second plague->frogs[BREAK][BREAK]fifth plague->livestock diseased[BREAK][BREAK]eighth plague->locusts[BREAK][BREAK]seventh plague->hail"},{question_type: "match",question: "",potential_answers: "",actual_answer: "moses' brother (220;135)(0)->aaron (510;300)(6),moses' father (220;215)(1)->amram (510;375)(7),moses' mother (220;295)(2)->jochebed (468;135)(4),moses' wife (220;375)(3)->zipporah (468;215)(5)", actual_answer_sans_coord: "moses' brother->aaron[BREAK][BREAK]moses' father->amram[BREAK][BREAK]moses' mother->jochebed[BREAK][BREAK]moses' wife->zipporah"},{question_type: "match",question: "",potential_answers: "",actual_answer: "third plague (220;135)(0)->lice (520;135)(4),sixth plague (220;215)(1)->boils (510;375)(7),ninth plague (220;295)(2)->darkness (470;300)(6),tenth plague (220;375)(3)->death of[BREAK]firstborn (460;205)(5)",actual_answer_sans_coord: "third plague->lice[BREAK][BREAK]sixth plague->boils[BREAK][BREAK]ninth plague->darkness[BREAK][BREAK]tenth plague->death of firstborn"},{question_type: "match",question: "",potential_answers: "",actual_answer: "shiphrah (220;135)(0)->hebrew midwife (390;375)(7),gershom (220;215)(1)->moses' son (454;300)(6),midian (220;295)(2)->moses' refuge (414;215)(5),horeb (220;375)(3)->mount of God (424;135)(4)",actual_answer_sans_coord: "shiphrah->hebrew midwife[BREAK][BREAK]gershom->moses' son[BREAK][BREAK]midian->moses' refuge[BREAK][BREAK]horeb->mount of God"},{question_type: "match",question: "",potential_answers: "",actual_answer: "donkey (220;135)(0)->balaam's[BREAK]transport[BREAK]animal (410;275)(6),balak (220;215)(1)->king of moab (410;215)(5),eleazar (220;295)(2)->aaron's son (410;375)(7),Putiel (220;375)(3)->eleazar's[BREAK]father-in-law (410;125)(4)",actual_answer_sans_coord: "donkey->balaam's transport animal[BREAK][BREAK]balak->king of moab[BREAK][BREAK]eleazar->aaron's son[BREAK][BREAK]Putiel->eleazar's father-in-law"},{question_type: "match",question: "",potential_answers: "",actual_answer: "joshua (220;135)(0)->son of nun (445;300)(6),caleb (220;215)(1)->son of Jephunneh (363;215)(5),Jamin (220;295)(2)->son of simeon (405;375)(7),Gershon (220;375)(3)->son of Levi (435;135)(4)",actual_answer_sans_coord: "joshua->son of nun[BREAK][BREAK]caleb->son of Jephunneh[BREAK][BREAK]Jamin->son of simeon[BREAK][BREAK]Gershon->son of Levi"},{question_type: "match",question: "",potential_answers: "",actual_answer: "mount horeb (220;135)(0)->mount sinai (430;135)(4),Jethro (220;215)(1)->Reuel (430;300)(6),aaron (220;295)(2)->first high[BREAK]priest (430;365)(7),mixed[BREAK]multitude (220;365)(3)->came with[BREAK]israelites (430;205)(5)",actual_answer_sans_coord: "mount horeb->mount sinai[BREAK][BREAK]Jethro->Reuel[BREAK][BREAK]aaron->first high priest[BREAK][BREAK]mixed multitude->came with israelites"},{question_type: "match",question: "",potential_answers: "",actual_answer: "wilderness of[BREAK]shur (220;124)(0)->waters made[BREAK]sweet (442;284)(6),wilderness of[BREAK]sin (220;204)(1)->manna falls[BREAK]down (440;364)(7),Rephidim (220;295)(2)->water from[BREAK]rock (442;204)(5),wilderness of[BREAK]sinai (220;364)(3)->God reveals[BREAK]Himself (442;124)(4)",actual_answer_sans_coord: "wilderness of shur->waters made sweet[BREAK][BREAK]wilderness of sin->manna falls down[BREAK][BREAK]Rephidim->water from rock[BREAK][BREAK]wilderness of sinai->God reveals Himself"},{question_type: "match",question: "",potential_answers: "",actual_answer: "burning bush (220;135)(0)->God's[BREAK]presence (465;124)(4),golden calf (220;215)(1)->israelite-made[BREAK]idol (390;284)(6),nadab (220;295)(2)->son of aaron (420;375)(7),bashan (220;375)(3)->conquered[BREAK]land (452;215)(5)",actual_answer_sans_coord: "burning bush->God's presence[BREAK][BREAK]golden calf->israelite-made idol[BREAK][BREAK]nadab->son of aaron[BREAK][BREAK]bashan->conquered land"},{question_type: "match",question: "",potential_answers: "",actual_answer: "tabernacle (220;135)(0)->portable[BREAK]sanctuary (413;275)(6),bezalel (220;215)(1)->chief artisan (413;125)(4),miriam (220;295)(2)->struck with[BREAK]leprosy (413;195)(5),Mount Nebo (220;375)(3)->moses's death[BREAK]place (413;365)(7)",actual_answer_sans_coord: "tabernacle->portable sanctuary[BREAK][BREAK]bezalel->chief artisan[BREAK][BREAK]miriam->struck with leprosy[BREAK][BREAK]Mount Nebo->moses's death place"},{question_type: "match",question: "",potential_answers: "",actual_answer: "aaron's rod (220;135)(0)->budded with[BREAK]almonds (390;205)(5),eliezer (220;215)(1)->moses' second[BREAK]son (390;280)(6),kadesh (220;295)(2)->miriam's burial[BREAK]place (390;125)(4),Hoglah (220;375)(3)->zelophehad's[BREAK]daughter (390;365)(7)",actual_answer_sans_coord: "aaron's rod->budded with almonds[BREAK][BREAK]eliezer->moses' second son[BREAK][BREAK]kadesh->miriam's burial place[BREAK][BREAK]Hoglah->zelophehad's daughter"},{question_type: "match",question: "",potential_answers: "",actual_answer: "meribah (220;135)(0)->israelites[BREAK]quarreled[BREAK]there (420;280)(6),Noah (220;215)(1)->Zelophehad's[BREAK]daughter (420;205)(5),Urim (220;295)(2)->priestly gem (420;135)(4),Oholiab (220;375)(3)->bezalel's[BREAK]assistant (420;365)(7)",actual_answer_sans_coord: "meribah->israelites quarreled there[BREAK][BREAK]Noah->Zelophehad's daughter[BREAK][BREAK]Urim->priestly gem[BREAK][BREAK]Oholiab->bezalel's assistant"},{question_type: "match",question: "",potential_answers: "",actual_answer: "Omer (220;135)(0)->measure of grain (367;215)(5),Sihon (220;215)(1)->Amorite king (367;375)(7),Og (220;295)(2)->king of Bashan (367;135)(4),hur (220;375)(3)->moses' arm[BREAK]supporter (367;290)(6)",actual_answer_sans_coord: "Omer->measure of grain[BREAK][BREAK]Sihon->Amorite king[BREAK][BREAK]Og->king of Bashan[BREAK][BREAK]hur->moses' arm supporter"}],[{question_type: "number",question: "order these commandments correctly.",potential_answers: "",actual_answer: "you shall not bow down to idols,you shall not take god's name in vain,remember the sabbath day to keep it holy,you shall not kill,you shall not commit adultery,you shall not steal,you shall not lie,you shall not covet",actual_answer_sans_coord: "1. you shall not bow down to idols[BREAK][BREAK]2. you shall not take god's name in vain[BREAK][BREAK]3. remember the sabbath day to keep it holy[BREAK][BREAK]4. you shall not kill[BREAK][BREAK]5. you shall not commit adultery[BREAK][BREAK]6. you shall not steal[BREAK][BREAK]7. you shall not lie[BREAK][BREAK]8. you shall not covet"},{question_type: "number",question: "order these plagues correctly.",potential_answers: "",actual_answer: "the nile becomes blood,frogs,lice,flies,egyptian livestock dies,boils,hail,locust",actual_answer_sans_coord: "1. the nile becomes blood[BREAK][BREAK]2. frogs[BREAK][BREAK]3. lice[BREAK][BREAK]4. flies[BREAK][BREAK]5. egyptian livestock dies[BREAK][BREAK]6. boils[BREAK][BREAK]7. hail[BREAK][BREAK]8. locust"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "Waters of Marah made sweet,Quail came at evening for the first time,Manna fell from heaven,Jethro advises Moses about leadership,The Ten Commandments were proclaimed,The Ten Commandments were given,Aaron erected a golden calf,Aaron and his sons are consecrated",actual_answer_sans_coord: "1. Waters of Marah made sweet[BREAK][BREAK]2. Quail came at evening for the first time[BREAK][BREAK]3. Manna fell from heaven[BREAK][BREAK]4. Jethro advises Moses about leadership[BREAK][BREAK]5. The Ten Commandments were proclaimed[BREAK][BREAK]6. The Ten Commandments were given[BREAK][BREAK]7. Aaron erected a golden calf[BREAK][BREAK]8. Aaron and his sons are consecrated"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "the decree to execute baby boys was[BREAK]proclaimed,moses was born,moses was found by Pharaoh's daughter,moses kills an egyptian,moses defends the daughters of jethro,moses marries zipporah,moses sees burning bush,moses' rod becomes a snake",actual_answer_sans_coord: "1. the decree to execute baby boys was[BREAK] proclaimed[BREAK][BREAK]2. moses was born,[BREAK][BREAK]3. moses was found by Pharaoh's daughter[BREAK][BREAK]4. moses kills an egyptian[BREAK][BREAK]5. moses defends the daughters of jethro[BREAK][BREAK]6. moses marries zipporah[BREAK][BREAK]7. moses sees burning bush[BREAK][BREAK]8. moses' rod becomes a snake"},{question_type: "number",question: "order these passover instructions correctly.",potential_answers: "",actual_answer: "take a lamb without blemish,kill it at twilight,put the lamb's blood on the doorpost,roast the lamb,eat it alongside unleavened bread and[BREAK]bitter herbs,burn up the lamb leftovers,eat with belt on your waist and sandals on[BREAK]your feet,don't leave your house until morning",actual_answer_sans_coord: "1. take a lamb without blemish[BREAK][BREAK]2. kill it at twilight[BREAK][BREAK]3. put the lamb's blood on the doorpost[BREAK][BREAK]4. roast the lamb[BREAK][BREAK]5. eat it alongside unleavened bread and[BREAK] bitter herbs[BREAK][BREAK]6. burn up the lamb leftovers[BREAK][BREAK]7. eat with belt on your waist and sandals[BREAK] on your feet[BREAK][BREAK]8. don't leave your house until morning"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "moses grinds golden calf to powder,stubborn worshippers of golden calf killed,moses talks to God in tabernacle of[BREAK]meeting,Ten Commandments are written again on new[BREAK]stone tablets,bezalel is called as chief artisan,children of israel are told to stop[BREAK]bringing offerings,bezalel builds the Ark of the Covenant,bronze laver is built",actual_answer_sans_coord: "1. moses grinds golden calf to powder[BREAK][BREAK]2. stubborn worshippers of golden calf killed[BREAK][BREAK]3. moses talks to God in tabernacle of meeting[BREAK][BREAK]4. Ten Commandments are written again on[BREAK] new stone tablets[BREAK][BREAK]5. bezalel is called as chief artisan[BREAK][BREAK]6. children of israel are told to stop[BREAK] bringing offerings[BREAK][BREAK]7. bezalel builds the Ark of the Covenant[BREAK][BREAK]8. bronze laver is built"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "spies sent to the land of canaan,bad report is given upon return,joshua and caleb try to encourage the[BREAK]people,israelites banished to the desert for 40[BREAK]years,man put to death for working on the[BREAK]Sabbath,korah and his men rebel against moses and[BREAK]aaron,korah and his men are swallowed by the[BREAK]earth,4700 people die due to a plague",actual_answer_sans_coord: "1. spies sent to the land of canaan[BREAK][BREAK]2. bad report is given upon return[BREAK][BREAK]3. joshua and caleb try to encourage the[BREAK] people[BREAK][BREAK]4. israelites banished to the desert for[BREAK] 40 years[BREAK][BREAK]5. man put to death for working on the Sabbath[BREAK][BREAK]6. korah and his men rebel against moses and [BREAK] aaron[BREAK][BREAK]7. korah and his men are swallowed by the[BREAK] earth[BREAK][BREAK]8. 4700 people die due to a plague[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "zipporah saves moses's life by[BREAK]circumcising her son,moses reunites with aaron,moses returns to egypt,moses and aaron confront pharaoh,pharaoh increases the israelite's workload,God promises deliverance,God sends the ten plagues,pharaoh lets the israelites go",actual_answer_sans_coord: "1. zipporah saves moses's life by[BREAK] circumcising her son[BREAK][BREAK]2. moses reunites with aaron[BREAK][BREAK]3. moses returns to egypt[BREAK][BREAK]4. moses and aaron confront pharaoh[BREAK][BREAK]5. pharaoh increases the israelite's workload[BREAK][BREAK]6. God promises deliverance[BREAK][BREAK]7. God sends the ten plagues[BREAK][BREAK]8. pharaoh lets the israelites go"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "ark of the testimony built,table of showbread built,gold lampstand built,altar of incense built,anointing oil and incense made by perfumer,altar of burnt offering built,priestly garments furnished woven,the tabernacle is erected",actual_answer_sans_coord: "1. ark of the testimony built[BREAK][BREAK]2. table of showbread built[BREAK][BREAK]3. gold lampstand built[BREAK][BREAK]4. altar of incense built[BREAK][BREAK]5. anointing oil and incense made by perfumer[BREAK][BREAK]6. altar of burnt offering built[BREAK][BREAK]7. priestly garments furnished woven[BREAK][BREAK]8. the tabernacle is erected"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "the mixed multitude complains about manna,God says He will send quail for a whole[BREAK]month,seventy elders receive the Holy Spirit,Eldad and Medad start prophesying,God sends quail for a second time,people craving for quail die from[BREAK]overeating,aaron and miriam spoke against moses,God strikes Miriam with leprosy",actual_answer_sans_coord: "1. the mixed multitude complains about manna[BREAK][BREAK]2. God says He will send quail for a whole[BREAK] month[BREAK][BREAK]3. seventy elders receive the Holy Spirit[BREAK][BREAK]4. Eldad and Medad start prophesying[BREAK][BREAK]5. God sends quail for a second time[BREAK][BREAK]6. people craving for quail die from[BREAK] overeating[BREAK][BREAK]7. aaron and miriam spoke against moses[BREAK][BREAK]8. God strikes Miriam with leprosy"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "the israelites defeat the Canaanites at[BREAK]Hormah,the israelites complained against God[BREAK]again,God causes a plague of snakes within the[BREAK]camp,moses furnishes a bronze serpent,israel defeats king sihon and his army,israel defeats king og and his army,moses sends spies out to Jazer,israel takes the villages at Jazer",actual_answer_sans_coord: "1. the israelites defeat the Canaanites at[BREAK] Hormah[BREAK][BREAK]2. the israelites complained against God again[BREAK][BREAK]3. God causes a plague of snakes within the[BREAK] camp[BREAK][BREAK]4. moses furnishes a bronze serpent[BREAK][BREAK]5. israel defeats king sihon and his army[BREAK][BREAK]6. israel defeats king og and his army[BREAK][BREAK]7. moses sends spies out to Jazer[BREAK][BREAK]8. israel takes the villages at Jazer"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "balak sends balaam to curse the children[BREAK]of israel,the Angel of the Lord abstructs the path[BREAK]balaam is on,balaam obeys the command the Angel gives[BREAK]him,balaam fails to curse israel in front of[BREAK]balak,balaam gives a prophecy concerning moab's[BREAK]future,israel falls into harlotry,a man and a midianite woman are killed for[BREAK]their sin,God tells moses to take a census of the[BREAK]people",actual_answer_sans_coord: "[REMOVE_BREAK]1. balak sends balaam to curse the children[BREAK] of israel[BREAK][BREAK]2. the Angel of the Lord abstructs the path[BREAK] balaam is on[BREAK]3. balaam obeys the command the Angel gives[BREAK] him[BREAK]4. balaam fails to curse israel in front of[BREAK] balak[BREAK][BREAK]5. balaam gives a prophecy concerning[BREAK] moab's future[BREAK][BREAK]6. israel falls into harlotry[BREAK][BREAK]7. a man and a midianite woman are killed for[BREAK] their sin[BREAK][BREAK]8. God tells moses to take a second census of[BREAK] the people[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "God tells moses where he would die,moses inaugurates joshua as israel's next[BREAK]leader,the israelites defeat the midianites,moses gives instructions concerning[BREAK]captives,God tells Moses to divide the plunder,tribes to settle east of the jordan are[BREAK]chosen,God instructs israel concerning conquest[BREAK]of Canaan,God chooses leaders to divide the land",actual_answer_sans_coord: "1. God tells moses where he would die[BREAK][BREAK]2. moses inaugurates joshua as israel's[BREAK] next leader[BREAK][BREAK]3. the israelites defeat the midianites[BREAK][BREAK]4. moses gives instructions concerning[BREAK] captives[BREAK][BREAK]5. God tells Moses to divide the plunder[BREAK][BREAK]6. tribes to settle east of the jordan are[BREAK] chosen[BREAK][BREAK]7. God instructs israel concerning conquest[BREAK] of Canaan[BREAK][BREAK]8. God chooses leaders to divide the land[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "place these excerpts from the song of moses[BREAK]in the correct order (Exodus 15).",potential_answers: "",actual_answer: "I will sing to the Lord,The Lord is a man of war,You sent forth Your wrath,The earth swallowed them,You in Your mercy have led forth,The people will hear and be afraid,Fear and dread will fall on them,They will be as still as a stone",actual_answer_sans_coord: "1. I will sing to the Lord[BREAK][BREAK]2. The Lord is a man of war[BREAK][BREAK]3. You sent forth Your wrath[BREAK][BREAK]4. The earth swallowed them[BREAK][BREAK]5. You in Your mercy have led forth[BREAK][BREAK]6. The people will hear and be afraid[BREAK][BREAK]7. Fear and dread will fall on them[BREAK][BREAK]8. They will be as still as a stone"}],[{question_type: "TF",question: "Moses built a golden calf for the[BREAK]Israelites to worship.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "aaron was the one who built a [BREAK]golden calf for the israelites to[BREAK]worship."},{question_type: "TF",question: "The Israelites sang praises to God[BREAK]after they crossed the Red Sea and[BREAK]were saved from the Egyptians.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "The Israelites did sing praises[BREAK]after crossing the Red Sea.[BREAK][BREAK]See Exodus 15."},{question_type: "TF",question: "Moses went up to Mount Sinai to[BREAK]receive the ten commandments three[BREAK]times.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "moses only went up to receive the[BREAK]ten commandments twice.[BREAK][BREAK]See Exodus 24 and 34."},{question_type: "TF",question: "moses immediately accepted the[BREAK]work God called him to do.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "before moses accepted the work he[BREAK]was called to, he made excuses."},{question_type: "TF",question: "God brought water out from a [BREAK]rock at Horeb.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "Moses struck the rock at Horeb, but[BREAK]God caused the water to flow.[BREAK][BREAK]See Exodus 17:1-7."},{question_type: "TF",question: "when moses rested his arms during[BREAK]the battle with the amalekites, the[BREAK]israelite army continued to win.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "when moses rested his arms during[BREAK]the battle with the amalekites, the[BREAK]israeliite army started to lose."},{question_type: "TF",question: "the israeltes wandered in the [BREAK]desert for 40 years before entering[BREAK]the promised land.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Numbers 14:34."},{question_type: "TF",question: "aaron was the first high priest [BREAK]of israel.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Exodus 28:1-43."},{question_type: "TF",question: "the israelites crossed the jordan[BREAK]river on dry ground to enter the[BREAK]promised land.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "This happened under Joshua's[BREAK]leadership.[BREAK][BREAK]See Joshua 3."},{question_type: "TF",question: "the walls of jericho fell after[BREAK]the israelites marched around them[BREAK]one time.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "they marched around the city for[BREAK]seven days, and on the seventh day,[BREAK]they marched around it seven times[BREAK]before the walls fell."},{question_type: "TF",question: "joshua was one of the twelve spies[BREAK]sent to scout the land of canaan.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Numbers 13:1-16."},{question_type: "TF",question: "the manna that God provided for[BREAK]the israelites stopped appearing[BREAK]once they had entered the promised[BREAK]land.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Joshua 5:12."},{question_type: "TF",question: "moses led the israelites into the[BREAK]promised land.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "joshua led the israelites into the[BREAK]promised land after moses' death."},{question_type: "TF",question: "the israelites built a tabernacle[BREAK]as god's portable dwelling place.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "Early references are in Exodus."}],[{question_type: "multiple",question: "Whose rod did God use to turn water[BREAK]into blood?",potential_answers: "moses',aaron's,pharaoh's,none of the above",actual_answer: "aaron's"},{question_type: "multiple",question: "What was the name of Moses' father?",potential_answers: "joseph,enoch,reuel,amram",actual_answer: "amram"},{question_type: "multiple",question: "Whose rod grew almond buds?",potential_answers: "a. moses,b. jethro,c. amram,d. none of the above",actual_answer: "d. none of the above"},{question_type: "multiple",question: "Which tribes of Israel asked to[BREAK]inherit the land of Jazer and the[BREAK]land of Gilead?",potential_answers: "gad and reuben,gad and judah,judah and reuben,judah and levi",actual_answer: "gad and reuben"},{question_type: "multiple",question: "Who was the chief artisan who [BREAK]led in the building of the[BREAK]tabernacle?",potential_answers: "aholiab,gershom,reuel,bezalel",actual_answer: "bezalel"},{question_type: "TF",question: "Gershom and abihu brought strange[BREAK]fire into the Tabernacle.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "nadab and abihu were the ones who[BREAK]brought strange fire into the[BREAK]Tabernacle.[BREAK][BREAK]See Leviticus 10:1-2."},{question_type: "TF",question: "Aaron died on the top of Mount Hor.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Numbers 33:39."},{question_type: "TF",question: "moses sent messengers from Kadesh[BREAK]to the king of moab to ask for[BREAK]passage.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Moses sent messengers from Kadesh[BREAK]to the King of Edom to ask for[BREAK]passage.[BREAK][BREAK]See Numbers 20:14-21."},{question_type: "TF",question: "miriam died and was buried in the[BREAK]wilderness of sin.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Miriam died and was buried in the[BREAK]wilderness of zin. “Zin” with a “z”,[BREAK]not “Sin” with an “s”.[BREAK][BREAK]See Numbers 20:1"},{question_type: "TF",question: "moses made a bronze snake so that[BREAK]those bitten by snakes could live.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Numbers 21:4-9."},{question_type: "multiple",question: "What was the name of the place that[BREAK]had a well that sprung up with[BREAK]water?",potential_answers: "soda,mattanah,pisgah,beer",actual_answer: "beer",actual_answer_explanation: "See Numbers 21:16-18."},{question_type: "multiple",question: "Which king would not allow the[BREAK]israelites to pass through their[BREAK]land?",potential_answers: "a. King Sihon,b. the king of edom,c. the king of moab,d. all of the above",actual_answer: "d. all of the above",actual_answer_explanation: "See Numbers 20:14-17 and Numbers 21:21-23."},{question_type: "number",question: "put these destinations in the right order.",potential_answers: "",actual_answer: "Succoth,Marah,Red Sea,Rephidim,Kibroth Hattaavah,Abronah,Mount Hor,Zalmonah",actual_answer_sans_coord: "1. Succoth[BREAK][BREAK]2. Marah[BREAK][BREAK]3. Red Sea[BREAK][BREAK]4. Rephidim[BREAK][BREAK]5. Kibroth Hattaavah[BREAK][BREAK]6. Abronah[BREAK][BREAK]7. Mount Hor[BREAK][BREAK]8. Zalmonah"},{question_type: "TF",question: "God told the children of Israel to[BREAK]dispossess the inhabitants of[BREAK]Canaan.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Numbers 33:51-56, KJV or NKJV."}],[{question_type: "multiple",question: "What did God strenuously emphasize[BREAK]that human beings should not[BREAK]consume?",potential_answers: "dirty water,bloody meat,chicken bones,human flesh",actual_answer: "bloody meat",actual_answer_explanation: "see leviticus 17:14"},{question_type: "multiple",question: "what animal did God prohibit the [BREAK]israelites from eating?",potential_answers: "a. horse,b. pig,c. catfish,d. all of the above",actual_answer: "d. all of the above",actual_answer_explanation: "see Leviticus 11:1-23"},{question_type: "TF",question: "God prohibited the Israelites from[BREAK]eating insects.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "God prohibited the Israelites from[BREAK]eating the insects that creep on[BREAK]all four legs.[BREAK][BREAK]See Leviticus 20:23."},{question_type: "multiple",question: "where is the Ark of the Covenant [BREAK]located in The Tabernacle?",potential_answers: "holy place,most holy place,ivory palace,the throneroom",actual_answer: "most holy place"},{question_type: "multiple",question: "When were the Israelites supposed[BREAK]to cancel debts?",potential_answers: "every other week,every other year,every seven years,every ten years",actual_answer: "every seven years"},{question_type: "multiple",question: "In Numbers, which pagan god do the[BREAK]israelites begin to worship?",potential_answers: "baal,azazel,ashtaroth,balor",actual_answer: "baal",actual_answer_explanation: "See Numbers 25."},{question_type: "multiple",question: "In Numbers, what happened to Miriam[BREAK]after God gave her and Aaron a[BREAK]lecture?",potential_answers: "she became psychotic,she became feverish,she became leprous,she contracted chicken pox",actual_answer: "she became leprous",actual_answer_explanation: "See Numbers 12:1-15."},{question_type: "TF",question: "In Numbers, God chose Joshua to be[BREAK]the next leader.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Joshua 27:12-23"},{question_type: "TF",question: "Moses received his name from birth.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Moses received his name after being[BREAK]discovered by Pharaoh's daughter.[BREAK][BREAK]See Exodus 2:1-10"},{question_type: "multiple",question: "which mountain did moses die on?",potential_answers: "mount sinai,mount hor,mount nebo,mount nemo",actual_answer: "mount nebo",actual_answer_explanation: "See Deuteronomy 34."},{question_type: "multiple",question: "how many times did the israelites[BREAK]walk around the walls of jericho on[BREAK]day 7?",potential_answers: "12,10,7,3",actual_answer: "7",actual_answer_explanation: "See Joshua 6:15"},{question_type: "multiple",question: "How many days did Moses spend on[BREAK]Mount Sinai when he went alone the[BREAK]first time?",potential_answers: "30,40,50,60",actual_answer: "40",actual_answer_explanation: "See Exodus 24:18.[BREAK]Note: Moses stays on Mount Sinai[BREAK]for forty days once more[BREAK]in Exodus 34."},{question_type: "multiple",question: "How many years did the israelites[BREAK]spend in the wilderness?",potential_answers: "20,40,60,80",actual_answer: "40",actual_answer_explanation: "See Numbers 14:20-25."},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "moses dies on mount nebo,God gives the order to cross the Jordan[BREAK]River,Rahab saves two israelite spies,the israelites cross the Jordan,jericho is destroyed,israelites suffer defeat at Ai due to[BREAK]Achan's sin,Achan is stoned,Ai is defeated",actual_answer_sans_coord: "1. moses dies on mount nebo[BREAK][BREAK]2. God gives the order to cross the Jordan[BREAK] River[BREAK][BREAK]3. Rahab saves two israelite spies[BREAK][BREAK]4. the israelites cross the Jordan[BREAK][BREAK]5. jericho is destroyed[BREAK][BREAK]6. israelites suffer defeat at Ai due to[BREAK] Achan's sin[BREAK][BREAK]7. Achan is stoned[BREAK][BREAK]8. Ai is defeated"}],[{question_type: "multiple",question: "After crossing the Jordan River,[BREAK]what did the israelites do to[BREAK]commemorate the twelve tribes?",potential_answers: "made an altar,made a golden calf,wrote a novel,published the Torah",actual_answer: "made an altar",actual_answer_explanation: "See Joshua 4."},{question_type: "multiple",question: "[IGNORE_ANSWER_BREAK]what did Joshua say to the[BREAK]mysterious soldier with the sword[BREAK]when they first met?",potential_answers: "“on guard!”,“stand and fight!”,“are You for us or for our[BREAK] enemies?”,“Please don't hurt me!”",actual_answer: "“are You for us or for our[BREAK] enemies?”",actual_answer_explanation: "See Joshua 5:13-15."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]what happened to Rahab after the[BREAK]walls of Jericho collapsed?",potential_answers: "she was spared and incorporated[BREAK] into Israel,she was mercilessly murdered,she became a slave,she was exiled",actual_answer: "she was spared and incorporated[BREAK] into Israel",actual_answer_explanation: "See Joshua 6:22-25."},{question_type: "multiple",question: "what would happen if an israelite[BREAK]rebuilt jericho?",potential_answers: "they were blessed,they became oddballs,they became chief architect,they were cursed",actual_answer: "they were cursed",actual_answer_explanation: "See Joshua 6:26."},{question_type: "TF",question: "The animals were spared when[BREAK]destroying jericho.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "No animals were spared during the[BREAK]destruction of the city.[BREAK][BREAK]See Joshua 6:21."},{question_type: "multiple",question: "how many israelites died in the[BREAK]first battle of ai?",potential_answers: "3000,1000,100,36",actual_answer: "36",actual_answer_explanation: "See Joshua 7:2-5."},{question_type: "TF",question: "achan was burned after he was[BREAK]stoned.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "Achan and his family were burned[BREAK]after being stoned.[BREAK][BREAK]See Joshua 7:25-26."},{question_type: "match",question: "",potential_answers: "",actual_answer: "achan (220;135)(0)->took accursed[BREAK]things (410;365)(7),rahab (220;215)(1)->was a harlot (430;295)(6),gibeonites (220;295)(2)->lied for[BREAK]safety (475;125)(4),caleb (220;375)(3)->inherits hebron (380;215)(5)",actual_answer_sans_coord: "achan->took accursed things[BREAK][BREAK]rahab->was a harlot[BREAK][BREAK]gibeonites->lied for safety[BREAK][BREAK]caleb->inherits hebron"},{question_type: "multiple",question: "What was the former name of Hebron,[BREAK]the land Caleb inherited?",potential_answers: "Kirjath Bara,Kirjath Arba,Kirjath Etal,Kirjath Jearim",actual_answer: "Kirjath Arba",actual_answer_explanation: "Joshua 14:6-15"},{question_type: "multiple",question: "What gift would Caleb give to the[BREAK]man who defeated Kirjath Sepher?",potential_answers: "the medal of honor,Achsah his daughter as wife,30 shekels of silver,promotion to governor",actual_answer: "Achsah his daughter as wife",actual_answer_explanation: "See Joshua 15:16"},{question_type: "multiple",question: "What was the border of Edom at the [BREAK]wilderness of zin southward referred[BREAK]as in Joshua 15:1?",potential_answers: "southern boundary,extreme southern boundary,Salt Sea,Karkaa",actual_answer: "extreme southern boundary",actual_answer_explanation: "See Joshua 15:1"},{question_type: "multiple",question: "What city did Joshua inherit?",potential_answers: "jericho,ai,Timnath Serah,Me Jarkon",actual_answer: "Timnath Serah",actual_answer_explanation: "See Joshua 19:49-50."},{question_type: "multiple",question: "What do the cities of Kedesh,[BREAK]Naphtali, Shechem, and Kirjah Arba[BREAK]have in common?",potential_answers: "a. they are places of judgement,b. they are cities of refuge,c. they are houses of worship,d. none of the above",actual_answer: "b. they are cities of refuge",actual_answer_explanation: "See Joshua 20."},{question_type: "multiple",question: "How old was Joshua when he died?",potential_answers: "110,112,109,115",actual_answer: "110",actual_answer_explanation: "See Joshua 24:29-30."}],[{question_type: "multiple",question: "Which cities was Manasseh supposed[BREAK]to rid of inhabitants?",potential_answers: "a. beth shean,b. Taanach,c. dorabelon,d. a and b",actual_answer: "d. a and b",actual_answer_explanation: "See Judges 1:27."},{question_type: "TF",question: "Ephraim drove out the Canaanites[BREAK]who dwelt in Gezer.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Ephraim did not drive out the[BREAK]Canaanites inhabiting Gezer.[BREAK][BREAK]See Judges 1:29"},{question_type: "TF",question: "The boundary of the Amorites was[BREAK]from Sela and upward.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "\"The boundary of the Amorites was[BREAK]from the ascent of Akrabbim, from[BREAK]Sela, and upward.\"[BREAK][BREAK]Judges 1:36, NKJV"},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]The Angel of the LORD was sorrowed[BREAK]when the Israelites ___________.",potential_answers: "ate too much quail,did not drive out certain[BREAK] inhabitants,blasphemed His name,failed to trust Him",actual_answer: "did not drive out certain[BREAK] inhabitants",actual_answer_explanation: "See Judges 2:1-5."},{question_type: "multiple",question: "What was the name of Caleb's[BREAK]daughter?",potential_answers: "Achsah,Deborah,Leah,Mahlah",actual_answer: "Achsah",actual_answer_explanation: "See Judges 1:12 or Joshua 15:16."},{question_type: "multiple",question: "What was the name of Caleb's[BREAK]soon-to-be son-in-law?",potential_answers: "Nathaniel,Othaniel,Othniel,Jephunneh",actual_answer: "Othniel",actual_answer_explanation: "See Joshua 15:17 or Judges 1:13."},{question_type: "multiple",question: "What were the two gods that the[BREAK]Israelites served when they turned[BREAK]from God?",potential_answers: "ashtoreth and God,baal and God,baal and Sharon,baal and ashtoreth",actual_answer: "baal and ashtoreth",actual_answer_explanation: "See Judges 2:13."},{question_type: "multiple",question: "What was the city of Bethel[BREAK]originally called?",potential_answers: "Light,Sin,Luz,Zin",actual_answer: "Luz",actual_answer_explanation: "See Judges 1:22-23."},{question_type: "multiple",question: "Each time the Israelites turned[BREAK]back to God, what did He do?",potential_answers: "He destroyed that generation,He rejected them,He laughed at their ignorance,He sent judges",actual_answer: "He sent judges",actual_answer_explanation: "See Judges 2:16-19. (I doubt you are[BREAK]writing these down. - A.E.)"},{question_type: "number",question: "Put these judges in the right order.",potential_answers: "",actual_answer: "Othniel,Deborah,Gideon,Jair,Jephthah,Ibzan,Abdon,Samson",actual_answer_sans_coord: "1. Othniel[BREAK][BREAK]2. Deborah[BREAK][BREAK]3. Gideon[BREAK][BREAK]4. Jair[BREAK][BREAK]5. Jephthah[BREAK][BREAK]6. Ibzan[BREAK][BREAK]7. Abdon[BREAK][BREAK]8. Samson"},{question_type: "TF",question: "Ehud was left-handed.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "Ehud was left-handed.[BREAK][BREAK]See Judges 3:15."},{question_type: "multiple",question: "What king did Ehud stab with a[BREAK]dagger?",potential_answers: "eglon,rameses,othniel,barak",actual_answer: "eglon",actual_answer_explanation: "See Judges 3:12."},{question_type: "multiple",question: "Where would Deborah the prophetess[BREAK]sit when judging the children of[BREAK]israel?",potential_answers: "on the roof of the watchtower,under a palm tree,in her house,in her water chamber",actual_answer: "under a palm tree",actual_answer_explanation: "See Judges 4:4, 5."},{question_type: "number",question: "Put the events in the right order.",potential_answers: "",actual_answer: "Deborah tells Barak to defeat sisera's[BREAK]army,barak says he wanted deborah to accompany[BREAK]him,Deborah predicts that a woman will kill[BREAK]Sisera,Barak defeats the army of sisera,Sisera flees to Jael's tent,jael allows sisera to rest in her tent,jael kills sisera on her own with a tent[BREAK]peg,jael shows sisera's body to barak",actual_answer_sans_coord: "1. Deborah tells Barak to defeat sisera's[BREAK] army[BREAK][BREAK]2. barak says he wanted deborah to[BREAK] accompany him[BREAK][BREAK]3. Deborah predicts that a woman will kill[BREAK] Sisera[BREAK][BREAK]4. Barak defeats the army of sisera[BREAK][BREAK]5. Sisera flees to Jael's tent[BREAK][BREAK]6. jael allows sisera to rest in her tent[BREAK][BREAK]7. jael kills sisera on her own with a tent[BREAK] peg[BREAK][BREAK]8. jael shows sisera's body to barak[INCREASE_SQUARE_HEIGHT]"}],[{question_type: "multiple",question: "What was considered \"improper[BREAK]mourning\" in the Israelite camp?",potential_answers: "a. cursing the greek gods,b. cutting yourself,c. shaving the front of your head,d. b and c",actual_answer: "d. b and c",actual_answer_explanation: "See Deuteronomy 14:1-2."},{question_type: "multiple",question: "What was the punishment for[BREAK]relatives that encourage the people[BREAK]to serve foreign gods?",potential_answers: "they were crucified,they were drowned,they were imprisoned,they were stoned",actual_answer: "they were stoned",actual_answer_explanation: "See Deuteronomy 13:6-11."},{question_type: "multiple",question: "How much is a tithe?",potential_answers: "1/4 of what you've received,1/2 of what you've received,1/9 of what you've received,1/10 of what you've received",actual_answer: "1/10 of what you've received"},{question_type: "TF",question: "Animals with abnormalities can be [BREAK]sacrificed to God.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Animals with abnormalities cannot[BREAK]be sacrificed to God. Instead, the[BREAK]worshiper must eat the animal.[BREAK][BREAK]See Deuteronomy 15:19-23."},{question_type: "TF",question: "God allows consumption of all[BREAK]animals that chew the cud.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "God only allows consumption of[BREAK]animals that chew the cud and have[BREAK]cloven feet.[BREAK][BREAK]See Leviticus 11."},{question_type: "TF",question: "God commands generosity to the poor.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "God commands generosity to the poor.[BREAK][BREAK]See Deuteronomy 15:7-11."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]What did Israelite owners do to[BREAK]their servants when they refused to[BREAK]leave after seven years?",potential_answers: "a. makes them their servant forever,b. puncture a hole in the servant's[BREAK] ear,c. releases them anyway,d. a and b",actual_answer: "d. a and b",actual_answer_explanation: "See Deuteronomy 15:12-18."},{question_type: "multiple",question: "How many days was the feast of [BREAK]tabernacles supposed to be observed?",potential_answers: "3 days,10 days,40 days,7 days",actual_answer: "7 days",actual_answer_explanation: "See Deuteronomy 16:13."},{question_type: "multiple",question: "How was korah related to moses?",potential_answers: "first cousin,first cousin once removed,second cousin,uncle",actual_answer: "first cousin",actual_answer_explanation: "See Numbers 16:1 and Exodus 6:14-20 to put two and two[BREAK]together."},{question_type: "match",question: "",potential_answers: "",actual_answer: "7 days (220;135)(0)->waters staying[BREAK]bloody (405;205)(5),3 days (220;215)(1)->egypt staying[BREAK]dark (405;125)(4),7 years (220;295)(2)->duration of[BREAK]servitude (405;290)(6),40 years (220;375)(3)->journey to[BREAK]canaan (405;365)(7)",actual_answer_sans_coord: "7 days->waters staying bloody[BREAK][BREAK]3 days->egypt staying dark[BREAK][BREAK]7 years->duration of servitude[BREAK][BREAK]40 years->journey to canaan"},{question_type: "TF",question: "King Eglon was very fat.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "King Eglon was so fat, his belly[BREAK]covered Ehud's dagger when it was[BREAK]thrust in.[BREAK][BREAK]See Judges 3:12:30."},{question_type: "TF",question: "Shamgar killed 600 Philistine men[BREAK]with a donkey's jawbone.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Shamgar killed 600 Philistine men[BREAK]with an ox goad.[BREAK][BREAK]See Judges 3:31."},{question_type: "multiple",question: "Where was Gideon threshing wheat?",potential_answers: "in a watch tower,in a swimming pool,in a winepress,in the water closet",actual_answer: "in a winepress",actual_answer_explanation: "See Judges 6:11."},{question_type: "TF",question: "After Ehud's death, the Israelites[BREAK]kept God's commandments.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "The Israelites returned to their[BREAK]wicked ways, thus opening the door[BREAK]to trouble with the Caananites.[BREAK][BREAK]See Judges 4:1-2."}],[{question_type: "multiple",question: "Which duo held moses's arms during[BREAK]the battle with the amalekites?",potential_answers: "aaron and joshua,aaron and hur,hur and joshua,hur and milcah",actual_answer: "aaron and hur",actual_answer_explanation: "See Exodus 17:8-16."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]What did Gideon bring to the angel[BREAK]of the Lord?",potential_answers: "a young goat and unleavened[BREAK] cakes,a pinball machine,a firstborn calf,two pigeons",actual_answer: "a young goat and unleavened[BREAK] cakes",actual_answer_sans_coord: "[REMOVE_BREAK]"},{question_type: "multiple",question: "What did Gideon do to the altar of[BREAK]Baal?",potential_answers: "he stole it,he destroyed it,he rebuilt it,he smeared it with mud",actual_answer: "he destroyed it",actual_answer_explanation: "See Judges 6:28-32."},{question_type: "multiple",question: "What name is given Gideon after he[BREAK]destroys the altar of baal?",potential_answers: "Jerubbaal,Gilead,Samaria,Baalerub",actual_answer: "Jerubbaal",actual_answer_explanation: "See Judges 6:32."},{question_type: "multiple",question: "What was the first sign that Gideon[BREAK]asked God for?",potential_answers: "dew on fleece but dry ground,dew on ground but dry fleece,dew on ground and fleece,no dew on ground nor fleece",actual_answer: "dew on fleece but dry ground",actual_answer_explanation: "See Judges 6:36-40."},{question_type: "multiple",question: "[IGNORE_ANSWER_BREAK]What did God say when Gideon[BREAK]gathered his army?",potential_answers: "“that's the right amount”,“Ready to start drilling?”,“The people with you are too many[BREAK] ...”,“Arise! Go down against the[BREAK] camp!”",actual_answer: "“The people with you are too many[BREAK] ...”",actual_answer_explanation: "See Judges 7:2."},{question_type: "multiple",question: "How many soldiers initially returned [BREAK]home?",potential_answers: "10000,300,22000,44000",actual_answer: "22000",actual_answer_explanation: "See Judges 7:3."},{question_type: "multiple",question: "What was the name of Gideon's[BREAK]servant?",potential_answers: "Pureé,Purah,Torah,Tory",actual_answer: "Purah",actual_answer_explanation: "See Judges 7:10."},{question_type: "multiple",question: "[REMOVE_QUADRUPLE_SPACE]What was the battle cry of Gideon's[BREAK]300? (Note: Based on KJV/NKJV.)",potential_answers: "“The sword of the Lord[COMMA] and of[BREAK] Gideon!”,“Death to the Midianites!”,“God curse these people!”,“For the Torah and the[BREAK] Decalogue!”",actual_answer: "“The sword of the Lord, and of[BREAK] Gideon!”",actual_answer_explanation: "See Judges 7:20."},{question_type: "multiple",question: "Which two Midianite princes were[BREAK]killed by the Israelites?",potential_answers: "oreb and zeeb,oreb and seeb,orab and midi,orab and jason",actual_answer: "oreb and zeeb",actual_answer_explanation: "See Judges 7:25."},{question_type: "TF",question: "Initially, Gideon gathered 32000[BREAK]soldiers to fight.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "Read Judges 7:3, and you can connect[BREAK]the dots."},{question_type: "TF",question: "Gideon kept the soldiers who did[BREAK]not lap like a dog.",potential_answers: "",actual_answer: "0",actual_answer_explanation: "Gideon kept the soldiers that did[BREAK]lap like a dog.[BREAK][BREAK]See Judges 7:4-7."},{question_type: "TF",question: "Gideon killed two kings of Midian:[BREAK]Zebah and Zalmunna.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Judges 8:1-21."},{question_type: "TF",question: "Gideon practiced polygamy.",potential_answers: "",actual_answer: "1",actual_answer_explanation: "See Judges 8:30."}]];
var spanishQuestions = [
  null,
  [
    {
      question_type: "multiple",
      question: "¿Qué hizo la madre de Moisés para [BREAK]salvarlo del decreto del faraón?",
      potential_answers: "lo escondió en una canasta entre[BREAK]los juncos del río Nilo,lo envió a vivir con familiares[BREAK]en Madián,mudó a su familia lejos de Egipto,lo dejó al cuidado de una familia[BREAK]egipcia adinerada",
      actual_answer: "lo escondió en una canasta entre[BREAK]los juncos del río Nilo"
    },
    {
      question_type: "multiple",
      question: "¿Quién encontró a Moisés en el río[BREAK]Nilo?",
      potential_answers: "un pescador,la hija del faraón,un grupo de pastores,un soldado egipcio",
      actual_answer: "la hija del faraón"
    },
    {
      question_type: "multiple",
      question: "¿Qué señal mostró Dios a Moisés en[BREAK]la zarza ardiente?",
      potential_answers: "a. convirtió la vara de Moisés en[BREAK]una serpiente,b. convirtió la mano de Moisés en[BREAK]lepra,c. a y b,d. ninguna de las anteriores",
      actual_answer: "c. a y b"
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del hermano de [BREAK]Moisés, quien también desempeñó un [BREAK]papel importante en el Éxodo?",
      potential_answers: "Aarón,Josué,Caleb,Jetro",
      actual_answer: "Aarón"
    },
    {
      question_type: "multiple",
      question: "¿Cuántas plagas envió Dios sobre[BREAK]Egipto?",
      potential_answers: "7,10,12,15",
      actual_answer: "10"
    },
    {
      question_type: "multiple",
      question: "¿Cuál fue la primera plaga en[BREAK]Egipto?",
      potential_answers: "serpientes en la corte del faraón,ranas por todo Egipto,las aguas convirtiéndose en[BREAK]sangre,oscuridad sobre la tierra",
      actual_answer: "las aguas convirtiéndose en[BREAK]sangre"
    },
    {
      question_type: "multiple",
      question: "¿Cuál fue la tercera plaga en[BREAK]Egipto?",
      potential_answers: "moscas,rana,piojos,granizo",
      actual_answer: "piojos"
    },
    {
      question_type: "multiple",
      question: "¿Cuál fue la última plaga que [BREAK]convenció al faraón de dejar ir a[BREAK]los israelitas?",
      potential_answers: "langostas,oscuridad,muerte de los primogénitos,granizo",
      actual_answer: "muerte de los primogénitos"
    },
    {
      question_type: "multiple",
      question: "¿Qué pusieron los israelitas en los[BREAK]postes de sus puertas para [BREAK]protegerse de la última plaga?",
      potential_answers: "una cruz,una estrella,sangre de cordero,ajo",
      actual_answer: "sangre de cordero"
    },
    {
      question_type: "multiple",
      question: "Qué mar partió Dios para ayudar a [BREAK]los israelitas a escapar de los[BREAK]egipcios?",
      potential_answers: "el mar Muerto,el mar Rojo,el mar Mediterráneo,el mar de Galilea",
      actual_answer: "el mar Rojo"
    },
    {
      question_type: "multiple",
      question: "¿En qué montaña recibió Moisés los[BREAK]Diez Mandamientos?",
      potential_answers: "monte Ararat,monte Sinaí,monte Sión,monte Moriah",
      actual_answer: "monte Sinaí"
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre de la madre de[BREAK]Moisés?",
      potential_answers: "Miriam,Séfora,Jocabed,Débora",
      actual_answer: "Jocabed"
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del suegro de[BREAK]Moisés?",
      potential_answers: "a. Madián,b. Jetro,c. Reuel,d. b y c",
      actual_answer: "d. b y c"
    },
    {
      question_type: "multiple",
      question: "¿Quién fue la esposa de Moisés?",
      potential_answers: "Débora,Séfora,Jocabed,Hadassah",
      actual_answer: "Séfora"
    }
  ],
  [
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "hermana de Moisés (220;135)(0)->Miriam (500;135)(4),nombre de Dios (220;215)(1)->YO SOY (500;215)(5),primera plaga (220;295)(2)->aguas se[BREAK]convierten[BREAK]en[BREAK]sangre (450;260)(6),cuarta plaga (220;375)(3)->moscas (510;375)(7)",
      actual_answer_sans_coord: "hermana de Moisés->Miriam[BREAK][BREAK]nombre de Dios->YO SOY[BREAK][BREAK]primera plaga->aguas se convierten en[BREAK]sangre[BREAK][BREAK]cuarta plaga->moscas"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "segunda plaga (220;135)(0)->ranas (452;215)(5),quinta plaga (220;215)(1)->ganado[BREAK]enfermo (452;365)(7),octava plaga (220;295)(2)->langostas (452;300)(6),séptima plaga (220;375)(3)->granizo (452;135)(4)",
      actual_answer_sans_coord: "segunda plaga->ranas[BREAK][BREAK]quinta plaga->ganado enfermo[BREAK][BREAK]octava plaga->langostas[BREAK][BREAK]séptima plaga->granizo"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "hermano de Moisés (220;135)(0)->Aarón (510;300)(6),padre de Moisés (220;215)(1)->Amram (510;375)(7),madre de Moisés (220;295)(2)->Jocabed (485;135)(4),esposa de Moisés (220;375)(3)->Séfora (495;215)(5)",
      actual_answer_sans_coord: "hermano de Moisés->Aarón[BREAK][BREAK]padre de Moisés->Amram[BREAK][BREAK]madre de Moisés->Jocabed[BREAK][BREAK]esposa de Moisés->Séfora"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "tercera plaga (220;135)(0)->piojos (440;135)(4),sexta plaga (220;215)(1)->llagas (440;375)(7),novena plaga (220;295)(2)->oscuridad (440;300)(6),décima plaga (220;375)(3)->muerte de[BREAK]primogénito (440;205)(5)",
      actual_answer_sans_coord: "tercera plaga->piojos[BREAK][BREAK]sexta plaga->llagas[BREAK][BREAK]novena plaga->oscuridad[BREAK][BREAK]décima plaga->muerte de primogénito"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "Sifra (220;135)(0)->partera hebrea (350;375)(7),Gersón (220;215)(1)->hijo de Moisés (350;300)(6),Madián (220;295)(2)->refugio de Moisés (350;215)(5),Horeb (220;375)(3)->monte de Dios (350;135)(4)",
      actual_answer_sans_coord: "Sifra->partera hebrea[BREAK][BREAK]Gersón->hijo de Moisés[BREAK][BREAK]Madián->refugio de Moisés[BREAK][BREAK]Horeb->monte de Dios"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "burro (220;135)(0)->animal de[BREAK]transporte de[BREAK]Balaam (410;275)(6),Balac (220;215)(1)->rey de Moab (410;215)(5),Eleazar (220;295)(2)->hijo de Aarón (410;375)(7),Putiel (220;375)(3)->suegro de[BREAK]Eleazar (410;125)(4)",
      actual_answer_sans_coord: "burro->animal de transporte de Balaam[BREAK][BREAK]Balac->rey de Moab[BREAK][BREAK]Eleazar->hijo de Aarón[BREAK][BREAK]Putiel->suegro de Eleazar"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "Josué (220;135)(0)->hijo de Nun (380;300)(6),Caleb (220;215)(1)->hijo de Jefone (380;215)(5),Jamin (220;295)(2)->hijo de Simeón (380;375)(7),Gersón (220;375)(3)->hijo de Leví (380;135)(4)",
      actual_answer_sans_coord: "Josué->hijo de Nun[BREAK][BREAK]Caleb->hijo de Jefone[BREAK][BREAK]Jamin->hijo de Simeón[BREAK][BREAK]Gersón->hijo de Leví"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "monte Horeb (220;135)(0)->monte Sinaí (430;135)(4),Jetro (220;215)(1)->Reuel (430;300)(6),Aarón (220;295)(2)->primer sumo[BREAK]sacerdote (430;365)(7),multitud[BREAK]mixta (220;365)(3)->vino con los[BREAK]israelitas (400;205)(5)",
      actual_answer_sans_coord: "monte Horeb->monte Sinaí[BREAK][BREAK]Jetro->Reuel[BREAK][BREAK]Aarón->primer sumo sacerdote[BREAK][BREAK]multitud mixta->vino con los israelitas"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "desierto de[BREAK]Shur (220;124)(0)->aguas hechas[BREAK]dulces (430;284)(6),desierto de[BREAK]Sin (220;204)(1)->caída del[BREAK]maná (430;364)(7),Refidim (220;295)(2)->agua de[BREAK]la roca (430;204)(5),desierto de[BREAK]Sinaí (220;364)(3)->Dios se[BREAK]revela (430;124)(4)",
      actual_answer_sans_coord: "desierto de Shur->aguas hechas dulces[BREAK][BREAK]desierto de Sin->caída del maná[BREAK][BREAK]Refidim->agua de la roca[BREAK][BREAK]desierto de Sinaí->Dios se revela"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "zarza[BREAK]ardiente (220;124)(0)->presencia de[BREAK]Dios (390;124)(4),becerro de[BREAK]oro (220;204)(1)->ídolo hecho[BREAK]por israelitas (390;284)(6),Nadab (220;295)(2)->hijo de Aarón (390;375)(7),Basán (220;375)(3)->tierra[BREAK]conquistada (390;204)(5)",
      actual_answer_sans_coord: "zarza ardiente->presencia de Dios[BREAK][BREAK]becerro de oro->ídolo hecho por[BREAK]israelitas[BREAK][BREAK]Nadab->hijo de Aarón[BREAK][BREAK]Basán->tierra conquistada"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "tabernáculo (220;135)(0)->santuario[BREAK]portátil (413;275)(6),bezaleel (220;215)(1)->artesano jefe (413;125)(4),Miriam (220;295)(2)->afectada por[BREAK]lepra (413;195)(5),Monte Nebo (220;375)(3)->Moisés murió[BREAK]aquí (413;365)(7)",
      actual_answer_sans_coord: "tabernáculo->santuario portátil[BREAK][BREAK]bezaleel->artesano jefe[BREAK][BREAK]Miriam->afectada por lepra[BREAK][BREAK]Monte Nebo->Moisés murió aquí"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "vara de[BREAK]Aarón (220;124)(0)->brotó con[BREAK]almendras (390;205)(5),Eliezer (220;215)(1)->segundo hijo de[BREAK]Moisés (390;280)(6),Cades (220;295)(2)->lugar de entierro[BREAK]de Miriam (360;125)(4),Hogla (220;375)(3)->hija de[BREAK]Zelofehad (390;365)(7)",
      actual_answer_sans_coord: "vara de Aarón->brotó con almendras[BREAK][BREAK]Eliezer->segundo hijo de Moisés[BREAK][BREAK]Cades->lugar de entierro de Miriam[BREAK][BREAK]Hogla->hija de Zelofehad"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "Meribá (220;135)(0)->los israelitas[BREAK]discutieron[BREAK]allí (390;280)(6),Noé (220;215)(1)->hija de[BREAK]Zelofehad (390;205)(5),Urim (220;295)(2)->gema sacerdotal (390;135)(4),Oholiab (220;375)(3)->asistente de[BREAK]bezaleel (390;365)(7)",
      actual_answer_sans_coord: "Meribá->los israelitas discutieron allí[BREAK][BREAK]Noé->hija de Zelofehad[BREAK][BREAK]Urim->gema sacerdotal[BREAK][BREAK]Oholiab->asistente de bezaleel"
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "Omer (220;135)(0)->medida de grano (367;215)(5),Sihón (220;215)(1)->rey amorreo (367;375)(7),Og (220;295)(2)->rey de Basán (367;135)(4),Hur (220;375)(3)->soporte del[BREAK]brazo de Moisés (367;290)(6)",
      actual_answer_sans_coord: "Omer->medida de grano[BREAK][BREAK]Sihón->rey amorreo[BREAK][BREAK]Og->rey de Basán[BREAK][BREAK]Hur->soporte del brazo de Moisés"
    }
  ],
  [
    {
      question_type: "number",
      question: "Ordena estos mandamientos correctamente.",
      potential_answers: "",
      actual_answer: "No te inclinarás ante ídolos,No tomarás el nombre de Dios en vano,Recuerda el día de reposo para santificarlo,No matarás,No cometerás adulterio,No robarás,No mentirás,No codiciarás",
      actual_answer_sans_coord: "1. No te inclinarás ante ídolos[BREAK][BREAK]2. No tomarás el nombre de Dios en vano[BREAK][BREAK]3. Recuerda el día de reposo para santificarlo[BREAK][BREAK]4. No matarás[BREAK][BREAK]5. No cometerás adulterio[BREAK][BREAK]6. No robarás[BREAK][BREAK]7. No mentirás[BREAK][BREAK]8. No codiciarás"
    },
    {
      question_type: "number",
      question: "Ordena estas plagas correctamente.",
      potential_answers: "",
      actual_answer: "El Nilo se convierte en sangre,Ranas,Piojos,Moscas,Mueren los ganados egipcios,Úlceras,Granizo,Langostas",
      actual_answer_sans_coord: "1. El Nilo se convierte en sangre[BREAK][BREAK]2. Ranas[BREAK][BREAK]3. Piojos[BREAK][BREAK]4. Moscas[BREAK][BREAK]5. Mueren los ganados egipcios[BREAK][BREAK]6. Úlceras[BREAK][BREAK]7. Granizo[BREAK][BREAK]8. Langostas"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Las aguas de Mará se vuelven dulces,Codornices llegaron por primera vez al[BREAK]anochecer,Maná cayó del cielo,Jetro aconseja a Moisés sobre liderazgo,Los Diez Mandamientos fueron proclamados,Los Diez Mandamientos fueron entregados,Aarón levantó un becerro de oro,Aarón y sus hijos fueron consagrados",
      actual_answer_sans_coord: "1. Las aguas de Mará se vuelven dulces[BREAK][BREAK]2. Codornices llegaron por primera vez al[BREAK]anochecer[BREAK][BREAK]3. Maná cayó del cielo[BREAK][BREAK]4. Jetro aconseja a Moisés sobre liderazgo[BREAK][BREAK]5. Los Diez Mandamientos fueron proclamados[BREAK][BREAK]6. Los Diez Mandamientos fueron entregados[BREAK][BREAK]7. Aarón levantó un becerro de oro[BREAK][BREAK]8. Aarón y sus hijos fueron consagrados"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "El decreto de ejecutar a los bebés varones[BREAK]fue proclamado,Moisés nació,Moisés fue encontrado por la hija del[BREAK]faraón,Moisés mata a un egipcio,Moisés defiende a las hijas de Jetro,Moisés se casa con Séfora,Moisés ve la zarza ardiente,El bastón de Moisés se convierte en una[BREAK]serpiente",
      actual_answer_sans_coord: "1. El decreto de ejecutar a los bebés varones[BREAK]fue proclamado[BREAK][BREAK]2. Moisés nació[BREAK][BREAK]3. Moisés fue encontrado por la hija del[BREAK]faraón[BREAK][BREAK]4. Moisés mata a un egipcio[BREAK][BREAK]5. Moisés defiende a las hijas de Jetro[BREAK][BREAK]6. Moisés se casa con Séfora[BREAK][BREAK]7. Moisés ve la zarza ardiente[BREAK][BREAK]8. El bastón de Moisés se convierte en una[BREAK]serpiente"
    },
    {
      question_type: "number",
      question: "Ordena estas instrucciones de la Pascua[BREAK]correctamente.",
      potential_answers: "",
      actual_answer: "Tomar un cordero sin defecto,matarlo al anochecer,poner la sangre del cordero en el dintel,asar el cordero,comerlo junto con pan sin levadura y[BREAK]hierbas amargas,quemar los restos del cordero,comer con cinturón en la cintura y[BREAK]sandalias en los pies,no salir de casa hasta la mañana",
      actual_answer_sans_coord: "1. Tomar un cordero sin defecto[BREAK][BREAK]2. Matarlo al anochecer[BREAK][BREAK]3. Poner la sangre del cordero en el dintel[BREAK][BREAK]4. Asar el cordero[BREAK][BREAK]5. Comerlo junto con pan sin levadura y[BREAK]hierbas amargas[BREAK][BREAK]6. Quemar los restos del cordero[BREAK][BREAK]7. Comer con cinturón en la cintura y[BREAK]sandalias en los pies[BREAK][BREAK]8. No salir de casa hasta la mañana"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Moisés muele el becerro de oro hasta[BREAK]hacerlo polvo,los adoradores rebeldes son asesinados,Moisés habla con Dios en el tabernáculo de[BREAK]reunión,los Diez Mandamientos son escritos[BREAK]nuevamente en nuevas tablas de piedra,bezaleel es llamado como artesano principal,los hijos de Israel son instruidos para[BREAK]dejar de traer ofrendas,bezaleel construye el Arca del Pacto,la fuente de bronce es construida",
      actual_answer_sans_coord: "1. Moisés muele el becerro de oro hasta[BREAK]hacerlo polvo[BREAK][BREAK]2. Los adoradores rebeldes son asesinados[BREAK][BREAK]3. Moisés habla con Dios en el tabernáculo de[BREAK]reunión[BREAK][BREAK]4. Los Diez Mandamientos son escritos[BREAK]nuevamente en nuevas tablas de piedra[BREAK][BREAK]5. bezaleel es llamado como artesano principal[BREAK][BREAK]6. Los hijos de Israel son instruidos para[BREAK]dejar de traer ofrendas[BREAK][BREAK]7. bezaleel construye el Arca del Pacto[BREAK][BREAK]8. La fuente de bronce es construida[INCREASE_SQUARE_HEIGHT]"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Los espías fueron enviados a la tierra de[BREAK]Canaán,Se dio un informe negativo al regresar,Josué y Caleb intentaron animar al pueblo,Los israelitas fueron desterrados al[BREAK]desierto por 40 años,Un hombre fue condenado a muerte por[BREAK]trabajar en el día de reposo,Coré y sus hombres se rebelaron contra[BREAK]Moisés y Aarón,Coré y sus hombres fueron tragados por la[BREAK]tierra,4700 personas murieron debido a una plaga",
      actual_answer_sans_coord: "1. Los espías fueron enviados a la tierra de[BREAK]Canaán[BREAK][BREAK]2. Se dio un informe negativo al regresar[BREAK][BREAK]3. Josué y Caleb intentaron animar al pueblo[BREAK][BREAK]4. Los israelitas fueron desterrados al[BREAK]desierto por 40 años[BREAK][BREAK]5. Un hombre fue condenado a muerte por[BREAK]trabajar en el día de reposo[BREAK][BREAK]6. Coré y sus hombres se rebelaron contra[BREAK]Moisés y Aarón[BREAK]7. Coré y sus hombres fueron tragados por la[BREAK]tierra[BREAK][BREAK]8. 4700 personas murieron debido a una plaga[INCREASE_SQUARE_HEIGHT]"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Séfora salva la vida de Moisés al[BREAK]circuncidar a su hijo,Moisés se reúne con Aarón,Moisés regresa a Egipto,Moisés y Aarón confrontan al faraón,El faraón aumenta la carga de trabajo de[BREAK]los israelitas,Dios promete la liberación,Dios envía las diez plagas,El faraón deja ir a los israelitas",
      actual_answer_sans_coord: "1. Séfora salva la vida de Moisés al[BREAK]circuncidar a su hijo[BREAK][BREAK]2. Moisés se reúne con Aarón[BREAK][BREAK]3. Moisés regresa a Egipto[BREAK][BREAK]4. Moisés y Aarón confrontan al faraón[BREAK][BREAK]5. El faraón aumenta la carga de trabajo de[BREAK]los israelitas[BREAK][BREAK]6. Dios promete la liberación[BREAK][BREAK]7. Dios envía las diez plagas[BREAK][BREAK]8. El faraón deja ir a los israelitas"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "El arca del testimonio es construida,La mesa de los panes es construida,El candelabro de oro es construido,El altar de incienso es construido,El aceite de la unción y el incienso son[BREAK]preparados por el perfumista,El altar del holocausto es construido,Las vestiduras sacerdotales son tejidas,El tabernáculo es erigido",
      actual_answer_sans_coord: "1. El arca del testimonio es construida[BREAK][BREAK]2. La mesa de los panes es construida[BREAK][BREAK]3. El candelabro de oro es construido[BREAK][BREAK]4. El altar de incienso es construido[BREAK][BREAK]5. El aceite de la unción y el incienso son[BREAK]preparados por el perfumista[BREAK][BREAK]6. El altar del holocausto es construido[BREAK][BREAK]7. Las vestiduras sacerdotales son tejidas[BREAK][BREAK]8. El tabernáculo es erigido"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "La multitud mixta se queja del maná,Dios dice que enviará codornices durante un[BREAK]mes entero,Setenta ancianos reciben el Espíritu Santo,Eldad y Medad comienzan a profetizar,Dios envía codornices por segunda vez,Las personas que codiciaron las codornices[BREAK]mueren por comer en exceso,Aarón y Miriam hablan contra Moisés,Dios castiga a Miriam con lepra",
      actual_answer_sans_coord: "1. La multitud mixta se queja del maná[BREAK][BREAK]2. Dios dice que enviará codornices durante un[BREAK]mes entero[BREAK][BREAK]3. Setenta ancianos reciben el Espíritu Santo[BREAK][BREAK]4. Eldad y Medad comienzan a profetizar[BREAK][BREAK]5. Dios envía codornices por segunda vez[BREAK][BREAK]6. Las personas que codiciaron las codornices[BREAK]mueren por comer en exceso[BREAK][BREAK]7. Aarón y Miriam hablan contra Moisés[BREAK][BREAK]8. Dios castiga a Miriam con lepra"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Los israelitas derrotan a los cananeos en[BREAK]Horma,Los israelitas se quejan contra Dios[BREAK]nuevamente,Dios provoca una plaga de serpientes dentro[BREAK]del campamento,Moisés construye una serpiente de bronce,Israel derrota al rey Sehón y su ejército,Israel derrota al rey Og y su ejército,Moisés envía espías a Jazer,Israel toma las aldeas de Jazer",
      actual_answer_sans_coord: "1. Los israelitas derrotan a los cananeos en[BREAK]Horma[BREAK][BREAK]2. Los israelitas se quejan contra Dios[BREAK]nuevamente[BREAK][BREAK]3. Dios provoca una plaga de serpientes dentro[BREAK]del campamento[BREAK][BREAK]4. Moisés construye una serpiente de bronce[BREAK][BREAK]5. Israel derrota al rey Sehón y su ejército[BREAK][BREAK]6. Israel derrota al rey Og y su ejército[BREAK][BREAK]7. Moisés envía espías a Jazer[BREAK][BREAK]8. Israel toma las aldeas de Jazer"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Balac envía a Balaam para maldecir a los[BREAK]hijos de Israel,El ángel del Señor obstruye el camino por[BREAK]el que va Balaam,Balaam obedece la orden del ángel,Balaam fracasa al intentar maldecir a[BREAK]Israel frente a Balac,Balaam da una profecía sobre el futuro de[BREAK]Moab,Israel cae en la idolatría,Un hombre y una mujer madianita son[BREAK]asesinados por su pecado,Dios ordena a Moisés que realice un segundo[BREAK]censo del pueblo",
      actual_answer_sans_coord: "1. Balac envía a Balaam para maldecir a los hijos de Israel[BREAK][BREAK]2. El ángel del Señor obstruye el camino por el que va Balaam[BREAK][BREAK]3. Balaam obedece la orden del ángel[BREAK][BREAK]4. Balaam fracasa al intentar maldecir a Israel frente a Balac[BREAK][BREAK]5. Balaam da una profecía sobre el futuro de Moab[BREAK][BREAK]6. Israel cae en la idolatría[BREAK][BREAK]7. Un hombre y una mujer madianita son asesinados por su pecado[BREAK][BREAK]8. Dios ordena a Moisés que realice un segundo censo del pueblo[INCREASE_SQUARE_HEIGHT]"
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "Dios le dice a Moisés dónde morirá,Moisés inaugura a Josué como el próximo líder de Israel,Los israelitas derrotan a los madianitas,Moisés da instrucciones sobre los cautivos,Dios le dice a Moisés que divida el botín,Se eligen las tribus que se asentarán al este del Jordán,Dios instruye a Israel sobre la conquista de Canaán,Dios elige líderes para dividir la tierra",
      actual_answer_sans_coord: "1. Dios le dice a Moisés dónde morirá[BREAK][BREAK]2. Moisés inaugura a Josué como el próximo líder de Israel[BREAK][BREAK]3. Los israelitas derrotan a los madianitas[BREAK][BREAK]4. Moisés da instrucciones sobre los cautivos[BREAK][BREAK]5. Dios le dice a Moisés que divida el botín[BREAK][BREAK]6. Se eligen las tribus que se asentarán al este del Jordán[BREAK][BREAK]7. Dios instruye a Israel sobre la conquista de Canaán[BREAK][BREAK]8. Dios elige líderes para dividir la tierra[INCREASE_SQUARE_HEIGHT]"
    },
    {
      question_type: "number",
      question: "Coloca estos extractos del cántico de Moisés en[BREAK]el orden correcto (Éxodo 15).",
      potential_answers: "",
      actual_answer: "Cantaré al Señor,El Señor es un guerrero,Enviaste tu ira,La tierra los tragó,Con tu misericordia guiaste,La gente escuchará y tendrá miedo,Temor y pavor caerán sobre ellos,Quedarán inmóviles como piedra",
      actual_answer_sans_coord: "1. Cantaré al Señor[BREAK][BREAK]2. El Señor es un guerrero[BREAK][BREAK]3. Enviaste tu ira[BREAK][BREAK]4. La tierra los tragó[BREAK][BREAK]5. Con tu misericordia guiaste[BREAK][BREAK]6. La gente escuchará y tendrá miedo[BREAK][BREAK]7. Temor y pavor caerán sobre ellos[BREAK][BREAK]8. Quedarán inmóviles como piedra"
    }
  ],
  [
    {
      question_type: "TF",
      question: "Moisés construyó el becerro de oro[BREAK]para que los israelitas lo adoraran.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Aarón fue quien construyó el[BREAK]becerro de oro para que los[BREAK]israelitas lo adoraran."
    },
    {
      question_type: "TF",
      question: "Los israelitas cantaron alabanzas a Dios[BREAK]después de cruzar el Mar Rojo y ser[BREAK]salvados de los egipcios.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Los israelitas sí cantaron alabanzas[BREAK]después de cruzar el Mar Rojo.[BREAK][BREAK]Ver Éxodo 15."
    },
    {
      question_type: "TF",
      question: "Moisés subió al Monte Sinaí para[BREAK]recibir los diez mandamientos tres[BREAK]veces.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Moisés solo subió para recibir los[BREAK]diez mandamientos dos veces.[BREAK][BREAK]Ver Éxodo 24 y 34."
    },
    {
      question_type: "TF",
      question: "Moisés aceptó de inmediato la tarea que[BREAK]Dios le encomendó.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Antes de que Moisés aceptara la tarea que[BREAK]le fue encomendada, puso excusas."
    },
    {
      question_type: "TF",
      question: "Dios hizo brotar agua de una roca[BREAK]en Horeb.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Moisés golpeó la roca en Horeb, pero[BREAK]Dios hizo que el agua fluyera.[BREAK][BREAK]Ver Éxodo 17:1-7."
    },
    {
      question_type: "TF",
      question: "Cuando Moisés descansó sus brazos[BREAK]durante la batalla contra los amalecitas,[BREAK]el ejército israelita siguió ganando.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Cuando Moisés descansó sus brazos[BREAK]durante la batalla contra los amalecitas,[BREAK]el ejército israelita comenzó a perder."
    },
    {
      question_type: "TF",
      question: "Los israelitas vagaron por el[BREAK]desierto durante 40 años antes de[BREAK]entrar a la tierra prometida.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Números 14:34."
    },
    {
      question_type: "TF",
      question: "Aarón fue el primer sumo sacerdote[BREAK]de Israel.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Éxodo 28:1-43."
    },
    {
      question_type: "TF",
      question: "Los israelitas cruzaron el río[BREAK]Jordán en tierra seca para entrar[BREAK]a la tierra prometida.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Esto ocurrió bajo el liderazgo[BREAK]de Josué.[BREAK][BREAK]Ver Josué 3."
    },
    {
      question_type: "TF",
      question: "Los muros de Jericó cayeron después[BREAK]de que los israelitas marcharan[BREAK]alrededor de ellos una vez.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Marcharon alrededor de la ciudad[BREAK]durante siete días, y en el séptimo[BREAK]día, marcharon alrededor siete veces[BREAK]antes de que los muros cayeran."
    },
    {
      question_type: "TF",
      question: "Josué fue uno de los doce espías[BREAK]enviados para explorar la tierra[BREAK]de Canaán.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Números 13:1-16."
    },
    {
      question_type: "TF",
      question: "El maná que Dios proporcionó a[BREAK]los israelitas dejó de aparecer[BREAK]una vez que entraron a la tierra[BREAK]prometida.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Josué 5:12."
    },
    {
      question_type: "TF",
      question: "Moisés llevó a los israelitas a la[BREAK]tierra prometida.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Josué llevó a los israelitas a la[BREAK]tierra prometida después de la[BREAK]muerte de Moisés."
    },
    {
      question_type: "TF",
      question: "Los israelitas construyeron un[BREAK]tabernáculo como la morada portátil[BREAK]de Dios.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Las referencias iniciales están en[BREAK]Éxodo."
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿De quién era la vara que Dios usó[BREAK]para convertir el agua en[BREAK]sangre?",
      potential_answers: "de Moisés,de Aarón,de Faraón,ninguna de las anteriores",
      actual_answer: "de Aarón"
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del padre de Moisés?",
      potential_answers: "joseph,enoch,reuel,amram",
      actual_answer: "amram"
    },
    {
      question_type: "multiple",
      question: "¿De quién era la vara que produjo[BREAK]brotes de almendro?",
      potential_answers: "a. Moisés,b. Jetro,c. Amram,d. Ninguna de las anteriores",
      actual_answer: "d. Ninguna de las anteriores"
    },
    {
      question_type: "multiple",
      question: "¿Qué tribus de Israel pidieron[BREAK]heredar la tierra de Jazer y la[BREAK]tierra de Galaad?",
      potential_answers: "gad y rubén,gad y judá,judá y rubén,judá y leví",
      actual_answer: "gad y rubén"
    },
    {
      question_type: "multiple",
      question: "¿Quién fue el principal artesano[BREAK]que dirigió la construcción del[BREAK]tabernáculo?",
      potential_answers: "Aholiab,Gershom,Reuel,bezaleel",
      actual_answer: "bezaleel"
    },
    {
      question_type: "TF",
      question: "Gershom y Abihú llevaron fuego[BREAK]extraño al Tabernáculo.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Nadab y Abihú fueron los que[BREAK]llevaron fuego extraño al[BREAK]Tabernáculo.[BREAK][BREAK]Ver Levítico 10:1-2."
    },
    {
      question_type: "TF",
      question: "Aarón murió en la cima del Monte Hor.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Números 33:39."
    },
    {
      question_type: "TF",
      question: "Moisés envió mensajeros desde Cades[BREAK]al rey de Moab para pedir[BREAK]paso.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Moisés envió mensajeros desde Cades[BREAK]al rey de Edom para pedir[BREAK]paso.[BREAK][BREAK]Ver Números 20:14-21."
    },
    {
      question_type: "TF",
      question: "Miriam murió y fue enterrada en el[BREAK]desierto de Sin.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Miriam murió y fue enterrada en el[BREAK]desierto de Zin. “Zin” con “z”,[BREAK]not “Sin” con “s”.[BREAK][BREAK]Ver Números 20:1."
    },
    {
      question_type: "TF",
      question: "Moisés hizo una serpiente de bronce[BREAK]para que quienes fueran mordidos[BREAK]por serpientes pudieran vivir.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Números 21:4-9."
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del lugar que[BREAK]tenía un pozo que brotaba[BREAK]agua?",
      potential_answers: "soda,mattanah,pisgah,beer",
      actual_answer: "beer",
      actual_answer_explanation: "Ver Números 21:16-18."
    },
    {
      question_type: "multiple",
      question: "¿Qué rey no permitió a los[BREAK]israelitas pasar por su[BREAK]tierra?",
      potential_answers: "a. Rey Sehón,b. el rey de Edom,c. el rey de Moab,d. todos los anteriores",
      actual_answer: "d. todos los anteriores",
      actual_answer_explanation: "Ver Números 20:14-17 y Números 21:21-23."
    },
    {
      question_type: "number",
      question: "Ordena estos destinos en el orden correcto.",
      potential_answers: "",
      actual_answer: "Succoth,Marah,Mar Rojo,Refidim,Kibroth Hattaavah,Abronah,Monte Hor,Zalmonah",
      actual_answer_sans_coord: "1. Succoth[BREAK][BREAK]2. Marah[BREAK][BREAK]3. Mar Rojo[BREAK][BREAK]4. Refidim[BREAK][BREAK]5. Kibroth Hattaavah[BREAK][BREAK]6. Abronah[BREAK][BREAK]7. Monte Hor[BREAK][BREAK]8. Zalmonah"
    },
    {
      question_type: "TF",
      question: "Dios ordenó a los hijos de Israel[BREAK]desposeer a los habitantes de[BREAK]Canaán.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Números 33:51-56, KJV o NKJV."
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿Qué enfatizó Dios con fuerza[BREAK]que los seres humanos no[BREAK]debían consumir?",
      potential_answers: "agua sucia,carne con sangre,huesos de pollo,carne humana",
      actual_answer: "carne con sangre",
      actual_answer_explanation: "ver Levítico 17:14"
    },
    {
      question_type: "multiple",
      question: "¿Qué animal prohibió Dios[BREAK]que comieran los israelitas?",
      potential_answers: "a. caballo,b. cerdo,c. bagre,d. todos los anteriores",
      actual_answer: "d. todos los anteriores",
      actual_answer_explanation: "ver Levítico 11:1-23"
    },
    {
      question_type: "TF",
      question: "Dios prohibió a los israelitas[BREAK]comer insectos.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Dios prohibió a los israelitas comer[BREAK]los insectos que caminan sobre[BREAK]cuatro patas.[BREAK][BREAK]Ver Levítico 20:23."
    },
    {
      question_type: "multiple",
      question: "¿Dónde se encuentra el Arca del[BREAK]Pacto en el Tabernáculo?",
      potential_answers: "lugar santo,lugar santísimo,palacio de marfil,sala del trono",
      actual_answer: "lugar santísimo"
    },
    {
      question_type: "multiple",
      question: "¿Cuándo debían los israelitas[BREAK]cancelar las deudas?",
      potential_answers: "cada dos semanas,cada dos años,cada siete años,cada diez años",
      actual_answer: "cada siete años"
    },
    {
      question_type: "multiple",
      question: "En Números, ¿qué dios pagano[BREAK]comenzaron a adorar los israelitas?",
      potential_answers: "baal,azazel,astarot,balor",
      actual_answer: "baal",
      actual_answer_explanation: "Ver Números 25."
    },
    {
      question_type: "multiple",
      question: "En Números, ¿qué le ocurrió a Miriam[BREAK]después de que Dios le dio a ella y[BREAK]a Aarón una lección?",
      potential_answers: "se volvió psicótica,tuvo fiebre,contrajo lepra,contrajo varicela",
      actual_answer: "contrajo lepra",
      actual_answer_explanation: "Ver Números 12:1-15."
    },
    {
      question_type: "TF",
      question: "En Números, Dios eligió a Josué como[BREAK]el próximo líder.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Josué 27:12-23"
    },
    {
      question_type: "TF",
      question: "Moisés recibió su nombre desde el nacimiento.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Moisés recibió su nombre después de[BREAK]ser descubierto por la hija del faraón.[BREAK][BREAK]Ver Éxodo 2:1-10"
    },
    {
      question_type: "multiple",
      question: "¿En qué montaña murió Moisés?",
      potential_answers: "monte Sinaí,monte Hor,monte Nebo,monte Nemo",
      actual_answer: "monte Nebo",
      actual_answer_explanation: "Ver Deuteronomio 34."
    },
    {
      question_type: "multiple",
      question: "¿Cuántas veces caminaron los israelitas[BREAK]alrededor de los muros de Jericó en el[BREAK]día 7?",
      potential_answers: "12,10,7,3",
      actual_answer: "7",
      actual_answer_explanation: "Ver Josué 6:15"
    },
    {
      question_type: "multiple",
      question: "¿Cuántos días pasó Moisés en el[BREAK]Monte Sinaí cuando fue solo la[BREAK]primera vez?",
      potential_answers: "30,40,50,60",
      actual_answer: "40",
      actual_answer_explanation: "Ver Éxodo 24:18.[BREAK]Nota: Moisés permanece en el[BREAK]Monte Sinaí por cuarenta días[BREAK]nuevamente en Éxodo 34."
    },
    {
      question_type: "multiple",
      question: "¿Cuántos años pasaron los israelitas[BREAK]en el desierto?",
      potential_answers: "20,40,60,80",
      actual_answer: "40",
      actual_answer_explanation: "Ver Números 14:20-25."
    },
    {
      question_type: "number",
      question: "Ordena estos eventos correctamente.",
      potential_answers: "",
      actual_answer: "moisés muere en el monte Nebo,Dios da la orden de cruzar el[BREAK]Río Jordán,Rahab salva a dos espías israelitas,los israelitas cruzan el Jordán,Jericó es destruido,los israelitas sufren derrota en Hai debido a[BREAK]el pecado de Acán,Acán es apedreado,Hai es derrotado",
      actual_answer_sans_coord: "1. Moisés muere en el monte Nebo[BREAK][BREAK]2. Dios da la orden de cruzar el[BREAK] Río Jordán[BREAK][BREAK]3. Rahab salva a dos espías israelitas[BREAK][BREAK]4. Los israelitas cruzan el Jordán[BREAK][BREAK]5. Jericó es destruido[BREAK][BREAK]6. Los israelitas sufren derrota en Hai debido a[BREAK] el pecado de Acán[BREAK][BREAK]7. Acán es apedreado[BREAK][BREAK]8. Hai es derrotado"
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿Qué hicieron los israelitas para[BREAK]conmemorar a las doce tribus después[BREAK]de cruzar el río Jordán?",
      potential_answers: "levantaron un altar,hicieron un becerro de oro,escribieron una novela,publicaron la Torá",
      actual_answer: "levantaron un altar",
      actual_answer_explanation: "Ver Josué 4."
    },
    {
      question_type: "multiple",
      question: "[IGNORE_ANSWER_BREAK]¿Qué le dijo Josué al[BREAK]misterioso soldado con la espada[BREAK]cuando se conocieron por primera vez?",
      potential_answers: "“¡en guardia!”,“¡prepárate para pelear!”,“¿eres de los nuestros o de nuestros[BREAK] enemigos?”,“¡por favor, no me lastimes!”",
      actual_answer: "“¿eres de los nuestros o de nuestros[BREAK] enemigos?”",
      actual_answer_explanation: "Ver Josué 5:13-15."
    },
    {
      question_type: "multiple",
      question: "[REMOVE_TRIPLE_SPACE]¿Qué le pasó a Rahab después de[BREAK]que los muros de Jericó cayeron?",
      potential_answers: "fue perdonada e incorporada[BREAK] a Israel,fue asesinada sin piedad,se convirtió en esclava,fue exiliada",
      actual_answer: "fue perdonada e incorporada[BREAK] a Israel",
      actual_answer_explanation: "Ver Josué 6:22-25."
    },
    {
      question_type: "multiple",
      question: "¿Qué le sucedería a un israelita que[BREAK]reconstruyera Jericó?",
      potential_answers: "sería bendecido,se convertiría en un bicho raro,sería el arquitecto jefe,sería maldito",
      actual_answer: "sería maldito",
      actual_answer_explanation: "Ver Josué 6:26."
    },
    {
      question_type: "TF",
      question: "Los animales se salvaron cuando[BREAK]se destruyó Jericó.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "No se perdonó a ningún animal durante[BREAK]la destrucción de la ciudad.[BREAK][BREAK]Ver Josué 6:21."
    },
    {
      question_type: "multiple",
      question: "¿Cuántos israelitas murieron en la[BREAK]primera batalla de Hai?",
      potential_answers: "3000,1000,100,36",
      actual_answer: "36",
      actual_answer_explanation: "Ver Josué 7:2-5."
    },
    {
      question_type: "TF",
      question: "Acán fue quemado después de ser[BREAK]apedreado.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Acán y su familia fueron quemados[BREAK]después de ser apedreados.[BREAK][BREAK]Ver Josué 7:25-26."
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "Acán (220;135)(0)->tomó del[BREAK]anatema (410;365)(7),Rahab (220;215)(1)->era una ramera (410;295)(6),gabaonitas (220;295)(2)->mintieron por[BREAK]seguridad (435;125)(4),Caleb (220;375)(3)->hereda Hebrón (380;215)(5)",
      actual_answer_sans_coord: "Acán->tomó del anatema[BREAK][BREAK]Rahab->era una ramera[BREAK][BREAK]gabaonitas->mintieron por seguridad[BREAK][BREAK]Caleb->hereda Hebrón"
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre anterior de Hebrón,[BREAK]la tierra que heredó Caleb?",
      potential_answers: "Quiriat Bara,Quiriat Arba,Quiriat Etal,Quiriat Jearim",
      actual_answer: "Quiriat Arba",
      actual_answer_explanation: "Josué 14:6-15"
    },
    {
      question_type: "multiple",
      question: "¿Qué regalo daría Caleb al hombre[BREAK]que derrotara a Quiriat-sefer?",
      potential_answers: "la medalla de honor,su hija Acsa como esposa,30 siclos de plata,ascenso a gobernador",
      actual_answer: "su hija Acsa como esposa",
      actual_answer_explanation: "Ver Josué 15:16"
    },
    {
      question_type: "multiple",
      question: "¿Cómo se llamaba la frontera de Edom[BREAK]en el desierto de Zin al sur[BREAK]en Josué 15:1?",
      potential_answers: "límite del sur,extremo límite del sur,mar Salado,Carca",
      actual_answer: "extremo límite del sur",
      actual_answer_explanation: "Ver Josué 15:1"
    },
    {
      question_type: "multiple",
      question: "¿Qué ciudad heredó Josué?",
      potential_answers: "Jericó,Hai,Timnat-sera,Mejarcón",
      actual_answer: "Timnat-sera",
      actual_answer_explanation: "Ver Josué 19:49-50."
    },
    {
      question_type: "multiple",
      question: "¿Qué tienen en común las ciudades de[BREAK]Cades de Neftalí, Siquem y Quiriat-arba?",
      potential_answers: "a. son lugares de juicio,b. son ciudades de refugio,c. son casas de adoración,d. ninguna de las anteriores",
      actual_answer: "b. son ciudades de refugio",
      actual_answer_explanation: "Ver Josué 20."
    },
    {
      question_type: "multiple",
      question: "¿Qué edad tenía Josué cuando murió?",
      potential_answers: "110,112,109,115",
      actual_answer: "110",
      actual_answer_explanation: "Ver Josué 24:29-30."
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿De qué ciudades se suponía que Manasés[BREAK]debía expulsar a sus habitantes?",
      potential_answers: "a. Bet-seán,b. Taanac,c. Dorabelón,d. a y b",
      actual_answer: "d. a y b",
      actual_answer_explanation: "Ver Jueces 1:27."
    },
    {
      question_type: "TF",
      question: "Efraín expulsó a los cananeos[BREAK]que habitaban en Gezer.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Efraín no expulsó a los cananeos[BREAK]que habitaban en Gezer.[BREAK][BREAK]Ver Jueces 1:29"
    },
    {
      question_type: "TF",
      question: "El límite de los amorreos era[BREAK]desde Sela hacia arriba.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "“El límite de los amorreos era[BREAK]desde la subida de Acrabim, desde[BREAK]Sela hacia arriba”.[BREAK][BREAK]Ver Jueces 1:36, RVR1960"
    },
    {
      question_type: "multiple",
      question: "[REMOVE_TRIPLE_SPACE]El Ángel del SEÑOR se entristeció[BREAK]cuando los israelitas ___________.",
      potential_answers: "comieron demasiada codorniz,no expulsaron a ciertos[BREAK] habitantes,blasfemaron Su nombre,no confiaron en Él",
      actual_answer: "no expulsaron a ciertos[BREAK] habitantes",
      actual_answer_explanation: "Ver Jueces 2:1-5."
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre de la hija[BREAK]de Caleb?",
      potential_answers: "Acsa,Débora,Lea,Maala",
      actual_answer: "Acsa",
      actual_answer_explanation: "Ver Jueces 1:12 o Josué 15:16."
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del futuro[BREAK]yerno de Caleb?",
      potential_answers: "Nataniel,Otaniel,Otoniel,Jefone",
      actual_answer: "Otoniel",
      actual_answer_explanation: "Ver Josué 15:17 o Jueces 1:13."
    },
    {
      question_type: "multiple",
      question: "¿Cuáles fueron los dos dioses que[BREAK]sirvieron los israelitas cuando[BREAK]se apartaron de Dios?",
      potential_answers: "Astoret y Dios,Baal y Dios,Baal y Sarón,Baal y Astoret",
      actual_answer: "Baal y Astoret",
      actual_answer_explanation: "Ver Jueces 2:13."
    },
    {
      question_type: "multiple",
      question: "¿Cómo se llamaba originalmente[BREAK]la ciudad de Betel?",
      potential_answers: "Brillo,Sin,Luz,Zin",
      actual_answer: "Luz",
      actual_answer_explanation: "Ver Jueces 1:22-23."
    },
    {
      question_type: "multiple",
      question: "Cada vez que los israelitas se[BREAK]volvían a Dios, ¿qué hacía Él?",
      potential_answers: "Destruía a esa generación,Los rechazaba,Se reía de su ignorancia,Les enviaba jueces",
      actual_answer: "Les enviaba jueces",
      actual_answer_explanation: "Ver Jueces 2:16-19. (Dudo que estés[BREAK]escribiendo esto. - A.E.)"
    },
    {
      question_type: "number",
      question: "Coloca a estos jueces en el orden correcto.",
      potential_answers: "",
      actual_answer: "Otoniel,Débora,Gedeón,Jair,Jefté,Ibzán,Abdón,Sansón",
      actual_answer_sans_coord: "1. Otoniel[BREAK][BREAK]2. Débora[BREAK][BREAK]3. Gedeón[BREAK][BREAK]4. Jair[BREAK][BREAK]5. Jefté[BREAK][BREAK]6. Ibzán[BREAK][BREAK]7. Abdón[BREAK][BREAK]8. Sansón"
    },
    {
      question_type: "TF",
      question: "Aod era zurdo.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Aod era zurdo.[BREAK][BREAK]Ver Jueces 3:15."
    },
    {
      question_type: "multiple",
      question: "¿A qué rey apuñaló Aod con una[BREAK]daga?",
      potential_answers: "Eglón,Ramsés,Otoniel,Barac",
      actual_answer: "Eglón",
      actual_answer_explanation: "Ver Jueces 3:12."
    },
    {
      question_type: "multiple",
      question: "¿Dónde se sentaba la profetisa Débora[BREAK]cuando juzgaba a los hijos de[BREAK]Israel?",
      potential_answers: "en el techo de la torre de vigilancia,debajo de una palmera,en su casa,en su cámara de agua",
      actual_answer: "debajo de una palmera",
      actual_answer_explanation: "Ver Jueces 4:4, 5."
    },
    {
      question_type: "number",
      question: "Coloca los eventos en el orden correcto.",
      potential_answers: "",
      actual_answer: "Débora le dice a Barac que derrote al[BREAK]ejército de Sísara,Barac le pide a Débora que lo[BREAK]acompañe,Débora predice que una mujer matará[BREAK]a Sísara,Barac derrota al ejército de Sísara,Sísara huye a la tienda de Jael,Jael permite que Sísara descanse en su tienda,Jael mata a Sísara con una estaca de la[BREAK]tienda,Jael le muestra el cuerpo de Sísara a Barac",
      actual_answer_sans_coord: "1. Débora le dice a Barac que derrote al[BREAK]ejército de Sísara[BREAK][BREAK]2. Barac le pide a Débora que lo[BREAK]acompañe[BREAK][BREAK]3. Débora predice que una mujer matará[BREAK]a Sísara[BREAK][BREAK]4. Barac derrota al ejército de Sísara[BREAK][BREAK]5. Sísara huye a la tienda de Jael[BREAK][BREAK]6. Jael permite que Sísara descanse en su tienda[BREAK][BREAK]7. Jael mata a Sísara con una estaca de la[BREAK]tienda[BREAK][BREAK]8. Jael le muestra el cuerpo de Sísara a Barac[INCREASE_SQUARE_HEIGHT]"
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿Qué se consideraba \"duelo[BREAK]inapropiado\" en el campamento[BREAK]israelita?",
      potential_answers: "a. maldecir a los dioses griegos,b. cortarse,c. afeitarse la parte frontal de la cabeza,d. b y c",
      actual_answer: "d. b y c",
      actual_answer_explanation: "Ver Deuteronomio 14:1-2."
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el castigo para los[BREAK]parientes que alentaban a la gente[BREAK]a servir dioses extranjeros?",
      potential_answers: "eran crucificados,eran ahogados,eran encarcelados,eran apedreados",
      actual_answer: "eran apedreados",
      actual_answer_explanation: "Ver Deuteronomio 13:6-11."
    },
    {
      question_type: "multiple",
      question: "¿Cuánto es un diezmo?",
      potential_answers: "1/4 de lo que has recibido,1/2 de lo que has recibido,1/9 de lo que has recibido,1/10 de lo que has recibido",
      actual_answer: "1/10 de lo que has recibido"
    },
    {
      question_type: "TF",
      question: "Los animales con anormalidades pueden[BREAK]ser sacrificados a Dios.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Los animales con anormalidades no pueden[BREAK]ser sacrificados a Dios. En su lugar, el[BREAK]adorador debe comer el animal.[BREAK][BREAK]Ver Deuteronomio 15:19-23."
    },
    {
      question_type: "TF",
      question: "Dios permite el consumo de todos[BREAK]los animales que rumian.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Dios solo permite el consumo de[BREAK]animales que rumian y tienen[BREAK]pezuñas hendidas.[BREAK][BREAK]Ver Levítico 11."
    },
    {
      question_type: "TF",
      question: "Dios ordena la generosidad con los pobres.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Dios ordena la generosidad con los pobres.[BREAK][BREAK]Ver Deuteronomio 15:7-11."
    },
    {
      question_type: "multiple",
      question: "[REMOVE_TRIPLE_SPACE]¿Qué hacían los propietarios israelitas[BREAK]con sus siervos cuando se negaban[BREAK]a irse después de siete años?",
      potential_answers: "a. los convertían en siervos para siempre,b. les perforaban un agujero en la oreja,c. los liberaban de todos modos,d. a y b",
      actual_answer: "d. a y b",
      actual_answer_explanation: "Ver Deuteronomio 15:12-18."
    },
    {
      question_type: "multiple",
      question: "¿Cuántos días debía observarse la[BREAK]Fiesta de los Tabernáculos?",
      potential_answers: "3 días,10 días,40 días,7 días",
      actual_answer: "7 días",
      actual_answer_explanation: "Ver Deuteronomio 16:13."
    },
    {
      question_type: "multiple",
      question: "¿Cómo estaba Coré relacionado con Moisés?",
      potential_answers: "primo hermano,primo segundo,primo hermano una vez removido,tío",
      actual_answer: "primo hermano",
      actual_answer_explanation: "Ver Números 16:1 y Éxodo 6:14-20 para conectar los puntos."
    },
    {
      question_type: "match",
      question: "",
      potential_answers: "",
      actual_answer: "7 días (220;135)(0)->las aguas permanecen[BREAK]sangrientas (405;205)(5),3 días (220;215)(1)->Egipto permanece[BREAK]oscuro (405;125)(4),7 años (220;295)(2)->duración del[BREAK]servicio (405;290)(6),40 años (220;375)(3)->viaje a[BREAK]Canaán (405;365)(7)",
      actual_answer_sans_coord: "7 días->las aguas permanecen sangrientas[BREAK][BREAK]3 días->Egipto permanece oscuro[BREAK][BREAK]7 años->duración del servicio[BREAK][BREAK]40 años->viaje a Canaán"
    },
    {
      question_type: "TF",
      question: "El rey Eglón era muy gordo.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "El rey Eglón era tan gordo que su vientre[BREAK]cubrió el puñal de Aod cuando fue[BREAK]introducido.[BREAK][BREAK]Ver Jueces 3:12-30."
    },
    {
      question_type: "TF",
      question: "Samgar mató a 600 filisteos con[BREAK]la quijada de un burro.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Samgar mató a 600 filisteos con[BREAK]una aguijada de buey.[BREAK][BREAK]Ver Jueces 3:31."
    },
    {
      question_type: "multiple",
      question: "¿Dónde estaba Gedeón trillando trigo?",
      potential_answers: "en una torre de vigilancia,en una piscina,en un lagar,en el cuarto de agua",
      actual_answer: "en un lagar",
      actual_answer_explanation: "Ver Jueces 6:11."
    },
    {
      question_type: "TF",
      question: "Después de la muerte de Aod, los[BREAK]israelitas obedecieron los[BREAK]mandamientos de Dios.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Los israelitas volvieron a sus[BREAK]malos caminos, abriendo la puerta[BREAK]a problemas con los cananeos.[BREAK][BREAK]Ver Jueces 4:1-2."
    }
  ],
  [
    {
      question_type: "multiple",
      question: "¿Qué dúo sostuvo los brazos de Moisés[BREAK]durante la batalla contra los amalecitas?",
      potential_answers: "Aarón y Josué,Aarón y Hur,Hur y Josué,Hur y Milca",
      actual_answer: "Aarón y Hur",
      actual_answer_explanation: "Ver Éxodo 17:8-16."
    },
    {
      question_type: "multiple",
      question: "[REMOVE_TRIPLE_SPACE]¿Qué llevó Gedeón al ángel[BREAK]del Señor?",
      potential_answers: "un cabrito joven y tortas sin[BREAK] levadura,una máquina de pinball,un becerro primogénito,dos palomas",
      actual_answer: "un cabrito joven y tortas sin[BREAK] levadura",
      actual_answer_sans_coord: "[REMOVE_BREAK]"
    },
    {
      question_type: "multiple",
      question: "¿Qué hizo Gedeón con el altar de[BREAK]Baal?",
      potential_answers: "lo robó,lo destruyó,lo reconstruyó,lo embadurnó con lodo",
      actual_answer: "lo destruyó",
      actual_answer_explanation: "Ver Jueces 6:28-32."
    },
    {
      question_type: "multiple",
      question: "¿Qué nombre se le dio a Gedeón después[BREAK]de destruir el altar de Baal?",
      potential_answers: "Jerubaal,Galaad,Samaría,Baalerub",
      actual_answer: "Jerubaal",
      actual_answer_explanation: "Ver Jueces 6:32."
    },
    {
      question_type: "multiple",
      question: "¿Cuál fue la primera señal que Gedeón[BREAK]pidió a Dios?",
      potential_answers: "rocío en el vellón pero suelo seco,rocío en el suelo pero vellón seco,rocío en suelo y vellón,ningún rocío en suelo ni vellón",
      actual_answer: "rocío en el vellón pero suelo seco",
      actual_answer_explanation: "Ver Jueces 6:36-40."
    },
    {
      question_type: "multiple",
      question: "[IGNORE_ANSWER_BREAK]¿Qué dijo Dios cuando Gedeón[BREAK]reunió su ejército?",
      potential_answers: "“ese es el número correcto”,“¿Listos para empezar el entrenamiento?”,“La gente que está contigo es demasiada[BREAK] ...”,“¡Levántate! Baja contra el[BREAK] campamento!”",
      actual_answer: "“La gente que está contigo es demasiada[BREAK] ...”",
      actual_answer_explanation: "Ver Jueces 7:2."
    },
    {
      question_type: "multiple",
      question: "¿Cuántos soldados regresaron[BREAK]inicialmente a casa?",
      potential_answers: "10000,300,22000,44000",
      actual_answer: "22000",
      actual_answer_explanation: "Ver Jueces 7:3."
    },
    {
      question_type: "multiple",
      question: "¿Cuál era el nombre del siervo de Gedeón?",
      potential_answers: "Pureé,Purá,Torá,Tory",
      actual_answer: "Purá",
      actual_answer_explanation: "Ver Jueces 7:10."
    },
    {
      question_type: "multiple",
      question: "[REMOVE_QUADRUPLE_SPACE]¿Cuál fue el grito de batalla de los[BREAK]300 de Gedeón? (Nota: Basado en KJV/NKJV.)",
      potential_answers: "“¡La espada del Señor[COMMA] y de[BREAK] Gedeón!”,“¡Muerte a los madianitas!”,“¡Dios maldiga a estas personas!”,“¡Por la Torá y el[BREAK] Decálogo!”",
      actual_answer: "“¡La espada del Señor, y de[BREAK] Gedeón!”",
      actual_answer_explanation: "Ver Jueces 7:20."
    },
    {
      question_type: "multiple",
      question: "¿Qué dos príncipes madianitas fueron[BREAK]asesinados por los israelitas?",
      potential_answers: "Oreb y Zeeb,Oreb y Seeb,Orab y Madi,Orab y Jasón",
      actual_answer: "Oreb y Zeeb",
      actual_answer_explanation: "Ver Jueces 7:25."
    },
    {
      question_type: "TF",
      question: "Inicialmente, Gedeón reunió[BREAK]32000 soldados para la batalla.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Lee Jueces 7:3, y podrás conectar[BREAK]los puntos."
    },
    {
      question_type: "TF",
      question: "Gedeón conservó a los soldados que[BREAK]no lamieron como perros.",
      potential_answers: "",
      actual_answer: "0",
      actual_answer_explanation: "Gedeón conservó a los soldados que sí[BREAK]lamieron como perros.[BREAK][BREAK]Ver Jueces 7:4-7."
    },
    {
      question_type: "TF",
      question: "Gedeón mató a dos reyes de Madián:[BREAK]Zebah y Zalmuna.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Jueces 8:1-21."
    },
    {
      question_type: "TF",
      question: "Gedeón practicó la poligamia.",
      potential_answers: "",
      actual_answer: "1",
      actual_answer_explanation: "Ver Jueces 8:30."
    }
  ]
];

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

var languagePicked;
var showLanguages = false;

// countdown timer for a game put on standby
var standbyQuitTimer = 300;

// countup timer for checking pause button hold
var pauseButtonHoldCount = 0;
var pauseButtonBeingHeld = false;
