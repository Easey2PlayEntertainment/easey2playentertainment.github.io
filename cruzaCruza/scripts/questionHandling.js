async function loadQuestions() { // loads all questions; prevents delay
	allQuestions = JSON.parse(`
	[null,
	[
  {
    "question_type": "multiple",
    "question": "¿Qué hizo la madre de Moisés para [BREAK]salvarlo del decreto del faraón?", 
    "potential_answers": "lo escondió en una canasta entre[BREAK]los juncos del río Nilo,lo envió a vivir con familiares[BREAK]en Madián,mudó a su familia lejos de Egipto,lo dejó al cuidado de una familia[BREAK]egipcia adinerada",
    "actual_answer": "lo escondió en una canasta entre[BREAK]los juncos del río Nilo"
  },
  {
    "question_type": "multiple",
    "question": "¿Quién encontró a Moisés en el río[BREAK]Nilo?",
    "potential_answers": "un pescador,la hija del faraón,un grupo de pastores,un soldado egipcio",
    "actual_answer": "la hija del faraón"
  },
  {
    "question_type": "multiple",
    "question": "¿Qué señal mostró Dios a Moisés en[BREAK]la zarza ardiente?",
    "potential_answers": "a. convirtió la vara de Moisés en[BREAK]una serpiente,b. convirtió la mano de Moisés en[BREAK]lepra,c. a y b,d. ninguna de las anteriores",
    "actual_answer": "c. a y b"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál era el nombre del hermano de [BREAK]Moisés, quien también desempeñó un [BREAK]papel importante en el Éxodo?",
    "potential_answers": "Aarón,Josué,Caleb,Jetro",
    "actual_answer": "Aarón"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuántas plagas envió Dios sobre[BREAK]Egipto?",
    "potential_answers": "7,10,12,15",
    "actual_answer": "10"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál fue la primera plaga en[BREAK]Egipto?",
    "potential_answers": "serpientes en la corte del faraón,rana por toda Egipto,las aguas convirtiéndose en[BREAK]sangre,oscuridad sobre la tierra",
    "actual_answer": "las aguas convirtiéndose en[BREAK]sangre"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál fue la tercera plaga en[BREAK]Egipto?",
    "potential_answers": "moscas,rana,piojos,granizo",
    "actual_answer": "piojos"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál fue la última plaga que [BREAK]convenció al faraón de dejar ir a[BREAK]los israelitas?",
    "potential_answers": "langostas,oscuridad,muerte de los primogénitos,granizo",
    "actual_answer": "muerte de los primogénitos"
  },
  {
    "question_type": "multiple",
    "question": "¿Qué pusieron los israelitas en los[BREAK]postes de sus puertas para [BREAK]protegerse de la última plaga?",
    "potential_answers": "una cruz,una estrella,sangre de cordero,ajo",
    "actual_answer": "sangre de cordero"
  },
  {
    "question_type": "multiple",
    "question": "Qué mar partió Dios para ayudar a [BREAK]los israelitas a escapar de los[BREAK]egipcios?",
    "potential_answers": "el mar Muerto,el mar Rojo,el mar Mediterráneo,el mar de Galilea",
    "actual_answer": "el mar Rojo"
  },
  {
    "question_type": "multiple",
    "question": "¿En qué montaña recibió Moisés los[BREAK]Diez Mandamientos?",
    "potential_answers": "monte Ararat,monte Sinaí,monte Sión,monte Moriah",
    "actual_answer": "monte Sinaí"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál era el nombre de la madre de[BREAK]Moisés?",
    "potential_answers": "Miriam,Séfora,Jocabed,Débora",
    "actual_answer": "Jocabed"
  },
  {
    "question_type": "multiple",
    "question": "¿Cuál era el nombre del suegro de[BREAK]Moisés?",
    "potential_answers": "a. Madián,b. Jetro,c. Reuel,d. b y c",
    "actual_answer": "d. b y c"
  },
  {
    "question_type": "multiple",
    "question": "¿Quién fue la esposa de Moisés?",
    "potential_answers": "Débora,Séfora,Jocabed,Hadassah",
    "actual_answer": "Séfora"
  }
],
[
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "hermana de Moisés (220;135)(0)->Miriam (500;135)(4),nombre de Dios (220;215)(1)->YO SOY (530;215)(5),primera plaga (220;295)(2)->aguas[BREAK]se convierten en[BREAK]sangre (496.5;275)(6),cuarta plaga (220;375)(3)->moscas (510;375)(7)", "actual_answer_sans_coord": "hermana de Moisés->Miriam[BREAK][BREAK]nombre de Dios->YO SOY[BREAK][BREAK]primera plaga->aguas se convierten en sangre[BREAK][BREAK]cuarta plaga->moscas"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "segunda plaga (220;135)(0)->ranas (505;215)(5),quinta plaga (220;215)(1)->ganado[BREAK]enfermo (452;365)(7),octava plaga (220;295)(2)->langostas (480;300)(6),séptima plaga (220;375)(3)->granizo (520;135)(4)", "actual_answer_sans_coord": "segunda plaga->ranas[BREAK][BREAK]quinta plaga->ganado enfermo[BREAK][BREAK]octava plaga->langostas[BREAK][BREAK]séptima plaga->granizo"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "hermano de Moisés (220;135)(0)->Aarón (510;300)(6),padre de Moisés (220;215)(1)->Amram (510;375)(7),madre de Moisés (220;295)(2)->Jocabed (468;135)(4),esposa de Moisés (220;375)(3)->Séfora (468;215)(5)", "actual_answer_sans_coord": "hermano de Moisés->Aarón[BREAK][BREAK]padre de Moisés->Amram[BREAK][BREAK]madre de Moisés->Jocabed[BREAK][BREAK]esposa de Moisés->Séfora"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "tercera plaga (220;135)(0)->piojos (520;135)(4),sexta plaga (220;215)(1)->llagas (510;375)(7),novena plaga (220;295)(2)->oscuridad (470;300)(6),décima plaga (220;375)(3)->muerte de[BREAK]primogénito (460;205)(5)", "actual_answer_sans_coord": "tercera plaga->piojos[BREAK][BREAK]sexta plaga->llagas[BREAK][BREAK]novena plaga->oscuridad[BREAK][BREAK]décima plaga->muerte de primogénito"},
{"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "Sifra (220;135)(0)->partera hebrea (390;375)(7),Gersón (220;215)(1)->hijo de Moisés (454;300)(6),Madián (220;295)(2)->refugio de Moisés (414;215)(5),Horeb (220;375)(3)->monte de Dios (424;135)(4)", "actual_answer_sans_coord": "Sifra->partera hebrea[BREAK][BREAK]Gersón->hijo de Moisés[BREAK][BREAK]Madián->refugio de Moisés[BREAK][BREAK]Horeb->monte de Dios"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "burro (220;135)(0)->animal de[BREAK]transporte de[BREAK]Balaam (410;275)(6),Balac (220;215)(1)->rey de Moab (410;215)(5),Eleazar (220;295)(2)->hijo de Aarón (410;375)(7),Putiel (220;375)(3)->suegro de[BREAK]Eleazar (410;125)(4)", "actual_answer_sans_coord": "burro->animal de transporte de Balaam[BREAK][BREAK]Balac->rey de Moab[BREAK][BREAK]Eleazar->hijo de Aarón[BREAK][BREAK]Putiel->suegro de Eleazar"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "Josué (220;135)(0)->hijo de Nun (445;300)(6),Caleb (220;215)(1)->hijo de Jefone (363;215)(5),Jamin (220;295)(2)->hijo de Simeón (405;375)(7),Gersón (220;375)(3)->hijo de Leví (435;135)(4)", "actual_answer_sans_coord": "Josué->hijo de Nun[BREAK][BREAK]Caleb->hijo de Jefone[BREAK][BREAK]Jamin->hijo de Simeón[BREAK][BREAK]Gersón->hijo de Leví"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "monte Horeb (220;135)(0)->monte Sinaí (430;135)(4),Jetro (220;215)(1)->Reuel (430;300)(6),Aarón (220;295)(2)->primer sumo[BREAK]sacerdote (430;365)(7),multitud[BREAK]mixta (220;365)(3)->vino con[BREAK]los israelitas (430;205)(5)", "actual_answer_sans_coord": "monte Horeb->monte Sinaí[BREAK][BREAK]Jetro->Reuel[BREAK][BREAK]Aarón->primer sumo sacerdote[BREAK][BREAK]multitud mixta->vino con los israelitas"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "desierto de[BREAK]Shur (220;124)(0)->aguas hechas[BREAK]dulces (442;284)(6),desierto de[BREAK]Sin (220;204)(1)->caída del[BREAK]maná (440;364)(7),Refidim (220;295)(2)->agua de[BREAK]la roca (442;204)(5),desierto de[BREAK]Sinaí (220;364)(3)->Dios se[BREAK]revela (442;124)(4)", "actual_answer_sans_coord": "desierto de Shur->aguas hechas dulces[BREAK][BREAK]desierto de Sin->caída del maná[BREAK][BREAK]Refidim->agua de la roca[BREAK][BREAK]desierto de Sinaí->Dios se revela"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "zarza ardiente (220;135)(0)->presencia de[BREAK]Dios (465;124)(4),becerro de oro (220;215)(1)->ídolo hecho[BREAK]por israelitas (390;284)(6),Nadab (220;295)(2)->hijo de Aarón (420;375)(7),Basán (220;375)(3)->tierra[BREAK]conquistada (452;215)(5)", "actual_answer_sans_coord": "zarza ardiente->presencia de Dios[BREAK][BREAK]becerro de oro->ídolo hecho por israelitas[BREAK][BREAK]Nadab->hijo de Aarón[BREAK][BREAK]Basán->tierra conquistada"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "tabernáculo (220;135)(0)->santuario[BREAK]portátil (413;275)(6),Bezazel (220;215)(1)->artesano jefe (413;125)(4),Miriam (220;295)(2)->afectada por[BREAK]lepra (413;195)(5),Monte Nebo (220;375)(3)->lugar de muerte[BREAK]de Moisés (413;365)(7)", "actual_answer_sans_coord": "tabernáculo->santuario portátil[BREAK][BREAK]Bezazel->artesano jefe[BREAK][BREAK]Miriam->afectada por lepra[BREAK][BREAK]Monte Nebo->lugar de muerte de Moisés"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "vara de Aarón (220;135)(0)->brotó con[BREAK]almendras (390;205)(5),Eleazar (220;215)(1)->segundo hijo de[BREAK]Moisés (390;280)(6),Cades (220;295)(2)->lugar de entierro[BREAK]de Miriam (390;125)(4),Hogla (220;375)(3)->hija de[BREAK]Zelofehad (390;365)(7)", "actual_answer_sans_coord": "vara de Aarón->brotó con almendras[BREAK][BREAK]Eleazar->segundo hijo de Moisés[BREAK][BREAK]Cades->lugar de entierro de Miriam[BREAK][BREAK]Hogla->hija de Zelofehad"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "Meribá (220;135)(0)->los israelitas[BREAK]discutieron[BREAK]allí (420;280)(6),Noé (220;215)(1)->hija de[BREAK]Zelofehad (420;205)(5),Urim (220;295)(2)->gema sacerdotal (420;135)(4),Oholiab (220;375)(3)->asistente de[BREAK]Bezazel (420;365)(7)", "actual_answer_sans_coord": "Meribá->los israelitas discutieron allí[BREAK][BREAK]Noé->hija de Zelofehad[BREAK][BREAK]Urim->gema sacerdotal[BREAK][BREAK]Oholiab->asistente de Bezazel"},
  {"question_type": "match", "question": "", "potential_answers": "", "actual_answer": "Omer (220;135)(0)->medida de grano (367;215)(5),Sihón (220;215)(1)->rey amorreo (367;375)(7),Og (220;295)(2)->rey de Basán (367;135)(4),Hur (220;375)(3)->soporte del[BREAK]brazo de Moisés (367;290)(6)", "actual_answer_sans_coord": "Omer->medida de grano[BREAK][BREAK]Sihón->rey amorreo[BREAK][BREAK]Og->rey de Basán[BREAK][BREAK]Hur->soporte del brazo de Moisés"}
]
,
[
  {
    "question_type": "number",
    "question": "Ordena estos mandamientos correctamente.",
    "potential_answers": "",
    "actual_answer": "No te inclinarás ante ídolos,No tomarás el nombre de Dios en vano,Recuerda el día de reposo para santificarlo,No matarás,No cometerás adulterio,No robarás,No mentirás,No codiciarás",
    "actual_answer_sans_coord": "1. No te inclinarás ante ídolos[BREAK][BREAK]2. No tomarás el nombre de Dios en vano[BREAK][BREAK]3. Recuerda el día de reposo para santificarlo[BREAK][BREAK]4. No matarás[BREAK][BREAK]5. No cometerás adulterio[BREAK][BREAK]6. No robarás[BREAK][BREAK]7. No mentirás[BREAK][BREAK]8. No codiciarás"
  },
  {
    "question_type": "number",
    "question": "Ordena estas plagas correctamente.",
    "potential_answers": "",
    "actual_answer": "El Nilo se convierte en sangre,Ranas,Piojos,Moscas,Mueren los ganados egipcios,Úlceras,Granizo,Langostas",
    "actual_answer_sans_coord": "1. El Nilo se convierte en sangre[BREAK][BREAK]2. Ranas[BREAK][BREAK]3. Piojos[BREAK][BREAK]4. Moscas[BREAK][BREAK]5. Mueren los ganados egipcios[BREAK][BREAK]6. Úlceras[BREAK][BREAK]7. Granizo[BREAK][BREAK]8. Langostas"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Las aguas de Mará se vuelven dulces,Codornices llegaron por primera vez al anochecer,Maná cayó del cielo,Jetro aconseja a Moisés sobre liderazgo,Los Diez Mandamientos fueron proclamados,Los Diez Mandamientos fueron entregados,Aarón levantó un becerro de oro,Aarón y sus hijos fueron consagrados",
    "actual_answer_sans_coord": "1. Las aguas de Mará se vuelven dulces[BREAK][BREAK]2. Codornices llegaron por primera vez al anochecer[BREAK][BREAK]3. Maná cayó del cielo[BREAK][BREAK]4. Jetro aconseja a Moisés sobre liderazgo[BREAK][BREAK]5. Los Diez Mandamientos fueron proclamados[BREAK][BREAK]6. Los Diez Mandamientos fueron entregados[BREAK][BREAK]7. Aarón levantó un becerro de oro[BREAK][BREAK]8. Aarón y sus hijos fueron consagrados"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "El decreto de ejecutar a los bebés varones fue proclamado,Moisés nació,Moisés fue encontrado por la hija del faraón,Moisés mata a un egipcio,Moisés defiende a las hijas de Jetro,Moisés se casa con Séfora,Moisés ve la zarza ardiente,El bastón de Moisés se convierte en una serpiente",
    "actual_answer_sans_coord": "1. El decreto de ejecutar a los bebés varones fue proclamado[BREAK][BREAK]2. Moisés nació[BREAK][BREAK]3. Moisés fue encontrado por la hija del faraón[BREAK][BREAK]4. Moisés mata a un egipcio[BREAK][BREAK]5. Moisés defiende a las hijas de Jetro[BREAK][BREAK]6. Moisés se casa con Séfora[BREAK][BREAK]7. Moisés ve la zarza ardiente[BREAK][BREAK]8. El bastón de Moisés se convierte en una serpiente"
  },
  {
    "question_type": "number",
    "question": "Ordena estas instrucciones de la Pascua correctamente.",
    "potential_answers": "",
    "actual_answer": "Tomar un cordero sin defecto,matarlo al anochecer,poner la sangre del cordero en el dintel,asar el cordero,comerlo junto con pan sin levadura y hierbas amargas,quemar los restos del cordero,comer con cinturón en la cintura y sandalias en los pies,no salir de casa hasta la mañana",
    "actual_answer_sans_coord": "1. Tomar un cordero sin defecto[BREAK][BREAK]2. Matarlo al anochecer[BREAK][BREAK]3. Poner la sangre del cordero en el dintel[BREAK][BREAK]4. Asar el cordero[BREAK][BREAK]5. Comerlo junto con pan sin levadura y hierbas amargas[BREAK][BREAK]6. Quemar los restos del cordero[BREAK][BREAK]7. Comer con cinturón en la cintura y sandalias en los pies[BREAK][BREAK]8. No salir de casa hasta la mañana"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Moisés muele el becerro de oro hasta hacerlo polvo,los adoradores rebeldes son asesinados,Moisés habla con Dios en el tabernáculo de reunión,los Diez Mandamientos son escritos nuevamente en nuevas tablas de piedra,Bezaleel es llamado como artesano principal,los hijos de Israel son instruidos para dejar de traer ofrendas,Bezaleel construye el Arca del Pacto,la fuente de bronce es construida",
    "actual_answer_sans_coord": "1. Moisés muele el becerro de oro hasta hacerlo polvo[BREAK][BREAK]2. Los adoradores rebeldes son asesinados[BREAK][BREAK]3. Moisés habla con Dios en el tabernáculo de reunión[BREAK][BREAK]4. Los Diez Mandamientos son escritos nuevamente en nuevas tablas de piedra[BREAK][BREAK]5. Bezaleel es llamado como artesano principal[BREAK][BREAK]6. Los hijos de Israel son instruidos para dejar de traer ofrendas[BREAK][BREAK]7. Bezaleel construye el Arca del Pacto[BREAK][BREAK]8. La fuente de bronce es construida"
  },
{
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Los espías fueron enviados a la tierra de Canaán,Se dio un informe negativo al regresar,Josué y Caleb intentaron animar al pueblo,Los israelitas fueron desterrados al desierto por 40 años,Un hombre fue condenado a muerte por trabajar en el día de reposo,Coré y sus hombres se rebelaron contra Moisés y Aarón,Coré y sus hombres fueron tragados por la tierra,4700 personas murieron debido a una plaga",
    "actual_answer_sans_coord": "1. Los espías fueron enviados a la tierra de Canaán[BREAK][BREAK]2. Se dio un informe negativo al regresar[BREAK][BREAK]3. Josué y Caleb intentaron animar al pueblo[BREAK][BREAK]4. Los israelitas fueron desterrados al desierto por 40 años[BREAK][BREAK]5. Un hombre fue condenado a muerte por trabajar en el día de reposo[BREAK][BREAK]6. Coré y sus hombres se rebelaron contra Moisés y Aarón[BREAK][BREAK]7. Coré y sus hombres fueron tragados por la tierra[BREAK][BREAK]8. 4700 personas murieron debido a una plaga"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Séfora salva la vida de Moisés al circuncidar a su hijo,Moisés se reúne con Aarón,Moisés regresa a Egipto,Moisés y Aarón confrontan al faraón,El faraón aumenta la carga de trabajo de los israelitas,Dios promete la liberación,Dios envía las diez plagas,El faraón deja ir a los israelitas",
    "actual_answer_sans_coord": "1. Séfora salva la vida de Moisés al circuncidar a su hijo[BREAK][BREAK]2. Moisés se reúne con Aarón[BREAK][BREAK]3. Moisés regresa a Egipto[BREAK][BREAK]4. Moisés y Aarón confrontan al faraón[BREAK][BREAK]5. El faraón aumenta la carga de trabajo de los israelitas[BREAK][BREAK]6. Dios promete la liberación[BREAK][BREAK]7. Dios envía las diez plagas[BREAK][BREAK]8. El faraón deja ir a los israelitas"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "El arca del testimonio es construida,La mesa de los panes es construida,El candelabro de oro es construido,El altar de incienso es construido,El aceite de la unción y el incienso son preparados por el perfumista,El altar del holocausto es construido,Las vestiduras sacerdotales son tejidas,El tabernáculo es erigido",
    "actual_answer_sans_coord": "1. El arca del testimonio es construida[BREAK][BREAK]2. La mesa de los panes es construida[BREAK][BREAK]3. El candelabro de oro es construido[BREAK][BREAK]4. El altar de incienso es construido[BREAK][BREAK]5. El aceite de la unción y el incienso son preparados por el perfumista[BREAK][BREAK]6. El altar del holocausto es construido[BREAK][BREAK]7. Las vestiduras sacerdotales son tejidas[BREAK][BREAK]8. El tabernáculo es erigido"
  },
{
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "La multitud mixta se queja del maná,Dios dice que enviará codornices durante un mes entero,Setenta ancianos reciben el Espíritu Santo,Eldad y Medad comienzan a profetizar,Dios envía codornices por segunda vez,Las personas que codiciaron las codornices mueren por comer en exceso,Aarón y Miriam hablan contra Moisés,Dios castiga a Miriam con lepra",
    "actual_answer_sans_coord": "1. La multitud mixta se queja del maná[BREAK][BREAK]2. Dios dice que enviará codornices durante un mes entero[BREAK][BREAK]3. Setenta ancianos reciben el Espíritu Santo[BREAK][BREAK]4. Eldad y Medad comienzan a profetizar[BREAK][BREAK]5. Dios envía codornices por segunda vez[BREAK][BREAK]6. Las personas que codiciaron las codornices mueren por comer en exceso[BREAK][BREAK]7. Aarón y Miriam hablan contra Moisés[BREAK][BREAK]8. Dios castiga a Miriam con lepra"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Los israelitas derrotan a los cananeos en Horma,Los israelitas se quejan contra Dios nuevamente,Dios provoca una plaga de serpientes dentro del campamento,Moisés construye una serpiente de bronce,Israel derrota al rey Sehón y su ejército,Israel derrota al rey Og y su ejército,Moisés envía espías a Jazer,Israel toma las aldeas de Jazer",
    "actual_answer_sans_coord": "1. Los israelitas derrotan a los cananeos en Horma[BREAK][BREAK]2. Los israelitas se quejan contra Dios nuevamente[BREAK][BREAK]3. Dios provoca una plaga de serpientes dentro del campamento[BREAK][BREAK]4. Moisés construye una serpiente de bronce[BREAK][BREAK]5. Israel derrota al rey Sehón y su ejército[BREAK][BREAK]6. Israel derrota al rey Og y su ejército[BREAK][BREAK]7. Moisés envía espías a Jazer[BREAK][BREAK]8. Israel toma las aldeas de Jazer"
  },
  {
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Balac envía a Balaam para maldecir a los hijos de Israel,El ángel del Señor obstruye el camino por el que va Balaam,Balaam obedece la orden del ángel,Balaam fracasa al intentar maldecir a Israel frente a Balac,Balaam da una profecía sobre el futuro de Moab,Israel cae en la idolatría,Un hombre y una mujer madianita son asesinados por su pecado,Dios ordena a Moisés que realice un segundo censo del pueblo",
    "actual_answer_sans_coord": "1. Balac envía a Balaam para maldecir a los hijos de Israel[BREAK][BREAK]2. El ángel del Señor obstruye el camino por el que va Balaam[BREAK][BREAK]3. Balaam obedece la orden del ángel[BREAK][BREAK]4. Balaam fracasa al intentar maldecir a Israel frente a Balac[BREAK][BREAK]5. Balaam da una profecía sobre el futuro de Moab[BREAK][BREAK]6. Israel cae en la idolatría[BREAK][BREAK]7. Un hombre y una mujer madianita son asesinados por su pecado[BREAK][BREAK]8. Dios ordena a Moisés que realice un segundo censo del pueblo"
  },
{
    "question_type": "number",
    "question": "Ordena estos eventos correctamente.",
    "potential_answers": "",
    "actual_answer": "Dios le dice a Moisés dónde morirá,Moisés inaugura a Josué como el próximo líder de Israel,Los israelitas derrotan a los madianitas,Moisés da instrucciones sobre los cautivos,Dios le dice a Moisés que divida el botín,Se eligen las tribus que se asentarán al este del Jordán,Dios instruye a Israel sobre la conquista de Canaán,Dios elige líderes para dividir la tierra",
    "actual_answer_sans_coord": "1. Dios le dice a Moisés dónde morirá[BREAK][BREAK]2. Moisés inaugura a Josué como el próximo líder de Israel[BREAK][BREAK]3. Los israelitas derrotan a los madianitas[BREAK][BREAK]4. Moisés da instrucciones sobre los cautivos[BREAK][BREAK]5. Dios le dice a Moisés que divida el botín[BREAK][BREAK]6. Se eligen las tribus que se asentarán al este del Jordán[BREAK][BREAK]7. Dios instruye a Israel sobre la conquista de Canaán[BREAK][BREAK]8. Dios elige líderes para dividir la tierra"
  },
  {
    "question_type": "number",
    "question": "Coloca estos extractos del cántico de Moisés en el orden correcto (Éxodo 15).",
    "potential_answers": "",
    "actual_answer": "Cantaré al Señor,El Señor es un guerrero,Enviaste tu ira,La tierra los tragó,Con tu misericordia guiaste,La gente escuchará y tendrá miedo,Temor y pavor caerán sobre ellos,Quedarán inmóviles como piedra",
    "actual_answer_sans_coord": "1. Cantaré al Señor[BREAK][BREAK]2. El Señor es un guerrero[BREAK][BREAK]3. Enviaste tu ira[BREAK][BREAK]4. La tierra los tragó[BREAK][BREAK]5. Con tu misericordia guiaste[BREAK][BREAK]6. La gente escuchará y tendrá miedo[BREAK][BREAK]7. Temor y pavor caerán sobre ellos[BREAK][BREAK]8. Quedarán inmóviles como piedra"
  }
],
[
  {
    "question_type": "TF",
    "question": "Moisés construyó un becerro de oro para que los[BREAK]israelitas lo adoraran.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Aarón fue quien construyó un[BREAK]becerro de oro para que los israelitas lo[BREAK]adoraran."
  },
  {
    "question_type": "TF",
    "question": "Los israelitas cantaron alabanzas a Dios[BREAK]después de cruzar el Mar Rojo y ser[BREAK]salvados de los egipcios.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Los israelitas sí cantaron alabanzas[BREAK]después de cruzar el Mar Rojo.[BREAK][BREAK]Ver Éxodo 15."
  },
  {
    "question_type": "TF",
    "question": "Moisés subió al Monte Sinaí para[BREAK]recibir los diez mandamientos tres[BREAK]veces.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Moisés solo subió para recibir los[BREAK]diez mandamientos dos veces.[BREAK][BREAK]Ver Éxodo 24 y 34."
  },
  {
    "question_type": "TF",
    "question": "Moisés aceptó de inmediato la tarea que[BREAK]Dios le encomendó.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Antes de que Moisés aceptara la tarea que[BREAK]le fue encomendada, puso excusas."
  },
  {
    "question_type": "TF",
    "question": "Dios hizo brotar agua de una roca[BREAK]en Horeb.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Moisés golpeó la roca en Horeb, pero[BREAK]Dios hizo que el agua fluyera.[BREAK][BREAK]Ver Éxodo 17:1-7."
  },
  {
    "question_type": "TF",
    "question": "Cuando Moisés descansó sus brazos[BREAK]durante la batalla contra los amalecitas,[BREAK]el ejército israelita siguió ganando.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Cuando Moisés descansó sus brazos[BREAK]durante la batalla contra los amalecitas,[BREAK]el ejército israelita comenzó a perder."
  },
  {
    "question_type": "TF",
    "question": "Los israelitas vagaron por el[BREAK]desierto durante 40 años antes de[BREAK]entrar a la tierra prometida.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Ver Números 14:34."
  },
  {
    "question_type": "TF",
    "question": "Aarón fue el primer sumo sacerdote[BREAK]de Israel.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Ver Éxodo 28:1-43."
  },
  {
    "question_type": "TF",
    "question": "Los israelitas cruzaron el río[BREAK]Jordán en tierra seca para entrar[BREAK]a la tierra prometida.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Esto ocurrió bajo el liderazgo[BREAK]de Josué.[BREAK][BREAK]Ver Josué 3."
  },
  {
    "question_type": "TF",
    "question": "Los muros de Jericó cayeron después[BREAK]de que los israelitas marcharan[BREAK]alrededor de ellos una vez.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Marcharon alrededor de la ciudad[BREAK]durante siete días, y en el séptimo[BREAK]día, marcharon alrededor siete veces[BREAK]antes de que los muros cayeran."
  },
  {
    "question_type": "TF",
    "question": "Josué fue uno de los doce espías[BREAK]enviados para explorar la tierra[BREAK]de Canaán.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Ver Números 13:1-16."
  },
  {
    "question_type": "TF",
    "question": "El maná que Dios proporcionó a[BREAK]los israelitas dejó de aparecer[BREAK]una vez que entraron a la tierra[BREAK]prometida.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Ver Josué 5:12."
  },
{
    "question_type": "TF",
    "question": "Moisés llevó a los israelitas a la[BREAK]tierra prometida.",
    "potential_answers": "",
    "actual_answer": "0",
    "actual_answer_explanation": "Josué llevó a los israelitas a la[BREAK]tierra prometida después de la[BREAK]muerte de Moisés."
  },
  {
    "question_type": "TF",
    "question": "Los israelitas construyeron un[BREAK]tabernáculo como la morada portátil[BREAK]de Dios.",
    "potential_answers": "",
    "actual_answer": "1",
    "actual_answer_explanation": "Las referencias iniciales están en[BREAK]Éxodo."
  }
],
[
  {"question_type":"multiple","question":"¿Cuál era el nombre del padre de Moisés?","potential_answers":"joseph,enoch,reuel,amram","actual_answer":"amram"},
  {"question_type":"multiple","question":"¿Qué tribus de Israel pidieron[BREAK]heredar la tierra de Jazer y la[BREAK]tierra de Galaad?","potential_answers":"gad y rubén,gad y judá,judá y rubén,judá y leví","actual_answer":"gad y rubén"},
  {"question_type":"TF","question":"Gershom y Abihú llevaron fuego[BREAK]extraño al Tabernáculo.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Nadab y Abihú fueron los que[BREAK]llevaron fuego extraño al[BREAK]Tabernáculo.[BREAK][BREAK]Ver Levítico 10:1-2."},
  {"question_type":"multiple","question":"¿Cuál era el nombre del lugar que[BREAK]tenía un pozo que brotaba[BREAK]agua?","potential_answers":"soda,mattanah,pisgah,beer","actual_answer":"beer","actual_answer_explanation":"Ver Números 21:16-18."},
  {"question_type":"multiple","question":"¿De quién era la vara que produjo[BREAK]brotes de almendro?","potential_answers":"a. Moisés,b. Jetro,c. Amram,d. Ninguna de las anteriores","actual_answer":"d. Ninguna de las anteriores"},
  {"question_type":"TF","question":"Moisés hizo una serpiente de bronce[BREAK]para que quienes fueran mordidos[BREAK]por serpientes pudieran vivir.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Números 21:4-9."},
  {"question_type":"multiple","question":"¿Qué rey no permitió a los[BREAK]israelitas pasar por su[BREAK]tierra?","potential_answers":"a. Rey Sehón,b. el rey de Edom,c. el rey de Moab,d. todos los anteriores","actual_answer":"d. todos los anteriores","actual_answer_explanation":"Ver Números 20:14-17 y Números 21:21-23."},
  {"question_type":"multiple","question":"¿De quién era la vara que Dios usó[BREAK]para convertir el agua en[BREAK]sangre?","potential_answers":"de Moisés,de Aarón,de Faraón,ninguna de las anteriores","actual_answer":"de Aarón"},
  {"question_type":"TF","question":"Miriam murió y fue enterrada en el[BREAK]desierto de Sin.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Miriam murió y fue enterrada en el[BREAK]desierto de Zin. “Zin” con “z”,[BREAK]no “Sin” con “s”.[BREAK][BREAK]Ver Números 20:1."},
  {"question_type":"multiple","question":"¿Quién fue el principal artesano[BREAK]que dirigió la construcción del[BREAK]tabernáculo?","potential_answers":"Aholiab,Gershom,Reuel,Bezalel","actual_answer":"Bezalel"},
  {"question_type":"TF","question":"Dios ordenó a los hijos de Israel[BREAK]desposeer a los habitantes de[BREAK]Canaán.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Números 33:51-56, KJV o NKJV."},
  {"question_type":"TF","question":"Aarón murió en la cima del Monte Hor.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Números 33:39."},
  {"question_type":"number","question":"Ordena estos destinos en el orden correcto.","potential_answers":"","actual_answer":"Succoth,Marah,Mar Rojo,Refidim,Kibroth Hattaavah,Abronah,Monte Hor,Zalmonah","actual_answer_sans_coord":"1. Succoth[BREAK][BREAK]2. Marah[BREAK][BREAK]3. Mar Rojo[BREAK][BREAK]4. Refidim[BREAK][BREAK]5. Kibroth Hattaavah[BREAK][BREAK]6. Abronah[BREAK][BREAK]7. Monte Hor[BREAK][BREAK]8. Zalmonah"},
  {"question_type":"TF","question":"Moisés envió mensajeros desde Cades[BREAK]al rey de Moab para pedir[BREAK]paso.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Moisés envió mensajeros desde Cades[BREAK]al rey de Edom para pedir[BREAK]paso.[BREAK][BREAK]Ver Números 20:14-21."}
],
[
  {"question_type":"multiple","question":"¿Qué enfatizó Dios con fuerza[BREAK]que los seres humanos no[BREAK]debían consumir?","potential_answers":"agua sucia,carne con sangre,huesos de pollo,carne humana","actual_answer":"carne con sangre","actual_answer_explanation":"ver Levítico 17:14"},
  {"question_type":"multiple","question":"¿Dónde se encuentra el Arca del[BREAK]Pacto en el Tabernáculo?","potential_answers":"lugar santo,lugar santísimo,palacio de marfil,sala del trono","actual_answer":"lugar santísimo"},
  {"question_type":"multiple","question":"¿Qué animal prohibió Dios[BREAK]que comieran los israelitas?","potential_answers":"a. caballo,b. cerdo,c. bagre,d. todos los anteriores","actual_answer":"d. todos los anteriores","actual_answer_explanation":"ver Levítico 11:1-23"},
  {"question_type":"TF","question":"Moisés recibió su nombre desde el nacimiento.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Moisés recibió su nombre después de[BREAK]ser descubierto por la hija del faraón.[BREAK][BREAK]Ver Éxodo 2:1-10"},
  {"question_type":"multiple","question":"¿Cuántos años pasaron los israelitas[BREAK]en el desierto?","potential_answers":"20,40,60,80","actual_answer":"40","actual_answer_explanation":"Ver Números 14:20-25."},
  {"question_type":"TF","question":"Dios prohibió a los israelitas[BREAK]comer insectos.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Dios prohibió a los israelitas comer[BREAK]los insectos que caminan sobre[BREAK]cuatro patas.[BREAK][BREAK]Ver Levítico 20:23."},
  {"question_type":"multiple","question":"¿Cuántos días pasó Moisés en el[BREAK]Monte Sinaí cuando fue solo la[BREAK]primera vez?","potential_answers":"30,40,50,60","actual_answer":"40","actual_answer_explanation":"Ver Éxodo 24:18.[BREAK]Nota: Moisés permanece en el[BREAK]Monte Sinaí por cuarenta días[BREAK]nuevamente en Éxodo 34."},
  {"question_type":"multiple","question":"En Números, ¿qué le ocurrió a Miriam[BREAK]después de que Dios le dio a ella y[BREAK]a Aarón una lección?","potential_answers":"se volvió psicótica,tuvo fiebre,contrajo lepra,contrajo varicela","actual_answer":"contrajo lepra","actual_answer_explanation":"Ver Números 12:1-15."},
  {"question_type":"multiple","question":"En Números, ¿qué dios pagano[BREAK]comenzaron a adorar los israelitas?","potential_answers":"baal,azazel,astarot,balor","actual_answer":"baal","actual_answer_explanation":"Ver Números 25."},
  {"question_type":"multiple","question":"¿Cuántas veces caminaron los israelitas[BREAK]alrededor de los muros de Jericó en el[BREAK]día 7?","potential_answers":"12,10,7,3","actual_answer":"7","actual_answer_explanation":"Ver Josué 6:15"},
  {"question_type":"multiple","question":"¿Cuándo debían los israelitas[BREAK]cancelar las deudas?","potential_answers":"cada dos semanas,cada dos años,cada siete años,cada diez años","actual_answer":"cada siete años"},
  {"question_type":"number","question":"Ordena estos eventos correctamente.","potential_answers":"","actual_answer":"moisés muere en el monte Nebo,Dios da la orden de cruzar el[BREAK]Río Jordán,Rahab salva a dos espías israelitas,los israelitas cruzan el Jordán,Jericó es destruido,los israelitas sufren derrota en Hai debido a[BREAK]el pecado de Acán,Acán es apedreado,Hai es derrotado","actual_answer_sans_coord":"1. Moisés muere en el monte Nebo[BREAK][BREAK]2. Dios da la orden de cruzar el[BREAK] Río Jordán[BREAK][BREAK]3. Rahab salva a dos espías israelitas[BREAK][BREAK]4. Los israelitas cruzan el Jordán[BREAK][BREAK]5. Jericó es destruido[BREAK][BREAK]6. Los israelitas sufren derrota en Hai debido a[BREAK] el pecado de Acán[BREAK][BREAK]7. Acán es apedreado[BREAK][BREAK]8. Hai es derrotado"},
  {"question_type":"multiple","question":"¿En qué montaña murió Moisés?","potential_answers":"monte Sinaí,monte Hor,monte Nebo,monte Nemo","actual_answer":"monte Nebo","actual_answer_explanation":"Ver Deuteronomio 34."},
  {"question_type":"TF","question":"En Números, Dios eligió a Josué como[BREAK]el próximo líder.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Josué 27:12-23"}
],
[
  {"question_type":"multiple","question":"¿Qué enfatizó Dios con fuerza[BREAK]que los seres humanos no[BREAK]debían consumir?","potential_answers":"agua sucia,carne con sangre,huesos de pollo,carne humana","actual_answer":"carne con sangre","actual_answer_explanation":"ver Levítico 17:14"},
  {"question_type":"multiple","question":"¿Dónde se encuentra el Arca del[BREAK]Pacto en el Tabernáculo?","potential_answers":"lugar santo,lugar santísimo,palacio de marfil,sala del trono","actual_answer":"lugar santísimo"},
  {"question_type":"multiple","question":"¿Qué animal prohibió Dios[BREAK]que comieran los israelitas?","potential_answers":"a. caballo,b. cerdo,c. bagre,d. todos los anteriores","actual_answer":"d. todos los anteriores","actual_answer_explanation":"ver Levítico 11:1-23"},
  {"question_type":"TF","question":"Moisés recibió su nombre desde el nacimiento.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Moisés recibió su nombre después de[BREAK]ser descubierto por la hija del faraón.[BREAK][BREAK]Ver Éxodo 2:1-10"},
  {"question_type":"multiple","question":"¿Cuántos años pasaron los israelitas[BREAK]en el desierto?","potential_answers":"20,40,60,80","actual_answer":"40","actual_answer_explanation":"Ver Números 14:20-25."},
  {"question_type":"TF","question":"Dios prohibió a los israelitas[BREAK]comer insectos.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Dios prohibió a los israelitas comer[BREAK]los insectos que caminan sobre[BREAK]cuatro patas.[BREAK][BREAK]Ver Levítico 20:23."},
  {"question_type":"multiple","question":"¿Cuántos días pasó Moisés en el[BREAK]Monte Sinaí cuando fue solo la[BREAK]primera vez?","potential_answers":"30,40,50,60","actual_answer":"40","actual_answer_explanation":"Ver Éxodo 24:18.[BREAK]Nota: Moisés permanece en el[BREAK]Monte Sinaí por cuarenta días[BREAK]nuevamente en Éxodo 34."},
  {"question_type":"multiple","question":"En Números, ¿qué le ocurrió a Miriam[BREAK]después de que Dios le dio a ella y[BREAK]a Aarón una lección?","potential_answers":"se volvió psicótica,tuvo fiebre,contrajo lepra,contrajo varicela","actual_answer":"contrajo lepra","actual_answer_explanation":"Ver Números 12:1-15."},
  {"question_type":"multiple","question":"En Números, ¿qué dios pagano[BREAK]comenzaron a adorar los israelitas?","potential_answers":"baal,azazel,astarot,balor","actual_answer":"baal","actual_answer_explanation":"Ver Números 25."},
  {"question_type":"multiple","question":"¿Cuántas veces caminaron los israelitas[BREAK]alrededor de los muros de Jericó en el[BREAK]día 7?","potential_answers":"12,10,7,3","actual_answer":"7","actual_answer_explanation":"Ver Josué 6:15"},
  {"question_type":"multiple","question":"¿Cuándo debían los israelitas[BREAK]cancelar las deudas?","potential_answers":"cada dos semanas,cada dos años,cada siete años,cada diez años","actual_answer":"cada siete años"},
  {"question_type":"number","question":"Ordena estos eventos correctamente.","potential_answers":"","actual_answer":"moisés muere en el monte Nebo,Dios da la orden de cruzar el[BREAK]Río Jordán,Rahab salva a dos espías israelitas,los israelitas cruzan el Jordán,Jericó es destruido,los israelitas sufren derrota en Hai debido a[BREAK]el pecado de Acán,Acán es apedreado,Hai es derrotado","actual_answer_sans_coord":"1. Moisés muere en el monte Nebo[BREAK][BREAK]2. Dios da la orden de cruzar el[BREAK] Río Jordán[BREAK][BREAK]3. Rahab salva a dos espías israelitas[BREAK][BREAK]4. Los israelitas cruzan el Jordán[BREAK][BREAK]5. Jericó es destruido[BREAK][BREAK]6. Los israelitas sufren derrota en Hai debido a[BREAK] el pecado de Acán[BREAK][BREAK]7. Acán es apedreado[BREAK][BREAK]8. Hai es derrotado"},
  {"question_type":"multiple","question":"¿En qué montaña murió Moisés?","potential_answers":"monte Sinaí,monte Hor,monte Nebo,monte Nemo","actual_answer":"monte Nebo","actual_answer_explanation":"Ver Deuteronomio 34."},
  {"question_type":"TF","question":"En Números, Dios eligió a Josué como[BREAK]el próximo líder.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Josué 27:12-23"}
],
[
  {"question_type":"multiple","question":"¿Qué enfatizó Dios con fuerza[BREAK]que los seres humanos no[BREAK]debían consumir?","potential_answers":"agua sucia,carne con sangre,huesos de pollo,carne humana","actual_answer":"carne con sangre","actual_answer_explanation":"ver Levítico 17:14"},
  {"question_type":"multiple","question":"¿Dónde se encuentra el Arca del[BREAK]Pacto en el Tabernáculo?","potential_answers":"lugar santo,lugar santísimo,palacio de marfil,sala del trono","actual_answer":"lugar santísimo"},
  {"question_type":"multiple","question":"¿Qué animal prohibió Dios[BREAK]que comieran los israelitas?","potential_answers":"a. caballo,b. cerdo,c. bagre,d. todos los anteriores","actual_answer":"d. todos los anteriores","actual_answer_explanation":"ver Levítico 11:1-23"},
  {"question_type":"TF","question":"Moisés recibió su nombre desde el nacimiento.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Moisés recibió su nombre después de[BREAK]ser descubierto por la hija del faraón.[BREAK][BREAK]Ver Éxodo 2:1-10"},
  {"question_type":"multiple","question":"¿Cuántos años pasaron los israelitas[BREAK]en el desierto?","potential_answers":"20,40,60,80","actual_answer":"40","actual_answer_explanation":"Ver Números 14:20-25."},
  {"question_type":"TF","question":"Dios prohibió a los israelitas[BREAK]comer insectos.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Dios prohibió a los israelitas comer[BREAK]los insectos que caminan sobre[BREAK]cuatro patas.[BREAK][BREAK]Ver Levítico 20:23."},
  {"question_type":"multiple","question":"¿Cuántos días pasó Moisés en el[BREAK]Monte Sinaí cuando fue solo la[BREAK]primera vez?","potential_answers":"30,40,50,60","actual_answer":"40","actual_answer_explanation":"Ver Éxodo 24:18.[BREAK]Nota: Moisés permanece en el[BREAK]Monte Sinaí por cuarenta días[BREAK]nuevamente en Éxodo 34."},
  {"question_type":"multiple","question":"En Números, ¿qué le ocurrió a Miriam[BREAK]después de que Dios le dio a ella y[BREAK]a Aarón una lección?","potential_answers":"se volvió psicótica,tuvo fiebre,contrajo lepra,contrajo varicela","actual_answer":"contrajo lepra","actual_answer_explanation":"Ver Números 12:1-15."},
  {"question_type":"multiple","question":"En Números, ¿qué dios pagano[BREAK]comenzaron a adorar los israelitas?","potential_answers":"baal,azazel,astarot,balor","actual_answer":"baal","actual_answer_explanation":"Ver Números 25."},
  {"question_type":"multiple","question":"¿Cuántas veces caminaron los israelitas[BREAK]alrededor de los muros de Jericó en el[BREAK]día 7?","potential_answers":"12,10,7,3","actual_answer":"7","actual_answer_explanation":"Ver Josué 6:15"},
  {"question_type":"multiple","question":"¿Cuándo debían los israelitas[BREAK]cancelar las deudas?","potential_answers":"cada dos semanas,cada dos años,cada siete años,cada diez años","actual_answer":"cada siete años"},
  {"question_type":"number","question":"Ordena estos eventos correctamente.","potential_answers":"","actual_answer":"moisés muere en el monte Nebo,Dios da la orden de cruzar el[BREAK]Río Jordán,Rahab salva a dos espías israelitas,los israelitas cruzan el Jordán,Jericó es destruido,los israelitas sufren derrota en Hai debido a[BREAK]el pecado de Acán,Acán es apedreado,Hai es derrotado","actual_answer_sans_coord":"1. Moisés muere en el monte Nebo[BREAK][BREAK]2. Dios da la orden de cruzar el[BREAK] Río Jordán[BREAK][BREAK]3. Rahab salva a dos espías israelitas[BREAK][BREAK]4. Los israelitas cruzan el Jordán[BREAK][BREAK]5. Jericó es destruido[BREAK][BREAK]6. Los israelitas sufren derrota en Hai debido a[BREAK] el pecado de Acán[BREAK][BREAK]7. Acán es apedreado[BREAK][BREAK]8. Hai es derrotado"},
  {"question_type":"multiple","question":"¿En qué montaña murió Moisés?","potential_answers":"monte Sinaí,monte Hor,monte Nebo,monte Nemo","actual_answer":"monte Nebo","actual_answer_explanation":"Ver Deuteronomio 34."},
  {"question_type":"TF","question":"En Números, Dios eligió a Josué como[BREAK]el próximo líder.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Josué 27:12-23"}
],
[
  {"question_type":"TF","question":"Después de la muerte de Aod, los[BREAK]israelitas obedecieron los[BREAK]mandamientos de Dios.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Los israelitas volvieron a sus[BREAK]malos caminos, abriendo la puerta[BREAK]a problemas con los cananeos.[BREAK][BREAK]Ver Jueces 4:1-2."},
  {"question_type":"multiple","question":"¿Dónde estaba Gedeón trillando trigo?","potential_answers":"en una torre de vigilancia,en una piscina,en un lagar,en el cuarto de agua","actual_answer":"en un lagar","actual_answer_explanation":"Ver Jueces 6:11."},
  {"question_type":"TF","question":"Dios permite el consumo de todos[BREAK]los animales que rumian.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Dios solo permite el consumo de[BREAK]animales que rumian y tienen[BREAK]pezuñas hendidas.[BREAK][BREAK]Ver Levítico 11."},
  {"question_type":"multiple","question":"¿Cuál era el castigo para los[BREAK]parientes que alentaban a la gente[BREAK]a servir dioses extranjeros?","potential_answers":"eran crucificados,eran ahogados,eran encarcelados,eran apedreados","actual_answer":"eran apedreados","actual_answer_explanation":"Ver Deuteronomio 13:6-11."},
  {"question_type":"multiple","question":"¿Qué se consideraba \\"duelo[BREAK]inapropiado\\" en el campamento[BREAK]israelita?","potential_answers":"a. maldecir a los dioses griegos,b. cortarse,c. afeitarse la parte frontal de la cabeza,d. b y c","actual_answer":"d. b y c","actual_answer_explanation":"Ver Deuteronomio 14:1-2."},
  {"question_type":"multiple","question":"[REMOVE_TRIPLE_SPACE]¿Qué hacían los propietarios israelitas[BREAK]con sus siervos cuando se negaban[BREAK]a irse después de siete años?","potential_answers":"a. los convertían en siervos para siempre,b. les perforaban un agujero en la oreja,c. los liberaban de todos modos,d. a y b","actual_answer":"d. a y b","actual_answer_explanation":"Ver Deuteronomio 15:12-18."},
  {"question_type":"multiple","question":"¿Cuánto es un diezmo?","potential_answers":"1/4 de lo que has recibido,1/2 de lo que has recibido,1/9 de lo que has recibido,1/10 de lo que has recibido","actual_answer":"1/10 de lo que has recibido"},
  {"question_type":"TF","question":"Dios ordena la generosidad con los pobres.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Dios ordena la generosidad con los pobres.[BREAK][BREAK]Ver Deuteronomio 15:7-11."},
  {"question_type":"multiple","question":"¿Cómo estaba Coré relacionado con Moisés?","potential_answers":"primo hermano,primo segundo,primo hermano una vez removido,tío","actual_answer":"primo hermano","actual_answer_explanation":"Ver Números 16:1 y Éxodo 6:14-20 para conectar los puntos."},
  {"question_type":"multiple","question":"¿Cuántos días debía observarse la[BREAK]Fiesta de los Tabernáculos?","potential_answers":"3 días,10 días,40 días,7 días","actual_answer":"7 días","actual_answer_explanation":"Ver Deuteronomio 16:13."},
  {"question_type":"TF","question":"Samgar mató a 600 filisteos con[BREAK]la quijada de un burro.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Samgar mató a 600 filisteos con[BREAK]una aguijada de buey.[BREAK][BREAK]Ver Jueces 3:31."},
  {"question_type":"TF","question":"Los animales con anormalidades pueden[BREAK]ser sacrificados a Dios.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Los animales con anormalidades no pueden[BREAK]ser sacrificados a Dios. En su lugar, el[BREAK]adorador debe comer el animal.[BREAK][BREAK]Ver Deuteronomio 15:19-23."},
  {"question_type":"TF","question":"El rey Eglón era muy gordo.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"El rey Eglón era tan gordo que su vientre[BREAK]cubrió el puñal de Aod cuando fue[BREAK]introducido.[BREAK][BREAK]Ver Jueces 3:12-30."},
  {"question_type":"match","question":"","potential_answers":"","actual_answer":"7 días (220;135)(0)->las aguas permanecen[BREAK]sangrientas (405;205)(5),3 días (220;215)(1)->Egipto permanece[BREAK]oscuro (405;125)(4),7 años (220;295)(2)->duración del[BREAK]servicio (405;290)(6),40 años (220;375)(3)->viaje a[BREAK]Canaán (405;365)(7)","actual_answer_sans_coord":"7 días->las aguas permanecen sangrientas[BREAK][BREAK]3 días->Egipto permanece oscuro[BREAK][BREAK]7 años->duración del servicio[BREAK][BREAK]40 años->viaje a Canaán"}
],
[
  {"question_type":"multiple","question":"¿Qué dúo sostuvo los brazos de Moisés[BREAK]durante la batalla contra los amalecitas?","potential_answers":"Aarón y Josué,Aarón y Hur,Hur y Josué,Hur y Milca","actual_answer":"Aarón y Hur","actual_answer_explanation":"Ver Éxodo 17:8-16."},
  {"question_type":"multiple","question":"[REMOVE_TRIPLE_SPACE]¿Qué llevó Gedeón al ángel[BREAK]del Señor?","potential_answers":"un cabrito joven y tortas sin[BREAK] levadura,una máquina de pinball,un becerro primogénito,dos palomas","actual_answer":"un cabrito joven y tortas sin[BREAK] levadura","actual_answer_sans_coord":"[REMOVE_BREAK]"},
  {"question_type":"multiple","question":"¿Qué hizo Gedeón con el altar de[BREAK]Baal?","potential_answers":"lo robó,lo destruyó,lo reconstruyó,lo embadurnó con lodo","actual_answer":"lo destruyó","actual_answer_explanation":"Ver Jueces 6:28-32."},
  {"question_type":"multiple","question":"¿Qué nombre se le dio a Gedeón después[BREAK]de destruir el altar de Baal?","potential_answers":"Jerubaal,Galaad,Samaría,Baalerub","actual_answer":"Jerubaal","actual_answer_explanation":"Ver Jueces 6:32."},
  {"question_type":"multiple","question":"¿Cuál fue la primera señal que Gedeón[BREAK]pidió a Dios?","potential_answers":"rocío en el vellón pero suelo seco,rocío en el suelo pero vellón seco,rocío en suelo y vellón,ningún rocío en suelo ni vellón","actual_answer":"rocío en el vellón pero suelo seco","actual_answer_explanation":"Ver Jueces 6:36-40."},
  {"question_type":"multiple","question":"[IGNORE_ANSWER_BREAK]¿Qué dijo Dios cuando Gedeón[BREAK]reunió su ejército?","potential_answers":"“ese es el número correcto”,“¿Listos para empezar el entrenamiento?”,“La gente que está contigo es demasiada[BREAK] ...”,“¡Levántate! Baja contra el[BREAK] campamento!”","actual_answer":"“La gente que está contigo es demasiada[BREAK] ...”","actual_answer_explanation":"Ver Jueces 7:2."},
  {"question_type":"multiple","question":"¿Cuántos soldados regresaron[BREAK]inicialmente a casa?","potential_answers":"10000,300,22000,44000","actual_answer":"22000","actual_answer_explanation":"Ver Jueces 7:3."},
  {"question_type":"multiple","question":"¿Cuál era el nombre del siervo de Gedeón?","potential_answers":"Pureé,Purá,Torá,Tory","actual_answer":"Purá","actual_answer_explanation":"Ver Jueces 7:10."},
  {"question_type":"multiple","question":"[REMOVE_QUADRUPLE_SPACE]¿Cuál fue el grito de batalla de los[BREAK]300 de Gedeón? (Nota: Basado en KJV/NKJV.)","potential_answers":"“¡La espada del Señor[COMMA] y de[BREAK] Gedeón!”,“¡Muerte a los madianitas!”,“¡Dios maldiga a estas personas!”,“¡Por la Torá y el[BREAK] Decálogo!”","actual_answer":"“¡La espada del Señor, y de[BREAK] Gedeón!”","actual_answer_explanation":"Ver Jueces 7:20."},
  {"question_type":"multiple","question":"¿Qué dos príncipes madianitas fueron[BREAK]asesinados por los israelitas?","potential_answers":"Oreb y Zeeb,Oreb y Seeb,Orab y Madi,Orab y Jasón","actual_answer":"Oreb y Zeeb","actual_answer_explanation":"Ver Jueces 7:25."},
  {"question_type":"TF","question":"Inicialmente, Gedeón reunió[BREAK]32000 soldados para la batalla.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Lee Jueces 7:3, y podrás conectar[BREAK]los puntos."},
  {"question_type":"TF","question":"Gedeón conservó a los soldados que[BREAK]no lamieron como perros.","potential_answers":"","actual_answer":"0","actual_answer_explanation":"Gedeón conservó a los soldados que sí[BREAK]lamieron como perros.[BREAK][BREAK]Ver Jueces 7:4-7."},
  {"question_type":"TF","question":"Gedeón mató a dos reyes de Madián:[BREAK]Zebah y Zalmuna.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Jueces 8:1-21."},
  {"question_type":"TF","question":"Gedeón practicó la poligamia.","potential_answers":"","actual_answer":"1","actual_answer_explanation":"Ver Jueces 8:30."}
]
	]
	`);
	
	//shuffleQuestions();
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
