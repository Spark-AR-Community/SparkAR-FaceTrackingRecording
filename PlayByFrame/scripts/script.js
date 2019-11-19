//const Diagnostics = require('Diagnostics');
const Patches = require('Patches');

//Insertar aqui recording grabado!!!
const recording=[{"posx":-0.007241778075695038,"posy":-0.03252420201897621,"posz":-0.5028273463249207,"rotx":-8.999058723449707,"roty":4.387806415557861,"rotz":2.962066173553467},{"posx":-0.007218386046588421,"posy":-0.02704869583249092,"posz":-0.5050930380821228,"rotx":-11.640742301940918,"roty":5.620565414428711,"rotz":5.489805221557617},{"posx":-0.011018957942724228,"posy":-0.023095062002539635,"posz":-0.5025322437286377,"rotx":-13.588090896606445,"roty":6.3003668785095215,"rotz":8.73447322845459},{"posx":-0.007502219174057245,"posy":-0.021300258114933968,"posz":-0.49241989850997925,"rotx":-16.729372024536133,"roty":2.727104663848877,"rotz":-2.5019960403442383},{"posx":-0.0073516699485480785,"posy":-0.02167804166674614,"posz":-0.4968792498111725,"rotx":-16.807809829711914,"roty":2.4160940647125244,"rotz":-2.7320683002471924},{"posx":-0.0071447379887104034,"posy":-0.02216673456132412,"posz":-0.49588707089424133,"rotx":-17.53582763671875,"roty":2.302095890045166,"rotz":-2.6413064002990723},{"posx":-0.008552351035177708,"posy":-0.021967045962810516,"posz":-0.4969030022621155,"rotx":-17.92002296447754,"roty":1.572381854057312,"rotz":-2.6766390800476074},{"posx":-0.009980759583413601,"posy":-0.02088833786547184,"posz":-0.49654024839401245,"rotx":-18.37183952331543,"roty":0.8295409083366394,"rotz":-2.7869811058044434},{"posx":-0.010867944918572903,"posy":-0.020658403635025024,"posz":-0.49483823776245117,"rotx":-18.283449172973633,"roty":0.4061204493045807,"rotz":-2.91087007522583},{"posx":-0.013550922274589539,"posy":-0.02046707272529602,"posz":-0.49440744519233704,"rotx":-18.137104034423828,"roty":-0.7762739062309265,"rotz":-2.896857500076294},{"posx":-0.020246703177690506,"posy":-0.021168097853660583,"posz":-0.4963652789592743,"rotx":-16.586462020874023,"roty":-4.1892852783203125,"rotz":-1.9302769899368286},{"posx":-0.03547478839755058,"posy":-0.022596729919314384,"posz":-0.4944250285625458,"rotx":-14.398115158081055,"roty":-9.965692520141602,"rotz":-1.5487767457962036},{"posx":-0.047962915152311325,"posy":-0.023819807916879654,"posz":-0.4993983507156372,"rotx":-13.209563255310059,"roty":-14.598299980163574,"rotz":-1.737701654434204},{"posx":-0.05832309275865555,"posy":-0.02406563051044941,"posz":-0.5075771808624268,"rotx":-12.995281219482422,"roty":-18.792072296142578,"rotz":-0.9212476015090942},{"posx":-0.0674169659614563,"posy":-0.02380182594060898,"posz":-0.5076916813850403,"rotx":-12.861438751220703,"roty":-23.083175659179688,"rotz":-0.7353966236114502},{"posx":-0.07338488847017288,"posy":-0.024106860160827637,"posz":-0.5060238838195801,"rotx":-12.29135799407959,"roty":-26.356534957885742,"rotz":-0.7190850973129272},{"posx":-0.07788342982530594,"posy":-0.02472752518951893,"posz":-0.504604697227478,"rotx":-10.698290824890137,"roty":-28.770143508911133,"rotz":-0.6919366717338562},{"posx":-0.07968587428331375,"posy":-0.024915922433137894,"posz":-0.5061119198799133,"rotx":-10.291858673095703,"roty":-28.794189453125,"rotz":-1.0264209508895874},{"posx":-0.07965218275785446,"posy":-0.025324396789073944,"posz":-0.5094324350357056,"rotx":-9.772200584411621,"roty":-28.682443618774414,"rotz":-1.0165480375289917},{"posx":-0.07427697628736496,"posy":-0.025756411254405975,"posz":-0.5098031163215637,"rotx":-9.546544075012207,"roty":-25.722253799438477,"rotz":-0.966570258140564},{"posx":-0.0640106201171875,"posy":-0.023515885695815086,"posz":-0.5061295628547668,"rotx":-13.215039253234863,"roty":-18.87718391418457,"rotz":-0.2264382392168045},{"posx":-0.054846882820129395,"posy":-0.023795008659362793,"posz":-0.5121962428092957,"rotx":-12.698724746704102,"roty":-14.754453659057617,"rotz":-0.2641444802284241},{"posx":-0.04618195816874504,"posy":-0.023497281596064568,"posz":-0.5087753534317017,"rotx":-12.74476432800293,"roty":-10.965347290039062,"rotz":-0.8370071053504944},{"posx":-0.03719444200396538,"posy":-0.023721866309642792,"posz":-0.5048252940177917,"rotx":-12.489975929260254,"roty":-7.591252326965332,"rotz":-0.6676199436187744},{"posx":-0.023118220269680023,"posy":-0.022279776632785797,"posz":-0.5019325017929077,"rotx":-13.907354354858398,"roty":-1.554561972618103,"rotz":-0.32680997252464294},{"posx":0.001021303003653884,"posy":-0.020087894052267075,"posz":-0.4837670624256134,"rotx":-16.524375915527344,"roty":8.901851654052734,"rotz":-0.46487367153167725},{"posx":0.017605021595954895,"posy":-0.019964005798101425,"posz":-0.48676595091819763,"rotx":-17.069637298583984,"roty":15.496013641357422,"rotz":-0.6441935896873474},{"posx":0.03147832304239273,"posy":-0.020456209778785706,"posz":-0.5006564259529114,"rotx":-16.97747230529785,"roty":21.787229537963867,"rotz":-1.6403177976608276},{"posx":0.03953464329242706,"posy":-0.02135438658297062,"posz":-0.5030274391174316,"rotx":-16.62533187866211,"roty":25.630502700805664,"rotz":-1.886024832725525},{"posx":0.04786546155810356,"posy":-0.02282680943608284,"posz":-0.5077721476554871,"rotx":-14.936153411865234,"roty":30.070940017700195,"rotz":-2.5487966537475586},{"posx":0.05397842451930046,"posy":-0.023228883743286133,"posz":-0.5064657926559448,"rotx":-15.57558536529541,"roty":32.55155563354492,"rotz":-3.249150276184082},{"posx":0.0553312785923481,"posy":-0.023673497140407562,"posz":-0.5059189796447754,"rotx":-15.018315315246582,"roty":32.94330596923828,"rotz":-3.29398512840271},{"posx":0.05198511481285095,"posy":-0.024264799430966377,"posz":-0.5066927075386047,"rotx":-14.17280101776123,"roty":31.313709259033203,"rotz":-2.7204339504241943},{"posx":0.04139503836631775,"posy":-0.02375078573822975,"posz":-0.5112185478210449,"rotx":-14.496068954467773,"roty":25.844985961914062,"rotz":-2.3607051372528076},{"posx":0.029367512091994286,"posy":-0.019728219136595726,"posz":-0.5021257400512695,"rotx":-18.053070068359375,"roty":18.929729461669922,"rotz":-2.825078248977661},{"posx":0.015582742169499397,"posy":-0.01707286573946476,"posz":-0.49475711584091187,"rotx":-18.591341018676758,"roty":12.473033905029297,"rotz":-2.364227771759033},{"posx":0.006875336170196533,"posy":-0.013267950154840946,"posz":-0.49829187989234924,"rotx":-20.22561264038086,"roty":8.788626670837402,"rotz":-2.1117172241210938},{"posx":0.0002939885016530752,"posy":-0.005941130220890045,"posz":-0.48856884241104126,"rotx":-24.944080352783203,"roty":5.823330879211426,"rotz":-2.249166250228882},{"posx":-0.0032724884804338217,"posy":0.004662584513425827,"posz":-0.4838433563709259,"rotx":-32.20600128173828,"roty":4.554243564605713,"rotz":-2.629077434539795},{"posx":-0.005165664479136467,"posy":0.012554651126265526,"posz":-0.511798083782196,"rotx":-30.581684112548828,"roty":5.6540350914001465,"rotz":-2.564812421798706},{"posx":-0.008080466650426388,"posy":0.022780364379286766,"posz":-0.5100888013839722,"rotx":-39.24342727661133,"roty":2.4565272331237793,"rotz":-4.215190410614014},{"posx":-0.00845534447580576,"posy":0.02854670211672783,"posz":-0.5139598846435547,"rotx":-42.888038635253906,"roty":2.30119252204895,"rotz":-3.7174782752990723},{"posx":-0.007846050895750523,"posy":0.03091856651008129,"posz":-0.5183093547821045,"rotx":-43.881446838378906,"roty":2.549450397491455,"rotz":-3.597900867462158},{"posx":-0.007331259083002806,"posy":0.029941381886601448,"posz":-0.5211939811706543,"rotx":-42.60356903076172,"roty":2.8070268630981445,"rotz":-3.564026355743408},{"posx":-0.007524496875703335,"posy":0.02277996391057968,"posz":-0.5178780555725098,"rotx":-38.68109130859375,"roty":3.7435672283172607,"rotz":-3.155104160308838},{"posx":-0.007819071412086487,"posy":0.0017562012653797865,"posz":-0.5160571932792664,"rotx":-23.840436935424805,"roty":5.252433776855469,"rotz":-2.2347285747528076},{"posx":-0.010644728317856789,"posy":-0.003232803428545594,"posz":-0.4972641170024872,"rotx":-28.426437377929688,"roty":1.4080849885940552,"rotz":-2.4857609272003174},{"posx":-0.011382251977920532,"posy":-0.012233053334057331,"posz":-0.5016903281211853,"rotx":-23.593997955322266,"roty":1.0046656131744385,"rotz":-2.5549376010894775},{"posx":-0.011835787445306778,"posy":-0.017383471131324768,"posz":-0.5027154088020325,"rotx":-19.916217803955078,"roty":0.7454178929328918,"rotz":-2.308189630508423},{"posx":-0.01225230097770691,"posy":-0.022878145799040794,"posz":-0.5035774111747742,"rotx":-16.122838973999023,"roty":0.7059037685394287,"rotz":-2.159865140914917},{"posx":-0.012535901740193367,"posy":-0.029591457918286324,"posz":-0.506361722946167,"rotx":-11.563010215759277,"roty":0.402050256729126,"rotz":-1.9135310649871826},{"posx":-0.012824662029743195,"posy":-0.03645483776926994,"posz":-0.5073798894882202,"rotx":-7.449559211730957,"roty":0.26579010486602783,"rotz":-1.8546655178070068},{"posx":-0.012906103394925594,"posy":-0.04400099068880081,"posz":-0.5057864189147949,"rotx":-3.17195200920105,"roty":0.21671579778194427,"rotz":-1.6355953216552734},{"posx":-0.015198275446891785,"posy":-0.05255499854683876,"posz":-0.5147797465324402,"rotx":0.4706772565841675,"roty":-1.7373162508010864,"rotz":-1.0332924127578735},{"posx":-0.016484685242176056,"posy":-0.0608183778822422,"posz":-0.5128011107444763,"rotx":1.821854829788208,"roty":-2.130072832107544,"rotz":-1.0304625034332275},{"posx":-0.017050916329026222,"posy":-0.06813722103834152,"posz":-0.518400251865387,"rotx":5.1381354331970215,"roty":-2.397664785385132,"rotz":-1.2209230661392212},{"posx":-0.01667371764779091,"posy":-0.07165560871362686,"posz":-0.51882004737854,"rotx":6.623427867889404,"roty":-2.146960496902466,"rotz":-1.0621178150177002},{"posx":-0.016610678285360336,"posy":-0.07256590574979782,"posz":-0.515548825263977,"rotx":6.4896745681762695,"roty":-2.0158185958862305,"rotz":-0.8185931444168091},{"posx":-0.01687997207045555,"posy":-0.07167024910449982,"posz":-0.517560601234436,"rotx":5.504261016845703,"roty":-1.6936156749725342,"rotz":-0.722175657749176},{"posx":-0.015396163798868656,"posy":-0.06227467209100723,"posz":-0.5091218948364258,"rotx":0.3869376480579376,"roty":-0.880797266960144,"rotz":-0.27706629037857056},{"posx":-0.013597424142062664,"posy":-0.053851671516895294,"posz":-0.5007404088973999,"rotx":-1.7065961360931396,"roty":-0.02732774056494236,"rotz":-0.12307656556367874},{"posx":-0.010575106367468834,"posy":-0.04315749183297157,"posz":-0.5013473033905029,"rotx":-4.2320098876953125,"roty":2.179382085800171,"rotz":0.7332054376602173},{"posx":-0.008641841821372509,"posy":-0.03620884194970131,"posz":-0.5096384286880493,"rotx":-7.602795600891113,"roty":3.3970282077789307,"rotz":2.112367630004883},{"posx":-0.006829571444541216,"posy":-0.030342184007167816,"posz":-0.5093257427215576,"rotx":-9.916571617126465,"roty":5.098457336425781,"rotz":4.0906171798706055},{"posx":-0.010286500677466393,"posy":-0.024352578446269035,"posz":-0.5070168375968933,"rotx":-13.263175010681152,"roty":5.513357639312744,"rotz":7.342648029327393},{"posx":-0.01597937010228634,"posy":-0.021796051412820816,"posz":-0.4995408356189728,"rotx":-14.455004692077637,"roty":6.266671657562256,"rotz":11.032659530639648},{"posx":-0.019640471786260605,"posy":-0.019635137170553207,"posz":-0.5031726956367493,"rotx":-16.599821090698242,"roty":7.694046974182129,"rotz":13.41444206237793},{"posx":-0.026637159287929535,"posy":-0.018182706087827682,"posz":-0.5064147114753723,"rotx":-17.6358642578125,"roty":7.543157577514648,"rotz":17.426307678222656},{"posx":-0.031615857034921646,"posy":-0.017658507451415062,"posz":-0.5088480114936829,"rotx":-17.476848602294922,"roty":7.629879474639893,"rotz":20.928983688354492},{"posx":-0.037068575620651245,"posy":-0.016980405896902084,"posz":-0.508755624294281,"rotx":-17.87009620666504,"roty":6.853229999542236,"rotz":24.55268669128418},{"posx":-0.04097313433885574,"posy":-0.016790343448519707,"posz":-0.5070703029632568,"rotx":-18.614635467529297,"roty":7.459354400634766,"rotz":26.23642349243164},{"posx":-0.04602818563580513,"posy":-0.017242487519979477,"posz":-0.5053418278694153,"rotx":-19.25046157836914,"roty":6.995952606201172,"rotz":27.819427490234375},{"posx":-0.047623153775930405,"posy":-0.017742205411195755,"posz":-0.5059809684753418,"rotx":-18.85036849975586,"roty":7.480074882507324,"rotz":28.23543930053711},{"posx":-0.046895623207092285,"posy":-0.017615335062146187,"posz":-0.5051843523979187,"rotx":-18.491748809814453,"roty":7.543174743652344,"rotz":27.71324920654297},{"posx":-0.041390758007764816,"posy":-0.01531625259667635,"posz":-0.5007421374320984,"rotx":-19.163068771362305,"roty":7.421879768371582,"rotz":23.75446128845215},{"posx":-0.03419797495007515,"posy":-0.013503378257155418,"posz":-0.4883875250816345,"rotx":-20.545095443725586,"roty":6.9906907081604,"rotz":17.344097137451172},{"posx":-0.029145775362849236,"posy":-0.012720109894871712,"posz":-0.48975566029548645,"rotx":-21.922895431518555,"roty":6.366246223449707,"rotz":11.990046501159668},{"posx":-0.021709399297833443,"posy":-0.012520035728812218,"posz":-0.4894011318683624,"rotx":-21.666399002075195,"roty":5.192376136779785,"rotz":6.490590572357178},{"posx":-0.014831366017460823,"posy":-0.014202131889760494,"posz":-0.49127912521362305,"rotx":-20.42344856262207,"roty":3.8241989612579346,"rotz":1.2013283967971802},{"posx":-0.007151538971811533,"posy":-0.01627223752439022,"posz":-0.4954010844230652,"rotx":-19.656829833984375,"roty":3.3345682621002197,"rotz":-4.578438758850098},{"posx":-0.0006226295372471213,"posy":-0.017199641093611717,"posz":-0.49690836668014526,"rotx":-19.942230224609375,"roty":2.7244222164154053,"rotz":-9.269366264343262},{"posx":0.007025460712611675,"posy":-0.01821620762348175,"posz":-0.49444228410720825,"rotx":-20.676740646362305,"roty":1.9816577434539795,"rotz":-14.690638542175293},{"posx":0.015609443187713623,"posy":-0.020420590415596962,"posz":-0.49877893924713135,"rotx":-20.463024139404297,"roty":3.2537505626678467,"rotz":-18.432287216186523},{"posx":0.025515390560030937,"posy":-0.024859707802534103,"posz":-0.5007959604263306,"rotx":-19.48355484008789,"roty":4.409140586853027,"rotz":-23.014951705932617},{"posx":0.03356550633907318,"posy":-0.029773127287626266,"posz":-0.5029358863830566,"rotx":-18.171247482299805,"roty":5.308656692504883,"rotz":-26.312604904174805},{"posx":0.04153714329004288,"posy":-0.03502926602959633,"posz":-0.5075491666793823,"rotx":-17.050657272338867,"roty":6.557740211486816,"rotz":-29.081798553466797},{"posx":0.043647654354572296,"posy":-0.03660435974597931,"posz":-0.509563148021698,"rotx":-16.14519691467285,"roty":6.58089542388916,"rotz":-29.777070999145508},{"posx":0.044382575899362564,"posy":-0.036734625697135925,"posz":-0.5108733177185059,"rotx":-15.674690246582031,"roty":6.696868896484375,"rotz":-29.39328956604004},{"posx":0.03926211968064308,"posy":-0.03347516804933548,"posz":-0.5069467425346375,"rotx":-15.861625671386719,"roty":5.32139253616333,"rotz":-26.07232093811035},{"posx":0.029904082417488098,"posy":-0.02813391201198101,"posz":-0.5118840336799622,"rotx":-16.72627830505371,"roty":4.471914768218994,"rotz":-21.7156925201416},{"posx":0.02002446912229061,"posy":-0.024458184838294983,"posz":-0.5103926062583923,"rotx":-17.57070541381836,"roty":3.8320627212524414,"rotz":-17.27507209777832},{"posx":0.010221140459179878,"posy":-0.021905915811657906,"posz":-0.5049383640289307,"rotx":-18.943004608154297,"roty":3.6664962768554688,"rotz":-12.774694442749023},{"posx":-0.0010332594392821193,"posy":-0.019108256325125694,"posz":-0.4981426000595093,"rotx":-19.612363815307617,"roty":2.9120538234710693,"rotz":-8.581707954406738},{"posx":-0.007358015980571508,"posy":-0.01767205260694027,"posz":-0.49060723185539246,"rotx":-19.598268508911133,"roty":2.9214653968811035,"rotz":-5.5483717918396},{"posx":-0.012395753525197506,"posy":-0.015827730298042297,"posz":-0.49066293239593506,"rotx":-20.414518356323242,"roty":2.886136293411255,"rotz":-3.613091468811035},{"posx":-0.01603945903480053,"posy":-0.016012979671359062,"posz":-0.5018107891082764,"rotx":-19.566661834716797,"roty":2.7762134075164795,"rotz":-2.6289308071136475},{"posx":-0.017246175557374954,"posy":-0.01656346581876278,"posz":-0.5122449994087219,"rotx":-19.229476928710938,"roty":3.55745530128479,"rotz":-2.442992925643921},{"posx":-0.01827329955995083,"posy":-0.017198439687490463,"posz":-0.5161335468292236,"rotx":-18.63133430480957,"roty":3.2998669147491455,"rotz":-2.308546304702759},{"posx":-0.01833079569041729,"posy":-0.017553649842739105,"posz":-0.5164155960083008,"rotx":-18.3171443939209,"roty":3.2514395713806152,"rotz":-2.2058022022247314},{"posx":-0.017967771738767624,"posy":-0.017824208363890648,"posz":-0.517752468585968,"rotx":-18.253509521484375,"roty":3.571107864379883,"rotz":-2.199012517929077},{"posx":-0.017444124445319176,"posy":-0.017850080505013466,"posz":-0.5153012275695801,"rotx":-18.555442810058594,"roty":3.6076316833496094,"rotz":-2.378566026687622}];

function f(frame) {
	if (frame.newValue>=recording.length || frame.newValue<0) return;
	Patches.setScalarValue("posx",recording[frame.newValue].posx);
	Patches.setScalarValue("posy",recording[frame.newValue].posy);
	Patches.setScalarValue("posz",recording[frame.newValue].posz);
	
	Patches.setScalarValue("rotx",recording[frame.newValue].rotx);
	Patches.setScalarValue("roty",recording[frame.newValue].roty);
	Patches.setScalarValue("rotz",recording[frame.newValue].rotz);
}

Patches.getScalarValue("frame").monitor().subscribe(f);
