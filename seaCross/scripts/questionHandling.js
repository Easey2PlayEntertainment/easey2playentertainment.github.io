async function loadQuestions() { // loads all questions; prevents delay
    allQuestions = [null,[{question_type: "multiple",question: "What did Moses' mother do to save[BREAK]him from the Pharaoh's decree?",potential_answers: "hid him in a basket in the reeds[BREAK]of the nile river,sent him to live with relatives[BREAK]in midian,moved her family away from egypt,left him in the care of a wealthy[BREAK]Egyptian family",actual_answer: "hid him in a basket in the reeds[BREAK]of the nile river"},{question_type: "multiple",question: "Who found Moses in the Nile River?",potential_answers: "a fisherman,the pharaoh's daughter,a group of shepherds,an egyptian solder",actual_answer: "the pharaoh's daughter"},{question_type: "multiple",question: "What sign did God show Moses at the[BREAK]burning bush?",potential_answers: "a. turned moses' rod into a snake,b. turned moses' hand into leprosy,c. a and b,d. none of the above",actual_answer: "c. a and b"},{question_type: "multiple",question: "What was the name of Moses' brother,[BREAK]who also played a significant role[BREAK]in the Exodus?",potential_answers: "aaron,joshua,caleb,jethro",actual_answer: "aaron"},{question_type: "multiple",question: "How many plagues did God send upon[BREAK]Egypt?",potential_answers: "7,10,12,15",actual_answer: "10"},{question_type: "multiple",question: "What was the first plague in Egypt?",potential_answers: "snakes in pharaoh's court,frogs all over egypt,waters becoming blood,darkness over the earth",actual_answer: "waters becoming blood"},{question_type: "multiple",question: "What was the third plague in Egypt?",potential_answers: "flies,frogs,lice,hail",actual_answer: "lice"},{question_type: "multiple",question: "What was the final plague that[BREAK]convinced Pharaoh to let the[BREAK]Israelites go?",potential_answers: "locusts,darkness,death of the firstborn,hail",actual_answer: "death of the firstborn"},{question_type: "multiple",question: "What did the Israelites put on[BREAK]their doorposts to protect[BREAK]themselves from the final plague?",potential_answers: "a cross,a star,lamb's blood,garlic",actual_answer: "lamb's blood"},{question_type: "multiple",question: "What sea did God part to help the[BREAK]Israelites escape from the[BREAK]Egyptians?",potential_answers: "the dead sea,the red sea,the mediterranean sea,the sea of galilee",actual_answer: "the red sea"},{question_type: "multiple",question: "On which mountain did Moses receive[BREAK]the Ten Commandments?",potential_answers: "mount ararat,mount sinai,mount zion,mount moriah",actual_answer: "mount sinai"},{question_type: "multiple",question: "What was the name of Moses' mother?",potential_answers: "miriam,zipporah,jochebed,deborah",actual_answer: "jochebed"},{question_type: "multiple",question: "What was the name of Moses' father-[BREAK]in-law?",potential_answers: "a. midian,b. jethro,c. reuel,d. b and c",actual_answer: "d. b and c"},{question_type: "multiple",question: "Who was the wife of Moses?",potential_answers: "deborah,zipporah,jochebed,hadassah",actual_answer: "zipporah"}],[{question_type: "match",question: "",potential_answers: "",actual_answer: "moses's sister (220;135)(0)->miriam (500;135)(4),God's name (220;215)(1)->I AM (530;215)(5),first plague (220;295)(2)->waters[BREAK]become[BREAK]blood (496.5;275)(6),fourth plague (220;375)(3)->flies (510;375)(7)","actual_answer_sans_coord": "moses's sister->miriam[BREAK][BREAK]God's name->I AM[BREAK][BREAK]first plague->waters become blood[BREAK][BREAK]fourth plague->flies"},{question_type: "match",question: "",potential_answers: "",actual_answer: "second plague (220;135)(0)->frogs (505;215)(5),fifth plague (220;215)(1)->livestock[BREAK]diseased (452;365)(7),eighth plague (220;295)(2)->locusts (480;300)(6),seventh plague (220;375)(3)->hail (520;135)(4)","actual_answer_sans_coord": "second plague->frogs[BREAK][BREAK]fifth plague->livestock diseased[BREAK][BREAK]eighth plague->locusts[BREAK][BREAK]seventh plague->hail"},{question_type: "match",question: "",potential_answers: "",actual_answer: "moses' brother (220;135)(0)->aaron (510;300)(6),moses' father (220;215)(1)->amram (510;375)(7),moses' mother (220;295)(2)->jochebed (468;135)(4),moses' wife (220;375)(3)->zipporah (468;215)(5)","actual_answer_sans_coord": "moses' brother->aaron[BREAK][BREAK]moses' father->amram[BREAK][BREAK]moses' mother->jochebed[BREAK][BREAK]moses' wife->zipporah"},{question_type: "match",question: "",potential_answers: "",actual_answer: "third plague (220;135)(0)->lice (520;135)(4),sixth plague (220;215)(1)->boils (510;375)(7),ninth plague (220;295)(2)->darkness (470;300)(6),tenth plague (220;375)(3)->death of[BREAK]firstborn (460;205)(5)","actual_answer_sans_coord": "third plague->lice[BREAK][BREAK]sixth plague->boils[BREAK][BREAK]ninth plague->darkness[BREAK][BREAK]tenth plague->death of firstborn"},{question_type: "match",question: "",potential_answers: "",actual_answer: "shiphrah (220;135)(0)->hebrew midwife (390;375)(7),gershom (220;215)(1)->moses' son (454;300)(6),midian (220;295)(2)->moses' refuge (414;215)(5),horeb (220;375)(3)->mount of God (424;135)(4)","actual_answer_sans_coord": "shiphrah->hebrew midwife[BREAK][BREAK]gershom->moses' son[BREAK][BREAK]midian->moses' refuge[BREAK][BREAK]horeb->mount of God"},{question_type: "match",question: "",potential_answers: "",actual_answer: "donkey (220;135)(0)->balaam's[BREAK]transport[BREAK]animal (410;275)(6),balak (220;215)(1)->king of moab (410;215)(5),eleazar (220;295)(2)->aaron's son (410;375)(7),Putiel (220;375)(3)->eleazar's[BREAK]father-in-law (410;125)(4)","actual_answer_sans_coord": "donkey->balaam's transport animal[BREAK][BREAK]balak->king of moab[BREAK][BREAK]eleazar->aaron's son[BREAK][BREAK]Putiel->eleazar's father-in-law"},{question_type: "match",question: "",potential_answers: "",actual_answer: "joshua (220;135)(0)->son of nun (445;300)(6),caleb (220;215)(1)->son of Jephunneh (363;215)(5),Jamin (220;295)(2)->son of simeon (405;375)(7),Gershon (220;375)(3)->son of Levi (435;135)(4)","actual_answer_sans_coord": "joshua->son of nun[BREAK][BREAK]caleb->son of Jephunneh[BREAK][BREAK]Jamin->son of simeon[BREAK][BREAK]Gershon->son of Levi"},{question_type: "match",question: "",potential_answers: "",actual_answer: "mount horeb (220;135)(0)->mount sinai (430;135)(4),Jethro (220;215)(1)->Reuel (430;300)(6),aaron (220;295)(2)->first high[BREAK]priest (430;365)(7),mixed[BREAK]multitude (220;365)(3)->came with[BREAK]israelites (430;205)(5)","actual_answer_sans_coord": "mount horeb->mount sinai[BREAK][BREAK]Jethro->Reuel[BREAK][BREAK]aaron->first high priest[BREAK][BREAK]mixed multitude->came with israelites"},{question_type: "match",question: "",potential_answers: "",actual_answer: "wilderness of[BREAK]shur (220;124)(0)->waters made[BREAK]sweet (442;284)(6),wilderness of[BREAK]sin (220;204)(1)->manna falls[BREAK]down (440;364)(7),Rephidim (220;295)(2)->water from[BREAK]rock (442;204)(5),wilderness of[BREAK]sinai (220;364)(3)->God reveals[BREAK]Himself (442;124)(4)","actual_answer_sans_coord": "wilderness of shur->waters made sweet[BREAK][BREAK]wilderness of sin->manna falls down[BREAK][BREAK]Rephidim->water from rock[BREAK][BREAK]wilderness of sinai->God reveals Himself"},{question_type: "match",question: "",potential_answers: "",actual_answer: "burning bush (220;135)(0)->God's[BREAK]presence (465;124)(4),golden calf (220;215)(1)->israelite-made[BREAK]idol (390;284)(6),nadab (220;295)(2)->son of aaron (420;375)(7),bashan (220;375)(3)->conquered[BREAK]land (452;215)(5)","actual_answer_sans_coord": "burning bush->God's presence[BREAK][BREAK]golden calf->israelite-made idol[BREAK][BREAK]nadab->son of aaron[BREAK][BREAK]bashan->conquered land"},{question_type: "match",question: "",potential_answers: "",actual_answer: "tabernacle (220;135)(0)->portable[BREAK]sanctuary (413;275)(6),bezazel (220;215)(1)->chief artisan (413;125)(4),miriam (220;295)(2)->struck with[BREAK]leprosy (413;195)(5),Mount Nebo (220;375)(3)->moses's death[BREAK]place (413;365)(7)","actual_answer_sans_coord": "tabernacle->portable sanctuary[BREAK][BREAK]bezazel->chief artisan[BREAK][BREAK]miriam->struck with leprosy[BREAK][BREAK]Mount Nebo->moses's death place"},{question_type: "match",question: "",potential_answers: "",actual_answer: "aaron's rod (220;135)(0)->budded with[BREAK]almonds (390;205)(5),eliezer (220;215)(1)->moses' second[BREAK]son (390;280)(6),kadesh (220;295)(2)->miriam's burial[BREAK]place (390;125)(4),Hoglah (220;375)(3)->zelophehad's[BREAK]daughter (390;365)(7)","actual_answer_sans_coord": "aaron's rod->budded with almonds[BREAK][BREAK]eliezer->moses' second son[BREAK][BREAK]kadesh->miriam's burial place[BREAK][BREAK]Hoglah->zelophehad's daughter"},{question_type: "match",question: "",potential_answers: "",actual_answer: "meribah (220;135)(0)->israelites[BREAK]quarreled[BREAK]there (420;280)(6),Noah (220;215)(1)->Zelophehad's[BREAK]daughter (420;205)(5),Urim (220;295)(2)->priestly gem (420;135)(4),Oholiab (220;375)(3)->Bezazel's[BREAK]assistant (420;365)(7)","actual_answer_sans_coord": "meribah->israelites quarreled there[BREAK][BREAK]Noah->Zelophehad's daughter[BREAK][BREAK]Urim->priestly gem[BREAK][BREAK]Oholiab->Bezazel's assistant"},{question_type: "match",question: "",potential_answers: "",actual_answer: "Omer (220;135)(0)->measure of grain (367;215)(5),Sihon (220;215)(1)->Amorite king (367;375)(7),Og (220;295)(2)->king of Bashan (367;135)(4),hur (220;375)(3)->moses' arm[BREAK]supporter (367;290)(6)","actual_answer_sans_coord": "Omer->measure of grain[BREAK][BREAK]Sihon->Amorite king[BREAK][BREAK]Og->king of Bashan[BREAK][BREAK]hur->moses' arm supporter"}],[{question_type: "number",question: "order these commandments correctly.",potential_answers: "",actual_answer: "you shall not bow down to idols,you shall not take god's name in vain,remember the sabbath day to keep it holy,you shall not kill,you shall not commit adultery,you shall not steal,you shall not lie,you shall not covet","actual_answer_sans_coord": "1. you shall not bow down to idols[BREAK][BREAK]2. you shall not take god's name in vain[BREAK][BREAK]3. remember the sabbath day to keep it holy[BREAK][BREAK]4. you shall not kill[BREAK][BREAK]5. you shall not commit adultery[BREAK][BREAK]6. you shall not steal[BREAK][BREAK]7. you shall not lie[BREAK][BREAK]8. you shall not covet"},{question_type: "number",question: "order these plagues correctly.",potential_answers: "",actual_answer: "the nile becomes blood,frogs,lice,flies,egyptian livestock dies,boils,hail,locust","actual_answer_sans_coord": "1. the nile becomes blood[BREAK][BREAK]2. frogs[BREAK][BREAK]3. lice[BREAK][BREAK]4. flies[BREAK][BREAK]5. egyptian livestock dies[BREAK][BREAK]6. boils[BREAK][BREAK]7. hail[BREAK][BREAK]8. locust"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "Waters of Marah made sweet,Quail came at evening for the first time,Manna fell from heaven,Jethro advises Moses about leadership,The Ten Commandments were proclaimed,The Ten Commandments were given,Aaron erected a golden calf,Aaron and his sons are consecrated","actual_answer_sans_coord": "1. Waters of Marah made sweet[BREAK][BREAK]2. Quail came at evening for the first time[BREAK][BREAK]3. Manna fell from heaven[BREAK][BREAK]4. Jethro advises Moses about leadership[BREAK][BREAK]5. The Ten Commandments were proclaimed[BREAK][BREAK]6. The Ten Commandments were given[BREAK][BREAK]7. Aaron erected a golden calf[BREAK][BREAK]8. Aaron and his sons are consecrated"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "the decree to execute baby boys was[BREAK]proclaimed,moses was born,moses was found by Pharaoh's daughter,moses kills an egyptian,moses defends the daughters of jethro,moses marries zipporah,moses sees burning bush,moses' rod becomes a snake","actual_answer_sans_coord": "1. the decree to execute baby boys was[BREAK] proclaimed[BREAK][BREAK]2. moses was born,[BREAK][BREAK]3. moses was found by Pharaoh's daughter[BREAK][BREAK]4. moses kills an egyptian[BREAK][BREAK]5. moses defends the daughters of jethro[BREAK][BREAK]6. moses marries zipporah[BREAK][BREAK]7. moses sees burning bush[BREAK][BREAK]8. moses' rod becomes a snake"},{question_type: "number",question: "order these passover instructions correctly.",potential_answers: "",actual_answer: "take a lamb without blemish,kill it at twilight,put the lamb's blood on the doorpost,roast the lamb,eat it alongside unleavened bread and[BREAK]bitter herbs,burn up the lamb leftovers,eat with belt on your waist and sandals on[BREAK]your feet,don't leave your house until morning","actual_answer_sans_coord": "1. take a lamb without blemish[BREAK][BREAK]2. kill it at twilight[BREAK][BREAK]3. put the lamb's blood on the doorpost[BREAK][BREAK]4. roast the lamb[BREAK][BREAK]5. eat it alongside unleavened bread and[BREAK] bitter herbs[BREAK][BREAK]6. burn up the lamb leftovers[BREAK][BREAK]7. eat with belt on your waist and sandals[BREAK] on your feet[BREAK][BREAK]8. don't leave your house until morning"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "moses grinds golden calf to powder,stubborn worshippers of golden calf killed,moses talks to God in tabernacle of[BREAK]meeting,Ten Commandments are written again on new[BREAK]stone tablets,Bezazel is called as chief artisan,children of israel are told to stop[BREAK]bringing offerings,bezazel builds the Ark of the Covenant,bronze laver is built","actual_answer_sans_coord": "1. moses grinds golden calf to powder[BREAK][BREAK]2. stubborn worshippers of golden calf killed[BREAK][BREAK]3. moses talks to God in tabernacle of meeting[BREAK][BREAK]4. Ten Commandments are written again on[BREAK] new stone tablets[BREAK][BREAK]5. Bezazel is called as chief artisan[BREAK][BREAK]6. children of israel are told to stop[BREAK] bringing offerings[BREAK][BREAK]7. bezazel builds the Ark of the Covenant[BREAK][BREAK]8. bronze laver is built"},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "spies sent to the land of canaan,bad report is given upon return,joshua and caleb try to encourage the[BREAK]people,israelites banished to the desert for 40[BREAK]years,man put to death for working on the[BREAK]Sabbath,korah and his men rebel against moses and[BREAK]aaron,korah and his men are swallowed by the[BREAK]earth,4700 people die due to a plague","actual_answer_sans_coord": "1. spies sent to the land of canaan[BREAK][BREAK]2. bad report is given upon return[BREAK][BREAK]3. joshua and caleb try to encourage the[BREAK] people[BREAK][BREAK]4. israelites banished to the desert for[BREAK] 40 years[BREAK][BREAK]5. man put to death for working on the Sabbath[BREAK][BREAK]6. korah and his men rebel against moses and [BREAK] aaron[BREAK][BREAK]7. korah and his men are swallowed by the[BREAK] earth[BREAK][BREAK]8. 4700 people die due to a plague[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "zipporah saves moses's life by[BREAK]circumcising her son,moses reunites with aaron,moses returns to egypt,moses and aaron confront pharaoh,pharaoh increases the israelite's workload,God promises deliverance,God sends the ten plagues,pharaoh lets the israelites go","actual_answer_sans_coord": "1. zipporah saves moses's life by[BREAK] circumcising her son[BREAK][BREAK]2. moses reunites with aaron[BREAK][BREAK]3. moses returns to egypt[BREAK][BREAK]4. moses and aaron confront pharaoh[BREAK][BREAK]5. pharaoh increases the israelite's workload[BREAK][BREAK]6. God promises deliverance[BREAK][BREAK]7. God sends the ten plagues[BREAK][BREAK]8. pharaoh lets the israelites go"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "ark of the testimony built,table of showbread built,gold lampstand built,alter of incense built,anointing oil and incense made by perfumer,altar of burnt offering built,priestly garments furnished woven,the tabernacle is erected","actual_answer_sans_coord": "1. ark of the testimony built[BREAK][BREAK]2. table of showbread built[BREAK][BREAK]3. gold lampstand built[BREAK][BREAK]4. altar of incense built[BREAK][BREAK]5. anointing oil and incense made by perfumer[BREAK][BREAK]6. altar of burnt offering built[BREAK][BREAK]7. priestly garments furnished woven[BREAK][BREAK]8. the tabernacle is erected"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "the mixed multitude complains about manna,God says He will send quail for a whole[BREAK]month,seventy elders receive the Holy Spirit,Eldad and Medad start prophesying,God sends quail for a second time,people craving for quail die from[BREAK]overeating,aaron and miriam spoke against moses,God strikes Miriam with leprosy","actual_answer_sans_coord": "1. the mixed multitude complains about manna[BREAK][BREAK]2. God says He will send quail for a whole[BREAK] month[BREAK][BREAK]3. seventy elders receive the Holy Spirit[BREAK][BREAK]4. Eldad and Medad start prophesying[BREAK][BREAK]5. God sends quail for a second time[BREAK][BREAK]6. people craving for quail die from[BREAK] overeating[BREAK][BREAK]7. aaron and miriam spoke against moses[BREAK][BREAK]8. God strikes Miriam with leprosy"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "the israelites defeat the Canaanites at[BREAK]Hormah,the israelites complained against God[BREAK]again,God causes a plague of snakes within the[BREAK]camp,moses furnishes a bronze serpent,israel defeats king sihon and his army,israel defeats king og and his army,moses sends spies out to Jazer,israel takes the villages at Jazer","actual_answer_sans_coord": "1. the israelites defeat the Canaanites at[BREAK] Hormah[BREAK][BREAK]2. the israelites complained against God again[BREAK][BREAK]3. God causes a plague of snakes within the[BREAK] camp[BREAK][BREAK]4. moses furnishes a bronze serpent[BREAK][BREAK]5. israel defeats king sihon and his army[BREAK][BREAK]6. israel defeats king og and his army[BREAK][BREAK]7. moses sends spies out to Jazer[BREAK][BREAK]8. israel takes the villages at Jazer"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "balak sends balaam to curse the children[BREAK]of israel,the Angel of the Lord abstructs the path[BREAK]balaam is on,balaam obeys the command the Angel gives[BREAK]him,balaam fails to curse israel in front of[BREAK]balak,balaam gives a prophecy concerning moab's[BREAK]future,israel falls into harlotry,a man and a midianite woman are killed for[BREAK]their sin,God tells moses to take a census of the[BREAK]people","actual_answer_sans_coord": "[REMOVE_BREAK]1. balak sends balaam to curse the children[BREAK] of israel[BREAK][BREAK]2. the Angel of the Lord abstructs the path[BREAK] balaam is on[BREAK]3. balaam obeys the command the Angel gives[BREAK] him[BREAK]4. balaam fails to curse israel in front of[BREAK] balak[BREAK][BREAK]5. balaam gives a prophecy concerning[BREAK] moab's future[BREAK][BREAK]6. israel falls into harlotry[BREAK][BREAK]7. a man and a midianite woman are killed for[BREAK] their sin[BREAK][BREAK]8. God tells moses to take a second census of[BREAK] the people[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "order these events correctly.",potential_answers: "",actual_answer: "God tells moses where he would die,moses inaugurates joshua as israel's next[BREAK]leader,the israelites defeat the midianites,moses gives instructions concerning[BREAK]captives,God tells Moses to divide the plunder,tribes to settle east of the jordan are[BREAK]chosen,God instructs israel concerning conquest[BREAK]of Canaan,God chooses leaders to divide the land","actual_answer_sans_coord": "1. God tells moses where he would die[BREAK][BREAK]2. moses inaugurates joshua as israel's[BREAK] next leader[BREAK][BREAK]3. the israelites defeat the midianites[BREAK][BREAK]4. moses gives instructions concerning[BREAK] captives[BREAK][BREAK]5. God tells Moses to divide the plunder[BREAK][BREAK]6. tribes to settle east of the jordan are[BREAK] chosen[BREAK][BREAK]7. God instructs israel concerning conquest[BREAK] of Canaan[BREAK][BREAK]8. God chooses leaders to divide the land[INCREASE_SQUARE_HEIGHT]"},{question_type: "number",question: "place these excerpts from the song of moses[BREAK]in the correct order (Exodus 15).",potential_answers: "",actual_answer: "I will sing to the Lord,The Lord is a man of war,You sent forth Your wrath,The earth swallowed them,You in Your mercy have led forth,The people will hear and be afraid,Fear and dread will fall on them,They will be as still as a stone","actual_answer_sans_coord": "1. I will sing to the Lord[BREAK][BREAK]2. The Lord is a man of war[BREAK][BREAK]3. You sent forth Your wrath[BREAK][BREAK]4. The earth swallowed them[BREAK][BREAK]5. You in Your mercy have led forth[BREAK][BREAK]6. The people will hear and be afraid[BREAK][BREAK]7. Fear and dread will fall on them[BREAK][BREAK]8. They will be as still as a stone"}],[{question_type: "TF",question: "Moses built a golden calf for the[BREAK]Israelites to worship.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "aaron was the one who built a [BREAK]golden calf for the israelites to[BREAK]worship."},{question_type: "TF",question: "The Israelites sang praises to God[BREAK]after they crossed the Red Sea and[BREAK]were saved from the Egyptians.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "The Israelites did sing praises[BREAK]after crossing the Red Sea.[BREAK][BREAK]See Exodus 15."},{question_type: "TF",question: "Moses went up to Mount Sinai to[BREAK]receive the ten commandments three[BREAK]times.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "moses only went up to receive the[BREAK]ten commandments twice.[BREAK][BREAK]See Exodus 24 and 34."},{question_type: "TF",question: "moses immediately accepted the[BREAK]work God called him to do.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "before moses accepted the work he[BREAK]was called to, he made excuses."},{question_type: "TF",question: "God brought water out from a [BREAK]rock at Horeb.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "Moses struck the rock at Horeb, but[BREAK]God caused the water to flow.[BREAK][BREAK]See Exodus 17:1-7."},{question_type: "TF",question: "when moses rested his arms during[BREAK]the battle with the amalekites, the[BREAK]israelite army continued to win.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "when moses rested his arms during[BREAK]the battle with the amalekites, the[BREAK]israeliite army started to lose."},{question_type: "TF",question: "the israeltes wandered in the [BREAK]desert for 40 years before entering[BREAK]the promised land.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Numbers 14:34."},{question_type: "TF",question: "aaron was the first high priest [BREAK]of israel.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Exodus 28:1-43."},{question_type: "TF",question: "the israelites crossed the jordan[BREAK]river on dry ground to enter the[BREAK]promised land.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "This happened under Joshua's[BREAK]leadership.[BREAK][BREAK]See Joshua 3."},{question_type: "TF",question: "the walls of jericho fell after[BREAK]the israelites marched around them[BREAK]one time.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "they marched around the city for[BREAK]seven days, and on the seventh day,[BREAK]they marched around it seven times[BREAK]before the walls fell."},{question_type: "TF",question: "joshua was one of the twelve spies[BREAK]sent to scout the land of canaan.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Numbers 13:1-16."},{question_type: "TF",question: "the manna that God provided for[BREAK]the israelites stopped appearing[BREAK]once they had entered the promised[BREAK]land.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Joshua 5:12."},{question_type: "TF",question: "moses led the israelites into the[BREAK]promised land.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "joshua led the israelites into the[BREAK]promised land after moses' death."},{question_type: "TF",question: "the israelites built a tabernacle[BREAK]as god's portable dwelling place.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "Early references are in Exodus."}],[{question_type: "multiple",question: "Whose rod did God use to turn water[BREAK]into blood?",potential_answers: "moses',aaron's,pharaoh's,none of the above",actual_answer: "aaron's"},{question_type: "multiple",question: "What was the name of Moses' father?",potential_answers: "joseph,enoch,reuel,amram",actual_answer: "amram"},{question_type: "multiple",question: "Whose rod grew almond buds?",potential_answers: "a. moses,b. jethro,c. amram,d. none of the above",actual_answer: "d. none of the above"},{question_type: "multiple",question: "Which tribes of Israel asked to[BREAK]inherit the land of Jazer and the[BREAK]land of Gilead?",potential_answers: "gad and reuben,gad and judah,judah and reuben,judah and levi",actual_answer: "gad and reuben"},{question_type: "multiple",question: "Who was the chief artisan who [BREAK]led in the building of the[BREAK]tabernacle?",potential_answers: "aholiab,gershom,reuel,bezalel",actual_answer: "bezalel"},{question_type: "TF",question: "Gershom and abihu brought strange[BREAK]fire into the Tabernacle.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "nadab and abihu were the ones who[BREAK]brought strange fire into the[BREAK]Tabernacle.[BREAK][BREAK]See Leviticus 10:1-2."},{question_type: "TF",question: "Aaron died on the top of Mount Hor.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Numbers 33:39."},{question_type: "TF",question: "moses sent messengers from Kadesh[BREAK]to the king of moab to ask for[BREAK]passage.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Moses sent messengers from Kadesh[BREAK]to the King of Edom to ask for[BREAK]passage.[BREAK][BREAK]See Numbers 20:14-21."},{question_type: "TF",question: "miriam died and was buried in the[BREAK]wilderness of sin.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Miriam died and was buried in the[BREAK]wilderness of zin. “Zin” with a “z”,[BREAK]not “Sin” with an “s”.[BREAK][BREAK]See Numbers 20:1"},{question_type: "TF",question: "moses made a bronze snake so that[BREAK]those bitten by snakes could live.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Numbers 21:4-9."},{question_type: "multiple",question: "What was the name of the place that[BREAK]had a well that sprung up with[BREAK]water?",potential_answers: "soda,mattanah,pisgah,beer",actual_answer: "beer","actual_answer_explanation": "See Numbers 21:16-18."},{question_type: "multiple",question: "Which king would not allow the[BREAK]israelites to pass through their[BREAK]land?",potential_answers: "a. King Sihon,b. the king of edom,c. the king of moab,d. all of the above",actual_answer: "d. all of the above","actual_answer_explanation": "See Numbers 20:14-17 and Numbers 21:21-23."},{question_type: "number",question: "put these destinations in the right order.",potential_answers: "",actual_answer: "Succoth,Marah,Red Sea,Rephidim,Kibroth Hattaavah,Abronah,Mount Hor,Zalmonah","actual_answer_sans_coord": "1. Succoth[BREAK][BREAK]2. Marah[BREAK][BREAK]3. Red Sea[BREAK][BREAK]4. Rephidim[BREAK][BREAK]5. Kibroth Hattaavah[BREAK][BREAK]6. Abronah[BREAK][BREAK]7. Mount Hor[BREAK][BREAK]8. Zalmonah"},{question_type: "TF",question: "God told the children of Israel to[BREAK]dispossess the inhabitants of[BREAK]Canaan.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Numbers 33:51-56, KJV or NKJV."}],[{question_type: "multiple",question: "What did God strenuously emphaisze[BREAK]that human beings should not[BREAK]consume?",potential_answers: "dirty water,bloody meat,chicken bones,human flesh",actual_answer: "bloody meat","actual_answer_explanation": "see leviticus 17:14"},{question_type: "multiple",question: "what animal did God prohibit the [BREAK]israelites from eating?",potential_answers: "a. horse,b. pig,c. catfish,d. all of the above",actual_answer: "d. all of the above","actual_answer_explanation": "see Leviticus 11:1-23"},{question_type: "TF",question: "God prohibited the Israelites from[BREAK]eating insects.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "God prohibited the Israelites from[BREAK]eating the insects that creep on[BREAK]all four legs.[BREAK][BREAK]See Leviticus 20:23."},{question_type: "multiple",question: "where is the Ark of the Covenant [BREAK]located in The Tabernacle?",potential_answers: "holy place,most holy place,ivory palace,the throneroom",actual_answer: "most holy place"},{question_type: "multiple",question: "When were the Israelites supposed[BREAK]to cancel debts?",potential_answers: "every other week,every other year,every seven years,every ten years",actual_answer: "every seven years"},{question_type: "multiple",question: "In Numbers, which pagan god do the[BREAK]israelites begin to worship?",potential_answers: "baal,azazel,ashtaroth,balor",actual_answer: "baal","actual_answer_explanation": "See Numbers 25."},{question_type: "multiple",question: "In Numbers, what happened to Miriam[BREAK]after God gave her and Aaron a[BREAK]lecture?",potential_answers: "she became psychotic,she became feverish,she became leprous,she contracted chicken pox",actual_answer: "she became leprous","actual_answer_explanation": "See Numbers 12:1-15."},{question_type: "TF",question: "In Numbers, God chose Joshua to be[BREAK]the next leader.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Joshua 27:12-23"},{question_type: "TF",question: "Moses received his name from birth.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Moses received his name after being[BREAK]discovered by Pharaoh's daughter.[BREAK][BREAK]See Exodus 2:1-10"},{question_type: "multiple",question: "which mountain did moses die on?",potential_answers: "mount sinai,mount hor,mount nebo,mount nemo",actual_answer: "mount nebo","actual_answer_explanation": "See Deuteronomy 34."},{question_type: "multiple",question: "how many times did the israelites[BREAK]walk around the walls of jericho on[BREAK]day 7?",potential_answers: "12,10,7,3",actual_answer: "7","actual_answer_explanation": "See Joshua 6:15"},{question_type: "multiple",question: "How many days did Moses spend on[BREAK]Mount Sinai when he went alone the[BREAK]first time?",potential_answers: "30,40,50,60",actual_answer: "40","actual_answer_explanation": "See Exodus 24:18.[BREAK]Note: Moses stays on Mount Sinai[BREAK]for forty days once more[BREAK]in Exodus 34."},{question_type: "multiple",question: "How many years did the israelites[BREAK]spend in the wilderness?",potential_answers: "20,40,60,80",actual_answer: "40","actual_answer_explanation": "See Numbers 14:20-25."},{question_type: "number",question: "Order these events correctly.",potential_answers: "",actual_answer: "moses dies on mount nebo,God gives the order to cross the Jordan[BREAK]River,Rahab saves two israelite spies,the israelites cross the Jordan,jericho is destroyed,israelites suffer defeat at Ai due to[BREAK]Achan's sin,Achan is stoned,Ai is defeated","actual_answer_sans_coord": "1. moses dies on mount nebo[BREAK][BREAK]2. God gives the order to cross the Jordan[BREAK] River[BREAK][BREAK]3. Rahab saves two israelite spies[BREAK][BREAK]4. the israelites cross the Jordan[BREAK][BREAK]5. jericho is destroyed[BREAK][BREAK]6. israelites suffer defeat at Ai due to[BREAK] Achan's sin[BREAK][BREAK]7. Achan is stoned[BREAK][BREAK]8. Ai is defeated"}],[{question_type: "multiple",question: "After crossing the Jordan River,[BREAK]what did the israelites do to[BREAK]commemorate the twelve tribes?",potential_answers: "made an altar,made a golden calf,wrote a novel,published the Torah",actual_answer: "made an altar","actual_answer_explanation": "See Joshua 4."},{question_type: "multiple",question: "[IGNORE_ANSWER_BREAK]what did Joshua say to the[BREAK]mysterious soldier with the sword[BREAK]when they first met?",potential_answers: "“on guard!”,“stand and fight!”,“are You for us or for our[BREAK] enemies?”,“Please don't hurt me!”",actual_answer: "“are You for us or for our[BREAK] enemies?”","actual_answer_explanation": "See Joshua 5:13-15."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]what happened to Rahab after the[BREAK]walls of Jericho collapsed?",potential_answers: "she was spared and incorporated[BREAK] into Israel,she was mercilessly murdered,she became a slave,she was exiled",actual_answer: "she was spared and incorporated[BREAK] into Israel","actual_answer_explanation": "See Joshua 6:22-25."},{question_type: "multiple",question: "what would happen if an israelite[BREAK]rebuilt jericho?",potential_answers: "they were blessed,they became oddballs,they became chief architect,they were cursed",actual_answer: "they were cursed","actual_answer_explanation": "See Joshua 6:26."},{question_type: "TF",question: "The animals were spared when[BREAK]destroying jericho.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "No animals were spared during the[BREAK]destruction of the city.[BREAK][BREAK]See Joshua 6:21."},{question_type: "multiple",question: "how many israelites died in the[BREAK]first battle of ai?",potential_answers: "3000,1000,100,36",actual_answer: "36","actual_answer_explanation": "See Joshua 7:2-5."},{question_type: "TF",question: "achan was burned after he was[BREAK]stoned.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "Achan and his family were burned[BREAK]after being stoned.[BREAK][BREAK]See Joshua 7:25-26."},{question_type: "match",question: "",potential_answers: "",actual_answer: "achan (220;135)(0)->took accursed[BREAK]things (410;365)(7),rahab (220;215)(1)->was a harlot (430;295)(6),gibeonites (220;295)(2)->lied for[BREAK]safety (475;125)(4),caleb (220;375)(3)->inherits hebron (380;215)(5)","actual_answer_sans_coord": "achan->took accursed things[BREAK][BREAK]rahab->was a harlot[BREAK][BREAK]gibeonites->lied for safety[BREAK][BREAK]caleb->inherits hebron"},{question_type: "multiple",question: "What was the former name of Hebron,[BREAK]the land Caleb inherited?",potential_answers: "Kirjath Bara,Kirjath Arba,Kirjath Etal,Kirjath Jearim",actual_answer: "Kirjath Arba","actual_answer_explanation": "Joshua 14:6-15"},{question_type: "multiple",question: "What gift would Caleb give to the[BREAK]man who defeated Kirjath Sepher?",potential_answers: "the medal of honor,Achsah his daughter as wife,30 shekels of silver,promotion to governor",actual_answer: "Achsah his daughter as wife","actual_answer_explanation": "See Joshua 15:16"},{question_type: "multiple",question: "What was the border of Edom at the [BREAK]wilderness of zin southward referred[BREAK]as in Joshua 15:1?",potential_answers: "southern boundary,extreme southern boundary,Salt Sea,Karkaa",actual_answer: "extreme southern boundary","actual_answer_explanation": "See Joshua 15:1"},{question_type: "multiple",question: "What city did Joshua inherit?",potential_answers: "jericho,ai,Timnath Serah,Me Jarkon",actual_answer: "Timnath Serah","actual_answer_explanation": "See Joshua 19:49-50."},{question_type: "multiple",question: "What do the cities of Kedesh,[BREAK]Naphtali, Shechem, and Kirjah Arba[BREAK]have in common?",potential_answers: "a. they are places of judgement,b. they are cities of refuge,c. they are houses of worship,d. none of the above",actual_answer: "b. they are cities of refuge","actual_answer_explanation": "See Joshua 20."},{question_type: "multiple",question: "How old was Joshua when he died?",potential_answers: "110,112,109,115",actual_answer: "110","actual_answer_explanation": "See Joshua 24:29-30."}],[{question_type: "multiple",question: "Which cities was Manasseh supposed[BREAK]to rid of inhabitants?",potential_answers: "a. beth shean,b. Taanach,c. dorabelon,d. a and b",actual_answer: "d. a and b","actual_answer_explanation": "See Judges 1:27."},{question_type: "TF",question: "Ephraim drove out the Canaanites[BREAK]who dwelt in Gezer.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Ephraim did not drive out the[BREAK]Canaanites inhabiting Gezer.[BREAK][BREAK]See Judges 1:29"},{question_type: "TF",question: "The boundary of the Amorites was[BREAK]from Sela and upward.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "\"The boundary of the Amorites was[BREAK]from the ascent of Akrabbim, from[BREAK]Sela, and upward.\"[BREAK][BREAK]Judges 1:36, NKJV"},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]The Angel of the LORD was sorrowed[BREAK]when the Israelites ___________.",potential_answers: "ate too much quail,did not drive out certain[BREAK] inhabitants,blasphemed His name,failed to trust Him",actual_answer: "did not drive out certain[BREAK] inhabitants","actual_answer_explanation": "See Judges 2:1-5."},{question_type: "multiple",question: "What was the name of Caleb's[BREAK]daughter?",potential_answers: "Achsah,Deborah,Leah,Mahlah",actual_answer: "Achsah","actual_answer_explanation": "See Judges 1:12 or Joshua 15:16."},{question_type: "multiple",question: "What was the name of Caleb's[BREAK]soon-to-be son-in-law?",potential_answers: "Nathaniel,Othaniel,Othniel,Jephunneh",actual_answer: "Othniel","actual_answer_explanation": "See Joshua 15:17 or Judges 1:13."},{question_type: "multiple",question: "What were the two gods that the[BREAK]Israelites served when they turned[BREAK]from God?",potential_answers: "ashtoreth and God,baal and God,baal and Sharon,baal and ashtoreth",actual_answer: "baal and ashtoreth","actual_answer_explanation": "See Judges 2:13."},{question_type: "multiple",question: "What was the city of Bethel[BREAK]originally called?",potential_answers: "Light,Sin,Luz,Zin",actual_answer: "Luz","actual_answer_explanation": "See Judges 1:22-23."},{question_type: "multiple",question: "Each time the Israelites turned[BREAK]back to God, what did He do?",potential_answers: "He destroyed that generation,He rejected them,He laughed at their ignorance,He sent judges",actual_answer: "He sent judges","actual_answer_explanation": "See Judges 2:16-19. (I doubt you are[BREAK]writing these down. - A.E.)"},{question_type: "number",question: "Put these judges in the right order.",potential_answers: "",actual_answer: "Othniel,Deborah,Gideon,Jair,Jephthah,Ibzan,Abdon,Samson","actual_answer_sans_coord": "1. Othniel[BREAK][BREAK]2. Deborah[BREAK][BREAK]3. Gideon[BREAK][BREAK]4. Jair[BREAK][BREAK]5. Jephthah[BREAK][BREAK]6. Ibzan[BREAK][BREAK]7. Abdon[BREAK][BREAK]8. Samson"},{question_type: "TF",question: "Ehud was left-handed.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "Ehud was left-handed.[BREAK][BREAK]See Judges 3:15."},{question_type: "multiple",question: "What king did Ehud stab with a[BREAK]dagger?",potential_answers: "eglon,rameses,othniel,barak",actual_answer: "eglon","actual_answer_explanation": "See Judges 3:12."},{question_type: "multiple",question: "Where would Deborah the prophetess[BREAK]sit when judging the children of[BREAK]israel?",potential_answers: "on the roof of the watchtower,under a palm tree,in her house,in her water chamber",actual_answer: "under a palm tree","actual_answer_explanation": "See Judges 4:4, 5."},{question_type: "number",question: "Put the events in the right order.",potential_answers: "",actual_answer: "Deborah tells Barak to defeat sisera's[BREAK]army,barak says he wanted deborah to accompany[BREAK]him,Deborah predicts that a woman will kill[BREAK]Sisera,Barak defeats the army of sisera,Sisera flees to Jael's tent,jael allows sisera to rest in her tent,jael kills sisera on her own with a tent[BREAK]peg,jael shows sisera's body to barak","actual_answer_sans_coord": "1. Deborah tells Barak to defeat sisera's[BREAK] army[BREAK][BREAK]2. barak says he wanted deborah to[BREAK] accompany him[BREAK][BREAK]3. Deborah predicts that a woman will kill[BREAK] Sisera[BREAK][BREAK]4. Barak defeats the army of sisera[BREAK][BREAK]5. Sisera flees to Jael's tent[BREAK][BREAK]6. jael allows sisera to rest in her tent[BREAK][BREAK]7. jael kills sisera on her own with a tent[BREAK] peg[BREAK][BREAK]8. jael shows sisera's body to barak[INCREASE_SQUARE_HEIGHT]"}],[{question_type: "multiple",question: "What was considered \"improper[BREAK]mourning\" in the Israelite camp?",potential_answers: "a. cursing the greek gods,b. cutting yourself,c. shaving the front of your head,d. b and c",actual_answer: "d. b and c","actual_answer_explanation": "See Deuteronomy 14:1-2."},{question_type: "multiple",question: "What was the punishment for[BREAK]relatives that encourage the people[BREAK]to serve foreign gods?",potential_answers: "they were crucified,they were drowned,they were imprisoned,they were stoned",actual_answer: "they were stoned","actual_answer_explanation": "See Deuteronomy 13:6-11."},{question_type: "multiple",question: "How much is a tithe?",potential_answers: "1/4 of what you've received,1/2 of what you've received,1/9 of what you've received,1/10 of what you've received",actual_answer: "1/10 of what you've received"},{question_type: "TF",question: "Animals with abnormalities can be [BREAK]sacrificed to God.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Animals with abnormalities cannot[BREAK]be sacrificed to God. Instead, the[BREAK]worshiper must eat the animal.[BREAK][BREAK]See Deuteronomy 15:19-23."},{question_type: "TF",question: "God allows consumption of all[BREAK]animals that chew the cud.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "God only allows consumption of[BREAK]animals that chew the cud and have[BREAK]cloven feet.[BREAK][BREAK]See Leviticus 11."},{question_type: "TF",question: "God commands generosity to the poor.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "God commands generosity to the poor.[BREAK][BREAK]See Deuteronomy 15:7-11."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]What did Israelite owners do to[BREAK]their servants when they refused to[BREAK]leave after seven years?",potential_answers: "a. makes them their servant forever,b. puncture a hole in the servant's[BREAK] ear,c. releases them anyway,d. a and b",actual_answer: "d. a and b","actual_answer_explanation": "See Deuteronomy 15:12-18."},{question_type: "multiple",question: "How many days was the feast of [BREAK]tabernacles supposed to be observed?",potential_answers: "3 days,10 days,40 days,7 days",actual_answer: "7 days","actual_answer_explanation": "See Deuteronomy 16:13."},{question_type: "multiple",question: "How was korah related to moses?",potential_answers: "first cousin,first cousin once removed,second cousin,uncle",actual_answer: "first cousin","actual_answer_explanation": "See Numbers 16:1 and Exodus 6:14-20 to put two and two[BREAK]together."},{question_type: "match",question: "",potential_answers: "",actual_answer: "7 days (220;135)(0)->waters staying[BREAK]bloody (405;205)(5),3 days (220;215)(1)->egypt staying[BREAK]dark (405;125)(4),7 years (220;295)(2)->duration of[BREAK]servitude (405;290)(6),40 years (220;375)(3)->journey to[BREAK]canaan (405;365)(7)","actual_answer_sans_coord": "7 days->waters staying bloody[BREAK][BREAK]3 days->egypt staying dark[BREAK][BREAK]7 years->duration of servitude[BREAK][BREAK]40 years->journey to canaan"},{question_type: "TF",question: "King Eglon was very fat.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "King Eglon was so fat, his belly[BREAK]covered Ehud's dagger when it was[BREAK]thrust in.[BREAK][BREAK]See Judges 3:12:30."},{question_type: "TF",question: "Shamgar killed 600 Philistine men[BREAK]with a donkey's jawbone.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Shamgar killed 600 Philistine men[BREAK]with an ox goad.[BREAK][BREAK]See Judges 3:31."},{question_type: "multiple",question: "Where was Gideon threshing wheat?",potential_answers: "in a watch tower,in a swimming pool,in a winepress,in the water closet",actual_answer: "in a winepress","actual_answer_explanation": "See Judges 6:11."},{question_type: "TF",question: "After Ehud's death, the Israelites[BREAK]kept God's commandments.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "The Israelites returned to their[BREAK]wicked ways, thus opening the door[BREAK]to trouble with the Caananites.[BREAK][BREAK]See Judges 4:1-2."}],[{question_type: "multiple",question: "Which duo held moses's arms during[BREAK]the battle with the amalekites?",potential_answers: "aaron and joshua,aaron and hur,hur and joshua,hur and milcah",actual_answer: "aaron and hur","actual_answer_explanation": "See Exodus 17:8-16."},{question_type: "multiple",question: "[REMOVE_TRIPLE_SPACE]What did Gideon bring to the angel[BREAK]of the Lord?",potential_answers: "a young goat and unleavened[BREAK] cakes,a pinball machine,a firstborn calf,two pigeons",actual_answer: "a young goat and unleavened[BREAK] cakes","actual_answer_sans_coord": "[REMOVE_BREAK]"},{question_type: "multiple",question: "What did Gideon do to the altar of[BREAK]Baal?",potential_answers: "he stole it,he destroyed it,he rebuilt it,he smeared it with mud",actual_answer: "he destroyed it","actual_answer_explanation": "See Judges 6:28-32."},{question_type: "multiple",question: "What name is given Gideon after he[BREAK]destroys the altar of baal?",potential_answers: "Jerubbaal,Gilead,Samaria,Baalerub",actual_answer: "Jerubbaal","actual_answer_explanation": "See Judges 6:32."},{question_type: "multiple",question: "What was the first sign that Gideon[BREAK]asked God for?",potential_answers: "dew on fleece but dry ground,dew on ground but dry fleece,dew on ground and fleece,no dew on ground nor fleece",actual_answer: "dew on fleece but dry ground","actual_answer_explanation": "See Judges 6:36-40."},{question_type: "multiple",question: "[IGNORE_ANSWER_BREAK]What did God say when Gideon[BREAK]gathered his army?",potential_answers: "“that's the right amount”,“Ready to start drilling?”,“The people with you are too many[BREAK] ...”,“Arise! Go down against the[BREAK] camp!”",actual_answer: "“The people with you are too many[BREAK] ...”","actual_answer_explanation": "See Judges 7:2."},{question_type: "multiple",question: "How many soldiers initially returned [BREAK]home?",potential_answers: "10000,300,22000,44000",actual_answer: "22000","actual_answer_explanation": "See Judges 7:3."},{question_type: "multiple",question: "What was the name of Gideon's[BREAK]servant?",potential_answers: "Pureé,Purah,Torah,Tory",actual_answer: "Purah","actual_answer_explanation": "See Judges 7:10."},{question_type: "multiple",question: "[REMOVE_QUADRUPLE_SPACE]What was the battle cry of Gideon's[BREAK]300? (Note: Based on KJV/NKJV.)",potential_answers: "“The sword of the Lord[COMMA] and of[BREAK] Gideon!”,“Death to the Midianites!”,“God curse these people!”,“For the Torah and the[BREAK] Decalogue!”",actual_answer: "“The sword of the Lord, and of[BREAK] Gideon!”","actual_answer_explanation": "See Judges 7:20."},{question_type: "multiple",question: "Which two Midianite princes were[BREAK]killed by the Israelites?",potential_answers: "oreb and zeeb,oreb and seeb,orab and midi,orab and jason",actual_answer: "oreb and zeeb","actual_answer_explanation": "See Judges 7:25."},{question_type: "TF",question: "Initially, Gideon gathered 32000[BREAK]soldiers to fight.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "Read Judges 7:3, and you can connect[BREAK]the dots."},{question_type: "TF",question: "Gideon kept the soldiers who did[BREAK]not lap like a dog.",potential_answers: "",actual_answer: "0","actual_answer_explanation": "Gideon kept the soldiers that did[BREAK]lap like a dog.[BREAK][BREAK]See Judges 7:4-7."},{question_type: "TF",question: "Gideon killed two kings of Midian:[BREAK]Zebah and Zalmunna.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Judges 8:1-21."},{question_type: "TF",question: "Gideon practiced polygamy.",potential_answers: "",actual_answer: "1","actual_answer_explanation": "See Judges 8:30."}]];
    allQuestionsLoaded = true;
}

function updateQuestionsInBackground() {
    console.log('questions stay the same')
}

async function bringLevelQuestions() {
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