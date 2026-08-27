import { TermItem } from '../types';

export const GLOSSARY_DATA: TermItem[] = [
  {
    id: 'term-ic',
    term: 'IC',
    abbr: 'In Character',
    pronunciationAr: 'إن كاركتر (داخل الشخصية)',
    meaningAr: 'كل ما يحدث داخل عالم الرول بلاي والشخصية التي تلعب بها.',
    detailedExplanation: 'يعبر عن كل الأفعال، الأقوال، العلاقات، والأموال التي تخص شخصيتك داخل السيرفر ولا تمثل شخصك الحقيقي خارج اللعبة.',
    exampleScenario: 'عندما تتحدث بالمايك مع ضابط الشرطة أو تشتري سيارة من المعرض، أنت هنا تتحدث وتتصرف IC.',
    category: 'core'
  },
  {
    id: 'term-ooc',
    term: 'OOC',
    abbr: 'Out Of Character',
    pronunciationAr: 'أوت أوف كاركتر (خارج الشخصية)',
    meaningAr: 'أي أمر يتعلق بحياتك الحقيقية، جهازك، أو الحديث المباشر بين اللاعبين خارج اللعبة.',
    detailedExplanation: 'يشمل محادثات الديسكورد، التكتات الإدارية، إعدادات اللعبة، مشاكل الماوس والإنترنت. يُمنع التحدث بها داخل المايك الصوتي IC.',
    exampleScenario: 'إذا واجهت لاق أو أردت فتح تكت مع المشرف، يتم استخدام الشات النصي /ooc وليس المايكروفون.',
    category: 'core'
  },
  {
    id: 'term-rdm',
    term: 'RDM',
    abbr: 'Random Deathmatch',
    pronunciationAr: 'آر دي إم (القتل العشوائي)',
    meaningAr: 'قتل لاعب آخر بدون سبب منطقي وبدون سيناريو مسبق.',
    detailedExplanation: 'أشهر مخالفة في FiveM، وتعني إطلاق النار وقتل شخص يمر بجانبك دون وجود عداوة وتهديد مسبق.',
    exampleScenario: 'المخالفة: سحب سلاح وإطلاق الرصاص فوراً على شخص يقف عند الصراف دون التحدث معه.',
    category: 'combat'
  },
  {
    id: 'term-vdm',
    term: 'VDM',
    abbr: 'Vehicle Deathmatch',
    pronunciationAr: 'في دي إم (القتل بالسيارة)',
    meaningAr: 'استخدام المركبة كسلاح لدهس وصدم اللاعبين عمداً.',
    detailedExplanation: 'صدم المشاة أو سيارات الخصوم بسرعة عالية لإسقاطهم أرضاً وتسهيل قتلهم أو التخلص منهم.',
    exampleScenario: 'المخالفة: الانحراف بالسيارة ودهس رجل شرطة يقف خلف سيارته لقتله بدلاً من الاشتباك المسلح.',
    category: 'combat'
  },
  {
    id: 'term-fear-rp',
    term: 'Fear RP / NVL',
    abbr: 'Fear Roleplay / No Value of Life',
    pronunciationAr: 'فير رول بلاي / نو فاليو أوف لايف',
    meaningAr: 'الخوف على الحياة وإعطاء قيمة لروح الشخصية عند التعرض لتهديد قاتل.',
    detailedExplanation: 'إلزامية الاستسلام وإظهار الذعر الطبيعي عند توجيه مسدس أو بندقية إلى رأسك من مسافة قريبة دون أن تكون مسلحاً.',
    exampleScenario: 'الصحيح: رفع اليدين والامتثال للأوامر عندما يفاجئك اثنان من العصابة بأسلحة مصوبة نحوك.',
    category: 'core'
  },
  {
    id: 'term-nlr',
    term: 'NLR',
    abbr: 'New Life Rule',
    pronunciationAr: 'نيو لايف رول (قاعدة الحياة الجديدة)',
    meaningAr: 'نسيان تفاصيل الحادثة بعد الموت والانتقال للمستشفى ومنع الانتقام.',
    detailedExplanation: 'بعد تلقيك العلاج أو عمل Respawn، تبدأ حياة جديدة وتنسى من قتلك ومكان الحادث ولا ترجع له لمدة 30 دقيقة.',
    exampleScenario: 'الصحيح: عدم العودة لموقع الاشتباك وعدم البحث عمن أطلق عليك النار.',
    category: 'core'
  },
  {
    id: 'term-rk',
    term: 'RK',
    abbr: 'Revenge Killing',
    pronunciationAr: 'ريفينج كيلينق (الانتقام بعد الموت)',
    meaningAr: 'العودة فوراً بعد الإنعاش أو المستشفى للبحث عن القاتل وتصفيته.',
    detailedExplanation: 'يُعد مخالفة جسيمة لكسره قاعدة NLR وإخلاله بمنطق الحياة الواقعية.',
    exampleScenario: 'المخالفة: قتلك شخص في الشارع واستيقظت في المستشفى وأخذت سلاحك وتوجهت لقتله فوراً.',
    category: 'combat'
  },
  {
    id: 'term-pg',
    term: 'PG',
    abbr: 'Powergaming',
    pronunciationAr: 'باور جيمنج (القدرات الخارقة)',
    meaningAr: 'القيام بأفعال مستحيلة في الواقع أو فرض النتيجة على الآخرين دون إعطائهم فرصة دفاع.',
    detailedExplanation: 'القيادة في الجبال بسيارة فارهة، أو الركض فور التعرض لحادث انقلاب سيارة مميت، أو إجبار شخص على الموت بأمر /me دون /do.',
    exampleScenario: 'المخالفة: السقوط من الطابق الثالث والركض فوراً وكأن عظامك مصنوعة من حديد.',
    category: 'core'
  },
  {
    id: 'term-mg',
    term: 'MG',
    abbr: 'Metagaming',
    pronunciationAr: 'ميتا جيمنج (نقل المعلومات)',
    meaningAr: 'استخدام معلومات تم الحصول عليها خارج اللعبة (ديسكورد، ستريم) وتطبيقها في اللعبة.',
    detailedExplanation: 'معرفة مكان شخص من بثه المباشر على تويتش ومداهمته، أو استخدام أسماء اللاعبين الظاهرة فوق رؤوسهم دون التعارف معهم.',
    exampleScenario: 'المخالفة: الذهاب إلى مخبأ عصابة سرية لأنك شاهدت بث زعيمهم على تيك توك.',
    category: 'core'
  },
  {
    id: 'term-cl',
    term: 'CL',
    abbr: 'Combat Logging',
    pronunciationAr: 'كومبات لوقنج (الهروب بالخروج)',
    meaningAr: 'الخروج من السيرفر أثناء سيناريو اشتباك، مطاردة، أو تفتيش من الشرطة.',
    detailedExplanation: 'إغلاق اللعبة عمداً للهروب من السجن أو تفادي فقدان الأسلحة والمخدرات.',
    exampleScenario: 'المخالفة: الضغط على F8 والقيام بأمر Quit فور اقتراب الشرطي من تكبيلك.',
    category: 'combat'
  },
  {
    id: 'term-ck',
    term: 'CK',
    abbr: 'Character Kill',
    pronunciationAr: 'كاركتر كيل (موت الشخصية النهائي)',
    meaningAr: 'الموت النهائي للشخصية ومسح جميع ممتلكاتها وسجلاتها من السيرفر بموافقة إدارية.',
    detailedExplanation: 'نهاية القصة الدرامية للشخصية بشكل دائم بسبب حكم إعدام قضائي أو خيانة عصابة بعد موافقة الإدارة.',
    exampleScenario: 'طلب تكت رسمي لقتل شخصية خائنة بعد تقديم أدلة صوتية ومصورة للجنة الرول بلاي.',
    category: 'core'
  },
  {
    id: 'term-pk',
    term: 'PK',
    abbr: 'Player Kill',
    pronunciationAr: 'بلاير كيل (الموت المؤقت)',
    meaningAr: 'الموت العادي في السيناريوهات اليومية الذي يتبعه تطبيق قانون NLR والعودة للمستشفى.',
    detailedExplanation: 'الموت الشائع في حوادث السيارات أو اشتباكات الشوارع الخفيفة دون مسح الشخصية.',
    exampleScenario: 'العلاج في المستشفى ونسيان آخر 30 دقيقة من الحادثة ومتابعة اللعب.',
    category: 'core'
  },
  {
    id: 'term-stream-sniping',
    term: 'Stream Sniping',
    abbr: 'Stream Sniping',
    pronunciationAr: 'ستريم سنايبينق (تتبع البثوث)',
    meaningAr: 'متابعة بث صانع محتوى في تيك توك أو تويتش لمعرفة موقعه والذهاب لقتله أو إزعاجه.',
    detailedExplanation: 'نوع من أنواع الميتا جيمنج المشدد يُعاقب عليه بالحظر النهائي لحماية صناع المحتوى.',
    exampleScenario: 'المخالفة: معرفة مكان اجتماع العصابة من بث الستريمر ومداهمته مباشرة.',
    category: 'admin'
  },
  {
    id: 'term-combat-storing',
    term: 'Combat Storing',
    abbr: 'Combat Storing',
    pronunciationAr: 'كومبات ستورينق (تخزين الهروب)',
    meaningAr: 'إدخال السيارة إلى الكراج أو تخزين الأموال في الخزنة أثناء مطاردة نشطة.',
    detailedExplanation: 'يمنع إخفاء المركبة في الكراج قبل انقطاع المطاردة لمدة لا تقل عن 10 دقائق.',
    exampleScenario: 'المخالفة: الوصول للكراج والشرطة خلفك وإخفاء السيارة في ثانية واحدة.',
    category: 'combat'
  },
  {
    id: 'term-pocket-wipe',
    term: 'Pocket Wiping',
    abbr: 'Pocket Wiping',
    pronunciationAr: 'بوكيت وايبينق (تجريد الجيوب)',
    meaningAr: 'سرقة كافة الأغراض التافهة كالهاتف والطعام والرخص وترك الضحية بلا شيء.',
    detailedExplanation: 'السرقة تقتصر على الكاش والأسلحة والمخدرات، ويجب ترك أساسيات الحياة للمواطن.',
    exampleScenario: 'المخالفة: سرقة الخبز والماء وبطاقة الهوية من مواطن بعد إسقاطه.',
    category: 'combat'
  },
  {
    id: 'term-me-do',
    term: '/me & /do',
    abbr: 'Roleplay Action Commands',
    pronunciationAr: 'أوامر المي والدو (التفاعل النصي)',
    meaningAr: 'أوامر لوصف الأفعال الجسدية غير المرئية بالأنيميشن والتأكد من النتائج.',
    detailedExplanation: '`/me` يصف ما تفعله شخصيتك (مثال: `/me يفتح درج السيارة بحذر`) و `/do` يسأل عن البيئة وحالة الأشياء (مثال: `/do هل يجد السلاح في الدرج؟`).',
    exampleScenario: 'الشرطي: `/me يفتش الجيب الأيمن` ثم يسأل: `/do ماذا يجد الشرطي؟` والمشتبه به يجيب بصدق: `/do يجد محفظة وبطاقة الهوية`.',
    category: 'chat'
  },
  {
    id: 'term-cop-bait',
    term: 'Cop Baiting',
    abbr: 'Cop Baiting',
    pronunciationAr: 'كوب بيتنج (استدراج الشرطة)',
    meaningAr: 'استفزاز رجال الأمن والتفحيط أمام مراكزهم لإجبارهم على مطاردتك دون هدف.',
    detailedExplanation: 'تحويل جهاز الشرطة إلى وسيلة تسلية وصدم دورياتهم دون وجود مبرر درامي.',
    exampleScenario: 'المخالفة: التفحيط أمام بوابة مركز ميشن رو وإطلاق البوري لكي تلحق بك الدوريات.',
    category: 'combat'
  },
  {
    id: 'term-rmt',
    term: 'RMT',
    abbr: 'Real Money Trading',
    pronunciationAr: 'ريل موني تريدنج (تجارة الأموال الحقيقية)',
    meaningAr: 'بيع أو شراء ممتلكات وأموال السيرفر بأموال حقيقية خارج المتجر الرسمي.',
    detailedExplanation: 'مخالفة اقتصادية كبرى توجب البلاك لست الفوري وحظر الجهاز (HWID Ban).',
    exampleScenario: 'المخالفة: تحويل 50 ريال للاعب في حسابه البنكي مقابل إعطائك سيارة نادرة في السيرفر.',
    category: 'admin'
  },
  {
    id: 'term-erp',
    term: 'ERP',
    abbr: 'Erotic Roleplay',
    pronunciationAr: 'إيروتيك رول بلاي (الرول بلاي الإباحي)',
    meaningAr: 'الأنشطة الخادشة للحياء أو الإيحاءات الجنسية المحظورة نهائياً في السيرفر.',
    detailedExplanation: 'ممنوع منعاً باتاً وعقوبته الحظر النهائي الفوري الدائم بدون نقاش.',
    exampleScenario: 'المخالفة: أي حوار أو تصرف خادش للحياء العام.',
    category: 'admin'
  }
];
